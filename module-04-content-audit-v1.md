# Module 4 — Working with Dataset Documentation — Content Audit v1

Source: `Working with Dataset Documentation.pdf` (5 pages). Module identity confirmed two ways — position 4 in `index.html`'s module grid (currently `disabled`/"Planned," no href) and the module-list footer on page 4 of the PDF itself, which enumerates all 9 modules in matching order.

Generated artifact: **none exists.** No `module-04-*.html` or `module4.js` in `statwiseai-prototype/`, confirmed via directory listing. This is a from-scratch build, not a gap-fill — consistent with the 07-20 handoff's note that Module 4 is prep-only, not started.

Checked `component-library-signoff-log.md` before framing this table: the checklist-with-progress-bar widget (signed off, Module 1) is explicitly named there as a planned Module 4 reuse target. One staleness note, flagged not fixed: that log's "Modules 2, 4–9: Planned, not built" section hasn't been updated since Module 2 was actually built on 07-20 — a second drift point alongside the architecture plan's stale §3.3 already logged in the 07-20 handoff (§5). Doesn't block this audit; worth correcting alongside that other fix if you take that up.

## Content audit

| # | Content category | Original content | Generated representation | Status |
|---|---|---|---|---|
| 1 | Page title | "Working with Dataset Documentation" | — | Not yet represented |
| 2 | Overview / rationale (2 paragraphs) | StatWiseAI is built around public/approved data, not raw restricted datasets — especially for biomedical/social/behavioral/educational/health data with DUAs, privacy rules, IRB, or federal restrictions; explicit prohibition list (proprietary, sensitive, participant-level, PHI, HIPAA, FERPA, other restricted info) | — | Not yet represented |
| 3 | "What kinds of materials can be useful?" (13-item list) | Public dataset documentation, metadata, data dictionaries, codebooks, variable descriptions, survey documentation, public analytic guidelines, questionnaires, statistical output, analytic code, simulated practice data, de-identified summary info (when allowed), aggregated tables (when disclosure risk considered) | — | Not yet represented |
| 4 | "What StatWiseAI can help users do with documentation" (10-item list) | Understand dataset organization, identify candidate variables, compare measures across waves, locate outcome/exposure/covariate concepts, recognize design features, identify missing-data concerns, create preliminary analysis plan, draft code w/ placeholder variables, prepare questions for a statistician, document analytic decisions | — | Not yet represented |
| 5 | Worked example 1 — reading a codebook | Sample prompt (public codebook excerpt → identify outcome/exposure/covariate candidates, don't assume final choices, provide verification checklist) + explanatory note that a useful response addresses measurement, coding, eligibility, missingness, survey design, interpretation — not just variable-picking | — | Not yet represented |
| 6 | Worked example 2 — public HRS documentation | Context paragraph (HRS = longitudinal panel, ~20,000 people, public documentation page) + sample prompt (longitudinal depressive-symptoms/functional-limitations analysis) + 8-item list of documentation areas (questionnaires, codebooks, data descriptions, survey design info, weights, cross-wave variable availability, missing data/attrition info, user guides/reports) | — | Not yet represented |
| 7 | Worked example 3 — public NHANES documentation | Context paragraph (NHANES = only national health survey w/ exams + labs, per CDC) + sample prompt (food insecurity / depressive symptoms analysis) + 10-item list spanning the page 3→4 break (questionnaire components, exam/lab components, demographic files, variable search tools, survey weights, strata/PSUs, combining survey cycles, eligibility/age restrictions, missing data, subsample weights for specialized measures) | — | Not yet represented |
| 8 | Documentation review checklist (12 items) | Verification-question format: documentation source, population represented, years/waves/cycles, outcome variable, exposure/predictor, covariates, survey weights required, strata/PSUs/clusters/repeated measures, consistency of measurement across time, restricted variables, missing data/attrition concerns, official analytic guidelines | — | Not yet represented |
| 9 | "Key reminder" callout | Documentation is analytic evidence, not administrative background — good analysis depends on collection method, representation, measurement, and design features | — | Not yet represented |
| 10 | Module nav (9-item footer list) | Flat link list, same shared nav as other pages | — | Not yet represented (trivial — shared nav, needs `active`/`done` state flipped to module 4) |
| 11 | Institutional footer | CHITA address/email, UT accessibility/policy links, copyright | — | Not yet represented (trivial — shared footer, unchanged from other pages) |

Everything is "Not yet represented" because nothing is built — listed in full anyway per the playbook's "don't treat the page as one blob" instruction, and to give Phase 8's re-audit a complete baseline to diff against.

## Observations carried into Phase 4

- **Three parallel worked examples (rows 5–7), not one.** Modules 1–3 each centered on a single worked example or builder; this module has a generic-codebook example plus two named-dataset examples (HRS, NHANES) that share near-identical structure (context paragraph → prompt → documentation-area list). That repetition is a candidate for a single reusable component instantiated three times, rather than three bespoke blocks — a Phase 4 decision point, not resolved here.
- **Row 8 (12-item checklist) is the strongest low-risk match** to the already-signed-off checklist-with-progress-bar widget — directly named for this module in the signoff log, zero new accessibility review needed.
- **Rows 3 and 4 (13-item and 10-item flat lists)** are reference material, not sequential or branching — closer in shape to Module 2's flat "what AI can/can't help with" lists (rendered as static cards) than to anything requiring new interactivity.
- No row in this table currently implies a need to extend the component library beyond cards/checklists/disclosure — but that's a Phase 4 call once the three worked examples' representation is actually decided, not asserted here.
