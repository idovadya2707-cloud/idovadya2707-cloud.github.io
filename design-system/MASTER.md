# CoachMind — Design System (MASTER)

> **Global Source of Truth.** When building any page or component, read this file first.
> If `design-system/pages/<page>.md` exists, its rules override this file for that page only.
> Otherwise, these rules apply exclusively.

**Product:** CoachMind — an AI mental coaching platform.
**Aesthetic in one line:** Clean, professional, minimal. A ChatGPT‑style conversational surface for people working on their mental well‑being. Trustworthy, calm, never playful.

---

## 0. Locked Brand Constraints (DO NOT OVERRIDE)

These are non‑negotiable. Any generated palette, font, or effect that conflicts with the rules below is wrong and must be discarded. The brand ships in **two modes**; **light mode is the default** (the app runs on white surfaces).

| # | Constraint | Rule |
|---|------------|------|
| 1 | **Primary color** | Navy `#04285E` (light) — "Coach", slogan text, gradient start |
| 2 | **Secondary color** | Royal blue `#0153D0` (light) — "Mind", gradient end, CTA, links |
| 3 | **Heading type** | Bold, heavy sans‑serif (weight 700–900) |
| 4 | **Body type** | Clean, minimal sans‑serif (weight 400–500) |
| 5 | **Aesthetic** | Clean, professional, minimal, ChatGPT‑style chat UI |
| 6 | **Forbidden** | No playful styles. No AI purple/violet. No pink. No purple↔pink gradients. No neon. No emoji as icons. |
| 7 | **Direction** | Must support RTL (Hebrew). RTL is the primary layout; LTR is the mirror. |

Dark‑mode brand values (for dark surfaces only) live in **§1.5**. Never use dark‑mode blues on white or light‑mode blues on dark.

**Banned hues (reject on sight):** violet/purple (`#8B5CF6`, `#7C3AED`, indigo‑as‑accent), magenta/pink (`#EC4899`, `#DB2777`), and any purple→pink AI gradient. The brand blues are **pure blue** (no violet cast) — the navy `#04285E` is a deep pure blue, never a purple.

> **Provenance / canonical source.** The light values are the live `index.html` design tokens. Direct sampling of `CoachMind_logo____SLOGAN.png` gives `#04275C → #023E99 → #0055D6` (navy → mid → royal) — within 1–9 units of the `index.html` tokens, visually identical. We **lock the `index.html` values as canonical**. Do **not** modify `index.html`; the site is already on brand.

---

## 1. Color System

Three‑layer model: **primitives** (raw scales) → **semantic tokens** (roles) → components consume semantic tokens only. Never hard‑code a hex inside a component; reference a semantic token.

### 1.1 Primitive palette

**Navy (primary ramp — anchored on the canonical `#04285E`, the "Coach" navy)**
```css
--navy-900: #021a3d;  /* darkest — deep surfaces, footer */
--navy-800: #03224f;
--navy-700: #04285e;  /* ★ PRIMARY — "Coach", slogan, gradient START */
--navy-600: #06316f;  /* hover on navy surfaces */
--navy-500: #0a3d85;
```

**Royal blue (secondary ramp — anchored on the canonical `#0153D0`, the "Mind" royal; mid `#023D96` is the gradient middle / slogan)**
```css
--royal-800: #023d96;  /* mid royal — gradient MIDDLE, slogan accent, pressed */
--royal-700: #0247aa;  /* active */
--royal-600: #0153d0;  /* ★ ROYAL — "Mind", gradient END, CTA fill, links, focus (6.7:1 on white) */
--royal-500: #1565e8;
--royal-400: #4d8cf5;
--royal-300: #88b2fa;  /* borders on brand, disabled-on-brand */
--royal-200: #bcd3fc;  /* focus ring halo */
--royal-100: #ddeafe;
--royal-50:  #eef5ff;  /* selected chat bubble tint, subtle brand fill */
```

