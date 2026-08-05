# SKILL

## 0. Process & Usage Rules

For grid enforcement, column mapping, nested grid math, self-critique methodology, font-loading checks, icon/emoji rules, and code generation stack requirements, see [runway-dls-usage-guide.md](runway-dls-usage-guide.md).

## 1. Brand Context & Abbreviations

| Abbreviation | Full Name | Notes |
| --- | --- | --- |
| `CAG` | Changi Airport Group | Parent organisation. Default design system owner. |
| `iSC` | iShopChangi | CAG e-commerce product. Uses Fuchsia as primary brand colour instead of Purple. |
| `CA.com` | Changi Airport Website | The main changiairport.com consumer website. Uses Oyster/Brown palettes for branded surfaces. |

**Primary brand colour:** Purple (`Purple Primary/600`)
**Primary brand colour for iShopChangi (iSC)**: Fuchsia/600 (replaces Purple Primary only for iSC-related projects)
**Sole typeface:** Lato.

**Mode:** Single (light-mode default; dark mode supported via variable modes).

> When this file uses `iSC` or `CA.com` or `CAG`, refer to the table above for the full product name.
> 

---

## 2. Token Naming Convention

Tokens follow two naming formats depending on their collection. Both are valid use the format that matches the token’s collection.

**Path format** used for Colours, Typography, and Effects:

`[Collection]/[Group]/[Scale or Descriptor]`

| Example | Collection |
| --- | --- |
| `Colors/Purple Primary/600` | Colours |
| `Font/Line Height/20` | Typography |
| `Shadows/shadow-light-bg` | Effects |

**Kebab-case format** used for Spacing and Border Radius (exception: these tokens use a flat `name-value` pattern, not the path format):

| Example | Collection |
| --- | --- |
| `spacing-16` | Spacing |
| `radius-full` | Border Radius |

**Exception Grey Alpha tokens:** These tokens use a non-standard naming pattern (`Grey/10% Grey #454545`) inherited directly from Figma. Treat these as a known exception; do not apply the path format to them.

---

## 3. Colour Tokens

Use the `600` shade as the primary shade for each colour family when defining its main interactive or semantic role.

### 3.1 Base

| Token | Hex | Semantic Role |
| --- | --- | --- |
| `Colors/Base/White` | `#FFFFFF` | Pure white modal overlays, high-contrast text on dark bg |
| `Colors/Base/Black` | `#121212` | Near-black body text default, max-contrast text |

### 3.2 Grey Scale (Neutral Foundation)

All surfaces, borders, disabled states, and body text should draw from this scale.

| Token | Hex | Semantic Role |
| --- | --- | --- |
| `Colors/Grey/25` | `#FCFCFC` | Primary page background / app canvas |
| `Colors/Grey/50` | `#F7F7F7` | Secondary background / large surface areas / alternate page sections |
| `Colors/Grey/75` | `#F0F0F0` | Subtle surface contrast / chat bubble background / light container fill |
| `Colors/Grey/100` | `#E5E5E5` | Disabled input border / non-interactive outline / divider |
| `Colors/Grey/200` | `#CCCCCC` | Default input border / active neutral outline |
| `Colors/Grey/300` | `#ABABAB` | Placeholder text / disabled text |
| `Colors/Grey/400` | `#999999` | Secondary supporting text / helper text / caption text / muted icons |
| `Colors/Grey/500` | `#7A7A7A` | Tertiary text / low-emphasis content / light neutral surface alternative |
| `Colors/Grey/600` | `#5E5E5E` | Label text / stronger secondary text |
| `Colors/Grey/700` | `#454545` | Supporting text / default dark neutral surface / CAG footer background |
| `Colors/Grey/800` | `#2F2F2F` | Strong dark surface / non-black background |
| `Colors/Grey/900` | `#222222` | Maximum-contrast dark text on light backgrounds; reserved for iSC and CA.com header/body text |

**USE:** `Grey/700` for all body copy. `Grey/50` for card backgrounds. `Grey/100` for dividers and input borders.

**AVOID:** Using raw `#000000` black for text use `Grey/900` or `Colors/Base/Black` (`#121212`) instead.

