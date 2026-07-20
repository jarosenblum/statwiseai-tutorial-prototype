# Module 2 — Widget Redesign Assessment: Blocks 1–3

Assessment only — nothing generated yet, per playbook Phase 5 (present before generating). Structured per the reasoning-schema's default form: framing → dimensional analysis → architectural interpretation → tradeoffs → recommendation → audit pass. Analysis and recommendation are kept in separate sections.

---

## 1. System/problem framing

Three proposals, three different problem types:

- **Block 1** ("What is generative AI?") and **Block 2** ("What is a large language model?") are the same problem type: convert static prose into a DOM-designed infographic. Low ambiguity — the request specifies DOM-first, SVG as fallback, and asks for the "why accessible" reasoning to be stated explicitly.
- **Block 3** ("What AI can and can't help with") is a different, larger problem: not a visualization of existing prose but a net-new interaction pattern — a sortable, phase-organized, two-color categorization activity. This is an Architecture-mode problem (design a new widget) nested inside a Governance-mode constraint (the playbook's component-library sign-off gate).

Relevant layers for all three: content/pedagogy (does the design teach the actual lesson), component-library status (reuse vs. extend — the playbook's standing constraint), accessibility (WCAG 2.1 AA, ARIA correctness), and engineering cost (state management, testing surface).

---

## 2. Dimensional analysis

| Dimension | Block 1 (generative AI) | Block 2 (LLM) | Block 3 (can/can't help) |
|---|---|---|---|
| Content shape | Linear: capability → limitation → risk | Linear, doubled: two parallel input→process→output tracks | Flat list of 18 items, no existing organizing axis |
| Spatial complexity needed | None — single sequence | Low — two parallel sequences, comparable to Module 3's existing `.compare` pattern | High if phase + color are both interactive; low if phase is read-only |
| DOM sufficient, or needs SVG? | DOM sufficient | DOM sufficient | DOM sufficient regardless of tier chosen — no genuinely 2D/topological relationship requires SVG |
| Component-library status | Reuse (icon+label pattern, callout pattern) | Reuse (`.compare` card pattern, extended) | **New** — no existing widget does multi-item categorization |
| New engineering surface | Near zero | Near zero | Ranges from near-zero (disclosure reuse) to substantial (drag-alternative state machine) depending on tier |
| Accessibility risk | Low | Low | Ranges from low to high depending on tier — see §4 |
| Pedagogical target | Teaches overconfidence/sycophancy risk | Teaches prompt-quality causality (previews Module 3) | Teaches AI capability boundaries — the phase dimension teaches something the module never actually covers |

---

## 3. Architectural interpretation

**Blocks 1 and 2** slot into the still-mostly-unused "diagrams" third of the approved component library (cards, checklists, diagrams) — this is the first real opportunity to fill that slot, and both are simple enough that a DOM-only treatment (no SVG) is fully sufficient: both are linear or parallel-linear sequences, which means the DOM's natural top-to-bottom, left-to-right reading order *is* the correct semantic order. No spatial information gets lost by linearizing them, which is exactly the condition under which a screen reader user gets the same information a sighted user gets, just serially instead of visually. That's the accessibility argument for DOM-over-SVG here, not just "it's simpler to build."

**Block 2 specifically** can mostly reuse Module 3's `.compare` card (weak/strong side-by-side, already built and already accessibility-audited) rather than inventing new CSS — the "prompt vs. LLM processing" framing fits neatly as two labeled sequences inside that existing two-column shell, with each column showing prompt → processing → output as three small labeled steps instead of the single blockquote `.compare` currently holds. Low-cost extension, not a new pattern.

**Block 3** doesn't have an existing home in the component library. Its dependency graph: a phase-organizer (new visual, but low-complexity — effectively a stretched-out version of the nav rail's own step-dot timeline, which already exists) feeding into a categorization interaction (the genuinely new part). Whatever gets built here becomes a candidate reusable pattern for later modules — Module 5's "red-flag spotting cards" is the most obvious future reuse case, which raises the stakes on getting the accessibility pattern right the first time rather than shipping something that has to be redesigned when Module 5 comes around.

---

## 4. Tradeoff analysis

### Blocks 1 & 2 — low risk either way, one interpretive call each

**Block 1's "sycophancy" label** — flagging this as interpretation, not sourced fact, per playbook discipline. The source PDF describes generative AI producing confident-sounding answers "even when it is incomplete, overly general, or wrong" due to pattern-matching without genuine understanding. That's real, but it's closer to *general overconfidence/miscalibration* than the strict technical definition of sycophancy (a model shaping its answer toward what it infers the user wants to hear or agree with). The two overlap but aren't identical. Separately: the source's actual guard against this is **human review discipline** — the "Key principle" section (check response against research question/design/data, review code, compare interpretation against real output) — not a claimed technical feature of the StatWiseAI app itself. I'd recommend labeling the diagram element "Guards against: overconfidence & sycophancy" (both terms, precise) and framing it as "how *you* guard against it" rather than "how the app guards against it," since the source only describes user-side verification behavior, not app-side engineering. Flag if this reading is wrong and the app does have documented technical mitigations I haven't seen.

**Block 2's prompt-vs-processing diagram** — no interpretive risk; it's a direct visualization of the source's own vague-vs-detailed example. Main design risk is redundancy with Module 3, which already owns this territory in depth (the full weak/strong comparison + prompt builder). Recommend keeping Block 2's version deliberately lightweight — just enough to establish "input richness determines output quality" as a concept — so it previews rather than duplicates Module 3.

### Block 3 — three tiers, real tradeoffs

**Tier A — Full 2D sort (phase × color, both interactive, drag-based).** What's requested most literally. Costs: (1) accessibility — native HTML5 drag-and-drop has poor keyboard/screen-reader support by default; WCAG 2.5.7 (Dragging Movements) requires a non-drag alternative, and while that's a 2.2 criterion technically outside this project's stated 2.1 AA target, shipping drag-only interaction would contradict every accessibility decision made so far this project. (2) Cognitive load — 18 items × 2 simultaneous decisions (phase + color) is a lot of interaction surface for a formative self-check, risking the activity becoming a matching-game distraction from the actual lesson. (3) Validity — the module never teaches what the research phases *are*; grading users on phase-placement tests knowledge the module doesn't provide, which is a real usefulness problem, not just an engineering one. Highest engineering cost of any widget in the site to date.

**Tier B — Sequenced sort.** Phase timeline as a non-graded advance organizer (read-only structure, just labeled headings), then within each phase group, a graded green/red sort using a select-then-assign click/keyboard pattern (no drag). Cuts the interaction surface in half, removes the phase-knowledge validity problem (phase groupings would be pre-populated by content design, not guessed by the user), and is buildable with a moderate — not extreme — amount of new state-tracking logic.

**Tier C — Disclosure-based reveal.** Phase timeline stays as a read-only advance organizer (or is dropped entirely). The "which can AI help with" question gets answered by directly reusing the already-signed-off disclosure pattern (Module 3's `.frag-toggle`/`.pa-toggle`): pose the question, let the user click each of the 18 items to reveal its green/red verdict + one-line rationale, feedback bubble style, exactly matching the request's "feedback bubbles as in other widgets" language literally. Near-zero new engineering — this is markup and content, not a new interaction primitive. Loses the "sort/guess" mechanic but keeps the "click to check your thinking" formative-quiz feel.

All three tiers can express the green/red distinction without relying on color alone (text label on every assignment/reveal, matching the site's existing 1.4.1 discipline throughout).

---

## 5. Strategic recommendation

*(Recommendation, kept separate from the analysis above.)*

Build Blocks 1 and 2 as DOM infographics now — both are low-risk, low-cost, and directly fill the long-empty "diagrams" slot in the component library. Use "overconfidence & sycophancy" (both terms) for Block 1's label, framed as a user-side guard rather than an app feature, pending confirmation.

For Block 3, recommend **Tier C now, Tier B as a flagged future upgrade, Tier A not recommended.** Tier C answers the actual request (interactive, question-posed, green/red, feedback bubbles) at near-zero new engineering cost and zero component-library extension — it's a legitimate MVP, not a downgrade dressed up as one. Tier B is worth keeping on the roadmap explicitly (not silently dropped) since the phase-organizer idea is genuinely good pedagogy and would make a strong upgrade once there's bandwidth for a real sort-interaction component — and it would benefit future modules (Module 5) enough to justify the investment when it comes. Tier A is the one place in this whole project I'd actively recommend against, given the drag-accessibility risk and the validity problem of grading unstaught content.

This is a staged strategy, not a rejection of the ambition — the full timeline/sort vision is preserved as a named, costed, future decision rather than quietly scoped away.

---

## 6. Audit pass

- **Continuity:** consistent with every prior decision this project has made — no raster images, no drag-only interaction, color never sole carrier of meaning, disclosure pattern reused rather than reinvented, DOM preferred over SVG when the content is linear.
- **Omission check:** the one thing not yet addressed is whether Block 3's phase groupings (if Tier B is chosen later, or even for Tier C's organizing structure) should be visible now or built later — that's a content-design decision, not just a widget decision, and hasn't been drafted here since it depends on which tier gets approved.
- **Coherence with playbook governance:** Block 3 at Tier A or B would be a genuine component-library extension and needs its own explicit sign-off per Phase 4's rule — not bundled into a general "go ahead." Tier C does not extend the library and could proceed under the same lighter-weight sign-off pattern used for Module 2's initial build.
- **Goal alignment:** all three blocks, at the recommended tiers, serve the module's actual stated content (AI capabilities/limits) without introducing untaught material as graded content — the one goal-alignment risk identified (Tier A's phase-knowledge validity problem) is exactly why it's not the recommendation.