**Ink (neutral cool‑gray ramp — brand‑neutral, no warm tint)**
```css
--ink-900: #11162b;  /* headings on light */
--ink-800: #1c2238;
--ink-700: #2b3350;  /* ★ primary body text */
--ink-600: #404a6b;
--ink-500: #5a6480;  /* secondary text */
--ink-400: #828daa;  /* muted / captions / timestamps */
--ink-300: #aab2c8;  /* placeholder, disabled text */
--ink-200: #d9deeb;  /* default borders */
--ink-100: #edf0f7;  /* hairlines, dividers */
--ink-50:  #f4f6fb;  /* subtle fill, assistant bubble on light */
--paper:   #ffffff;  /* cards, message list background */
--canvas:  #fafbfe;  /* app background, faintly cool */
```

**Functional (semantic status — muted, professional, never candy)**
```css
--success-600: #1f7a52; --success-500: #1f8a5b; --success-50: #e8f5ee;
--warning-600: #a86717; --warning-500: #c07d1f; --warning-50: #fbf2e2;
--danger-600:  #b23b3b; --danger-500:  #cf4747; --danger-50:  #fbecec;
```

### 1.2 Semantic tokens (components use THESE)

```css
:root {
  /* Brand */
  --color-primary:        var(--navy-700);   /* #04285e */
  --color-primary-hover:  var(--navy-600);
  --color-secondary:      var(--royal-600);  /* #0153d0 — CTA */
  --color-accent:         var(--royal-600);  /* #0153d0 — focus/active/selected */
  --color-on-primary:     #ffffff;
  --color-on-secondary:   #ffffff;

  /* Text */
  --text-strong:      var(--ink-900);
  --text-body:        var(--ink-700);
  --text-secondary:   var(--ink-500);
  --text-muted:       var(--ink-400);
  --text-placeholder: var(--ink-300);
  --text-on-brand:    #ffffff;
  --text-link:        var(--royal-600);      /* #0153d0, 6.7:1 on white */

  /* Surfaces */
  --surface-canvas:  var(--canvas);
  --surface-card:    var(--paper);
  --surface-subtle:  var(--ink-50);
  --surface-brand:   var(--navy-700);        /* dark brand panels */
  --surface-selected: var(--royal-50);

  /* Borders & focus */
  --border-subtle:  var(--ink-100);
  --border-default: var(--ink-200);
  --border-strong:  var(--ink-300);
  --border-brand:   var(--royal-300);
  --focus-ring:     0 0 0 3px var(--royal-200);
  --focus-ring-strong: 0 0 0 3px rgba(1, 83, 208, 0.35);  /* #0153d0 */

  /* Status */
  --status-info:    var(--royal-500);
  --status-success: var(--success-500);
  --status-warning: var(--warning-500);
  --status-danger:  var(--danger-500);
}
```

### 1.3 Gradient policy

One brand gradient only — a **navy→royal blue** sweep, taken from the logo (navy → mid → royal). Never purple, never pink, never multi‑hue.
```css
/* Light mode (default) — canonical index.html gradient */
--brand-gradient:        linear-gradient(100deg, #04285E 0%, #023D96 50%, #0153D0 100%);
--brand-gradient-soft:   linear-gradient(120deg, #f3f6fc 0%, #eef5ff 100%);  /* subtle section fill */
```
Use gradients sparingly (hero band, one hero CTA at most). Flat fills are the default for a ChatGPT‑clean feel.
For dark surfaces, use `--brand-gradient-dark` from **§1.5**. For gradient *direction* in RTL, see **§7**.

### 1.4 Contrast verification (WCAG)

Computed for the **light‑mode** brand values (default; app runs on white).

| Foreground | Background | Ratio | Verdict |
|------------|------------|------:|---------|
| `#ffffff` on `--navy-700` `#04285E`  | primary surface | 14.28:1 | AAA |
| `#ffffff` on `--royal-600` `#0153D0` | CTA fill        | 6.67:1  | AA (normal), AAA (large) |
| `--text-link` `#0153D0` on `#ffffff` | links           | 6.67:1  | AA (normal), AAA (large) |
| `--navy-700` `#04285E` on `#ffffff`  | navy text / "Coach" / slogan | 14.28:1 | AAA |
| `--text-body` `#2b3350` on `#ffffff` | body text       | 12.41:1 | AAA |
| `--text-secondary` `#5a6480` on `#ffffff` | secondary  | 5.88:1  | AA |

