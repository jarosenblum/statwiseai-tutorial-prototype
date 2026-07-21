# Module 2 ("AI Basics for Researchers") — Instructional Design Assessment

Mode: Audit. Scope: pedagogical structure and effectiveness of `module-02-ai-basics.html` as currently built (post self-check redesign, commit `2d2f9b0`). Not a WCAG/ARIA re-audit — that ground is already covered in `wcag-aria-audit-site-architecture.md` and the module-02 content-audit files; this assessment treats accessibility as a given and asks a different question: does the page teach well.

Analysis and recommendation are kept separate per standing convention. Section 6 is the recommendation; everything before it is descriptive.

---

## 1. Framing

Module 2 sits between "Start Here: Responsible Use" (M1) and "Prompting for Data Analysis" (M3). Its stated purpose (lede): establish what StatWiseAI is, what it's good for, and where its limits are, *before* the learner starts using it. This is conceptual/orientational content — declarative knowledge about capability boundaries and a mental model for calibrated trust — not skills practice. Skills practice (prompt construction) is explicitly deferred to M3. That scoping is appropriate for its position in the sequence and should be read as a design constraint, not a gap: this module is not supposed to teach doing, only knowing.

The instructional question this assessment asks: given that scope, does the page's structure, sequencing, and interactivity build an accurate, retained mental model — or does it default to information delivery with interactivity layered on for engagement rather than learning effect.

## 2. Dimensional analysis

### 2a. Content blocks against instructional function

| Block | Bloom level | Interaction | ID technique in use | Gap |
|---|---|---|---|---|
| Overview | Remember/Understand | None | Plain exposition | — |
| "What is generative AI?" flow-diagram | Understand | None (passive diagram) | Visual chunking; risk flagged abstractly | Risk ("answers can sound confident even when wrong") is asserted, never demonstrated |
| "What is a large language model?" compare card | Understand, previews Apply | None (passive) | Contrasting cases (vague vs. detailed prompt) — genuinely strong technique, shows the same model producing different output quality as a function of input | Purely illustrative; no learner-generated attempt |
| 18-item phase-grouped quiz | Apply/Analyze | Click-to-reveal, ungated | Advance organizer (5 research-phase groups); retrieval practice, weakly enforced | No forced prediction before reveal; no scoring; learner can click through without ever committing to an answer |
| Key principle callout | Understand (synthesis) | None | Terminal, unifying statement placed *after* the worked examples (inductive sequencing) | Possible redundancy with M1's responsible-use framing — not verified against M1's current text, flagged not resolved |
| Video slot | N/A | N/A (placeholder) | Would be the natural home for a concrete "confident but wrong" example | Currently zero concrete demonstration of the module's central risk claim exists anywhere on the page |
| Self-check Stage 1 (function-select) | Apply, scored | Forced selection before feedback | Genuine retrieval practice: commit, then reveal, then aggregate score | Reuses 5 of the same 18 items already seen above — see 4b |
| Self-check Stage 2 (confirm) | Affective/compliance, not cognitive | Self-report checkbox | Appropriate for policy acknowledgment (HIPAA/FERPA, responsibility), not a comprehension claim | None — this is the correct instrument for this content type |

### 2b. Coverage against Gagné's Nine Events

| Event | Present? | Where |
|---|---|---|
| 1. Gain attention | Partial | Lede paragraph, mild |
| 2. Inform objectives | **No** | No explicit "by the end of this module..." statement anywhere |
| 3. Recall prior learning | **No** | No explicit tie-back to M1, despite likely content overlap |
| 4. Present content | Yes | Overview + definition cards |
| 5. Provide learning guidance | Yes | Flow-diagram, compare card |
| 6. Elicit performance | Yes (twice) | 18-item quiz, self-check Stage 1 |
| 7. Provide feedback | Yes | Per-item rationale (quiz), per-item + aggregate (self-check) |
| 8. Assess performance | Partial | Only self-check Stage 1 produces a score; the 18-item quiz does not |
| 9. Enhance retention/transfer | Yes | Key principle callout; explicit forward-reference to M3 |

Two structural gaps recur across both tables: no stated learning objectives, and no explicit connection to prior module content. Both are inexpensive to fix and both are standard, not exotic, ID moves.

## 3. Architectural interpretation

