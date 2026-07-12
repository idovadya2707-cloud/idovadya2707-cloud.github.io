# CoachMind Design System

The design language for **CoachMind** — an AI mental-coaching platform. The brand
world is a classic, credible blue: navy + royal, calm cool-gray neutrals, generous
white space. Not colorful, not playful. The product is **Hebrew-first and RTL**, so
the whole system is built on CSS logical properties and works identically in Hebrew
(rtl) and English (ltr).

Brand slogan: **Live your potential.**

---

## Consuming this system

Link the single entry stylesheet, then (for React components) load the compiled
bundle and read components off the global namespace.

```html
<!-- 1. Tokens + component CSS (fonts → tokens → base → components) -->
<link rel="stylesheet" href="styles.css" />

<!-- 2. React UMD, then the compiled bundle (needed only for the React components) -->
<script src="react.production.min.js"></script>
<script src="react-dom.production.min.js"></script>
<script src="_ds_bundle.js"></script>
<script>
  const { Button, Wordmark, MessageBubble, Composer } = window.CoachMindDesignSystem_c174fb;
</script>
```

- **Namespace:** `window.CoachMindDesignSystem_c174fb`
- **Pure-CSS use:** every component also ships plain classes (`cm-btn`, `cm-input`,
  `cm-msg`, `cm-card`, `cm-wordmark`, …) in `components.css`, so static HTML pages can
  use the system without React at all.
- **Direction:** the base layer defaults to `rtl`. Set `dir="ltr"` on a subtree for
  English. Always reach for logical properties (`margin-inline`, `inset-inline-start`).

---

## Tokens (`styles.css` → `tokens/`)

| File | What it holds |
|------|---------------|
| `tokens/fonts.css` | **Heebo** (Google Fonts) — one family, Hebrew + Latin, weights 300–900 |
| `tokens/colors.css` | Navy (`--navy-*`, the "Coach" half), Royal (`--royal-*`, the "Mind" half), the signature `--brand-gradient`, cool-gray `--ink-*` neutrals, feedback colors, and semantic aliases (`--text-*`, `--surface-*`, `--border-*`, `--accent`) |
| `tokens/typography.css` | Type scale, weights, tracking, and role tokens (`--font-wordmark`, `--font-display-1`, `--font-heading-*`, `--font-body*`) |
| `tokens/spacing.css` | 4px spacing grid, radii, soft navy-tinted shadows, calm motion easings/durations, layout container widths |
| `tokens/base.css` | Light reset, document defaults, RTL-first flow, `.cm-gradient-text` utility |

**Prefer semantic aliases** (`--text-body`, `--accent`, `--surface-card`) in product
code over raw scale steps.

---

## Components

Each lives in its own folder with a `.jsx` implementation, a `.d.ts` (props), and a
`.prompt.md` (usage notes). They consume the `cm-*` classes in `components.css`.

- **Brand** — `Wordmark` (typographic logo, **no icon, ever**; split or gradient).
- **Chat** — `MessageBubble` (coach / user turns), `Composer` (auto-grow input with
  mic ↔ send), `VoiceOrb` (tap-to-talk, listening pulse).
- **Core** — `Avatar`, `Badge`, `Button`, `Card`, `Chip`, `Icon`, `IconButton`,
  `Input`, `Switch`, `Textarea`.

### Wordmark rules
Typography only — never an icon. The **canonical lockup** is the **continuous
gradient**: the whole word "CoachMind" filled with `--brand-gradient` (navy→mid→bright
royal, left to right), heavy weight (800–900), tight tracking — matching the official
brand sheet. Beneath it sits the tagline "Live your potential" in light weight,
**stretched to the wordmark's full width** (`.cm-lockup` does this via justified
text-align-last) with wide letter-spacing, in `--brand-slogan` royal. Use the **same
gradient lockup everywhere** — nav and footer included. On dark surfaces add
`cm-wordmark--on-dark` (lifts the navy so it stays legible) and `cm-lockup--on-dark`
(tagline in `--royal-300`). A flat two-tone **split** (`cm-wordmark__coach` navy /
`cm-wordmark__mind` royal) exists as an alternative but is not the primary mark.

---

## Templates (`templates/`)

Starting folders a consuming project can copy or follow. Each entry HTML loads the
system through a sibling `ds-base.js` (one editable `base` line).

- **`templates/waitlist/`** — RTL Hebrew early-access / waitlist landing page: hero
  with a phone chat mockup (text ↔ voice modes), pain section, 3-step how-it-works,
  objection section on dark navy, founders, and a signup form. A reference for
  building marketing pages on the system with plain `cm-*` classes + tokens.

---

## UI kits (`ui_kits/app/`)

A reference assembly of the chat product (`AppShell`, `AppSidebar`,
`ConversationView`, `VoiceView`, `WelcomeView`) showing the components composed into
real screens. Read for patterns; not part of the shipped component API.

---

## Principles

1. **One typeface.** Hierarchy comes from weight, size, and tracking — never a second family.
2. **Color with intent.** Mostly white space and gray-blue ink; navy/royal and the gradient appear at moments that matter (CTAs, the wordmark, voice).
3. **Calm motion.** Confident eases, no bounce. Respect `prefers-reduced-motion`.
4. **RTL-first.** Logical properties everywhere; Hebrew is the default, English opts in.
5. **Humane, never bubbly.** Moderate radii, soft low-spread shadows.
