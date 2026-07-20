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