### 3.3 Grey Alpha Variants

Use Grey Alpha tokens to create hierarchy, separation, and contrast without introducing additional colours. These tokens are intended for subtle surfaces, overlays, dividers, muted text treatments, and layered emphasis.

| Token | Base | Alpha | Suggested Use |
| --- | --- | --- | --- |
| `Grey/10% Dark #454545` | `#454545` | 10% | Very subtle surface tint, light separators, low-emphasis fills |
| `Grey/20% Dark #454545` | `#454545` | 20% | Subtle borders, soft container contrast, light overlays |
| `Grey/30% Dark #454545` | `#454545` | 30% | Stronger separators, selected neutral surfaces, supporting emphasis |
| `Grey/40% Dark #454545` | `#454545` | 40% | Medium-emphasis overlays and stronger neutral contrast |
| `Grey/60% Dark #454545` | `#454545` | 60% | High-emphasis neutral overlays and stronger layered treatments |
| `Grey/80% Dark #454545` | `#454545` | 80% | Dark neutral overlays, high-contrast surface tinting |
| `Grey/10% Light #FCFCFC` | `#FCFCFC` | 10% | Very subtle light overlay on dark backgrounds |
| `Grey/20% Light #FCFCFC` | `#FCFCFC` | 20% | Soft light overlay on dark surfaces |
| `Grey/30% Light #FCFCFC` | `#FCFCFC` | 30% | Medium light overlay on dark surfaces |
| `Grey/40% Light #FCFCFC` | `#FCFCFC` | 40% | Stronger light overlay on dark surfaces |
| `Grey/60% Light #FCFCFC` | `#FCFCFC` | 60% | High-emphasis light overlay on dark surfaces |
| `Grey/80% Light #FCFCFC` | `#FCFCFC` | 80% | Maximum light overlay / near-solid light treatment on dark surfaces |
| `Grey/80% Black #121212` | `#121212` | 80% | - |
| `Grey/80% White #FFFFFF` | `#FFFFFF` | 80% | - |

**USE:** Use lower alpha values (`10%``30%`) for subtle hierarchy and separation.

**USE:** Use mid alpha values (`40%``60%`) for stronger overlays and layered emphasis.

**USE:** Use `White` alpha tokens on dark backgrounds and `Grey` / `Black` alpha tokens on light backgrounds.

**AVOID:** Using alpha tokens as substitutes for semantic colours such as `Error`, `Warning`, or `Success`.

**AVOID:** Stacking multiple alpha overlays unless a documented effect specifically requires it.

### 3.4 Purple Primary (Brand Colour)

**This is the primary brand and interactive colour.** Use `600` for interactive defaults.

| Token | Hex | Semantic Role |
| --- | --- | --- |
| `Colors/Purple Primary/100` | `#F9F5FC` | Tinted background (selected row, tag bg) |
| `Colors/Purple Primary/200` | `#ECE0F5` | Hover state background |
| `Colors/Purple Primary/300` | `#D5BBEA` | Stroke colour, secondary button hover |
| `Colors/Purple Primary/400` | `#AB76D5` | Secondary badge / chip fill |
| `Colors/Purple Primary/500` | `#8F58BE` | Interactive icon, link hover, Primary Button hover |
| `Colors/Purple Primary/600` | `#7A35B0` | **Primary button fill, primary link, active nav, secondary button label, text links and icons** |
| `Colors/Purple Primary/700` | `#671A9D` |  |
| `Colors/Purple Primary/800` | `#4D0A76` | deep emphasis |
| `Colors/Purple Primary/900` | `#270641` |  |

**USE:** `600` for CTAs, primary buttons, active tabs, focus rings, and links.

**AVOID:** Using `400` or below for interactive text insufficient contrast on white.

### 3.5 Red / Error

Error colours communicate a destructive or negative action, such as removing a user or a failed operation.