Rule: body text ≥ 4.5:1, large/UI glyphs ≥ 3:1. `#0153D0` clears AA for normal text (6.67:1) and is the CTA/link/focus color. Navy `#04285E` is safe for any text on white (14.28:1). Dark‑mode pairs are verified separately against their dark surfaces (§1.5).

### 1.5 Dark mode brand values (dark surfaces only)

Sampled from `CoachMind_DARKMODE_logo.png`. These are **brighter** than the light values so the brand reads on dark backgrounds. Use them **only** on dark surfaces — never on white. (The default app is light mode; adopt these when a genuine dark theme is built.)

```css
--brand-navy-dark:     #023A8F;  /* dark-mode navy — gradient start */
--brand-slogan-dark:   #0144AA;  /* dark-mode slogan / gradient middle */
--brand-royal-dark:    #0056D7;  /* dark-mode royal — CTA, gradient end */
--brand-gradient-dark: linear-gradient(100deg, #023A8F 0%, #0148B3 50%, #0056D7 100%);
```

On dark surfaces these blues are used as *brand fills/accents*; body/label text on dark must still meet contrast against the dark surface (verify per surface). Do not swap the light and dark sets — light‑mode `#04285E`/`#0153D0` on a dark surface will read muddy, and dark‑mode `#023A8F`/`#0056D7` on white lowers CTA contrast.

---

## Brand Assets (official logo files)

Three official logo lockups. Pick by **background**, then by whether the **slogan** is needed. Never recolor, re‑gradient, restretch, or rebuild the wordmark — use these files as‑is.

| File | Background | Contents | Use when |
|------|-----------|----------|----------|
| `assets/brand/coachmind-logo-slogan-light.png` | **Light** (white/near‑white) | Wordmark + slogan | Default. Headers, hero, footer, email, social share on light surfaces. |
| `assets/brand/coachmind-logo-slogan-dark.png` | **Dark** (navy/near‑black) | Wordmark + slogan | Full lockup on a dark surface (dark hero band, dark footer, dark‑theme header). |
| `assets/brand/coachmind-logo-dark.png` | **Dark** | Wordmark only (no slogan) | Compact placements on dark where the slogan won't fit or would clutter (nav bar, app chrome). |

**App icons** (the "C" mark — a single royal‑blue **C** on white, canonical royal `#0153D0`):

| File | Contents | Use for |
|------|----------|---------|
| `favicon-32.png` | "C" mark, `#0153D0` on white | Browser tab / 32px favicon |
| `apple-touch-icon.png` | "C" mark, `#0153D0` on white | iOS/Android home‑screen icon (180px) |
| `favicon.ico` | "C" mark, `#0153D0` on white | Legacy `.ico` favicon |

Rules:
- **Match the file to the surface:** light logo on light, dark logo on dark. Do not place the light lockup on a dark band or vice‑versa.
- **The wordmark is always LTR — even inside an RTL (Hebrew) layout.** "CoachMind" is a Latin brand name and its letter order and left‑to‑right gradient direction never flip. Wrap it in `dir="ltr"` (or render it as an image) so bidi reordering can't affect it. See §7 for how this differs from *decorative* brand gradients.
- Preserve clear space and minimum size per the brand's logo guidelines; embed as SVG or 2× raster for crisp rendering.
- Keep the wordmark's own navy→royal gradient fixed (it's baked into the asset); do not substitute a CSS gradient for the logo itself.
- The **app‑icon "C" mark is on‑brand:** the previous off‑brand `#1f2c5e` navy `ע` monogram has been replaced — `favicon-32.png`, `apple-touch-icon.png`, and `favicon.ico` now show the CoachMind "C" in canonical royal `#0153D0` on white.

---

## 2. Typography

