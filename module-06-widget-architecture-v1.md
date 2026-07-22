# Module 6 — Requesting Code — Architectural Analysis v1

Built from `module-06-content-audit-v1.md` (14 rows). Source: `source pages/Requesting Code in R, Python, SAS, Stata, or SPSS.pdf`. Existing repo reviewed directly: `assets/module3.js` (builder mechanics, read in full — see §1), `component-library-signoff-log.md`, `StatWiseAI-Tutorial-Architecture-Plan.md` §2/§4, `module-04-widget-architecture-v1.md` and `module-05-widget-architecture-v1.md` (precedent format and precedent decision-point handling).

This is a Phase 3/4 deliverable — audit plus supplement strategy. No HTML/CSS/JS proposed for writing yet; Phase 5 sign-off is the next gate, same as every prior module.

---

## 1. System/problem framing

**Problem type.** Lower ambiguity than any prior module's architecture pass. The architecture plan's content model (§2) already specs Module 6 as "Code-request builder (same pattern as #3)," and `component-library-signoff-log.md` already marks Module 6 "READY TO START" against Module 3's signed-off structured-input-builder pattern specifically. This analysis exists to confirm that mapping in detail against the actual source content — not to re-litigate whether a builder is the right call — and to work out the parts the architecture plan's one-line spec doesn't cover: the "what to include" preview, the five-language reference set, and the review checklist.

**Relevant layers:**

- Content/pedagogy: skill-building, same *category* of teaching job as Module 3 ("turn a vague ask into a structured request") but for code specifically, with an added reference-library need Module 3 didn't have (five language-specific worked examples).
- Component-library status: **every pattern this module needs is already signed off** — structured-input builder, disclosure, copy-to-clipboard (all Module 3), checklist with progress bar (Module 1). First module where the entire build maps onto pre-approved widgets with no unsigned-off pattern anywhere in it.
- A real content-structure distinction the audit surfaced, carried into this analysis: the generic placeholder-name example (row 4) and the five language examples (rows 6–10) are not the same content type — one is a single inline concept-illustration, the other is a five-item reference set users will want to jump to a specific entry in. Different widget treatments follow from that, not the same one applied five times over.
- **The template itself is natural language, not per-language code.** "I need code in [R / Python / SAS / Stata / SPSS]" is one fill-in-the-blank slot inside an otherwise language-agnostic request paragraph. The builder's job is identical in *kind* to Module 3's — assemble a phrased request from filled fields — not a five-way branching code generator. This directly caps the builder's complexity at roughly Module 3's level, not higher.
- One governance-hygiene question surfaces here that hasn't come up before: Module 5's `check-grid` (5-column grid + full-width-expanding disclosure panels, built last session) is exactly the layout shape this module's five-language reference set wants — but that class is named after CHECK specifically. Addressed as Decision Point 1 below, not resolved unilaterally.

---

## 2. Dimensional analysis

| Dimension | What-to-include preview (9 items) | Placeholder-name example (1, generic) | Code request builder | Five-language reference set | Code review checklist (11 items) | Reminder callout |
|---|---|---|---|---|---|---|
| Content shape | Concept list, each item ↔ one builder field | Single illustrative quote | 6 fields (select/textarea/text/checkbox-group) + 3 fixed lines → live text | 5 parallel full request texts, one per language | Flat self-verification list, no free text needed | Single paragraph |
| Existing component match | **Exact structural precedent: Module 3's own `.prompt-anatomy` (disclosure grid previewing builder fields)** | Static blockquote, same as Module 3/5's example quotes | **Exact mechanism precedent: Module 3's `.pb-form`/`.pb-output` (`module3.js` `render()`)** | Partial — disclosure pattern signed off; grid-with-full-width-pop mechanic exists but is Module-5-named (`check-grid`) | Exact match: Module 1's `data-checklist` + `initChecklists()`, no free-text variant needed | Exact match: `.card-warn` |
| New engineering surface | Zero — content only | Zero | Low — new `assets/module6.js`, same shape as `module3.js`, no branching logic (per §1) | Zero-to-low depending on Decision Point 1 | Zero | Zero |
| Accessibility risk | None — inherits Module 3's audited pattern | None | None — inherits Module 3's audited `<label for>`/`<fieldset>`/`<legend>` discipline | None if disclosure grid; would be real (tablist/tab/tabpanel, arrow-key nav) if tabs are chosen instead | None — inherits Module 1's audited pattern | None |
| Pedagogical target | Previews what a strong code request needs, same role `.prompt-anatomy` plays in Module 3 | Establishes the placeholder-variable convention before the template appears | Lets the user actually produce a usable request | Shows the template applied per language — the thing users will want to compare/reference | Post-generation self-verification, same role as every prior checklist | Sets the "draft, not guarantee" boundary, same recurring convention |