| Token | Hex | Semantic Role |
| --- | --- | --- |
| `Colors/Red Error/100` | `#FFF6F5` |  |
| `Colors/Red Error/200` | `#FFE3E0` | Light background for error state elements |
| `Colors/Red Error/300` | `#FFA199` | Stroke colour |
| `Colors/Red Error/400` | `#FF5444` | Background for “New” tag |
| `Colors/Red Error/500` | `#EE3424` | Highlighting places in Changi Airport Terminal 2 only |
| `Colors/Red Error/600` | `#CC1000` | Text and icon colour for error states |
| `Colors/Red Error/700` | `#B31000` |  |
| `Colors/Red Error/800` | `#970c00` |  |
| `Colors/Red Error/900` | `#520600` | Changi Rewards Gold Level |

**AVOID:** Using red for non-error states reserve exclusively for failure/destructive contexts.

### 3.6 Orange / Warning

Warning colours communicate actions that are potentially destructive or on-hold. Commonly used in confirmations to grab the user’s attention.

| Token | Hex | Semantic Role |
| --- | --- | --- |
| `Colors/Orange Warning/100` | `#FEF5E7` |  |
| `Colors/Orange Warning/200` | `#FCE1B6` | Light background for warning state elements |
| `Colors/Orange Warning/300` | `#F9C26C` | Stroke colour |
| `Colors/Orange Warning/400` | `#F5A01A` | Date and time, content emphasis (CAG Tangerine) |
| `Colors/Orange Warning/500` | `#F5831E` | iSC Accent Orange |
| `Colors/Orange Warning/600` | `#F2721B` |  |
| `Colors/Orange Warning/700` | `#E06A27` |  |
| `Colors/Orange Warning/800` | `#C65D00` | CAG Apricot |
| `Colors/Orange Warning/900` | `#994400` |  |

### 3.7 Green / Success

Success colours communicate a positive action, positive trend, or successful confirmation.

| Token | Hex | Semantic Role |
| --- | --- | --- |
| `Colors/Green Success/100` | `#F3F9F3` |  |
| `Colors/Green Success/200` | `#DAEDD9` | Light background for success state elements |
| `Colors/Green Success/300` | `#BBE2C1` | Stroke colour |
| `Colors/Green Success/400` | `#48BB78` | iSC text colour for success states on light backgrounds |
| `Colors/Green Success/500` | `#369F62` |  |
| `Colors/Green Success/600` | `#008545` | Text and icon colour for success states on light backgrounds |
| `Colors/Green Success/700` | `#017031` |  |
| `Colors/Green Success/800` | `#026529` |  |
| `Colors/Green Success/900` | `#005C30` |  |

### 3.8 Extended Palette (Semantic / Data Viz)

For data visualisation, category tagging, and decorative accent colours (Gray Blue, Violet, Oyster, Gold, Brown, Yellow, Iris Blue, Blue, Teal, Pink), see runway-dls-extended-palette.md. Purple Primary remains the only interactive brand colour — do not use extended palette colours for CTAs, active navigation, or focus rings.

### 3.9 Fuchsia (iSC Brand Override)

Use this palette as the **primary interactive brand colour** only for **iSC** projects. For all other CAG projects, `Purple Primary` remains the default.

| Token | Hex | Semantic Role |
| --- | --- | --- |
| `Colors/Fuchsia/100` | `#FBF2F4` | Fuchsia surface |
| `Colors/Fuchsia/200` | `#F3D6DC` | Fuchsia border |
| `Colors/Fuchsia/300` | `#E6AEB8` | Fuchsia subtle emphasis |
| `Colors/Fuchsia/400` | `#DA8595` | Fuchsia emphasis |
| `Colors/Fuchsia/500` | `#D75071` | iSC brand accent |
| `Colors/Fuchsia/600` | `#D31E4B` | **Primary button fill, primary link, active nav for iSC** |
| `Colors/Fuchsia/700` | `#9C1D3C` | Button hover / pressed state |
| `Colors/Fuchsia/800` | `#741F2F` | Button active / deep emphasis |
| `Colors/Fuchsia/900` | `#4D151F` | Text on light fuchsia background |

**RULE:** For iSC projects, `Fuchsia/600` replaces `Purple Primary/600` as the default primary interactive colour (CTAs, primary buttons, active tabs, links, focus emphasis). For all other CAG projects, use `Purple Primary`.

**USE:** `Fuchsia/100``300` for tinted backgrounds, selected states, and subtle branded surfaces in iSC contexts.