**Family:** [Heebo](https://fonts.google.com/specimen/Heebo) — a Hebrew + Latin sans‑serif with a full weight range (300–900). It satisfies both locked type rules: heavy for headings, clean for body, with native Hebrew glyphs for RTL.

```css
--font-display: "Heebo", "Segoe UI", system-ui, sans-serif;  /* headings */
--font-body:    "Heebo", "Segoe UI", system-ui, sans-serif;  /* body */
--font-mono:    "SFMono-Regular", "Menlo", "Consolas", monospace;
```
```css
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap');
```

### 2.1 Weight roles

| Token | Weight | Use |
|-------|-------:|-----|
| `--weight-regular`   | 400 | body copy |
| `--weight-medium`    | 500 | labels, secondary emphasis, buttons |
| `--weight-semibold`  | 600 | subheadings, chat sender name |
| `--weight-bold`      | 700 | section headings |
| `--weight-extrabold` | 800 | page/hero headings |
| `--weight-black`     | 900 | wordmark, hero display only |

**Headings are heavy (700–900); body stays 400–500.** Never set body copy above 500.

### 2.2 Type scale (16px base)

```css
--text-xs:  0.75rem;   /* 12 — timestamps, captions */
--text-sm:  0.875rem;  /* 14 — helper text, meta */
--text-base:1rem;      /* 16 — body / chat messages (min body size) */
--text-md:  1.125rem;  /* 18 — lead paragraph */
--text-lg:  1.375rem;  /* 22 — card title */
--text-xl:  1.75rem;   /* 28 — section heading */
--text-2xl: 2.25rem;   /* 36 — page heading */
--text-3xl: 3rem;      /* 48 — hero */
--text-4xl: 4rem;      /* 64 — hero display (desktop) */
```
```css
--leading-tight: 1.1;    /* display headings */
--leading-snug: 1.25;    /* headings */
--leading-normal: 1.5;   /* body — minimum for chat/reading */
--leading-relaxed: 1.7;  /* long-form */
--tracking-tighter: -0.03em;  /* large display only */
--tracking-tight: -0.01em;    /* headings */
--tracking-normal: 0;         /* body */
```
Body line length: 60–75 characters (desktop), 35–60 (mobile). Chat message max‑width ≈ 60ch.

> **RTL note:** Do not apply negative letter‑spacing to Hebrew text — tight tracking damages Hebrew legibility. Reserve `--tracking-tight`/`--tracking-tighter` for large Latin display; keep Hebrew at `--tracking-normal`.

---

## 3. Spacing, Radius, Shadow, Motion

**Spacing** — 4/8px rhythm:
```css
--space-1:.25rem; --space-2:.5rem; --space-3:.75rem; --space-4:1rem; --space-5:1.25rem;
--space-6:1.5rem; --space-8:2rem; --space-10:2.5rem; --space-12:3rem; --space-16:4rem;
--space-20:5rem; --space-24:6rem;
```

**Radius** — soft but not bubbly (professional, not playful):
```css
--radius-sm: 8px;    /* chips, small controls */
--radius-md: 12px;   /* buttons, inputs */
--radius-lg: 16px;   /* cards, chat bubbles */
--radius-xl: 24px;   /* panels */
--radius-pill: 999px;/* avatars, tags, send button */
```

**Shadow** — low, cool, restrained (elevation via subtle shadow, never heavy chrome):
```css
--shadow-xs: 0 1px 2px rgba(17,22,43,.05);
--shadow-sm: 0 1px 3px rgba(17,22,43,.06), 0 1px 2px rgba(17,22,43,.04);
--shadow-md: 0 4px 12px rgba(17,22,43,.07), 0 2px 4px rgba(17,22,43,.04);
--shadow-lg: 0 12px 32px rgba(17,22,43,.10), 0 4px 8px rgba(17,22,43,.05);
```

**Motion** — subtle, functional only (Motion dial 3/10). Animation conveys cause‑and‑effect, never decoration.
```css
--ease-standard: cubic-bezier(.4,0,.2,1);
--ease-out: cubic-bezier(.16,1,.3,1);
--duration-fast: 120ms;   /* hover, press */
--duration-base: 200ms;   /* enter/exit, expand */
--duration-slow: 320ms;   /* modal, sheet */
```
Micro‑interactions 120–200ms; nothing over 320ms. Animate `transform`/`opacity` only. Always honor `prefers-reduced-motion`.

---

## 4. Aesthetic Principles (ChatGPT‑clean)

**Do**
- One clear primary action per screen. Everything else is subordinate.
- Generous whitespace; content‑first; let the conversation breathe.
- Flat surfaces, thin `--border-default` hairlines, subtle shadows for elevation.
- Neutral cool‑gray canvas (`--canvas`) with white message/card surfaces.
- Navy `#04285E` for trust/structure; royal `#0153D0` for action, links, and focus/active/selected accents.
- SVG icons only (single family, e.g. Lucide/Heroicons), 1.5–2px stroke, consistent sizing tokens.

**Don't (anti‑patterns)**
- ❌ AI purple/violet or pink accents, glow, or purple→pink gradients.
- ❌ Playful illustration, bouncy motion, rounded "bubble toy" UI, or emoji as structural icons.
- ❌ Heavy chrome, loud multi‑color gradients, decorative drop shadows.
- ❌ Gray‑on‑gray low‑contrast text; raw hex inside components.
- ❌ More than one gradient region per view.

---

## 5. Chat UI Specification (core surface)

A ChatGPT‑style two‑role conversation. RTL‑first.

**Layout**
- Full‑height column: scrollable message list + fixed composer at the bottom (respect safe‑area inset).
- Message list background `--surface-canvas`; centered content column, `max-width` ≈ 48rem.
- Messages stack vertically with `--space-6` between turns.

**Message bubbles**
| Role | Alignment (RTL) | Fill | Text | Radius |
|------|-----------------|------|------|--------|
| **User** | inline‑start (right in RTL) | `--surface-selected` `#eef5ff` (or `--color-secondary` fill with white text for high emphasis) | `--text-body` / white | `--radius-lg`, tail corner `--radius-sm` on the start side |
| **Assistant (CoachMind)** | inline‑end (left in RTL) | `--surface-subtle` `#f4f6fb` | `--text-body` | `--radius-lg`, tail corner `--radius-sm` on the end side |

- Bubble padding `--space-3 --space-4`; `line-height: var(--leading-normal)`; max‑width ~60ch.
- Sender label: `--text-sm` / `--weight-semibold` / `--text-secondary`. Timestamp: `--text-xs` / `--text-muted`.
- Assistant avatar: `--radius-pill`, navy `--surface-brand` with white monogram; keep it small and calm — no animated/glowing orb.

**Composer**
- Input: `--surface-card`, `--border-default`, `--radius-xl`, min height 44px, `--text-base` (16px prevents iOS zoom).
- Focus: `box-shadow: var(--focus-ring)` + `border-color: var(--color-accent)`.
- Send button: `--radius-pill`, `--color-secondary` fill, white icon; disabled state `opacity:.5` + `not-allowed`.
- Streaming: show a subtle typing indicator (3 dots, opacity pulse ≤ 200ms cycle), never a blocking spinner.

**States**
- Empty: calm welcome + 2–3 example suggestion chips (`--surface-subtle`, `--border-subtle`, `--radius-pill`).
- Loading history: skeleton bubbles, not spinners.
- Error: inline `--status-danger` message with a retry affordance below the failed turn.

---

## 6. Core Components

**Button — primary (CTA)**
```
bg: var(--color-secondary) #0153d0 · text: #fff · weight 500 · radius: --radius-md
padding: 12px 20px · min-height 44px · hover: var(--royal-700) · focus: var(--focus-ring)
active: transform: scale(.98) · disabled: opacity .5; cursor not-allowed
```
**Button — secondary (outline)**
```
bg: transparent · border: 1.5px var(--border-brand) · text: var(--color-secondary)
hover: bg var(--royal-50) · focus: var(--focus-ring)
```
**Button — ghost/tertiary**: transparent, `--text-secondary`, hover `--surface-subtle`.

**Input / textarea**
```
bg: --surface-card · border: 1px --border-default · radius: --radius-md · text: --text-base
label: visible, --text-sm/--weight-medium above field (never placeholder-only)
focus: border --color-accent + --focus-ring · error: border --status-danger, message below field
```

**Card**
```
bg: --surface-card · border: 1px --border-subtle · radius: --radius-lg · shadow: --shadow-sm
padding: --space-6 · hover (if interactive): --shadow-md
```

Only one primary CTA per view; secondary and ghost buttons carry everything else.

---

## 7. RTL / Hebrew Guidelines (first‑class)

RTL is the **primary** layout, not an afterthought. The document root is `<html lang="he" dir="rtl">`.

- **Use logical properties**, never physical: `margin-inline-start`, `padding-inline-end`, `inset-inline-start`, `border-start-start-radius`, `text-align: start`. Avoid `left`/`right`/`margin-left` in component CSS.
- **Directional icons mirror.** Chevrons, arrows, back/forward, and progress flow flip for RTL (`transform: scaleX(-1)` on the glyph or an RTL‑aware icon). Non‑directional icons (search, user, settings) do **not** flip.
- **Brand gradient direction is direction‑aware — except the logo.** The **logo wordmark keeps its fixed baked‑in gradient** (navy→royal, LTR) and never flips (see Brand Assets). But **decorative brand gradients on other elements** (hero bands, section fills, CTA sweeps) should **flow with the layout direction** so they mirror in RTL. Use a logical angle rather than a hard‑coded physical one: prefer `background: linear-gradient(to inline-end, #04285E, #0153D0)` (mirrors automatically), or swap the angle per direction — `100deg` for LTR, `260deg` (i.e. `360 − 100`) for RTL — so navy consistently anchors the inline‑start edge. Do not let a fixed `100deg` gradient point the "wrong" way in a mirrored layout.
- **Chat alignment:** user messages on the inline‑start edge (visually right in RTL), assistant on inline‑end (visually left). Defined via logical alignment so LTR mirrors automatically.
- **Numbers, code, URLs, and Latin brand names** stay LTR inside RTL text — wrap in `dir="ltr"` / `unicode-bidi: isolate` so bidi doesn't scramble them.
- **Typography:** no negative letter‑spacing on Hebrew; keep `--tracking-normal`. Heebo covers Hebrew natively.
- **Mixed content:** timestamps, phone numbers, and metrics use `dir="ltr"` isolation to render digits correctly within Hebrew.
- Test every screen in **both** `dir="rtl"` and `dir="ltr"`; a correct RTL build mirrors cleanly with no hard‑coded sides.

---

## 8. Accessibility Checklist (pre‑delivery)

- [ ] Body text ≥ 4.5:1, UI glyphs/large text ≥ 3:1 (see §1.4). Light: `#0153D0` for CTA/links/focus. Dark‑mode blues (§1.5) only on dark surfaces.
- [ ] Visible focus ring (`--focus-ring`) on every interactive element; never removed.
- [ ] Touch targets ≥ 44×44px with ≥ 8px spacing.
- [ ] Inputs have visible labels; errors appear below the field with `role="alert"`/`aria-live`.
- [ ] Icon‑only buttons have `aria-label`. Icons are SVG, one family — no emoji.
- [ ] Color is never the only signal (pair status color with icon + text).
- [ ] `prefers-reduced-motion` honored; motion 120–320ms, `transform`/`opacity` only.
- [ ] Heading hierarchy sequential (h1→h6, no skips).
- [ ] Works at 16px min body, tested at 375 / 768 / 1024 / 1440px, portrait + landscape.
- [ ] Verified in both RTL and LTR.

---

## 9. Using This System (hierarchical retrieval)

1. Building a page → read `design-system/MASTER.md` (this file).
2. Check `design-system/pages/<page-name>.md`. If it exists, its rules **override** MASTER for that page.
3. If not, MASTER applies exclusively.
4. Components consume **semantic tokens** (§1.2) only — never raw hex.
5. The **Locked Brand Constraints (§0)** override everything, including any page‑level file and any generated suggestion.