---

## 3. Architectural interpretation

**The builder is a near-direct field-relabeling of `module3.js`, not a new mechanism.** `module3.js`'s `render()` reads a fixed set of field values via `val(id)`/`checkedList(name)`, falls back to a bracketed placeholder string when a field is empty, and concatenates a template string on every `input`/`change` event — no conditional branching on field content anywhere. Module 6's fields map cleanly onto that exact shape:

| Template slot | Field type | Options / placeholder |
|---|---|---|
| Language | `<select>` | R / Python / SAS / Stata / SPSS |
| Analysis goal | `<textarea>` | free text |
| Outcome type | `<select>` | continuous / binary / count / time-to-event / repeated measure / other |
| Main predictor | `<input type=text>` | free text |
| Covariates | `<input type=text>` | free text |
| Design features | checkbox group (`<fieldset>/<legend>`) | survey weights / strata / PSU / clustering / repeated measures / longitudinal waves / missing data (7 options) |

Three lines are always appended verbatim regardless of field state ("not uploading sensitive or participant-level data," "placeholder variable names only," "write commented code and include notes about assumptions, diagnostics, and what to verify") — same convention as Module 3's own always-appended closing line. `assets/module6.js` would mirror `module3.js`'s structure exactly (`val()`, `checkedList()`, `render()`, wired to the same `input`/`change` pattern); the copy button reuses `initCopyButtons()` unchanged, no new JS needed there.

**The "what to include" list previewing the builder is the single most specific precedent in this whole document.** Module 3 already solved the identical structural problem — a concept list that maps one-to-one onto builder fields — with `.prompt-anatomy`: a grid of `.pa-toggle`/`.pa-pop` tiles, each naming one field and giving a short example, sitting directly above the builder that operationalizes it. Module 6's 9-item "what to include" list is the same relationship to the same builder pattern. This isn't "disclosure could apply here" in the general sense used for CHECK or the worked examples — it's the same specific role, on the same specific mechanism, one module later.

**The five-language reference set wants Module 5's just-built full-width-expansion mechanic, monospace-rendered.** Each entry is a full request paragraph — too long for a plain 1/5-width grid column, the exact problem Module 5 solved for CHECK by pulling `.pa-pop` panels out to span the full row (`grid-column: 1/-1`). Rendering each panel's content in `.pb-output`'s existing dark monospace box (already built, already used for Module 3's generated output) would visually distinguish "here's what a filled-in request looks like" from ordinary prose — a second small reuse, not a new style.

**Decision Point 1 — the grid mechanic is now needed by two modules under one module's name.** `check-grid`'s full-width-pop CSS (`.check-grid > .pa-pop { grid-column: 1/-1; }`, plus the `padding-right` fix) is exactly the layout Module 6's reference set needs, but the class is named for CHECK specifically. Three options, not resolved here:

1. **Reuse `.check-grid` verbatim for Module 6 too.** Zero new CSS, but the class name becomes actively misleading (a code-request reference grid living under a class called `check-grid`) — a readability/maintenance cost, not a functional one.
2. **Duplicate the mechanic under a new Module-6-named class** (e.g. `.lang-grid`). No naming confusion, but the third near-identical grid-with-full-width-pop ruleset in the stylesheet (after `.prompt-anatomy` and `.check-grid`), which is exactly the kind of quiet duplication the playbook's "reuse over reinvention" principle exists to avoid.
3. **Generalize now: rename the mechanic to something neutral** (e.g. `.tile-grid`, parameterized by column count) **and repoint `check-grid` at it**, so Module 5's CSS comment and class name stop being the only place this mechanic lives. Zero functional risk (Module 5's markup would need its class attribute updated to match, nothing else), but it's a small refactor of already-shipped, already-signed-off code, which per this project's own governance ("preserve existing functionality unless explicitly authorized to change it") isn't something to do silently even when low-risk.

No recommendation is asserted above — genuinely a judgment call between shipping-fast (1), avoiding-duplication-now (3), or a middle ground (2). See §5.

