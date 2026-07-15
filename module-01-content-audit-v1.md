# Module 1 — Start Here: Responsible Use — Content Audit v1

Source verified two ways: live page (`sites.utexas.edu/chita/statwiseai-tutorial/statwiseai-responsible-use/`) and `Start Here_ Responsible Use Rules.pdf`. Both are word-for-word identical — no discrepancy between them, so either serves as ground truth.

Generated artifact: `module-01-responsible-use.html` + `assets/module1.js` (decision tree) + `assets/app.js` (checklist behavior), as currently on disk.

| # | Content category | Original content | Generated representation | Status |
|---|---|---|---|---|
| 1 | Page title | "Start Here: Responsible Use Rules" | `<h1>` matches exactly | Represented |
| 2 | Prohibited-data list (7 items) | proprietary data · participant-level research data · PHI · **educational records** · HIPAA-regulated info · FERPA-regulated info · any dataset containing sensitive/private/identifiable/restricted information | Checklist item c3, "Never" list, and decision-tree `no_participant` result cover 6 of 7 — **"educational records" is absent from all three places** | Partially represented |
| 3 | Allowed-materials list (8 items, all conditioned on "when use is allowed by the applicable data-use policies") | simulated/practice data · public dataset documentation · metadata · data dictionaries · codebooks · **public variable descriptions** · published analytic guidance · statistical outputs · analytic code | "Generally fine" list + decision-tree `ok_public`/`ok_sim` cover most items, but **"public variable descriptions" is never named**, and the data-use-policy conditional — which in the source applies to the whole list — is narrowed in the prototype to a code-only caveat ("without embedded sensitive values") | Partially represented |
| 4 | "When in doubt" guidance (don't upload; consult PI/IRB/data governance office) | Only reachable via two specific decision-tree branches (`ask_dua`, `ask_unsure`) | A user who answers "simulated data" or "clearly public" never sees this guidance at all — no static, always-visible copy of it on the page | Partially represented |
| 5 | Why history is stored — 4 reasons + access limit | reproducibility, troubleshooting, quality review, **research evaluation**; access limited to StatWiseAI research team | "Why this matters" card lists reproducibility, troubleshooting, quality review — **drops "research evaluation"**; access-limit line is represented | Partially represented |
| 6 | "Avoid entering it because it's stored" directive | avoid entering prohibited/sensitive/private/identifiable/proprietary/HIPAA/FERPA info, because history is retained | Checklist c5 acknowledgment + "Why this matters" closing line ("don't type anything you wouldn't want stored") | Represented (paraphrased) |
| 7 | Two-section source structure ("Responsible use of StatWiseAI" / "Prompt and output history") | Two clearly headed sections | Reorganized into decision tree + checklist + "why this matters" + allowed/not-allowed grid — meaning preserved, structure not verbatim | Represented (restructured) |
| 8 | Module nav (9-item list) | Flat link list | Sidebar `path-nav`, 9 items, correct order | Represented |
| 9 | Video callout: "60 seconds on what never goes into StatWiseAI" | — (not in source) | Placeholder card with storyboard script | Added — net-new |
| 10 | "Try it: can I upload this?" decision tree | — (not in source) | Interactive branching tool | Added — net-new (interactive representation of the rules) |
| 11 | Privacy checklist with progress bar | — (not in source) | 5-item checklist | Added — net-new (interactive representation of the rules) |

## Accessibility note (not a content gap, flagged per playbook defaults)

The decision tree's result panel (`.dt-result`) updates via `innerHTML` swap with no `aria-live` region. A screen-reader user who clicks a choice button gets no automatic announcement that a result appeared — they'd have to know to navigate to it manually. Module 3's disclosure pattern (`aria-expanded` + `hidden`) doesn't cover this case since it's a live content swap, not a show/hide toggle — this needs a live-region addition, not a reused pattern.
