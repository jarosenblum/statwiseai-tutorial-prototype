# Module 4 — Working with Dataset Documentation — Recommended Architecture v1

Derived from `module-04-content-audit-v1.md`. Same 11 rows; the "Generated representation" placeholder column is replaced below with two sub-columns (content presentation / widget use), per Phase 4 of the playbook. Analysis precedes the recommendation table; decision points and component-library impact follow it.

## Analysis

Two upstream constraints already exist and aren't being re-litigated here: the architecture plan (§2, §4) and `index.html`'s media-tags both name **"documentation map diagram" + "checklist"** as Module 4's committed media types. The checklist mapping is unambiguous — row 8 is a direct, sourced match. The "documentation map" mapping is not as clean, and is worth stating plainly rather than assuming:

- The 07-20 handoff's §6 hypothesis was a flow-diagram visualizing "codebook → data dictionary → variable list → derived variables." **That hierarchy is not in the source text.** Nothing in the PDF describes documentation artifacts as related to each other in that sequence.
- What *is* in the source, and does support a diagram without inventing content: row 3 (13 material types) and row 4 (10 things StatWiseAI can help with) are two lists in an implicit input→capability relationship — materials feed the capabilities. That relationship is real and sourced, even though the PDF itself never draws it as a diagram.
- The three worked examples (rows 5–7) share one structural template — context paragraph, sample prompt, list of documentation areas to check — repeated for a generic case, then HRS, then NHANES. This redundancy is a presentation problem, not a content problem: nothing here needs three separate visual treatments to stay faithful to the source.

Those two observations drive the recommendation below: one diagram (rows 3+4, sourced), not three (rejecting a per-example diagram), and one repeated component for the worked examples (rows 5–7) rather than three bespoke blocks.

## Recommendation table

| # | Content category | a) Content presentation | b) Widget use |
|---|---|---|---|
| 1 | Page title | H1 in page-head, matching Modules 1–3's eyebrow/h1/lede pattern | None — static heading |
| 2 | Overview / rationale | First paragraph (public-vs-restricted framing) as plain prose card; second paragraph (prohibited data types) recast as a card-warn callout — same instructional weight as other modules' "don't do this" content | None — static text, already-audited callout pattern, no new ARIA |
| 3 | Materials list (13 items) | Left half of a two-part "materials → capabilities" diagram; full list also kept as a plain-text card immediately beneath the diagram, so the diagram isn't the sole carrier of meaning | Flow-diagram (`.flow-diagram`/`.flow-step`, Module 2's non-interactive pattern) — see Decision Point 1 |
| 4 | Capabilities list (10 items) | Right half of the same diagram; full list also kept as a plain-text card | Same flow-diagram instance as row 3 |
| 5 | Worked example 1 — generic codebook | First panel of one repeated "worked example" component: intro line, styled quote-block for the prompt, plain-text explanatory note below (source states this as prose, not a list — kept that way) | Disclosure / click-to-reveal panel (signed-off Module 3 pattern), collapsed by default, labeled "Example: reading a codebook" — see Decision Point 2 |
| 6 | Worked example 2 — HRS | Second panel, same component: context paragraph, prompt quote-block, 8-item area list as plain `<ul>` inside the panel | Same disclosure pattern, second instance |
| 7 | Worked example 3 — NHANES | Third panel, same component: context paragraph, prompt quote-block, 10-item area list (reunified across the source's page break) | Same disclosure pattern, third instance |
| 8 | Documentation review checklist (12 items) | Standalone card, framed with a short "before you ask StatWiseAI" intro line | Checklist w/ live progress bar — **signed off, Module 1**, explicitly pre-named for Module 4 reuse in the signoff log |
| 9 | Key reminder callout | Card-warn / "key principle" callout — same pattern as Module 1's "When in doubt," Module 2's "Key principle," Module 3's "Prompting reminder" | None — static, already-audited pattern |
| 10 | Module nav | Shared nav partial, `active`/`done` state flipped to module 4 | None — shared component |
| 11 | Institutional footer | Shared footer, unchanged | None — shared component |

## Decision points

**1. Materials/capabilities flow-diagram (rows 3–4).** Satisfies the architecture plan's named "documentation map" media type using the source's actual list content, not an invented hierarchy. Reuses Module 2's flow-diagram DOM pattern — no component-library extension, zero new build cost. But that pattern's status per the signoff log is **"not yet reviewed,"** not signed off — Module 4 would be its first client-facing exposure since Module 2 built it. That's an inherited risk carried forward from the 07-20 handoff, not a new one introduced here, but it means this diagram isn't a zero-risk choice the way the checklist is.
*In-library fallback:* drop the diagram, present rows 3 and 4 as two adjacent static list cards only — the same treatment Module 2 gave its own comparable flat lists, and already fully audited.

**2. Worked-example unification (rows 5–7).** Collapsing three structurally identical blocks into one repeated component, instantiated three times inside the signed-off disclosure pattern, keeps page length down and reuses a proven mechanism instead of building three separate treatments. Considered and rejected: a per-example flow-diagram (one for each dataset's documentation-area list) — would have tripled the not-yet-reviewed-pattern exposure from Decision Point 1 for content that doesn't gain instructional value from visualization over a quoted prompt plus a list.

**3. No row requires extending the component library.** Every row maps to flow-diagram, disclosure, checklist, or static cards/callouts — all either signed off or already built and in the shared codebase.

## Governance note carried forward, not resolved here

Decision Point 1 means Module 4 is the natural point where the flow-diagram pattern gets its first real client review — worth flagging explicitly before Phase 6 generation, since it's a sign-off gap, not just a technical one. If you'd rather not carry that exposure into this module, the fallback in Decision Point 1 removes it entirely at no cost to content fidelity.