**USE:** `Fuchsia/700``900` for pressed states, deeper emphasis, and high-contrast text on light fuchsia surfaces.

**AVOID:** Mixing `Purple Primary` and `Fuchsia` as competing primary colours in the same flow, page, or component set.

**AVOID:** Replacing `Red Error`, `Orange Warning`, or `Green Success` with `Fuchsia` for status states.

---

## 4. Colour Semantic Mapping

### 4.1 UI State Colours

| State | Background Token | Border Token | Text/Icon Token |
| --- | --- | --- | --- |
| Default | `Colors/Grey/50` | `Colors/Grey/100` | `Colors/Grey/700` |
| Hover | `Colors/Grey/75` | `Colors/Grey/200` | `Colors/Grey/800` |
| Active / Pressed | `Colors/Purple Primary/100` | `Colors/Purple Primary/300` | `Colors/Purple Primary/700` |
| Focus |  | `Colors/Purple Primary/600` (ring) |  |
| Disabled | `Colors/Grey/25` | `Colors/Grey/100` | `Colors/Grey/300` |
| Selected | `Colors/Purple Primary/100` | `Colors/Purple Primary/300` | `Colors/Purple Primary/800` |
| Error | Use tokens from the `Red Error` set |  |  |
| Warning | Use tokens from the `Orange Warning` set |  |  |
| Success | Use tokens from the `Green Success` set |  |  |

### 4.2 Text Colour Hierarchy

| Role | Token | Hex |
| --- | --- | --- |
| Primary body text | `Colors/Grey/700` | `#454545` |
| Secondary / muted text | `Colors/Grey/500` | `#7A7A7A` |
| Placeholder text | `Colors/Grey/300` | `#ABABAB` |
| Disabled text | `Colors/Grey/300` | `#ABABAB` |
| Inverse text (on dark bg) | `Colors/Base/White` | `#FFFFFF` |
| Link (default) | `Colors/Purple Primary/600` | `#7A35B0` |
| Link (hover) | `Colors/Purple Primary/700` | `#671A9D` |
| Error text | `Colors/Red Error/600` | `#CC1000` |
| Warning text | `Colors/Orange Warning/600` | `#F2721B` |
| Success text | `Colors/Green Success/600` | `#008545` |

### 4.3 Surface Hierarchy

| Layer | Token | Hex | Use |
| --- | --- | --- | --- |
| App background | `Colors/Grey/25` | `#FCFCFC` | Root page background |
| Primary surface | `Colors/Grey/50` | `#F7F7F7` | Large background areas, alternate sections, subtle separation |

---

## 5. Typography Tokens

### 5.1 Font Family

| Token | Value | Use |
| --- | --- | --- |
| `Font/Font Family/Lato` | `"Lato", sans-serif` | **Sole typeface** all text styles use Lato |

**RULE:** Lato is the only font in this design system. Do not introduce other typefaces.

### 5.2 Font Size Scale

All sizes in `px` (design) convert to `rem` for code (`px ÷ 16`).

| Token | px | rem | Semantic Label |
| --- | --- | --- | --- |
| `Font/Font Size/8` | 8 | 0.5rem | Micro label (use sparingly, badges only) |
| `Font/Font Size/10` | 10 | 0.625rem | Tiny label / tag |
| `Font/Font Size/11` | 11 | 0.6875rem | Caption / legal text |
| `Font/Font Size/12` | 12 | 0.75rem | **Caption / footnote** |
| `Font/Font Size/14` | 14 | 0.875rem | **Body small / label / button** |
| `Font/Font Size/16` | 16 | 1rem | **Body default** |
| `Font/Font Size/18` | 18 | 1.125rem | **Body large / lead paragraph** |
| `Font/Font Size/20` | 20 | 1.25rem | **Subheading / card title** |
| `Font/Font Size/24` | 24 | 1.5rem | **Section heading (H4)** |
| `Font/Font Size/28` | 28 | 1.75rem | **Section heading (H3)** |
| `Font/Font Size/32` | 32 | 2rem | **Page subheading (H2 interior)** |
| `Font/Font Size/36` | 36 | 2.25rem | **Page title (H1 interior)** |
| `Font/Font Size/48` | 48 | 3rem | **Hero / Display heading (H1 hero)** |

