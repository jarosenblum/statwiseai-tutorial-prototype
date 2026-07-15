# Module 1 — Start Here: Responsible Use — Content Audit v2

Re-audit after the v1 sign-off round. Delta only — see v1 for full row set and source citations.

| # | Content category | v1 status | v2 status | What changed |
|---|---|---|---|---|
| 2 | Prohibited-data list (7 items) | Partially represented — "educational records" absent | **Represented** | Added to checklist c3, "Never" list, and decision-tree `no_participant` result |
| 3 | Allowed-materials list + policy conditional | Partially represented — missing "public variable descriptions"; conditional narrowed to code only | **Represented** | Added "public variable descriptions" to the documentation bullet; replaced the code-only caveat with a list-wide note ("conditioned on use being allowed by the applicable data-use policies") |
| 4 | "When in doubt" guidance | Partially represented — only reachable via 2 of 4 decision-tree branches | **Represented** | Added a static, always-visible `card-warn` callout (reused from Module 3's "Prompting reminder" pattern) so it's visible regardless of which decision-tree path a user takes |
| 5 | Why-history-is-stored reasons (4 items) | Partially represented — "research evaluation" dropped | **Represented** | Restored to "Why this matters" card |
| Accessibility | `.dt-result` had no live region | Flagged, not a content row | **Fixed** | Added `aria-live="polite"` to `.dt-result` |

## Still open

None. All five items signed off in v1 are closed.

## Interpretive calls made during this pass

- The "when in doubt" callout's wording ("If you're not sure whether something is allowed...") paraphrases rather than quotes the source sentence — meaning preserved, not verbatim.
- Reused Module 3's `card-warn` class for the new callout rather than inventing a new component, per the playbook's reuse-over-reinvention rule in Phase 6.

## Verification performed

- HTML tag-balance check: pass
- `node --check` on `module1.js` and `app.js`: pass
- id / aria-controls cross-reference: no `aria-controls` or `data-target` attributes exist on this page, so nothing to cross-check there (decision tree and checklist don't use the disclosure pattern)
- No headless browser available in this environment — a real-browser check on your end is still worth doing, per playbook Phase 7 guidance
