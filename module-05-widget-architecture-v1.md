# Module 5 — Reviewing AI Outputs — Architectural Analysis v1

**Correction note (added after initial draft):** an earlier pass of this analysis was built by scraping the public GitHub mirror (`jarosenblum/statwiseai-tutorial-prototype`) from a session with no access to this Dropbox-synced working folder, and asserted two things that are wrong now that the real project files are visible: (1) it claimed `component-library-signoff-log.md` "does not exist anywhere in the repo" — it exists, at the `claude.repos/StatWise` root (outside the git-tracked `statwiseai-prototype/` folder, which is why it isn't on GitHub), and it already contains a live, formal record. (2) it treated the mismatch between `module-04-content-audit-v2.md` and the shipped `module-04-documentation.html` as a newly-discovered, unexplained inconsistency — it isn't; `session-handoff-2026-07-21.md` §4 already documents exactly why (five live layout iterations happened after that audit file was written) and already recommends the fix (a v3 re-audit once Module 4's layout is settled). Both corrected below, sourced to the actual files this time.

Repo reviewed directly (`claude.repos/StatWise/statwiseai-prototype/` and its Dropbox-root siblings): `index.html`, `assets/styles.css` (631 lines), `assets/app.js`, `module-01` through `module-04` HTML, `module-04-widget-architecture-v1.md`, `module-04-content-audit-v1/v2.md`, `module-02-widget-redesign-assessment.md`, `component-library-signoff-log.md`, `session-handoff-2026-07-15/20/21.md`, `StatWiseAI-Tutorial-Architecture-Plan.md`, `wcag-aria-audit-site-architecture.md`, `graphics-wcag-assessment.md`. Source content extracted from the Module 5 PDF (`source pages/Reviewing AI Outputs.pdf`, 5 pages).

Per the playbook: this is a Phase 3/4 deliverable (audit + supplement strategy). No HTML/CSS/JS was proposed for writing until sign-off was given; the build itself is recorded in `module-05-content-audit-v2.md`.

---

## 0. Content audit (Phase 3) — see `module-05-content-audit-v1.md`

Filed as a separate versioned file, matching this project's convention (`module-0X-content-audit-v1.md`/`-v2.md` as distinct files from the architecture doc). 14 content categories decomposed from the source PDF; all "Not yet represented" prior to generation.

---

## 1. System/problem framing

**Problem type.** Architecture-mode with a Governance constraint layered on it — structurally similar to Module 2's Block 3 assessment. The module's core content (CHECK) has no prior visual precedent, but nearly every sub-component of it does.

**This is not a from-scratch design decision.** `component-library-signoff-log.md`'s Module 3 entry (signed off 2026-07-15) explicitly names the target: the disclosure/click-to-reveal pattern's "Where else it could apply" column reads *"Module 5's 'CHECK framework' (5-part diagram + red-flag cards)... per the playbook's own accessibility defaults, reuse this pattern rather than inventing a new one."* The architecture plan's content model (§2) independently specifies the same media type: *"5-part framework diagram + red-flag spotting cards."* Two separate, already-approved documents converge on the same answer before this analysis started — the job here is confirming the fit in detail and identifying what (if anything) doesn't map cleanly, not proposing a new pattern.

**Relevant layers:**

- Content/pedagogy: CHECK is evaluative — the first module in the sequence about judging AI output rather than producing better input.
- Component-library status: `.check-grid`/`.check-letter` already exists in `assets/styles.css`, explicitly commented "module 5 preview" — a visual shell with no interaction or capacity for the actual per-letter content depth (definition + 5–6 "Ask" questions each). Addressed in §3–4.
- Sign-off status (per the actual log): Modules 1 and 3 are signed off (2026-07-15). Module 2 is built but not yet signed off. **Module 4 is built but not logged in the signoff log at all** — three new widget-adjacent patterns shipped (banded-list/big-number layout, sub-grouped multi-column lists, checklist-with-examples-and-free-text-and-auto-check), none mapped onto prior signed-off types. `session-handoff-2026-07-21.md` §3 explicitly recommends reconciling this *before* Module 5 starts. **This analysis does not resolve that reconciliation** — flagged as a real, still-open prerequisite, not silently absorbed into Module 5's own sign-off.
- Accessibility: the two-C disambiguation (Context fit / Code and computation) and disclosure-vs-static for dense "Ask" lists are the two live decisions.

**Role of AI verification (module's instructional thesis).** A response can be "clear, organized, and confident while still being incomplete or inappropriate," and the final decision "remains with the user and, when appropriate, statistician, IRB, or data governance team." CHECK operationalizes this as five checks; the red-flag list and follow-up prompts extend it into pattern recognition and dialogic follow-through.

**Evidence base for the "why verify" premise** (independently gathered, not the source PDF's own claims). Full credibility detail in **Appendix A**:

- *Reliance without evaluation, and its consequences* (Melbourne Business School/KPMG global study, n=48,000+, 47 countries) — 66% use AI output without evaluating accuracy; 56% globally/57% US made a resulting mistake.
- *Base rate of incorrect output, task-dependent* (Vectara Leaderboard + OpenAI system cards) — grounded summarization ~9.2% avg/~0.7% best; open-domain factual recall (PersonQA) 16%→33%→48% (o1→o3→o4-mini). StatWiseAI's actual use case sits far closer to the open-domain end.
- *Citation reliability specifically* (JMIR Mental Health, peer-reviewed) — of 176 GPT-4o citations, 19.9% fully fabricated; only 43.8% both real and accurate.

One figure ("94% of AI accuracy issues are preventable") is excluded — single blog post, no visible methodology.

---

## 2. Dimensional analysis

| Dimension | CHECK framework (5 letters) | Common red flags (11 items) | Worked examples (NHANES, HRS) | Follow-up prompts (9 items) |
|---|---|---|---|---|
| Content shape | 5 parallel definition+question-list blocks | Flat cautionary list | 2 identical templates: context → weak → strong → citation note | Flat list |
| Existing component match | Partial — `.check-grid`/`.check-letter` shell exists, no interaction, no sub-question capacity | Full — same shape as Module 3's "Follow-up prompts" `<ul>` | Full — same shape as Module 4's 3 disclosure worked-examples, which reuse `.pa-toggle`/`.pa-pop` | Full — verbatim match to Module 3's existing card |
| New engineering surface | Low if disclosure-based; near-zero if static-only | Zero | Zero | Zero |
| Accessibility risk | Two letters both "C" — label (not glyph) must disambiguate; already how `.check-letter`/`.pa-title` text works | None | Inherits Module 3/4's signed-off/audited disclosure pattern | None |
| Interactivity implied by source itself | Reference structure, not a quiz | Advisory, not a task | Implicitly evaluative — reader meant to notice the gap | Not interactive |

Flag: the red-flag list is not source-framed as a self-check activity — building it as a checkbox `.checklist` (Module 4's treatment) would imply false completability.

---

## 3. Architectural interpretation

**`.check-grid` is real, pre-existing, and under-specified for this content.** `.check-letter` currently holds only a glyph + short label. The source content per letter (definition + 5–6 Ask questions) doesn't fit that shell without truncating to a table of contents or printing a dense wall permanently.

**The disclosure pattern is the structural fit, already signed off, and already named for this exact use** (§1). Its shape — short visible label, expandable panel with paragraph + bulleted list — matches one CHECK letter exactly. Module 3's own 9-tile prompt-anatomy grid already proves this pattern scales to multi-column grids, not just single columns.

**Zero new CSS, zero new JS.** `initDisclosureToggles()` in `app.js` is generic (any `.pa-toggle` by id). `.check-grid` already provides the column layout. Work is content authorship only.

**Two-C ambiguity is already solved by the label-carries-meaning convention** this project already follows (per `wcag-aria-audit-site-architecture.md` Finding 4 and its resolution — decorative glyphs get `aria-hidden`, meaning lives in visible text). "C — Context fit" vs. "C — Code and computation" as full `pa-title` text, not glyph alone, resolves it without new design work.

**Worked examples fulfill a forecast made twice, not once.** Both `module-02-widget-redesign-assessment.md` §3 and the signoff log's Module 3 entry named this exact reuse case ahead of time.

**Diagram-type choice is independently validated by `graphics-wcag-assessment.md`**, which recommends structured HTML/CSS (real text, real DOM) over any static/exported image for the still-unfilled "diagrams" component-library slot, specifically because this project has zero raster images and that's a deliberate, audited strength — a DOM-based disclosure grid is consistent with that standing recommendation, not a one-off choice for this module.

---

## 4. Tradeoff analysis

### CHECK framework diagram
- **Option A (recommended) — Disclosure grid.** Reuses `.check-grid` layout + `.pa-toggle`/`.pa-pop` verbatim. Zero extension.
- **Option B — Static grid + full text below.** Safe but redundant (two representations of the same content stacked).
- **Option C — Drop `.check-grid` entirely.** Discards already-built, already-labeled CSS without reason.

### Common red flags
- **Recommended: plain `<ul>`, not `.checklist`.** Matches source's advisory framing.
- Rejected: checkbox self-audit — an invented interaction the source doesn't ask for.

### Worked examples
- **Recommended: `.pa-toggle` tiles nesting `.compare` (weak/strong).** Combines two already-signed-off patterns.
- Alternative (not recommended): flat always-visible cards, closer to the PDF's literal layout but loses the notice-the-gap-yourself beat and lengthens the page.

### Follow-up prompts
- **Recommended: plain `<ul>`,** verbatim reuse of Module 3's card. No real alternative worth costing.

---

## 5. Strategic recommendation

Build Module 5 using exclusively already-built, already-approved primitives: `.check-grid` + `.pa-toggle`/`.pa-pop` (signed off, Module 3) for the five CHECK letters, a plain static list for the red flags, two `.pa-toggle` tiles nesting `.compare` for the worked examples, and a plain `<ul>` for the follow-up prompts. No component-library extension anywhere in this module.

**Separate from Module 5 itself:** Module 4's signoff-log reconciliation (§1) is still owed and is not resolved by this document or by Module 5's build — recommend it happen as its own pass, per the 07-21 handoff's own instruction, rather than silently letting Module 5 close it out by association.

Nothing generated until explicit go-ahead (Phase 5 checkpoint) — go-ahead was given; build recorded in `module-05-content-audit-v2.md`.

---

## 6. Audit pass

- **Continuity:** every recommendation reuses an existing, signed-off-or-audited component.
- **Correction, not omission — signoff log.** Exists (`component-library-signoff-log.md`, Dropbox root). Modules 1 & 3 signed off 2026-07-15; Module 2 built, unsigned; **Module 4 built, not logged at all** — real, open, explicitly-flagged-in-advance gap, distinct from "the file doesn't exist" (an earlier, wrong claim, corrected here).
- **Correction, not omission — Module 4 audit drift.** `module-04-content-audit-v2.md` reflects only the original flow-diagram version; five live layout iterations happened after. This is already documented and explained in `session-handoff-2026-07-21.md` §4, with its own recommended fix (v3 re-audit once settled) — not a fresh finding.
- **Real finding, now fixed:** `index.html` and `module-01/02/03/04-*.html`'s nav rails still showed Module 4 as locked/"Planned" (the module-grid card on `index.html` had been updated to link, but the sidebar nav rail and the "how this path works" copy had not) — fixed alongside Module 5's own nav unlock in this pass.
- **Goal alignment:** every recommended treatment maps directly to source content; the one rejected invented interaction (red-flag-as-checkbox) is named and costed, not silently dropped.

---

## Appendix A — Benchmark & statistic credibility table

Ordered by credibility tier, strongest first. **T1** peer-reviewed publication; **T2** primary vendor disclosure, independently reported; **T3** large-sample named academic study; **T4** open/community-maintained benchmark; **Excluded** did not meet the bar.

| Tier | Statistic | Study / benchmark | Publisher / authors | Sample & method | What it measures | Scope caveat | Citation |
|---|---|---|---|---|---|---|---|
| T1 | 19.9% of citations fully fabricated; 45.4% of "real" citations contained errors; only 43.8% both real and accurate (77/176) | "Influence of Topic Familiarity and Prompt Specificity on Citation Fabrication in Mental Health Research Using Large Language Models" | *JMIR Mental Health*, peer-reviewed | GPT-4o generated 176 citations across 6 mental-health literature reviews; each verified against real databases | Citation reliability specifically | Narrow domain; fabrication rate varied sharply by topic familiarity (~6% depression vs. ~30% less-studied conditions) | [PMC12658395](https://pmc.ncbi.nlm.nih.gov/articles/PMC12658395/) |
| T2 | Open-domain factual recall: o1 16% → o3 33% → o4-mini 48% | PersonQA (OpenAI in-house) | OpenAI, o3/o4-mini System Card (April 2025) | OpenAI's internal eval, factual questions about specific people | Open-domain recall — opposite end of task spectrum from grounded summarization | Vendor-disclosed, not independently replicated; OpenAI itself doesn't yet know why newer models regressed | [TechCrunch](https://techcrunch.com/2025/04/18/openais-new-reasoning-ai-models-hallucinate-more/) |
| T3 | 66% use AI output without evaluating accuracy; 56% (global)/57% (US) made a resulting mistake | "Trust, attitudes and use of artificial intelligence: A global study 2025" | Gillespie & Lockey (Melbourne Business School), with KPMG | n=48,000+, 47 countries, Nov 2024–Jan 2025 | Behavioral link between unverified reliance and real-world error | Self-report; "mistake" is respondent-defined | [KPMG](https://kpmg.com/xx/en/media/press-releases/2025/04/trust-of-ai-remains-a-critical-challenge.html) |
| T4 | ~9.2% avg hallucination on grounded summarization; best models ~0.7% | Vectara Hallucination Leaderboard | Vectara (open-source) | Automated (HHEM) + human-guided (FaithJudge) vs. fixed news-article dataset | Faithfulness to a supplied source document — best-case end of task spectrum | Does not measure open-domain reasoning at all (see T2) | [GitHub: vectara/hallucination-leaderboard](https://github.com/vectara/hallucination-leaderboard) |
| Excluded | "94% of AI accuracy issues are preventable through systematic verification" | — | Single blog post | No disclosed method | Unknown | No visible methodology | *(not cited)* |

**Reading the table for Module 5:** T1/T2 are precise, sourced, and closest to StatWiseAI's actual task type — the ones worth quoting directly if any figure appears on the page. T4 is useful mainly as contrast against T2 (0.7% to 48%, same broad "hallucination rate" label, radically different task types) — that spread is itself the teaching point behind CHECK's "Context fit" and "Evidence and standards" checks. T3 supports the module's behavioral premise, not its accuracy-rate premise — don't conflate the two.