**RULE:** Do not apply font size tokens directly. Always use a named composite text style from Section 6.

### 5.3 Font Weight

Weight choice should reinforce hierarchy, emphasis, and readability not visual variety.

| Token | Value | Recommended Use |
| --- | --- | --- |
| `Font/Font Weight/light` | 300 | Long-form reading, low-emphasis content, secondary editorial text |
| `Font/Font Weight/regular` | 400 | Default body copy, supporting text, helper text, standard UI text |
| `Font/Font Weight/bold` | 700 | Headings, labels, emphasis, section titles, buttons |
| `Font/Font Weight/black` | 900 | High-impact display text, hero headings, promotional messaging rare use only |
| `Font/Font Weight/regular italic` | Italic | Inline emphasis, quotes, editorial emphasis |
| `Font/Font Weight/bold italic` | Bold Italic | Strong emphasis within running text |
| `Font/Font Weight/black italic` | Black Italic | Display emphasis, stylised promotional headings rare use only |

**USE:** `400` as the default weight for most UI text and body copy.

**USE:** `700` for headings, labels, buttons, and important emphasis.

**USE:** `900` only for high-impact display or promotional text.

**USE:** `300` sparingly for low-emphasis or long-form editorial content.

**AVOID:** Multiple font weights in the same component without a clear hierarchy purpose.

**AVOID:** `900` for standard body copy, helper text, or dense UI.

**AVOID:** `Italic` as a substitute for semantic emphasis.

### 5.4 Line Height Scale

| Token | px | Pair with Font Size |
| --- | --- | --- |
| `Font/Line Height/10` | 10 |  |
| `Font/Line Height/12` | 12 | 8px, 10px text |
| `Font/Line Height/14` | 14 | 11px, 12px text |
| `Font/Line Height/16` | 16 | 12px, 14px text |
| `Font/Line Height/18` | 18 | 14px text |
| `Font/Line Height/20` | 20 | 16px body text (1.25 ratio) |
| `Font/Line Height/22` | 22 | 18px body large |
| `Font/Line Height/28` | 28 | 20px, 24px text |
| `Font/Line Height/32` | 32 | 24px, 28px headings |
| `Font/Line Height/36` | 36 | 28px, 32px headings |
| `Font/Line Height/40` | 40 | 32px headings |
| `Font/Line Height/42` | 42 | 36px headings |
| `Font/Line Height/58` | 58 | 48px display headings |

**RULE:** Line height must always be font size + 4px. For 16px body text use 20px. For 48px display use 58px.
**RULE:** Do not apply line height tokens directly. Always use a named composite text style from Section 6.

### 5.5 Letter Spacing

| Token | Value (px) | Use |
| --- | --- | --- |
| `Font/Letter Spacing/0` | 0 | Body text, headings (default) |
| `Font/Letter Spacing/2` | 2 | Subheadings, card titles |
| `Font/Letter Spacing/4` | 4 | Labels, uppercase tags |
| `Font/Letter Spacing/6` | 6 | Tight tracking for display |
| `Font/Letter Spacing/20` | 20 | Wide-tracked ALL CAPS labels only |

**USE:** 0 for all body and heading text. Positive tracking only for ALL CAPS labels or decorative display use.

**AVOID:** Negative letter spacing on Lato it disrupts legibility.

### 5.6 Paragraph & List Spacing

| Token | Value | Use |
| --- | --- | --- |
| `Font/Paragraph Spacing/0` | 0 | Default (margin-based spacing preferred) |
| `Font/Paragraph Spacing/18` | 18 | Body paragraph spacing |
| `Font/Paragraph Indent/0` | 0 | No indent (standard) |
| `Font/List Spacing/0` | 0 | Default list spacing |

---

## 6. Composite Text Styles

Use these combinations in component specs.