The page has a coherent macro-structure: define → bound (what it can/can't do) → unify (key principle) → verify (self-check). That arc is sound and matches how the site's own module sequence is described in `module-02-content-audit-v2.md`.

The more interesting structural fact is that the page now contains **two retrieval-practice instruments testing overlapping content** — the 18-item disclosure quiz and the 8-item self-check (5 of which are drawn verbatim from the 18). This wasn't planned as a unified assessment strategy; it's the result of two separate design passes (the Block 3 redesign, then today's self-check redesign) that both independently reached for "test the can/can't-help boundary" as their content. That's not necessarily wrong — interleaved/spaced retrieval of the same fact set, in a different response format, is a legitimate technique — but it was arrived at incrementally, not designed as a two-pass retrieval strategy from the start. Worth naming explicitly rather than treating as intentional scaffolding after the fact.

The asymmetry in rigor between the two instruments is also structural, not incidental: the earlier, larger instrument (18 items) is the weaker design (ungated, unscored) and the later, smaller instrument (8 items) is the stronger one (gated, scored). A learner who does the module in order encounters the weaker assessment first and the stronger one second — which is backwards from a scaffolding standpoint if the intent was "practice, then test." If the intent was instead "explore, then test," the current order is fine — but that intent isn't stated anywhere on the page.

## 4. Tradeoff analysis

**4a. Objectives and prior-learning callouts (gap, not yet argued as fixable or not)**
Cost to add: low (a line or two of prose). Benefit: measurable in the ID literature (advance organizers and stated objectives reliably improve retention for exactly this kind of declarative content). No real downside other than one more callout on an already-callout-heavy page — this is a genuine minor cost, not a formality.

**4b. Quiz/self-check redundancy**
Two readings compete here, both legitimate:
- *Redundancy risk*: a learner who clicks through all 18 quiz items may find the self-check's overlapping 5 items repetitive, reducing perceived value of the "test" framing and possibly disengagement ("didn't I just see this").
- *Spaced-retrieval benefit*: encountering the same true/false boundary in a different response format (recognize-by-click vs. recall-by-select-and-score) shortly after first exposure is consistent with testing-effect research, which favors this over passive re-reading.

Which reading dominates depends on execution details this assessment can't settle from static content review alone (does the self-check feel like a fresh test or a rerun to an actual user) — this is the kind of question a short usability check with 2-3 target users would resolve faster than further design iteration in the abstract.

**4c. Abstract risk claim vs. concrete demonstration**
The module's central claim — AI can sound confident while wrong — is stated three times (flow-diagram tag, "small" text below it, Key principle callout) but never shown. This is the largest single gap on the page from an ID standpoint, because the whole point of the module is calibrating trust, and calibration is a skill that transfers far better from a worked example (here is a plausible-sounding answer; here is what's wrong with it) than from a repeated assertion. The video slot is the obvious home for this, but it doesn't exist yet ("storyboard ready, filming not started" per the page's own status line). Until it exists, the module's most important claim is the least well-supported piece of content on the page.

**4d. Self-check Stage 2's self-report design**
Not a flaw. Items 2-4 ("I know not to enter PHI...", "I remain responsible...") are policy/commitment content, not comprehension content — self-report is the correct instrument for "did you register this norm," the same way a clickwrap acknowledgment is the correct instrument for consent, not a comprehension quiz. Worth stating explicitly so this isn't mistaken for the same design problem Stage 1 just fixed (it isn't — the two stages are testing two different kinds of knowledge, and that distinction is now structurally visible in the page, which is a genuine improvement from today's redesign).

## 5. Audit pass

- **Coherence**: the macro-arc (define → bound → unify → verify) holds together. The two-instrument redundancy (4b) is the one internal-consistency question worth resolving with real user feedback rather than more design cycles in the abstract.
- **Omissions**: no stated learning objectives; no explicit recall of M1 content; no concrete example of an overconfident/wrong AI response (the module's central claim is asserted, never shown); no time estimate for the module.
- **Goal alignment**: the page's stated goal ("what StatWiseAI actually is... before you start using it for real analysis planning") is served by the definitional and boundary content, but is currently under-served on the trust-calibration piece specifically, since that's the part resting entirely on an unproduced video.
- **Unstable assumption flagged**: this assessment assumes M1 covers overlapping "AI can be wrong / you're still responsible" ground based on M1's title and this session's history, but M1's current text wasn't re-read as part of this pass — the possible redundancy in 2b/3 is a hypothesis, not a confirmed finding.

---

## 6. Recommendation (staged)

**Near-term (low cost, do before client review):**
1. Add one or two sentences stating explicit learning objectives at the top of the page (Gagné event 2).
2. Add a one-line callback to M1 where relevant — even just "as covered in Module 1..." — to make the cross-module scaffolding visible rather than assumed.
3. Decide, and state on the page, whether the 18-item block is framed as "explore" or "quiz" — the current ungated/unscored design reads as exploratory, but the intro text ("Click to check your thinking") implies a test. Align the framing text to the actual mechanic, or change the mechanic to match the framing.

**Medium-term (real content work, not a code change):**
4. Produce at least a placeholder-quality concrete example of an AI response that sounds confident but is wrong, and use it in place of (or alongside) the abstract risk label in the "What is generative AI?" card. This does not have to wait for the video — a short static example would close the gap immediately, and the video (once produced) can supersede it.

**Do not act on without a real signal:**
5. The quiz/self-check redundancy (4b) — recommend a short usability check (2-3 people from the target audience) before touching this further. Removing or consolidating either instrument based on static review alone risks solving a problem that may not exist in practice, or missing one that does.

No code changes are implied by this assessment unless the user confirms which of the above to act on — this is presented as findings for sign-off, consistent with this project's standing process.
