/* @ds-bundle: {"format":4,"namespace":"CoachMindDesignSystem_c174fb","components":[{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Composer","sourcePath":"components/chat/Composer.jsx"},{"name":"MessageBubble","sourcePath":"components/chat/MessageBubble.jsx"},{"name":"VoiceOrb","sourcePath":"components/chat/VoiceOrb.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"}],"sourceHashes":{"components/brand/Wordmark.jsx":"ec3d78ff0363","components/chat/Composer.jsx":"8c4f1e895baf","components/chat/MessageBubble.jsx":"77c56c8f6e37","components/chat/VoiceOrb.jsx":"e69c4c4b6afc","components/core/Avatar.jsx":"31343f386953","components/core/Badge.jsx":"4f257b5e9bd3","components/core/Button.jsx":"9d101e5498eb","components/core/Card.jsx":"6b79d2908eeb","components/core/Chip.jsx":"14e086cb4add","components/core/Icon.jsx":"b4b0b0fc4416","components/core/IconButton.jsx":"8de0b004e2e4","components/core/Input.jsx":"8f4a7305c381","components/core/Switch.jsx":"2cb858cf5ff5","components/core/Textarea.jsx":"7fe48ebda65e","guidelines/tweaks-panel.jsx":"6591467622ed","ui_kits/app/AppShell.jsx":"8c6c7d71a768","ui_kits/app/AppSidebar.jsx":"3cd4025a3950","ui_kits/app/ConversationView.jsx":"c58a6a2bdd29","ui_kits/app/VoiceView.jsx":"bc0ea6d52025","ui_kits/app/WelcomeView.jsx":"44fbde419030"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CoachMindDesignSystem_c174fb = window.CoachMindDesignSystem_c174fb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The CoachMind wordmark. Typography-only — no icon, ever.
   Two renderings:
   - "gradient" (default): the whole word in the continuous navy->royal
     gradient — the canonical brand lockup (matches the official sheet).
   - "split": "Coach" navy, "Mind" bright royal — flat two-tone alternative.
   Optional tagline "Live your potential" in light, wide-tracked royal,
   stretched to the wordmark's full width (the signature lockup). */
function Wordmark({
  variant = "gradient",
  size = 32,
  tagline = false,
  taglineText = "Live your potential",
  className = "",
  style,
  ...rest
}) {
  const base = {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    letterSpacing: "var(--tracking-tighter)",
    lineHeight: 1,
    fontSize: typeof size === "number" ? `${size}px` : size
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["cm-wordmark-lockup", className].filter(Boolean).join(" "),
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "0.35em",
      ...style
    },
    dir: "ltr"
  }, rest), variant === "gradient" ? /*#__PURE__*/React.createElement("span", {
    className: "cm-wordmark cm-wordmark--gradient",
    style: base
  }, "CoachMind") : /*#__PURE__*/React.createElement("span", {
    className: "cm-wordmark",
    style: base
  }, /*#__PURE__*/React.createElement("span", {
    className: "cm-wordmark__coach"
  }, "Coach"), /*#__PURE__*/React.createElement("span", {
    className: "cm-wordmark__mind"
  }, "Mind")), tagline && /*#__PURE__*/React.createElement("span", {
    className: "cm-tagline",
    style: {
      fontSize: `calc(${base.fontSize} * 0.26)`
    }
  }, taglineText));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Avatar. For the coach, use variant "coach" (gradient) or "navy".
   For the user, "user" (neutral) or an image. Falls back to initials. */