| Style Name | Size | Weight | Line Height | Letter Spacing | Use |
| --- | --- | --- | --- | --- | --- |
| **H1** | 48px | 700 | 58px | 0 | Primary page heading / hero title |
| **H2** | 36px | 700 | 42px | 0 | Interior page title / primary section heading |
| **H3** | 32px | 700 | 40px | 0 | Section title |
| **H4** | 28px | 700 | 36px | 0 | Sub-section title / mobile screen title |
| **H5** | 24px | 700 | 32px | 0 | Section divider title |
| **H6** | 20px | 700 | 28px | 0 | Secondary section divider title |
| **Subheading** | 18px | 400 | 22px | 0 | Short lead-in content, up to 4 lines |
| **Body Default** | 16px | 400 / 700 | 20px | 0 | Standard body copy; Bold only for inline emphasis |
| **Body Small** | 14px | 400 / 700 | 18px | 0 | Mobile body copy, helper text |
| **Small Text / Tag** | 12px | 700 | 16px | 0 | Tags and compact labels |
| **Small Text** | 12px | 400 / 700 | 16px | 0 | Captions, supporting descriptions, secondary content |
| **xSmall Text** | 11px | 700 | 14px | 4 | Mobile navigation text |
| **xxSmall Text** | 10px | 400 | 12px | 4 | Constrained UI labels |
| **xxxSmall Text** | 8px | 400 | 10px | 0 | Rare use only avoid unless space is extremely limited |
| **All Caps Heading** | 18px | 700 | 22px | 6 | Swim lane headers, major promo titles |
| **All Caps Caption** | 12px | 700 | 16px | 6 | Reward app captions and short uppercase labels |

**USE:** Apply heavier weights only where hierarchy or emphasis is required.

**USE:** Keep body styles primarily at `400`, with `700` reserved for selective emphasis.

**USE:** Reserve `900` for display and promotional heading styles only.

**AVOID:** Skipping heading levels without a clear structural reason.

**AVOID:** Using `300`, `700`, or `900` as decorative variation without a semantic purpose.

---

## 7. Spacing Tokens

Spacing is based on a **primary unit of 4px**. Multiples of 4px govern all spatial dimensions. Multiples of 2px are available for fine-grained adjustments where 4px increments are too coarse.

> **Naming exception:** Spacing tokens use a flat kebab-case format (`spacing-{value}`) rather than the path format. See Section 2.
> 

### 7.1 Spacing Scale

| Token | px |
| --- | --- |
| `spacing-none` | 0 |
| `spacing-2` | 2 |
| `spacing-4` | 4 |
| `spacing-6` | 6 |
| `spacing-8` | 8 |
| `spacing-12` | 12 |
| `spacing-16` | 16 |
| `spacing-20` | 20 |
| `spacing-24` | 24 |
| `spacing-32` | 32 |
| `spacing-40` | 40 |
| `spacing-48` | 48 |
| `spacing-64` | 64 |
| `spacing-80` | 80 |
| `spacing-96` | 96 |
| `spacing-128` | 128 |
| `spacing-200` | 200 |

**USE:** `spacing-24` as the standard left/right page margin and default spacing between adjacent components.

**USE:** `spacing-40` to separate major content sections on mobile.

**USE:** `spacing-80` to separate major content sections on larger layouts.

**RULE:** All page margins, component spacing, and section spacing must reference named spacing tokens.

**AVOID:** Mixing multiple page margin values within the same breakpoint without a clear layout reason.

**AVOID:** Using component spacing values in place of section spacing where a stronger visual break is required.

**AVOID:** Arbitrary padding or gaps outside the defined spacing scale.

### 7.2 Layout Grid Tokens

Grid systems define column structure, gutters, and margins across breakpoints. All screen layouts must map to these grids — no arbitrary column counts or margins.

| Token | Value | Use |
| --- | --- | --- |
| `grid-desktop-columns` | 12 | Desktop web layouts |
| `grid-desktop-gutter` | 32px | Desktop column gutter |
| `grid-desktop-margin` | 80px | Desktop left/right page margin |
| `grid-tablet-columns` | 6 | Tablet layouts |
| `grid-tablet-width` | 768px | Tablet max content width |
| `grid-tablet-gutter` | 32px | Tablet column gutter |
| `grid-tablet-margin` | 32px | Tablet left/right page margin |
| `grid-mobile-columns` | 4 | Mobile layouts |
| `grid-mobile-width` | 375px | Mobile max content width |
| `grid-mobile-gutter` | 16px | Mobile column gutter |
| `grid-mobile-margin` | 6px | Mobile left/right page margin |
| `paragraph-max-width` | 20rem / 720px | Maximum width for paragraph/body text blocks |

