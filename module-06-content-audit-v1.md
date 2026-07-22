# Module 6 — Requesting Code — Content Audit v1

Source: `source pages/Requesting Code in R, Python, SAS, Stata, or SPSS.pdf` (5 pages). Module identity confirmed via the shared footer nav list (sixth of nine, matching `index.html`'s grid position) and the architecture plan's content model (§2, row 6). No existing artifact — `module-06-*` files not present in `statwiseai-prototype/`.

| # | Content category | Original content | Status |
|---|---|---|---|
| 1 | Page title | "Requesting Code in R, Python, SAS, Stata, or SPSS" | Not yet represented |
| 2 | Overview | 2 paragraphs: StatWiseAI supports code generation in 5 languages, chosen by project/training/data/team fit; AI code is a draft, user is responsible for reviewing/testing/revising/documenting | Not yet represented |
| 3 | "What to include in a code request" | 9-item list: language, analysis goal, outcome type, model/analysis type, placeholder variable names, design features, missing-data handling, desired output, request for comments | Not yet represented |
| 4 | "Use placeholder variable names" | Explanatory paragraph + one worked example (generic R survey-weighted logistic regression, placeholders OUTCOME/EXPOSURE/AGE/SEX/RACE_ETHNICITY/INCOME/WEIGHT/STRATA/PSU) | Not yet represented |
| 5 | General code request template | Fill-in-the-blank natural-language template, 8 variable slots + 3 fixed boilerplate lines (no sensitive data / placeholders only / request comments+assumptions+diagnostics+verification) | Not yet represented |
| 6 | Worked example — R (NHANES-style) | Full request text, placeholders include WTMEC2YR/SDMVSTRA/SDMVPSU, reminder to verify correct weight and whether cycles need combining | Not yet represented |
| 7 | Worked example — Stata | Full request text, includes `svyset` syntax mention, placeholders OUTCOME/EXPOSURE/AGE/SEX/EDUCATION/WEIGHT/STRATA/PSU | Not yet represented |
| 8 | Worked example — SAS | Full request text, names `PROC SURVEYLOGISTIC` specifically, placeholders for outcome/exposure/covariates/strata/cluster-PSU/weight | Not yet represented |
| 9 | Worked example — SPSS | Full request text, syntax-based, missing-value check + output-review reminder | Not yet represented |
| 10 | Worked example — Python | Full request text, names pandas/statsmodels specifically, explicit "do not assume the data are already clean" | Not yet represented |
| 11 | Code review checklist | 11-item list: matches intended analysis, variable names correct, placeholders replaced, missing values handled, design features handled, correct analytic sample, variables created/recoded correctly, model matches outcome type, output supports interpretation, tested on simulated/approved data, final code saved/documented | Not yet represented |
| 12 | Important reminder callout | "StatWiseAI can help draft code, but it cannot guarantee that the code is correct for a specific dataset or research question. Users should review code carefully and consult a statistician or data analyst when needed." | Not yet represented |
| 13 | Module nav | Shared partial, state flip to module 6 | Not yet represented |
| 14 | Institutional footer | Shared, unchanged | Not yet represented |

Two things worth flagging before strategy (Phase 4), not deferred to it:

- **Rows 4 and 6–10 are not the same content type**, despite both being "an example." Row 4 (the generic R example) illustrates one concept — placeholder-variable use — inline with the paragraph that introduces it, and precedes the template. Rows 6–10 are a five-item reference set, one per supported language, that come *after* the template and demonstrate it applied. Collapsing these into one "worked examples" bucket would blur a real structural distinction; kept separate here for that reason.
- **Row 5's template is natural-language, not per-language code syntax.** "I need code in [R / Python / SAS / Stata / SPSS]" is one fill-in-the-blank slot inside an otherwise language-agnostic request paragraph — the source does not ask StatWiseAI's *page* to generate actual R/Python/SAS/Stata/SPSS boilerplate itself, only to help the user phrase a request that they'd then send to StatWiseAI. This matters directly for Phase 4's builder-complexity estimate (see `module-06-widget-architecture-v1.md` §3).

See `module-06-widget-architecture-v1.md` for the supplement strategy built from this audit.
