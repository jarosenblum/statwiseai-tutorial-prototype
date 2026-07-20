# Module 2 — AI Basics for Researchers — Content Audit v1

Source verified two ways: live page (`sites.utexas.edu/chita/statwiseai-tutorial/ai-basics-for-researchers/`) and `AI Basics for Researchers.pdf`. Word-for-word identical, no discrepancy.

Generated artifact: **none exists yet.** No `module-02-*.html` file, confirmed via directory listing; `index.html`'s nav correctly shows this module as "Planned." This is a from-scratch build, not a gap-fill.

Per the playbook's updated Preconditions step, checked `component-library-signoff-log.md` before writing strategy: five widget types are signed off and available for direct reuse (branching decision tree; checklist w/ live progress; disclosure/click-to-reveal; structured-input builder w/ live output; copy-to-clipboard), plus the static two-column "allowed/not-allowed" card pattern and the card-warn callout, both from Module 1/3 and already accessibility-audited.

## Content audit

| # | Content category | Original content | Generated representation | Status |
|---|---|---|---|---|
| 1 | Page title | "AI Basics for Researchers" | — | Not yet represented |
| 2 | Overview (2 paragraphs) | What AI is generally (systems performing reasoning/pattern-recognition/language/prediction tasks); StatWiseAI's specific goal — help ask better questions, not "do the research" | — | Not yet represented |
| 3 | "What is generative AI?" (2 paragraphs) | Definition + capability (creates new content); limitation (doesn't understand a project like a human expert; can sound confident while wrong) | — | Not yet represented |
| 4 | "What is a large language model?" (2 paragraphs) | Definition/capability; the vague-question-vs-clear-context example (research question, study design, outcome, predictors, dataset structure, help needed) | — | Not yet represented |
| 5 | "What AI can help with" (11-item list) | Clarifying question, understanding documentation, identifying variables, comparing approaches, drafting analysis plan, generating code (R/Python/SAS/Stata/SPSS), reviewing output, suggesting sensitivity analyses, identifying assumptions/limitations, reproducibility checklists, drafting documentation | — | Not yet represented |
| 6 | "What AI should not be used for" (7-item list) | Final analytic decisions w/o human review; guaranteeing method appropriateness; confirming code correctness w/o testing; determining IRB/HIPAA/FERPA/data-use compliance; causal claims from observational data w/o defensible design; interpreting beyond what data/analysis support; replacing consultation with statistician/methodologist/IRB/data governance | — | Not yet represented |
| 7 | "Key principle" callout + follow-up paragraph | "AI output is not evidence by itself. It is a draft, suggestion, or reasoning aid." + what to check before using AI-generated advice (fits research question/dataset/design/variables/assumptions/goals; code reviewed & tested; interpretation compared against actual output & literature) | — | Not yet represented |
| 8 | "Quick self-check" (4 questions) | Understand what StatWiseAI can help with? Understand AI answers can be wrong? Know I remain responsible for final decisions? Know not to enter sensitive/proprietary/PHI/HIPAA/FERPA info? | — | Not yet represented |
| 9 | Module nav (9-item list) | Flat link list | — | Not yet represented (trivial — same shared nav as other pages, just needs `active`/`done` state flipped) |
| 10 | Institutional footer | CHITA address/email, source-page link, prototype disclaimer | — | Not yet represented (trivial — shared footer, unchanged from other pages) |

Everything is "Not yet represented" because nothing is built. Listing all 10 rows anyway, per the playbook's "don't treat the page as one blob" instruction — this is also what the Phase 8 re-audit will diff against.

## Cross-reference against the architecture plan

`StatWiseAI-Tutorial-Architecture-Plan.md` §2 already specifies a recommended treatment for this module: **"Two-column comparison graphic + short explainer."** §3.5 (Evaluation layer) separately calls out this exact page by name: *"modules already contain 'Quick self-check' question lists (e.g., end of AI Basics for Researchers) — these become interactive quizzes rather than static bullet lists, reusing the checklist component."* Both of those map directly onto signed-off widget types, which is the basis for the strategy below.

## Supplement strategy

| Content row(s) | Recommended representation | WCAG-compatible pattern | In-library fallback | Component-library impact |
|---|---|---|---|---|
| 5, 6 ("can help with" / "should not be used for") | Two-column card, directly reusing Module 1's "Generally fine / Never" pattern (green heading left, red heading right, plain `<ul>` lists) — this **is** the architecture plan's "two-column comparison graphic," already built and signed off, just re-skinned with this module's content | Already audited: plain list markup, headings carry color + text (not color-only) | Same — no fallback needed, this is already the minimal-cost option | None — reuses an existing card pattern verbatim |
| 8 (Quick self-check) | Checklist with live progress bar — the signed-off Module 1 widget (`data-checklist`, shared in `app.js`) — per the architecture plan's own explicit instruction to upgrade this from static bullets | Native checkboxes + `<label for>`, progress exposed as visible text (not color-only) — already audited this session | Static bullet list (source's original form) if interactivity is rejected | None — reuses shared widget verbatim |
| 2, 3, 4 (Overview / generative AI / LLM definitions) | Plain prose cards (`<h2>`/`<p>`), matching how Module 1/3 render explanatory sections | N/A — static text | N/A | None |
| 7 (Key principle) | Card-warn callout, same pattern as Module 1's "When in doubt" and Module 3's "Prompting reminder" | N/A — static text, already-audited color/contrast | N/A | None |
| — | Media slot (short concept explainer), per architecture plan §4 ("needs filming") | Same placeholder pattern as Modules 1/3 — storyboard + status line, no live video | N/A | None — Phase 2 concern, not built now |
| 9, 10 | Shared nav/footer, flip `active`/`done` state to module 2 | Already audited (aria-hidden glyphs, span-not-link for locked items, flex alignment) | N/A | None |

**One judgment call, flagged rather than assumed:** Module 1's decision tree ("can I upload this?") was considered as a possible pattern for rows 5/6, since both modules deal with an allowed/not-allowed distinction. Rejected — Module 1's rules are genuinely conditional (branching follow-up questions: is it public? is there a DUA?), while this module's two lists are flat reference items with no natural branching logic. The two-column card is the better match for the source content, and it's what the architecture plan already specifies.

**No component-library extension needed.** Every row maps to cards, checklists, or a plain-text callout — nothing requires building outside the three approved types.