**RULE:** Every screen must use the grid matching its target breakpoint (12-col desktop, 6-col tablet, 4-col mobile). Do not mix column counts within the same breakpoint.

**RULE:** When a layout includes a sidebar, the left page margin (grid-desktop-margin) must be set to 0px instead of the default 80px. The default grid-desktop-margin (80px) still applies to the right edge and to layouts without a sidebar.
**USE:** `grid-desktop-margin` (80px) and `grid-desktop-gutter` (32px) as the default spacing structure for all 1280px desktop layouts.

**USE:** `grid-tablet-margin` (32px) and `grid-tablet-gutter` (32px) for 768px tablet layouts.

**USE:** `grid-mobile-margin` (6px) and `grid-mobile-gutter` (16px) for 375px mobile layouts.

**AVOID:** Rendering any section without a column-span annotation.

**AVOID:** Mixing grid systems (e.g., 8-col and 12-col, or desktop and tablet margins) within the same flow.

—

## 8. Border Radius Tokens

> **Naming exception:** Radius tokens use a flat kebab-case format (`radius-{value}`) rather than the path format. See Section 2.
> 

| Token | px | Frequency |
| --- | --- | --- |
| `radius-none` | 0px | Tables, full-bleed images |
| `radius-xs` | 4px | **Common small cards, inputs, chips** |
| `radius-sm` | 8px | Moderate use |
| `radius-md` | 12px | Moderate use |
| `radius-lg` | 16px | **Common big cards, modals, containers** |
| `radius-xl` | 20px | Occasional oversized containers |
| `radius-2xl` | 24px | - |
| `radius-full` | 128px | Pills, avatar circles, toggle switches |

**Common patterns:**
- **Big cards / modals / featured containers** `radius-lg`
- **Small cards / inputs / chips** `radius-xs`
- **Pill-shaped elements** `radius-full`

**RULE:** Favour `radius-xs` and `radius-lg` as the two primary radii to maintain visual consistency.

**RULE:** When nesting rounded elements, inner radius = outer radius gap padding.

---

## 9. Effects Tokens

### 9.1 Shadow Scale

Choose the shadow variant based on the background on which the component is placed.

| Token | Colour | Opacity | Offset (X, Y) | Blur Radius | Semantic Role |
| --- | --- | --- | --- | --- | --- |
| `Shadows/shadow-light-bg` | `#121212` | 8% | `0, 6` | `20px` | Default card elevation on light backgrounds |
| `Shadows/shadow-dark-bg` | `#121212` | 24% | `0, 10` | `24px` | Stronger elevation on dark or coloured backgrounds |

Shadow base colour: `Colors/Base/Black` (`#121212`).

**USE:** `shadow-light-bg` for elevated surfaces on light backgrounds.

**USE:** `shadow-dark-bg` for elevated surfaces on dark or coloured backgrounds.

**USE:** Apply shadow tokens to cards, floating containers, and other elevated surfaces only.

**RULE:** Use one shadow variant per component based on background context.

**AVOID:** Mixing light and dark shadow variants within the same surface system unless the background context changes.

**AVOID:** Stacking multiple shadow tokens on a single element.

**AVOID:** Using shadows on flat or non-elevated elements.

### 9.2 Focus Ring

Use focus ring styles to provide a visible keyboard-focus indicator
on all interactive elements. Form inputs and selects use a
two-layer focus treatment: an inner border plus an outer glow.
Other interactive elements (buttons, links) use a single ring only.

| Token | Value | Use |
| --- | --- | --- |
| `ring-brand` | `Purple Primary/600` (`#7A35B0`), 100% opacity | Inner border/stroke — default focus ring for all interactive elements |
| `ring-light` | `Purple Primary/600` (`#7A35B0`), 24% opacity | Outer glow layer — paired with `ring-brand` on form inputs and selects only |
| `ring-grey` | `Grey/200` (`#CCCCCC`), 24% opacity | Neutral supporting ring where lower emphasis is needed |
| `ring-error` | `Red Error/200` (`#FFE3E0`), 100% opacity | Used for destructive and error focus states |

