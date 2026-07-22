# Module 5 — Reviewing AI Outputs — Content Audit v2

Re-audit against `module-05-reviewing-outputs.html`, generated per `module-05-widget-architecture-v1.md`. Delta from v1 (all rows "Not yet represented").

## Delta

| # | Content category | v1 status | v2 status | Notes |
|---|---|---|---|---|
| 1 | Page title | Not yet represented | **Represented** | H1, matches Modules 1–4 shell |
| 2 | Overview / rationale | Not yet represented | **Represented** | Both paragraphs verbatim; second recast as `card-warn` ("Final responsibility" — authored heading, flagged below) |
| 3 | CHECK — C (Context fit) | Not yet represented | **Represented** | Definition + 5 Ask-questions verbatim, disclosure panel (count-verified) |
| 4 | CHECK — H (Hidden assumptions) | Not yet represented | **Represented** | Definition + 5 Ask-questions verbatim (count-verified) |
| 5 | CHECK — E (Evidence and standards) | Not yet represented | **Represented** | Definition + 6 Ask-questions verbatim (count-verified) |
| 6 | CHECK — C (Code and computation) | Not yet represented | **Represented** | Definition + 6 Ask-questions verbatim (count-verified); disambiguated from row 3 via always-visible label text, not the glyph |
| 7 | CHECK — K (Knowledge limits) | Not yet represented | **Represented** | Definition + 5 Ask-questions verbatim (count-verified) |
| 8 | Common red flags (11 items) | Not yet represented | **Represented** | Plain `<ul>`, not `.checklist` — matches source's advisory framing; all 11 verbatim (count-verified) |
| 9 | Worked example 1 — NHANES | Not yet represented | **Represented** | Disclosure tile nesting `.compare`; prompt, weak/strong, and CDC note verbatim |
| 10 | Worked example 2 — HRS | Not yet represented | **Represented** | Disclosure tile nesting `.compare`; prompt, weak/strong, and HRS note verbatim |
| 11 | Follow-up prompts (9 items) | Not yet represented | **Represented** | Plain `<ul>`, verbatim reuse of Module 3's pattern; all 9 present (count-verified) |
| 12 | Bottom line callout | Not yet represented | **Represented** | `card-warn`, verbatim text |
| 13 | Module nav | Not yet represented | **Represented** | Module 5 `active` in its own rail; Modules 1–4's own rails and `index.html` updated to unlock/link Module 5 in the same pass (see below) |
| 14 | Institutional footer | Not yet represented | **Represented** | Shared, unchanged |

All 14 rows moved to "Represented." No row dropped.

## Interpretive / authored content — flagged, not fact

- **Lede sentence** — authored framing, same convention as every prior module.
- **"Final responsibility"** — no subheading in the source over this sentence (continuation of "Overview"); authored to match the recurring one-per-module callout convention ("Key principle," "Prompting reminder," "Key reminder").
- **"Red flags in practice"** — authored grouping heading for the two worked examples; the two example subheadings are the source's own, with the dataset name appended in parentheses for scannability.
- **Compare-column labels "Weaker response"/"Stronger response"** — the source uses "A weak response might…"/"A stronger response should…" in prose; relabeled to fit `.compare`'s existing weak/strong slot structure, same editorial move Module 3 made for its own comparison.

## Structural verification (Phase 7)

Run directly against the file as it now sits in `statwiseai-prototype/`, next to the real `assets/styles.css`/`assets/app.js` (not a detached copy):

- HTML tag-balance: clean, 0 errors, 0 unclosed tags.
- `aria-controls` → `id`: 7 of 7 resolve (5 CHECK tiles + 2 worked examples), 0 orphaned, 0 duplicates.
- `pa-toggle` button count vs. `aria-expanded="false"` count: 7/7.
- Every CSS class referenced in the page (`check-grid`, `pa-tile`, `pa-toggle`, `pa-indicator`, `pa-title`, `pa-pop`, `compare`, `col weak`/`strong`, `card`, `card-warn`, `sr-only`, path-nav classes) cross-checked against the real `assets/styles.css` — all resolve; none required new CSS.
- Content counts vs. source: 5 CHECK letters, Ask-questions 5/5/6/6/5 (matches PDF exactly), 11 red flags, 9 follow-up prompts, 2 worked examples, 2 nested `.compare` blocks.
- **Not done:** live-browser or screen-reader check — consistent with this project's standing practice (per `claude-global-preferences.md`, visual/rendering verification is a Claude Code / live-browser task, not something to guess at via static analysis in Cowork).

## Nav fix bundled into this pass (not new content, but touches shared files)

`index.html` and `module-01/02/03/04-*.html` were found with Module 5 still `locked`/"Planned" in their nav rails. `index.html` additionally had a partial inconsistency already present before this session: its module-grid card for Module 4 was already a real link, but its own path-nav sidebar still showed Module 4 as `locked`/"Planned," and its "How this path works" copy still said "four modules." All of the above are now fixed: Modules 1–4 shown as `done` in `index.html`'s nav rail and Module 5 as `active`; Modules 1–4's own files link to Module 5 (`Prototyped`, unstyled `<li>` — matching the exact pattern those files already use for each other); copy updated to "five modules... the remaining four."

## Iteration note — CHECK grid layout

Live feedback on the built page: the accordion mechanic itself was fine, but each `.pa-pop` panel was nested inside its own 1/5-width grid column, leaving too little width for a definition + 5–6 "Ask" bullets. Fixed by pulling the 5 `.pa-pop` panels out of their per-column wrappers so they're direct siblings of the 5 buttons within `.check-grid`, each explicitly set to `grid-column: 1/-1`. Hidden panels don't occupy a grid row at all; whichever is open renders as a full-width band beneath the entire button row. No JS change, no `:has()` dependency, one CSS rule scoped to `.check-grid > .pa-pop` so no other module's use of `.pa-toggle`/`.pa-pop` is affected. Added a repeated bold letter+label heading inside each panel, since the panel no longer sits directly under its own trigger button and needs to self-identify. Re-verified: tag balance clean, 7/7 `aria-controls` resolve, every referenced class (except the now-fully-superseded `.pa-tile` wrapper, expected) present in `assets/styles.css`.

## Open items carried forward (not resolved by this pass)

- **Module 4 is still not logged in `component-library-signoff-log.md`** — flagged in `session-handoff-2026-07-21.md` §3 as work that should happen *before* Module 5, and still not done. Not resolved here; this pass only adds Module 5's own entry (see signoff log directly).
- **`module-04-content-audit-v2.md` is still behind `module-04-documentation.html`'s actual shipped state** (five layout iterations happened after it was written) — already tracked in `session-handoff-2026-07-21.md` §4, own fix recommended there (v3 re-audit once settled), not attempted here since it's out of scope for Module 5.
- **Live-AT testing** — still partial project-wide per the 07-21 handoff §5; Module 5 adds to that backlog rather than closing any of it.