**The checklist doesn't need Module 4's free-text variant.** Module 4's `.checklist-examples` pattern exists because that checklist collects notes about the *user's own dataset* alongside each check. Module 6's 11 items are pure yes/no self-verification about code that was just generated ("Are all variable names correct?," "Has the code been tested on simulated or approved data?") — there's nothing project-specific to write in per item. Module 1's plain `data-checklist` + `initChecklists()` is the tighter content-shape match, not a downgrade.

---

## 4. Tradeoff analysis

### Builder
- **Recommended:** direct field-relabeled clone of `module3.js`'s pattern, new `assets/module6.js`. Matches the source's own natural-language (not per-language-code) template exactly.
- Rejected: a "smart" builder that branches its output by selected language (e.g., inserting real `svyset`/`PROC SURVEYLOGISTIC` syntax). Not asked for by the source — the template is one paragraph regardless of language — and would multiply the engineering surface for content the module doesn't actually contain.

### "What to include" preview
- **Recommended:** `.prompt-anatomy`-shaped disclosure grid (pending Decision Point 1's naming resolution), 9 tiles.
- Alternative: plain static list, in-library, zero cost — safe fallback, but drops the builder-preview relationship that's this project's own established convention for this exact content shape.

### Five-language reference set
- **Recommended:** 5-column disclosure grid with full-width-expanding panels (Decision Point 1) + `.pb-output` monospace rendering inside each panel.
- Alternative A: vertical `.pa-list` stack (Module 4's plain worked-example treatment) — safer, no naming decision needed, but doesn't use the width the content actually needs and lengthens the page more than a grid would.
- Alternative B (not recommended for v1): true ARIA tabs, one visible panel switched by a tablist. Real new engineering and accessibility surface (tablist/tab/tabpanel roles, roving tabindex, arrow-key navigation per the ARIA Authoring Practices Guide) for a project that has zero tab implementations to date. Named and costed, same way Module 2's "full 2D sort" tier was named and rejected rather than silently dropped — worth keeping on the roadmap if a future module's reference-library need is large enough to justify building it once, properly.

### Code review checklist
- **Recommended:** Module 1's plain checklist + progress bar. No real alternative worth costing — content shape doesn't call for Module 4's free-text variant (see §3).

### Generic placeholder-name example
- **Recommended:** static blockquote in a card, no interactivity. Matches how Module 3 and Module 5 both present a single illustrative example inline, reserving disclosure/interactivity for reference sets and builders, not one-off illustrations.

---

## 5. Strategic recommendation

Build Module 6 with: a `.prompt-anatomy`-style 9-tile disclosure preview for "what to include," a static blockquote for the placeholder-name illustration, a field-relabeled clone of Module 3's builder (`assets/module6.js`), a 5-column disclosure grid with monospace-rendered panels for the language reference set, Module 1's plain checklist for the review list, and a `.card-warn` for the reminder.

**Only one thing needs a decision before Phase 6, and it's not a widget-type question — it's Decision Point 1's CSS-naming call.** Recommend option 3 (generalize `check-grid`'s mechanic to a neutral name now) on the grounds that this project has already paid down exactly this kind of debt before (the disclosure pattern itself was promoted from Module-3-specific to shared once Module 2 needed it) and two content-specific-named copies of the same layout mechanic is the point where deferring the cleanup starts costing more than doing it. Option 1 (ship reusing `check-grid` as-is) is a legitimate fallback if minimizing touched files matters more right now — flagged as equally available, not a fallback in name only.

Nothing generated pending sign-off — this is the Phase 5 checkpoint.

---

## 6. Audit pass

- **Continuity:** first module in this project where every needed widget type is already signed off before the build starts (Modules 1 and 3 between them cover all of it). No component-library extension is required by content — only the CSS-naming hygiene question in Decision Point 1, which is a refactor question, not a new-pattern question.
- **Omission check:** all 14 audit rows map to a recommended treatment; nothing in the source is unaccounted for.
- **Coherence with playbook governance:** the one open decision (Decision Point 1) is surfaced explicitly rather than resolved by default, consistent with how Module 4's flow-diagram choice and Module 2's Block 3 tiers were handled.
- **Goal alignment:** the recommended builder and preview-grid pairing directly mirrors the architecture plan's own stated teaching job for this module ("structured code request across 5 languages") and its explicitly named reuse basis ("same builder pattern as #3") — no invented content or interaction beyond what's costed above.
