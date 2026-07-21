# Module 2 — AI Basics for Researchers — Content Audit v2

Re-audit after generation. Delta against v1 — every row moves from "Not yet represented" to "Represented," since this was a from-scratch build with no prior partial state.

| # | Content category | v1 status | v2 status | Representation |
|---|---|---|---|---|
| 1 | Page title | Not yet represented | Represented | `<h1>AI Basics for Researchers</h1>`, matches source exactly |
| 2 | Overview (2 paragraphs) | Not yet represented | Represented | Verbatim, plain prose card |
| 3 | "What is generative AI?" | Not yet represented | Represented | Verbatim, plain prose card |
| 4 | "What is a large language model?" | Not yet represented | Represented | Verbatim, plain prose card |
| 5 | "What AI can help with" (11 items) | Not yet represented | Represented | All 11 items present, left column of the two-column card |
| 6 | "What AI should not be used for" (7 items) | Not yet represented | Represented | All 7 items present, right column |
| 7 | "Key principle" callout | Not yet represented | Represented | `card-warn`, verbatim quote + follow-up paragraph |
| 8 | "Quick self-check" (4 questions) | Not yet represented | Represented (upgraded) | Interactive checklist w/ live progress bar, per the architecture plan's explicit instruction — not a static bullet list |
| 9 | Module nav | Not yet represented | Represented | Shared nav, state flipped across all 4 pages (see below) |
| 10 | Footer | Not yet represented | Represented | Shared footer, source link points to this module's live UT page |

## Site-wide consistency changes (not new content, but required for the module to actually be reachable)