function Avatar({
  src,
  alt = "",
  initials,
  variant = "coach",
  size = "md",
  className = "",
  ...rest
}) {
  const cls = ["cm-avatar", size === "sm" && "cm-avatar--sm", size === "lg" && "cm-avatar--lg", variant === "navy" && "cm-avatar--navy", variant === "user" && "cm-avatar--user", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/chat/MessageBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A single conversation turn. `from` = "coach" | "user".
   Coach bubbles are calm and light on the start edge; user bubbles
   are royal on the end edge. RTL handled by logical CSS. */
function MessageBubble({
  from = "coach",
  avatar = true,
  meta,
  className = "",
  children,
  ...rest
}) {
  const cls = ["cm-msg", `cm-msg--${from}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), avatar && (from === "coach" ? /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    variant: "coach",
    initials: "C",
    size: "sm"
  }) : /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    variant: "user",
    initials: "\xB7",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cm-msg__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-msg__bubble"
  }, children), meta && /*#__PURE__*/React.createElement("div", {
    className: "cm-msg__meta"
  }, meta)));
}
Object.assign(__ds_scope, { MessageBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/MessageBubble.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Small status / category label. */
function Badge({
  variant = "neutral",
  dot = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["cm-badge", `cm-badge--${variant}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "cm-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Surface container. Variants: default (hairline border), raised
   (soft shadow), flat, accent (royal tint), and `interactive` for
   clickable cards. */
function Card({
  variant = "default",
  interactive = false,
  className = "",
  as: Tag = "div",
  children,
  ...rest
}) {
  const cls = ["cm-card", variant === "raised" && "cm-card--raised", variant === "flat" && "cm-card--flat", variant === "accent" && "cm-card--accent", interactive && "cm-card--interactive", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* CoachMind icon set — outline, 1.75px stroke on a 24px grid, round
   caps & joins. Geometry follows the Lucide convention so it reads as
   a calm, professional, single-weight set. Add new glyphs to PATHS. */

const PATHS = {
  send: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m22 2-7 20-4-9-9-4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2 11 13"
  })),
  mic: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 10v2a7 7 0 0 1-14 0v-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 19v3"
  })),
  plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14"
  })),
  x: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  })),
  menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 18h18"
  })),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }),
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"
  })),
  message: /*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
  }),
  sparkles: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3 13.9 8.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 3v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 5h4"
  })),
  settings: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 6h3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "6",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 12h3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 12h9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "12",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 18h11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 18h1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "18",
    r: "2"
  })),
  "chevron-down": /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }),
  "chevron-up": /*#__PURE__*/React.createElement("path", {
    d: "m18 15-6-6-6 6"
  }),
  "chevron-left": /*#__PURE__*/React.createElement("path", {
    d: "m15 18-6-6 6-6"
  }),
  "chevron-right": /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }),
  "arrow-up": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 19V5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m5 12 7-7 7 7"
  })),
  more: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.4",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.4",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.4",
    fill: "currentColor",
    stroke: "none"
  })),
  edit: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15.8 3.6 20.4 8.2a1.6 1.6 0 0 1 0 2.3L9 22H4v-5L15.5 5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13.5 5.5 5 5"
  })),
  trash: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 7V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 7 1 12.5A1.5 1.5 0 0 0 8.5 21h7a1.5 1.5 0 0 0 1.5-1.5L18 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11.5v5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 11.5v5"
  })),
  clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  })),
  logout: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m16 17 5-5-5-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12H9"
  })),
  waveform: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 10v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 6v12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3v18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 6v12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 10v4"
  })),
  target: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1",
    fill: "currentColor",
    stroke: "none"
  })),
  calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 3v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3v4"
  })),
  heart: /*#__PURE__*/React.createElement("path", {
    d: "M12 20S3.5 14.5 3.5 8.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8.5 2.5C20.5 14.5 12 20 12 20Z"
  }),
  shield: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  globe: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"
  }))
};
function Icon({
  name,
  size = 22,
  strokeWidth = 1.75,
  className = "",
  style,
  ...rest
}) {
  const glyph = PATHS[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: {
      flex: "none",
      display: "block",
      ...style
    },
    "aria-hidden": "true"
  }, rest), glyph || null);
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/chat/VoiceOrb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The voice-mode orb. The calm, intimate counterpart to text chat.
   `listening` adds a slow pulse. Size "md" for inline, "lg" for the
   full voice screen. */
