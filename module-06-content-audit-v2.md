# Module 6 — Requesting Code — Content Audit v2 (post-generation)

Re-audit of `module-06-content-audit-v1.md` against the shipped `module-06-requesting-code.html` / `assets/module6.js`, same convention as `module-05-content-audit-v2.md`.

| # | Content category | Status |
|---|---|---|
| 1 | Page title | Represented — `<h1>` |
| 2 | Overview (2 paragraphs) | Represented — page-head lede + paragraph |
| 3 | "What to include" 9-item list | Represented — `.prompt-anatomy` disclosure grid (9 tiles), reusing Module 3's signed-off pattern |
| 4 | Placeholder-name example (generic R) | Represented — static blockquote card, verbatim source text |
| 5 | General code request template | Represented — `.pb-form`/`.pb-output` builder (`assets/module6.js`), all 6 fields + 3 fixed lines match the source template exactly |
| 6–10 | Five language worked examples | Represented — `.check-grid` disclosure grid (5 tiles), verbatim source text per language, monospace-rendered via `.pb-output` |
| 11 | Code review checklist (11 items) | Represented — plain `.checklist` + `data-checklist`, Module 1's pattern, wired automatically via `app.js`'s global `initChecklists()` |
| 12 | Important reminder callout | Represented — `.card-warn`, verbatim source text |
| 13 | Module nav | Represented — flipped across all 6 built pages + `index.html` |
| 14 | Institutional footer | Represented — unchanged shared footer |

## Decision Point 1 — resolved

`module-06-widget-architecture-v1.md` §3/§5 flagged three options for the five-language reference grid's layout mechanic (`.check-grid`'s full-width-pop CSS, named for Module 5's CHECK framework). Given the go-ahead to proceed with generation did not specify a choice, and per this project's own governance principle ("preserve existing functionality unless explicitly authorized to change it"), **Option 1 was taken**: `.check-grid` is reused verbatim, unmodified, with no CSS changes and no touch to Module 5's already-signed-off markup. Module 6's language grid simply reuses the class name.

This means the naming mismatch the spec flagged (a code-request reference grid living under a class literally named for CHECK) is now live in two modules, not resolved. **Option 3 (generalize the mechanic to a neutral class name, e.g. `.tile-grid`) remains available as a follow-up hygiene pass** if the team wants it — it was the spec's own recommendation, just not defaulted into without an explicit ask, since it would have required editing Module 5's signed-off HTML. Carried forward as an open item, not silently dropped.

## Two source-fidelity gaps surfaced honestly, not smoothed over

The "what to include" 9-item list names two things the source's own "General code request template" doesn't actually give a fill-in blank for:

- **"The general model or analysis type"** — no dedicated template slot; the tile's pop text says so directly and tells the user to fold it into the goal description.
- **"The desired output"** — no dedicated template slot at all; the tile's pop text says so directly and suggests adding a line if it matters.

Per the architecture spec's own scoping decision (§3: the builder should clone the template's actual 6 fields, not invent fields the source didn't include), these two items were **not** given fabricated builder fields. This is a deliberate content-fidelity choice: the source module itself doesn't fully operationalize its own "what to include" checklist inside its own template, and the build reflects that honestly rather than silently patching over it.

## Verification (Phase 7)

- Tag balance: `div`/`button`/`fieldset`/`form`/`ul`/`li`/`select` all balanced.
- `aria-controls` ↔ `id`: 14 references, 0 missing targets.
- `node --check` on `assets/module6.js`: passes.
- Every CSS class referenced in the page resolves in `assets/styles.css`, with one expected exception: `.pa-tile` has no dedicated rule — confirmed as pre-existing behavior (Modules 3 and 5 both use `.pa-tile` as an unstyled grid-item wrapper too), not a new gap.
- Content-count parity: 9 "what to include" tiles, 5 language examples, 11 checklist items — all match source counts.

Not yet done, consistent with the project-wide backlog: live-browser/AT testing.
