# Module 7 — Reproducibility and Prompt History — Content Audit v1

Source: `source pages/Reproducibility and Prompt History.pdf` (4 pages). Module identity confirmed via the shared footer nav list (seventh of nine, matching `index.html`'s grid position). Planning (Phases 1, 4, 5) was completed in a prior chat-surface session with no filesystem access, recorded in `../session-handoff-module7.md`; this audit is written after generation (this session), reconciling that already-signed-off plan against the actual source PDF text and the generated page — the normal build-then-audit sequence collapsed into one pass since the plan was already audited and signed off before generation started.

| # | Content category | Original content | Generated representation | Status |
|---|---|---|---|---|
| 1 | Overview | 3 paragraphs: reproducibility rationale, StatWiseAI's automatic prompt/output storage + access limits, restricted-data warning | Verbatim, in an "Overview" card | Represented |
| 2 | "What should be documented?" | 8-item list | Verbatim, plain `<ul>` | Represented |
| 3 | AI Use Log Template | 14 labeled fields (Project name → Location of final code/output) | Worked-example `<dl>` (verbatim) + fillable form (all 14 fields, same order, none renamed/dropped) + Generate Entry button assembling client-side text | Represented |
| 4 | Example AI Use Log entry (NHANES) | Same 14 fields, filled | Verbatim `<dl>`, explicitly labeled illustrative, placed before the blank form | Represented |
| 5 | Reproducibility checklist | 12-item list | Verbatim item text, 2-column CSS grid (`.checklist-2col`), cross-out on check + progress bar (reused `.checklist`/`data-checklist` mechanism, no new JS) | Represented |
| 6 | "Prompt history is helpful, but not sufficient" | 1 paragraph | Verbatim, kept as intro/summary text above the illustrative diagram, not replaced by it | Represented |
| 7 | "Recommended practice" | 1 paragraph + 4 questions | Verbatim paragraph + verbatim 4-item list, static (no accordion) | Represented |
| 8 | Module nav / footer | Shared chrome | Nav unlocked across `index.html` + modules 1–6; footer standard | Represented |

No rows are "Not yet represented" or "Partially represented" — every source content category maps to a full-parity generated representation, verified line-count/field-count exact against the extracted PDF text (3 overview paragraphs, 8-item list, 14/14 template fields and worked-example fields, 12 checklist items, 4 recommended-practice questions).

## Interpretive / net-new content (flagged per Phase 8, not left implicit)

- **Checklist superscript cross-reference** (items 1–8, 11–12) — maps each checklist item to the AI Use Log field(s) it most relates to. This mapping is **interpretive, not sourced**: the source PDF's checklist and template are two separate lists with no cross-reference between them in the original. The mapping — including which items are high-confidence vs. genuinely ambiguous — was worked out and accepted in the planning session (`../session-handoff-module7.md`, Phase 4 item 3's table). Items 9–10 ("Sensitivity analyses are considered" / "Final interpretations are based on actual output") have no corresponding field and are deliberately left unmarked rather than forcing a match. Flagged in-page via a `<p class="small">` note directly above the field legend, not left implicit.
- **History-strip example prompts** (3 short log-line entries under "Prompt history is helpful, but not sufficient") — **Added, net-new.** The source gives no example prompts for this section; these three are illustrative filler for the diagram concept the planning session specified ("short illustrative prompt fragments styled like compact log lines, not chat bubbles"). Labeled in-page as "Illustrative example, not from the source text."
- **Documentation-layers labels** ("Project notes," "Code repository," "Output/results") — specified directly in the planning session's own Phase 4 plan, not invented in this pass, so they carry that session's authorization rather than being freshly interpretive here.

## Judgment calls not sourced, surfaced here

- **`<textarea>` vs. `<input type="text">` per form field** — the source template shows all 14 fields as identical blank lines with no indication of expected length. Longer-content fields (research question, prompt summary, AI-generated recommendation, human decision, rationale, verification steps, remaining concerns) got `<textarea>`; short fields stayed `<input type="text">`. Field set, order, and labels are unaffected — only the input widget per field.
- **Date field** kept as free-text `<input type="text">` rather than `<input type="date">`, so the generated entry preserves whatever format the user types (matching the worked example's "June 8, 2026" prose style) instead of forcing ISO/locale-formatted output.

See `../session-handoff-module7.md` for the Phase 4 supplement strategy and the two user-authorized library extensions (fillable form; 2-column checkable/cross-out checklist) this build implements, and `component-library-signoff-log.md` for the resulting sign-off-log entry.