**RULE:** For form inputs and selects (text fields, dropdowns,
textareas), apply BOTH layers simultaneously:
- Inner: `ring-brand` border, 1px width
- Outer: `ring-light` glow, 4px spread, 0px offset (implemented as
box-shadow: 0 0 0 4px [ring-light value], applied outside the border)

**RULE:** For buttons, links, checkboxes, and other non-input
interactive elements, apply `ring-brand` alone as a single 2px
outline with 2px offset — do not add the outer glow layer.

**RULE:** All interactive elements must display a visible focus
ring. Use `ring-brand` as the default colour unless a semantic
state requires an alternate ring token (e.g. `ring-error`).

**AVOID:** Removing `outline` without providing an equivalent
visible focus indicator.
**AVOID:** Applying the two-layer glow treatment to buttons or
links — reserve it for form input components only.
**AVOID:** Using semantic focus ring colours when the component is
not in the matching semantic state.

### 9.3 Blur / Frosted Glass

Use backdrop blur styles in modals, drawers, popovers, and overlay components. Pair each blur token with the appropriate light or dark translucent fill depending on the overlay context.

| Token | Fill | Blur Radius | Use |
| --- | --- | --- | --- |
| `backdrop-light-blur-sm` | `#FFFFFF60` | 8px | Subtle background blur on light overlays |
| `backdrop-light-blur-md` | `#FFFFFF60` | 16px | Tooltip / popover backdrop on light overlays |
| `backdrop-light-blur-lg` | `#FFFFFF60` | 40px | Modal backdrop on light overlays |
| `backdrop-dark-blur-sm` | `#00000060` | 8px | Subtle background blur on dark overlays |
| `backdrop-dark-blur-md` | `#00000060` | 16px | Tooltip / popover backdrop on dark overlays |
| `backdrop-dark-blur-lg` | `#00000060` | 40px | Modal backdrop on dark overlays |

**USE:** Use light backdrop blur tokens over bright surfaces and dark backdrop blur tokens over dark or image-heavy surfaces.

**USE:** Match blur strength to overlay prominence small for subtle separation, medium for floating layers, large for modal backdrops.

**AVOID:** Applying backdrop blur tokens to standard solid surfaces that are not overlay-based.

**AVOID:** Mixing light and dark backdrop fills within the same overlay layer unless a documented effect requires it.

---

## 10. Project-Specific Style Profiles

Use these profiles only when a project has an explicitly defined experience type. Profiles override presentation, not the core token system.

### Shared Profile Rules

- Font family: `Font/Font Family/Lato`
- Body: Lato Regular, 16px
- Primary interactive colour: `Colors/Purple Primary/600`
- Input radius: `radius-sm`
- Spacing system: 8px grid
- Keep core colour, typography, spacing, and semantic-state tokens unless a profile overrides presentation.

### Customer-Facing / PAX

- H1: Lato Black, 36px
- Button radius: `radius-full`
- Bottom page margin: `spacing-80`
- Output: Interactive Prototype built with React and Tailwind

### Admin

- Headers: Lato Black, 24pt
- Button radius: `radius-sm`
- Page background: `Colors/Grey/50`
- Output: Interactive Prototype built with React typescript with Vite

---

## 11. Component Usage Guidelines

Detailed usage guidelines, variants, behaviour rules, and dos/don’ts for each CAG DLS component are documented in the GitHub repository:

**Repo:** `https://github.com/Jiajjang/runway-dls-docs`

**RULE:** Before generating, reviewing, or writing code for any named CAG DLS component, retrieve the relevant `.md` file from this repo and apply its Usage Guidelines section.
**RULE:** If the component is not found in the repo, fall back to the token rules in this file only — do not invent component behaviour.
**RULE:** Component rules in the repo override generic UI patterns. Never substitute Material UI, Ant Design, or other library conventions when a CAG DLS spec exists.