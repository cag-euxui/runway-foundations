# runway-dls-usage-guide

# Runway DLS Usage Guide

This file defines HOW to apply the Runway DLS correctly. It contains process, grid, and verification rules only. Token definitions (colours, typography, spacing, effects) live in SKILL.md — do not duplicate token values here.

---

## 1. Component Repo Lookup Process

Before generating any NAMED component, check the repo first: Repo: [https://github.com/cag-euxui/runway-md-components.git](https://github.com/cag-euxui/runway-md-components.git)

1. Look for the component’s specific .md file under docs/{{category}}/.
2. If found, apply its Usage Guidelines section exactly.
3. If not found, fall back to SKILL.md token rules only.
4. If neither source defines the needed behaviour, state this as a gap — do not invent behaviour or borrow conventions from Material UI, Ant Design, or other libraries.

RULE: Component rules in the repo always override generic UI patterns.

---

## 2. Layout Grid Rules

### 2.1 Column Mapping Requirement

- Every section/component must state its explicit column span per device breakpoint (e.g. desktop col 3–10 centred; tablet col 1–6 full width; mobile col 1–4 full width).
- Restate the column mapping FRESH for every screen — even if unchanged from the previous screen. Never assume or carry over a prior mapping.
- If producing 3+ screens in one flow and no column mapping has been stated for the current screen, do NOT render that screen until its mapping is written first. This is a BLOCKING condition mid-generation.

### 2.2 Centred Layout Rule

- Do NOT position centred elements using only left-margin or padding values. Always use column-span math to guarantee symmetric whitespace on both sides.
- The outer content container must always span col 1–12 (respecting grid-desktop-margin), but content WITHIN it must be explicitly positioned — full-width, centred (symmetric offset), or split (e.g. col 1–3 / 4–12) — never left-floated by default.

### 2.3 Nested Grid Rule

- If a container does not span the full page width (e.g. main content next to a sidebar), its internal grid must be declared with a column count equal to the REMAINING columns, not a fresh 12/6/4 count.
- State both page-level and local column numbers in the Column Mapping Header whenever a nested grid is used.
- When generating multiple screens sharing a layout shell (sidebar + main), validate the first screen’s grid math before replicating the pattern to subsequent screens — do not regenerate grid logic independently per screen.

### 2.4 CSS Grid Safety Rule

- Any container using CSS Grid with a fixed or viewport-based height (min-height, height: 100vh, etc.) MUST explicitly declare align-content (default to `start`) unless full-height stretching is intentionally required.
- Any grid container with more than one row track must explicitly define grid-template-rows OR set align-content: start. Never leave row sizing to default `auto` + implicit stretch behaviour.
- AVOID relying on CSS Grid’s default align-content: normal (resolves to stretch) for containers with min-height or height set — this creates invisible auto-row gaps.

### 2.5 Sidebar Margin Rule

- Default sidebar width is col 1–2 (desktop 12-col grid) unless the user specifies a different span. Main content takes the remaining columns (col 3–12).
- If a sidebar is present, set left margin to 0px (sidebar sits flush against the viewport edge). Right margin stays at the default token.
- State this in the Column Mapping Header, e.g.: “Sidebar: col 1–3, margin-left: 0px | Main: col 4–12, margin-right: grid-desktop-margin.”
- AVOID: Applying the default left margin when a sidebar is present.
- AVOID: Assuming a sidebar span wider than col 1–2 without explicit user instruction.

---

## 3. Icon and Symbol Usage

- Do not use emojis anywhere in generated UI — buttons, labels, headings, body text, empty states, tooltips, notifications, or placeholder content, including Unicode emoji characters (✅ 🎉 📋 ⚠️).
- Use only icons from the defined CAG icon set (or plain text labels) to represent status, action, or emphasis. If no icon token exists, state the gap — do not substitute an emoji as a placeholder.
- AVOID using emoji as a substitute for semantic colour tokens (e.g. ✅ instead of Green Success600, ⚠️ instead of Orange Warning600).

---

## 4. Font Loading Verification

Whenever generating code that uses the Lato typeface:

1. Confirm a `<link>` tag or `@font-face` declaration exists in the document head or global CSS BEFORE any component references “Lato” in fontFamily.
2. If using @font-face, confirm the src path points to a valid font file and font-weight/font-style values match weights actually used (400, 700, 900).
3. Confirm every fontFamily value includes a fallback (e.g. “Lato, sans-serif”) so the UI degrades gracefully if Lato fails to load.

AVOID: Referencing “Lato” in fontFamily without a corresponding loading mechanism (link tag, @font-face, or library import such as next/font or @fontsource/lato) present in the same codebase.

AVOID: Assuming “Lato” exists as a system font — it must always be explicitly loaded.

---

## 5. Assumptions & Gaps Classification

Classify every unknown into one of two tiers:

- **[BLOCKING] Gap**: Missing info that fundamentally changes the design (e.g. unknown screen name, missing user flows, unclear platform, unclear Brand/Product profile, missing column mapping mid-generation). Stop here — do not generate until resolved.
- **[ASSUMPTION] Default**: Reasonable defaults you are proceeding with (e.g. CTA style, empty states, token variant choice). List and proceed without asking.

RULE: If any BLOCKING items exist, stop and ask only about those. Do not ask about ASSUMPTION items.

RULE: Do not target a specific number of assumptions. List only genuine ambiguities — if listing assumptions feels forced, the task is likely clear enough to proceed with fewer or none.

---

## 6. Self-Critique Process

Do NOT assign numeric scores (1–10). For each category, cross-reference every design decision against exact tokens in SKILL.md. Mark PASS only if every value matches a named token verbatim.

1. **DLS Colours:** List every colour used. State the exact token name (e.g. Colors/ Purple Primary/600). Core tokens are in SKILL.md; extended/data-viz tokens are in runway-dls-extended-palette.md. If any colour has no matching token in either file, mark FAIL.
2. **DLS Typography**: List every text style used. State the exact composite style name from Section 6 of the SKILL.md (e.g. H4, Body Default). If any combination doesn’t match, mark FAIL.
3. **DLS Spacing**: List every margin, padding, and gap value. State the exact spacing token (e.g. spacing-24). If any value falls outside the defined scale, mark FAIL.
4. **DLS Effects**: List every shadow, radius, or blur used. State the exact token (e.g. radius-16, shadow-light-bg). If invented, mark FAIL.
5. **Layout Grid**: State the column-span mapping for every section. Confirm correct breakpoint grid (12/6/4-col) and symmetric offsets for centred layouts. If any section lacks annotation or has uneven whitespace, mark FAIL.
6. **Font Loading**: Confirm a valid font-loading mechanism for Lato exists in the output. If fontFamily: “Lato” appears without a corresponding load mechanism, mark FAIL.
7. **Icon/Symbol Usage**: Confirm zero emoji characters exist in any generated text, label, or code. If any are found, mark FAIL.
8. **UX clarity**: Identify any point where a user could be confused about what to do next. If none exists, state “No ambiguity found” — do not invent an issue to fill this section.
9. **Violations found**: List every FAIL from steps 1–7, with the specific invented value or missing annotation. If zero violations, state “Zero violations” explicitly.
10. **Fixes applied**: For each violation, state exactly what was changed to resolve it. Do not proceed to final output until every violation is resolved — there is no passing threshold to negotiate.

---

## 7. Plan Skip Exception

If the request meets ALL Low Complexity criteria (Section 7.1):

1. Skip the Project Plan and Assumptions & Gaps steps.
2. State explicitly before proceeding: “Skipping plan — low complexity: [state which criteria applied].”
3. Proceed directly to Column Mapping Header, Design Description, and Self-Critique (Section 6) as normal.

RULE: Self-Critique (Section 6) is NEVER skipped, regardless of complexity classification.

RULE: If uncertain whether a request qualifies as Low Complexity, default to the full plan-first flow — do not guess in favour of skipping.

AVOID: Skipping the plan silently. The skip statement must always be shown so the user retains visibility and can override the classification if needed.

### 7.1 Low Complexity Criteria

A request qualifies as Low Complexity only if it meets ALL of the following:

- Single component, not a full screen or multi-section flow.
- No new column mapping or grid logic required (reuses an existing, already-stated mapping).
- Uses only existing, already-approved tokens — no new colour, spacing, radius, or type combinations.
- Not part of a multi-screen flow sharing a layout shell (sidebar + main, etc.).

RULE: If ANY criterion is unmet, the request is NOT Low Complexity. Default to the full plan-first flow in Section 7.

AVOID: Classifying a request as Low Complexity based on subjective judgment of “simplicity” — only the criteria above qualify.

### 7.2 Compressed Reporting Format

Apply this format for all screens unless the user requests Full Detail.

**Column Mapping** — one line per breakpoint, inline:
“Desktop: [span] | Tablet: [span] | Mobile: [span]”

**Design Description** — table only, no prose:
| Component | Token | Value |
|—|—|—|

**Self-Critique** — summary line only:
“Zero violations” OR “[N] violations: [component] — [issue] — [fix]”

RULE: Full token names must still be stated exactly as in SKILL.md — compression applies to formatting and prose, never to token specificity or accuracy.

RULE: For the first screen in a multi-screen flow, show full Column Mapping and Design Description. For subsequent screens sharing the same layout shell, show only deltas: “Same as Screen 1 except: [change].”

AVOID: Omitting a component from the Design Description table just to shorten output — every component must still appear, even if the description is a single row.

## 8. Output Format

1. Project Plan (steps you will take)
2. Assumptions & Gaps (tiered list per Section 5)
3. [STOP if any BLOCKING gaps exist — ask only about those]
4. [After confirmation] For EACH screen in the flow, in this order: a. **Column Mapping Header** — restate explicit column spans for every section/component per Section 2.1. Do not carry over the previous screen’s mapping. b. **Design description** — component-by-component, token-mapped, referencing the column mapping above. c. **Self-critique** (Section 6) — only the final passing version, showing zero violations. Repeat a–c for every subsequent screen.
5. [After design approval] Generate production code per Section 8.

---

## 9. Code Generation Rules

### 9.1 Stack by Brand/Product Profile

- **Admin screens (CAG internal tools)**: React with TypeScript, Vite
- **Consumer screens (iSC / CA.com public-facing)**: React with TypeScript

### 9.2 Grid Enforcement

- Every screen must be wrapped in an actual grid container using CSS Grid (grid-template-columns: repeat(12, 1fr) desktop, 6 tablet, 4 mobile) or the Tailwind equivalent (grid grid-cols-12 gap-8).
- Column spans stated in the design description MUST be implemented as explicit grid placement — grid-column: 3/11 in CSS, or col-start-3 col-span-8 in Tailwind — never percentage-width or Flexbox approximation.
- Do not substitute visual approximation for structural grid placement, even when content is sparse.
- If multiple screens share a content width, use identical grid-column values across those screens — do not let width drift from inconsistent sizing methods.

### 9.3 Token Fidelity

- Reuse the exact token names and values confirmed in the design description (Section 7, step 4b) — do not introduce new hex values, spacing, or type styles during code generation.
- Map DLS composite text styles (Section 6 of SKILL.md) to reusable typography components or utility classes, not repeated inline declarations.
- State any token or component that cannot be cleanly translated to code as a gap — do not invent a workaround silently.