function VoiceOrb({
  listening = false,
  size = "md",
  icon = "mic",
  label = "דברו עם המאמן",
  className = "",
  ...rest
}) {
  const cls = ["cm-voice-orb", size === "lg" && "cm-voice-orb--lg", listening && "cm-voice-orb--listening", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: listening ? "waveform" : icon
  }));
}
Object.assign(__ds_scope, { VoiceOrb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/VoiceOrb.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* CoachMind Button. Variants: primary (royal), navy, gradient (signature
   wordmark gradient — reserve for the single key CTA), secondary, ghost,
   quiet. RTL-safe via logical CSS. */
function Button({
  variant = "primary",
  size = "md",
  block = false,
  pill = false,
  iconStart,
  iconEnd,
  disabled = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["cm-btn", `cm-btn--${variant}`, size === "sm" && "cm-btn--sm", size === "lg" && "cm-btn--lg", block && "cm-btn--block", pill && "cm-btn--pill", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled
  }, rest), iconStart && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconStart,
    size: 18
  }), children, iconEnd && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconEnd,
    size: 18
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Pill-shaped suggestion / prompt starter. Used under the composer
   and on the welcome screen to seed a coaching conversation. */
function Chip({
  icon,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: ["cm-chip", className].filter(Boolean).join(" ")
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Square, label-less action. Used heavily in the chat chrome
   (attach, mic, menu, settings). */
function IconButton({
  icon,
  variant = "default",
  size = "md",
  label,
  className = "",
  ...rest
}) {
  const cls = ["cm-iconbtn", variant === "solid" && "cm-iconbtn--solid", variant === "bordered" && "cm-iconbtn--bordered", size === "sm" && "cm-iconbtn--sm", size === "lg" && "cm-iconbtn--lg", className].filter(Boolean).join(" ");
  const px = size === "sm" ? 16 : size === "lg" ? 24 : 20;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: px
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/chat/Composer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The message composer. Conversation-first: a calm, single rounded
   field with mic (voice mode) and send. Auto-grows up to a cap. */
function Composer({
  placeholder = "כתבו למאמן…",
  value,
  onChange,
  onSend,
  onVoice,
  disabled = false,
  className = "",
  ...rest
}) {
  const taRef = React.useRef(null);
  const handleInput = e => {
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 160) + "px";
    onChange && onChange(e);
  };
  const handleKey = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend && onSend();
    }
  };
  const hasText = (value || "").trim().length > 0;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["cm-composer", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("textarea", {
    ref: taRef,
    className: "cm-composer__input",
    rows: 1,
    placeholder: placeholder,
    value: value,
    onChange: handleInput,
    onKeyDown: handleKey,
    disabled: disabled
  }), hasText ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "send",
    variant: "solid",
    label: "\u05E9\u05DC\u05D9\u05D7\u05D4",
    onClick: onSend,
    disabled: disabled
  }) : /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "mic",
    label: "\u05DE\u05E6\u05D1 \u05E7\u05D5\u05DC\u05D9",
    onClick: onVoice,
    disabled: disabled
  }));
}
Object.assign(__ds_scope, { Composer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/Composer.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Labeled text input. Wraps the native input with optional label,
   hint and error text. RTL-aware automatically. */
function Input({
  label,
  hint,
  error,
  id,
  className = "",
  ...rest
}) {
  const inputId = id || (label ? `cm-in-${Math.random().toString(36).slice(2, 8)}` : undefined);
  const input = /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: ["cm-input", error && "cm-input--error", className].filter(Boolean).join(" "),
    "aria-invalid": error ? true : undefined
  }, rest));
  if (!label && !hint && !error) return input;
  return /*#__PURE__*/React.createElement("div", {
    className: "cm-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "cm-field__label",
    htmlFor: inputId
  }, label), input, error ? /*#__PURE__*/React.createElement("span", {
    className: "cm-field__hint cm-field__hint--error"
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    className: "cm-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Toggle switch. Controlled or uncontrolled. */
function Switch({
  checked,
  defaultChecked,
  onChange,
  disabled,
  label,
  className = "",
  ...rest
}) {
  const control = /*#__PURE__*/React.createElement("span", {
    className: ["cm-switch", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "cm-switch__track"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cm-switch__thumb"
  }));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: "pointer"
    }
  }, control, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--ink-700)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  id,
  className = "",
  ...rest
}) {
  const taId = id || (label ? `cm-ta-${Math.random().toString(36).slice(2, 8)}` : undefined);
  const ta = /*#__PURE__*/React.createElement("textarea", _extends({
    id: taId,
    className: ["cm-textarea", error && "cm-textarea--error", className].filter(Boolean).join(" "),
    "aria-invalid": error ? true : undefined
  }, rest));
  if (!label && !hint && !error) return ta;
  return /*#__PURE__*/React.createElement("div", {
    className: "cm-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "cm-field__label",
    htmlFor: taId
  }, label), ta, error ? /*#__PURE__*/React.createElement("span", {
    className: "cm-field__hint cm-field__hint--error"
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    className: "cm-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// guidelines/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppShell.jsx
try { (() => {
/* CoachMind app shell — orchestrates the conversation state, scripted
   coach replies, and the voice overlay. Fake logic; real visuals. */
const DS_SHELL = window.CoachMindDesignSystem_c174fb;
const THREADS = [{
  id: "t1",
  title: "להתמודד עם דחיינות"
}, {
  id: "t2",
  title: "הכנה לשיחת משוב"
}, {
  id: "t3",
  title: "למצוא שקט לפני שינה"
}, {
  id: "t4",
  title: "להגדיר גבולות בעבודה"
}];
const SEED = [{
  from: "coach",
  text: "שמתי לב שהזכרת שאת דוחה משימה מסוימת. ספרי לי — מה קורה בדיוק ברגע שאת ניגשת אליה?",
  meta: "10:24"
}, {
  from: "user",
  text: "אני פותחת את המסך ומיד מרגישה הצפה, אז אני בורחת לטלפון"
}, {
  from: "coach",
  text: "ההצפה הזאת — אם היית נותנת לה מילה אחת, מה היא?",
  meta: "10:25"
}];
const COACH_SCRIPT = ["תודה על הכנות. בואי ננסה משהו קטן: מה הצעד הראשון שלוקח פחות משתי דקות, כזה שאי אפשר 'להיכשל' בו?", "יפה. ומה יקרה אם תרשי לעצמך לעצור אחרי שתי הדקות האלה — בלי שום ציפייה להמשיך?", "שמתי לב לשינוי קטן בנימה שלך עכשיו. מה הרגע הזה מלמד אותך על עצמך?", "בואי נשמור את התובנה הזאת. נסי את הצעד הקטן הזה מחר בבוקר, ונחזור לזה יחד."];
function AppShell() {
  const {
    Wordmark
  } = DS_SHELL;
  const [view, setView] = React.useState("conversation");
  const [activeId, setActiveId] = React.useState("t1");
  const [messages, setMessages] = React.useState(SEED);
  const [typing, setTyping] = React.useState(false);
  const [voice, setVoice] = React.useState(false);
  const stepRef = React.useRef(0);
  const coachReply = React.useCallback(() => {
    setTyping(true);
    setTimeout(() => {
      const line = COACH_SCRIPT[Math.min(stepRef.current, COACH_SCRIPT.length - 1)];
      stepRef.current += 1;
      setTyping(false);
      setMessages(m => [...m, {
        from: "coach",
        text: line
      }]);
    }, 1300);
  }, []);
  const handleSend = text => {
    setMessages(m => [...m, {
      from: "user",
      text
    }]);
    coachReply();
  };
  const handleStart = text => {
    if (text === "__voice__") {
      setVoice(true);
      return;
    }
    stepRef.current = 0;
    setActiveId(null);
    setMessages([{
      from: "user",
      text
    }]);
    setView("conversation");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, {
        from: "coach",
        text: "אני שומע אותך. בואי נישאר עם זה רגע — איפה בגוף את מרגישה את זה הכי חזק כשזה עולה?"
      }]);
    }, 1300);
  };
  const newConversation = () => {
    setView("welcome");
    setActiveId(null);
    setMessages([]);
    stepRef.current = 0;
  };
  const selectThread = id => {
    setActiveId(id);
    stepRef.current = 0;
    if (id === "t1") {
      setMessages(SEED);
    } else {
      const t = THREADS.find(x => x.id === id);
      setMessages([{
        from: "coach",
        text: `נחזור ל"${t.title}". מאיפה תרצי שנמשיך?`,
        meta: "אתמול"
      }]);
    }
    setView("conversation");
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      background: "var(--canvas)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(AppSidebar, {
    threads: THREADS,
    activeId: activeId,
    onSelect: selectThread,
    onNew: newConversation
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0,
      position: "relative"
    }
  }, view === "welcome" ? /*#__PURE__*/React.createElement(WelcomeView, {
    onStart: handleStart
  }) : /*#__PURE__*/React.createElement(ConversationView, {
    messages: messages,
    typing: typing,
    onSend: handleSend,
    onVoice: () => setVoice(true)
  }), voice && /*#__PURE__*/React.createElement(VoiceView, {
    onEnd: () => setVoice(false)
  })));
}
window.AppShell = AppShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppSidebar.jsx
try { (() => {
/* CoachMind app — left sidebar: brand, new conversation, recent threads, profile.
   RTL: sits on the inline-start (right) edge. */
const DS_SB = window.CoachMindDesignSystem_c174fb;
function AppSidebar({
  threads,
  activeId,
  onSelect,
  onNew
}) {
  const {
    Wordmark,
    Button,
    Avatar,
    IconButton,
    Icon
  } = DS_SB;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 296,
      flex: "none",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--paper)",
      borderInlineEnd: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 20px 16px"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 12px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gradient",
    block: true,
    iconStart: "plus",
    onClick: onNew
  }, "\u05E9\u05D9\u05D7\u05D4 \u05D7\u05D3\u05E9\u05D4")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "8px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-caption)",
      color: "var(--text-muted)",
      letterSpacing: "var(--tracking-wide)",
      padding: "8px 8px 6px"
    }
  }, "\u05D0\u05D7\u05E8\u05D5\u05E0\u05D5\u05EA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, threads.map(t => {
    const active = t.id === activeId;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onSelect(t.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        textAlign: "start",
        border: "none",
        cursor: "pointer",
        width: "100%",
        padding: "10px 12px",
        borderRadius: "var(--radius-md)",
        background: active ? "var(--accent-soft)" : "transparent",
        color: active ? "var(--royal-700)" : "var(--ink-700)",
        font: "var(--font-body-sm)",
        fontWeight: active ? 600 : 400
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "message",
      size: 17,
      style: {
        color: active ? "var(--royal-500)" : "var(--ink-400)",
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, t.title));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      padding: "12px 14px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    variant: "user",
    initials: "\u05D3"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-body-sm)",
      fontWeight: 600,
      color: "var(--ink-800)"
    }
  }, "\u05D3\u05E0\u05D4 \u05DC\u05D5\u05D9"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-caption)",
      color: "var(--text-muted)"
    }
  }, "\u05E4\u05E8\u05D9\u05DE\u05D9\u05D5\u05DD \xB7 AI + \u05DE\u05D0\u05DE\u05DF \u05D0\u05E0\u05D5\u05E9\u05D9")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "settings",
    label: "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA",
    size: "sm"
  })));
}
window.AppSidebar = AppSidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppSidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ConversationView.jsx
try { (() => {
/* CoachMind app — active conversation: header, message thread, composer.
   The coach replies are scripted (a UI kit, not a real model). */
const DS_CV = window.CoachMindDesignSystem_c174fb;
function ConvHeader({
  onVoice
}) {
  const {
    Avatar,
    IconButton
  } = DS_CV;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 24px",
      borderBottom: "1px solid var(--border-subtle)",
      background: "color-mix(in srgb, var(--paper) 80%, transparent)",
      backdropFilter: "blur(8px)",
      position: "sticky",
      top: 0,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    variant: "coach",
    initials: "C",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-heading-3)",
      fontSize: "var(--text-base)",
      color: "var(--ink-900)"
    }
  }, "\u05D4\u05DE\u05D0\u05DE\u05DF \u05E9\u05DC\u05DA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      font: "var(--font-caption)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--success-500)"
    }
  }), "\u05DE\u05D0\u05DE\u05DF AI \xB7 \u05D6\u05DE\u05D9\u05DF \u05EA\u05DE\u05D9\u05D3")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "waveform",
    label: "\u05DE\u05E6\u05D1 \u05E7\u05D5\u05DC\u05D9",
    onClick: onVoice
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "more",
    label: "\u05E2\u05D5\u05D3"
  }));
}
function TypingDots() {
  return /*#__PURE__*/React.createElement("div", {
    className: "cm-msg cm-msg--coach"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: "var(--radius-pill)",
      background: "var(--brand-gradient)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cm-msg__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-msg__bubble",
    style: {
      display: "inline-flex",
      gap: 5,
      padding: "16px 18px"
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--ink-300)",
      animation: `cm-typing 1.2s ${i * 0.18}s infinite ease-in-out`
    }
  })))));
}
function ConversationView({
  messages,
  typing,
  onSend,
  onVoice
}) {
  const {
    MessageBubble,
    Composer
  } = DS_CV;
  const [text, setText] = React.useState("");
  const endRef = React.useRef(null);
  React.useEffect(() => {
    if (endRef.current) endRef.current.scrollTop = endRef.current.scrollHeight;
  }, [messages, typing]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(ConvHeader, {
    onVoice: onVoice
  }), /*#__PURE__*/React.createElement("div", {
    ref: endRef,
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "28px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, messages.map((m, i) => /*#__PURE__*/React.createElement(MessageBubble, {
    key: i,
    from: m.from,
    avatar: m.avatar !== false,
    meta: m.meta
  }, m.text)), typing && /*#__PURE__*/React.createElement(TypingDots, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 24px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Composer, {
    value: text,
    onChange: e => setText(e.target.value),
    onSend: () => {
      if (text.trim()) {
        onSend(text.trim());
        setText("");
      }
    },
    onVoice: onVoice
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      font: "var(--font-caption)",
      color: "var(--text-muted)",
      marginTop: 10
    }
  }, "CoachMind \u05DE\u05DC\u05D5\u05D5\u05D4 \u05D0\u05D5\u05EA\u05DA, \u05DC\u05D0 \u05DE\u05D7\u05DC\u05D9\u05E3 \u05D8\u05D9\u05E4\u05D5\u05DC \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9."))));
}
window.ConversationView = ConversationView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ConversationView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/VoiceView.jsx
try { (() => {
/* CoachMind app — voice mode. Calm, near-empty: the orb, a live caption,
   and a single way out. Intimate, not busy. */
const DS_VV = window.CoachMindDesignSystem_c174fb;
function VoiceView({
  onEnd
}) {
  const {
    VoiceOrb,
    Button
  } = DS_VV;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 20,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 40,
      background: "var(--brand-gradient-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-caption)",
      color: "var(--royal-600)",
      letterSpacing: "var(--tracking-wider)",
      marginBottom: 8
    }
  }, "\u05DE\u05E6\u05D1 \u05E7\u05D5\u05DC\u05D9"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-heading-2)",
      color: "var(--ink-900)"
    }
  }, "\u05DE\u05E7\u05E9\u05D9\u05D1\u2026")), /*#__PURE__*/React.createElement(VoiceOrb, {
    size: "lg",
    listening: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 460,
      textAlign: "center",
      font: "var(--font-body-lg)",
      color: "var(--ink-700)",
      lineHeight: "var(--leading-relaxed)",
      minHeight: 60
    }
  }, "\"\u05DB\u05E9\u05D0\u05E0\u05D9 \u05D7\u05D5\u05E9\u05D1\u05EA \u05E2\u05DC \u05D6\u05D4\u2026 \u05D0\u05E0\u05D9 \u05DE\u05D1\u05D9\u05E0\u05D4 \u05E9\u05D6\u05D4 \u05DC\u05D0 \u05D1\u05D0\u05DE\u05EA \u05E7\u05E9\u05D5\u05E8 \u05DC\u05E2\u05D1\u05D5\u05D3\u05D4 \u05E2\u05E6\u05DE\u05D4, \u05D0\u05DC\u05D0 \u05DC\u05E4\u05D7\u05D3 \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC.\""), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    pill: true,
    iconStart: "x",
    onClick: onEnd
  }, "\u05E1\u05D9\u05D5\u05DD \u05E9\u05D9\u05D7\u05D4 \u05E7\u05D5\u05DC\u05D9\u05EA"));
}
window.VoiceView = VoiceView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/VoiceView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/WelcomeView.jsx
try { (() => {
/* CoachMind app — welcome / empty state. Calm, centered: greeting,
   composer, and a few first-person conversation starters. */
const DS_WEL = window.CoachMindDesignSystem_c174fb;
const STARTERS = [{
  icon: "target",
  text: "אני נתקעת באותו דפוס שוב ושוב"
}, {
  icon: "sparkles",
  text: "יש לי החלטה גדולה לקבל"
}, {
  icon: "clock",
  text: "קשה לי להתחיל משימה שדחיתי"
}, {
  icon: "heart",
  text: "רוצה לסכם את היום ולהתכוונן למחר"
}];
function WelcomeView({
  onStart
}) {
  const {
    Composer,
    Chip
  } = DS_WEL;
  const [text, setText] = React.useState("");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 24px",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-display-2)",
      color: "var(--ink-900)",
      marginBottom: 10
    }
  }, "\u05E2\u05E8\u05D1 \u05D8\u05D5\u05D1, \u05D3\u05E0\u05D4"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--font-body-lg)",
      color: "var(--text-secondary)"
    }
  }, "\u05E2\u05DC \u05DE\u05D4 \u05EA\u05E8\u05E6\u05D9 \u05DC\u05E2\u05D1\u05D5\u05D3 \u05E2\u05DB\u05E9\u05D9\u05D5? \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DE\u05D0\u05D9\u05E4\u05D4 \u05E9\u05E0\u05D5\u05D7 \u05DC\u05DA.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Composer, {
    value: text,
    onChange: e => setText(e.target.value),
    onSend: () => text.trim() && onStart(text.trim()),
    onVoice: () => onStart("__voice__")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      justifyContent: "center",
      maxWidth: 640
    }
  }, STARTERS.map((s, i) => /*#__PURE__*/React.createElement(Chip, {
    key: i,
    icon: s.icon,
    onClick: () => onStart(s.text)
  }, s.text))));
}
window.WelcomeView = WelcomeView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/WelcomeView.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Composer = __ds_scope.Composer;

__ds_ns.MessageBubble = __ds_scope.MessageBubble;

__ds_ns.VoiceOrb = __ds_scope.VoiceOrb;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