- `index.html`: nav rail module 2 → done + linked; module grid card → live link, tags updated to reflect actual widgets built (Comparison card / Self-check quiz / Video slot, replacing the originally-planned Can/can't graphic / Explainer video labels)
- `module-01-responsible-use.html`: nav rail module 2 → unlocked link (plain, matches how module 3 was already shown there — built-but-ahead)
- `module-03-prompting.html`: nav rail module 2 → done + linked (behind you in sequence now)
- All four pages verified for tag-balance; zero remaining `tag-planned`/`locked` references tied to module 2

## Interpretive calls made during generation (flagged, not silently absorbed)

- List item wording was tightened in a few places for parallel grammatical structure (e.g., source's "Make final analytic decisions without human review." became "Making final analytic decisions without human review." to match the list's other items) — meaning unchanged, verb-form only.
- "and can't" was added to the card heading ("What AI can and can't help with") as a plain-language frame for the two-column layout; the source itself uses two separate H3-equivalent headings ("What AI can help with" / "What AI should not be used for") without a combined framing sentence. Interpretation, not sourced text.

## Verification performed

- HTML tag-balance: clean on all 4 pages
- `aria-controls` count in new file: 0 (correct — no disclosure pattern used, per the supplement strategy's own reasoning)
- Icon/step-dot `aria-hidden` coverage: 100% in new file
- Contrast: reused heading colors (`#2E6B4F`, `#A3332B`) recomputed at 6.30:1 and 6.85:1 against white — pass, consistent with Module 1's already-audited values (same hex values, direct reuse)
- Zero remaining `<h4>` tags anywhere in the site (heading-level fix from the earlier WCAG audit stays intact)
- No new JS file needed — the checklist widget runs entirely on the shared `app.js` behavior already audited for Module 1

## Still open

None for Module 2's own content. Not yet done: live-browser/screen-reader check (same standing caveat as every other module — no headless browser in this sandbox) and no client sign-off yet, obviously, since this was just built.

---

## Redesign update — same day

Rows 3, 4, 5, and 6 (generative AI definition, LLM definition, can/can't-help lists) were reworked per `module-02-widget-redesign-assessment.md` (feasibility/usefulness/accessibility assessment, presented and signed off before generation):

- **Row 3** ("What is generative AI?"): now a DOM flow-diagram (capability chips → pattern-matching-not-understanding → risk callout labeled "overconfidence & sycophancy," framed as a user-side review guard, not an app feature — flagged as interpretive labeling, confirmed with sign-off).
- **Row 4** ("What is a large language model?"): now extends the existing `.compare` card with a mini prompt→processing→output flow per column, directly visualizing the source's own vague-vs-detailed example. Deliberately kept lightweight to preview rather than duplicate Module 3's deeper prompting content.
- **Rows 5–6** ("What AI can/can't help with"): fully reworked from a static two-column list into an interactive phase-grouped disclosure quiz — Tier C from the redesign assessment (of three tiers considered; Tier A, a full two-axis drag-sort, was assessed and explicitly not recommended). All 18 items preserved verbatim in substance, each behind a click-to-reveal verdict + one-line rationale, grouped under 5 research-phase headings (Question & Planning / Data & Documentation / Analysis & Code / Review & Interpretation / Documentation & Reproducibility) as a non-interactive advance organizer. Phase groupings are an interpretive construction — the source doesn't itself organize these items by phase — grounded in the tutorial's own module sequence rather than an invented taxonomy.

**Engineering note:** the `.pa-toggle` disclosure handler was promoted from `module3.js` (where it was module-specific) into the shared `app.js`, since it's now used by both Module 2 and Module 3. No new interaction primitive was invented — Tier C's entire engineering cost was reusing an existing pattern in a new location plus writing 18 items of quiz content.

**Verified:** tag balance clean on all 4 pages; `aria-controls`/`id` cross-check clean (18 pairs on Module 2, 15 still on Module 3, zero orphaned either place); CSS brace-balanced; `node --check` clean on all 3 JS files; zero remaining `<h4>` anywhere in the site.

---

## Quick self-check redesign — same day

Row 8 ("Quick self-check") was refined per explicit user request: the widget was confirmatory-only (4 self-report checkboxes with no actual recall/recognition check). Reworked into two stages:

- **Stage 1 (new):** a function-select quiz — `<fieldset>`/`<legend>` with 8 checkboxes ("Select every task StatWiseAI can actually help with"), 5 true items + 3 distractors, all wording reused verbatim from the Block 3 phase-grouped quiz already built and audited (no new claims introduced — direct reuse of vetted content, not fresh interpretation). A "Check my answers" button scores the selections, marks each item right/wrong with text + color (not color alone), disables the inputs, and reports a summary count in an `aria-live="polite"` region.
- **Stage 2 (former items 2–4):** the original 3 confirmatory checkboxes, now wrapped in `#self-check-confirm` and hidden by default. Revealed (via `hidden = false`) only after Stage 1 is checked. Item 1 ("I understand what StatWiseAI can help with") was removed as a self-report item since Stage 1 now tests that understanding directly rather than asking the user to self-certify it.

**Engineering note:** new file `assets/module2.js` (module-2-specific gating logic — first JS this module has needed). The existing `.checklist`/`data-checklist` progress-bar logic in `app.js` (`initChecklists()`) was reused unmodified for Stage 2 — it queries `[data-checklist]` blocks at `DOMContentLoaded` regardless of the `hidden` attribute, so the 3-item progress bar wires up correctly at load and just becomes visible later. No changes to shared `app.js` were needed. New CSS colors reuse existing audited pairs verbatim (`--success`/`--success-tint` for correct, `#A3332B`/`#FBEAE8` for incorrect — same hex pair as `.card-warn`, previously computed at 6.85:1).

**Verified:** `node --check` clean on `module2.js`; HTML tag-balance clean (Python `HTMLParser` stack check); all 11 new/retained ids (`fn1`–`fn8`, `sc2`–`sc4`) have exactly one matching `label[for]`; `sc1` fully removed; data-correct counts confirm 5 true / 3 false; CSS brace count 194/194 (up from 181, all additions accounted for); no `aria-controls` added (this is a one-way reveal, not a toggle, so `aria-live` + natural DOM order was used instead of the `aria-expanded` disclosure pattern — architecturally distinct from the Block 3 pattern by design).

**Still open:** live-browser/screen-reader verification (same standing caveat as every other build this session). No client sign-off yet on this specific refinement.

---

## "Confident doesn't mean correct" flip-card demo — same day

Added per `module-02-instructional-design-assessment.md` recommendation #4 (the module's central risk claim — AI can sound confident while wrong — was asserted three times but never demonstrated). New card `#confidence-demo`, placed between the definition grid and the 18-item quiz, does not replace the existing abstract risk tag in the "What is generative AI?" card — added alongside it per the minimal-change default; removing/consolidating the abstract tag was not authorized separately.

Three example pairs (missing data / p-value interpretation / odds ratio), each a constructed confident-right vs. confident-wrong AI response pair — **interpretive/constructed content, not sourced from the source tutorial text**, flagged per usual practice. User clicks one of two response cards; both flip (per sign-off: reveal-both, not reveal-clicked-only) to show verdict + rationale; cycles through all 3 via a "Next example" button.

**Accessibility resolution for the flip (confirmed before building, not asserted after):** `backface-visibility: hidden` is a paint-only CSS property — it does not remove content from the accessibility tree, so a naive two-face flip card can cause screen readers to announce both faces regardless of visual rotation (confirmed via web search, general CSS-accessibility guidance, not tied to a single WCAG success criterion). Resolution used here: the visual flip is a CSS 3D transform (`rotateY`, disabled under `prefers-reduced-motion: reduce`); AT exposure is controlled independently via `aria-hidden`, toggled on each face the instant a choice is made, synced to but not dependent on the animation. Choices are real `<button>` elements (keyboard-operable by default). Verdict is conveyed by text ("Confident and right." / "Confident, but wrong.") plus color, not color alone. Outcome and question-counter updates are in `aria-live="polite"` regions.

**Engineering note:** appended to `assets/module2.js` (no new file). New CSS colors are direct reuse of already-audited pairs (`--success`/`--success-tint`; `#A3332B`/`#FBEAE8`, same as `.card-warn`, previously computed at 6.85:1) — no new contrast computation required.

**Verified:** `node --check` clean; HTML tag-balance clean; all 12 new ids present exactly once and match JS references; CSS brace count 213/213 (up from 194, additions accounted for).

**Still open:** live-browser/screen-reader verification of the actual flip behavior (same standing caveat — no headless/real browser in this sandbox, so the `aria-hidden` sync is verified by code inspection, not by testing with an actual screen reader). No client sign-off yet.

---

## Flip-card fix — live VoiceOver test, same day

Live test (Safari + VoiceOver, macOS) found: VoiceOver's own linear/swipe reading of the cards worked correctly, but literal Tab-key navigation could not reach both card buttons — shift+Tab from the widget jumped back to the nav rail instead of stopping on the second card.

**Diagnosis:** the original build used a true 3D flip (`perspective` on a wrapper, `transform-style: preserve-3d` + `rotateY` on the focusable `<button>`, `backface-visibility: hidden` on two stacked front/back faces). This is a known category of WebKit issue — 3D-transformed focusable elements can be dropped from or reordered in the keyboard tab sequence in Safari. Not independently reproduced in this sandbox (no live browser here); diagnosis is based on the reported symptom pattern matching this known bug class, not a confirmed root-cause trace.

**Fix (not a patch — a rebuild of the mechanism):** removed all 3D transform properties from the interactive elements. The flip is now a 2D `scaleX` squeeze on the button itself (squeeze to near-zero width, swap content, un-squeeze), skipped entirely under `prefers-reduced-motion: reduce` (content swaps instantly with no transform). Each card now has **one** content region instead of two stacked front/back nodes — content is replaced directly via `innerHTML`, so there's no `aria-hidden` synchronization to maintain and nothing for the 3D-transform tab-order bug to attach to structurally, regardless of whether the original diagnosis is exactly right. This is a strictly simpler design on every axis (DOM, JS, AT story), not just a workaround.

**Verified:** `node --check` clean; HTML tag-balance clean; CSS brace count unchanged at 213/213 (net-neutral edit); no leftover references to the removed 3D properties outside of explanatory comments; all 4 new ids (`cd-btn-a`, `cd-face-a`, `cd-btn-b`, `cd-face-b`) present exactly once.

**Still open:** re-test with Safari + VoiceOver to confirm Tab now reaches both cards — this fix is based on eliminating the suspect CSS category, not on reproducing and re-testing the original bug in this sandbox.

---

## Disclosure-panel VoiceOver announcement fix — same day, both Module 2 and Module 3

Live test confirmed the flip-card fix (above) worked, and separately reported: the `.pa-toggle` accordion titles (Modules 2 and 3, shared `initDisclosureToggles()` pattern) read fine as Tab stops, but the revealed `.pa-pop` panel text was not announced by VoiceOver after expanding.

**Diagnosis:** toggling the native `hidden` attribute on an already-present, unchanged text node is not a reliably-triggering mutation for `aria-live` announcement across browsers/AT — some engines only treat genuinely new text (added or changed content) as announce-worthy, not a visibility change on existing content. This affects both modules identically because both reuse the same shared `app.js` function and the same `.pa-toggle`/`.pa-pop` markup pattern.

**Fix:** `initDisclosureToggles()` (shared, `assets/app.js`) now writes the revealed panel's text into a persistent, always-present live region on expand (and clears it on collapse), scoped to the nearest enclosing `.card`. This is the same technique already confirmed working in this environment for the self-check and flip-card feedback text (a real element present at page load, whose text content is directly reassigned) — not a new, unverified mechanism. The live region itself uses a new `.sr-only` utility class (clip-based visually-hidden-but-AT-exposed technique, WCAG technique C7/G94 — distinct from `display:none`/`hidden`, which *do* get removed from the accessibility tree) so it doesn't duplicate visible text on the page; the `.pa-pop` panel remains the visible content, unchanged.

One `<p class="sr-only" data-pa-live aria-live="polite"></p>` element added to each page's relevant card (Module 2's phase-quiz card, Module 3's prompt-anatomy card) — no other markup changed.

**Verified:** `node --check` clean on `app.js`; HTML tag-balance clean on both module-02 and module-03; CSS brace count 214/214 (up from 213, one new rule accounted for); `data-pa-live` present exactly once per page.

**Still open:** re-test with Safari + VoiceOver to confirm the expanded panel text is now announced on both modules.
