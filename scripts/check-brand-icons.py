#!/usr/bin/env python3
"""Brand-icon guard.

Fails if any app icon reverts to the old off-brand navy "ע" monogram
(#1f2c5e) instead of the canonical CoachMind "C" mark in royal #0153D0.

Background: PR #44 once re-added 96px/192px favicons using the OLD navy
artwork. Because Google prefers the largest declared icon, that would have
pinned the wrong mark in search results. This check runs in CI so the same
regression can't slip in again.

Pure standard library — no third-party packages, no network. Decodes each
PNG (filter types 0-4, color types 2/6/3, 8-bit) and inspects its colors.
"""
import sys
import zlib
import struct

# Canonical royal "C" — must be present.
BRAND_ROYAL = (0x01, 0x53, 0xD0)
# Old off-brand navy monogram — must be absent.
OFF_BRAND_NAVY = (0x1F, 0x2C, 0x5E)

# PNG icons that must carry the on-brand C mark.
ICON_FILES = [
    "favicon-32.png",
    "favicon-96.png",
    "favicon-192.png",
    "apple-touch-icon.png",
]

ROYAL_MIN_PCT = 3.0    # royal must cover at least this % of pixels
NAVY_MAX_PCT = 5.0     # off-brand navy must cover less than this % of pixels
DIST = 48              # max sum-of-abs channel distance to count as a match


def _paeth(a, b, c):
    p = a + b - c
    pa, pb, pc = abs(p - a), abs(p - b), abs(p - c)
    return a if pa <= pb and pa <= pc else (b if pb <= pc else c)


def decode_png(path):
    """Return (width, height, [(r,g,b), ...]) for an 8-bit PNG."""
    data = open(path, "rb").read()
    if data[:8] != b"\x89PNG\r\n\x1a\n":
        raise ValueError(f"{path}: not a PNG")
    pos = 8
    width = height = depth = ctype = None
    idat = b""
    plte = None
    while pos < len(data):
        (ln,) = struct.unpack(">I", data[pos:pos + 4])
        typ = data[pos + 4:pos + 8]
        chunk = data[pos + 8:pos + 8 + ln]
        if typ == b"IHDR":
            width, height, depth, ctype = struct.unpack(">IIBB", chunk[:10])
        elif typ == b"PLTE":
            plte = chunk
        elif typ == b"IDAT":
            idat += chunk
        elif typ == b"IEND":
            break
        pos += 12 + ln
    if depth != 8:
        raise ValueError(f"{path}: unsupported bit depth {depth}")
    channels = {0: 1, 2: 3, 3: 1, 4: 2, 6: 4}[ctype]
    raw = zlib.decompress(idat)
    bpp = channels
    stride = width * channels
    out = bytearray()
    prev = bytearray(stride)
    i = 0
    for _ in range(height):
        ft = raw[i]; i += 1
        line = bytearray(raw[i:i + stride]); i += stride
        for x in range(stride):
            a = line[x - bpp] if x >= bpp else 0
            b = prev[x]
            c = prev[x - bpp] if x >= bpp else 0
            if ft == 1:
                line[x] = (line[x] + a) & 255
            elif ft == 2:
                line[x] = (line[x] + b) & 255
            elif ft == 3:
                line[x] = (line[x] + ((a + b) >> 1)) & 255
            elif ft == 4:
                line[x] = (line[x] + _paeth(a, b, c)) & 255
        prev = line
        out += line

    pixels = []
    if ctype == 3:  # palette
        for idx in out:
            o = idx * 3
            pixels.append((plte[o], plte[o + 1], plte[o + 2]))
    else:
        for p in range(0, len(out), channels):
            if channels == 4 and out[p + 3] < 128:
                continue  # skip transparent
            pixels.append((out[p], out[p + 1], out[p + 2]))
    return width, height, pixels


def close(px, target):
    return sum(abs(px[i] - target[i]) for i in range(3)) <= DIST


def check(path):
    try:
        w, h, pixels = decode_png(path)
    except FileNotFoundError:
        return f"MISSING  {path} (expected on-brand icon file)"
    except Exception as exc:  # noqa: BLE001
        return f"ERROR    {path}: {exc}"
    total = len(pixels) or 1
    royal = 100.0 * sum(close(p, BRAND_ROYAL) for p in pixels) / total
    navy = 100.0 * sum(close(p, OFF_BRAND_NAVY) for p in pixels) / total
    problems = []
    if navy >= NAVY_MAX_PCT:
        problems.append(f"off-brand navy #1f2c5e = {navy:.1f}% (max {NAVY_MAX_PCT}%)")
    if royal < ROYAL_MIN_PCT:
        problems.append(f"royal #0153D0 = {royal:.1f}% (min {ROYAL_MIN_PCT}%)")
    status = "OK  " if not problems else "FAIL"
    print(f"  {status} {path:24s} royal={royal:5.1f}%  navy={navy:5.1f}%")
    if problems:
        return f"{path}: " + "; ".join(problems)
    return None


def main():
    print("Brand-icon guard — expect royal #0153D0 C mark, reject navy #1f2c5e ע\n")
    failures = [msg for msg in (check(f) for f in ICON_FILES) if msg]
    print()
    if failures:
        print("BRAND ICON CHECK FAILED:")
        for msg in failures:
            print(f"  - {msg}")
        print("\nRegenerate the icon(s) with the canonical C mark "
              "(royal #0153D0 on white), e.g. from apple-touch-icon.png.")
        return 1
    print("All brand icons on-brand. ✓")
    return 0


if __name__ == "__main__":
    sys.exit(main())
