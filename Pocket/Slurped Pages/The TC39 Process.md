---
URL: https://tc39.es/process-document/
Abstract: Ecma Technical Committee 39 (TC39) is responsible for evolving the
  ECMAScript programming language and authoring the specification. The committee
  operates by consensus and has discretion to alter the specification as it sees
  fit. However, the general process for making changes to the specification is
  as follows.
Extracted_On: 25.1409
Web_Title: The TC39 Process
---

Ecma Technical Committee 39 ([TC39](https://ecma-international.org/technical-committees/tc39/)) is responsible for evolving the ECMAScript programming language and authoring the specification. The committee operates by consensus and has discretion to alter the specification as it sees fit. However, the general process for making changes to the specification is as follows.

## Stages

Changes to the language are developed by way of a process which provides guidelines for evolving an addition from an idea to a fully specified feature, complete with acceptance tests and multiple implementations. There are six stages: a strawperson stage and five maturity stages. The committee must approve proposals for progression to each stage.

Proposals at Stage 1 and beyond must be owned by the committee. Upon proposal acceptance, any externally-owned repositories must be transferred by following the [onboarding instructions](https://github.com/tc39/proposals#onboarding-proposals).

ECMAScript Proposal Stages
|Stage|Status|Entrance Criteria|Purpose|
|---|---|---|---|
|0|This is a new proposal. It is not currently being considered by the committee.|None. New proposals are assigned this stage by their authors outside of the usual advancement process.|Ideation and exploration. Define a problem space in which the committee and the champions can focus their efforts.<br><br>- Make the case for an improvement<br>- Describe the shape of some possible solutions<br>- Identify potential challenges<br>- Research how the problem is dealt with using available facilities today<br>- Research how the problem has been solved by other languages or in the library ecosystem|
|1|This proposal is under consideration. The committee expects to devote time to examining the identified problem space, the full breadth of possible solutions, and cross-cutting concerns.|- Identified a champion or champion group who will advance the addition<br>- Prose outlining the problem/need and the general shape of a solution<br>- Discussion of key algorithms, abstractions, and semantics<br>- Identification of potential cross-cutting concerns and implementation challenges/complexity<br>- A publicly available repository for the proposal that captures the above requirements|Designing a solution.<br><br>- Make the case for a particular solution or solution space<br>- Resolve any cross-cutting concerns|
|2|The committee has chosen a preferred solution or solution space, but the design is a draft and may still change significantly. The committee expects the feature to be developed and eventually included in the standard, but due to reasons that may not be apparent at this stage, the feature may never be included in the standard.|- Proposal document describes all high-level APIs and syntax<br>- Illustrative examples of usage<br>- Initial spec text including all major semantics, syntax, and APIs. Placeholders, TODOs, and editorial issues are acceptable|Refining the solution.<br><br>- Work out minor details such as ordering of observable effects, handling of invalid inputs, API names, etc.<br>- Receive and address spec text reviews from the assigned reviewers and the appropriate editor group<br>- Produce experimental implementations such as loosely-correct (not for production use) polyfills to aid in validating the design and exploring the details<br>- Investigate integration with relevant host APIs, if necessary|
|2.7|The proposal is approved in principle and undergoing validation. The solution is complete and no further work is possible without feedback from tests, implementations, or usage. No changes to the proposal will be requested by the committee aside from those elicited through testing, implementation, or usage experience.|- Complete spec text: all semantics, syntax, and APIs are completely described<br>- Assigned reviewers have signed off on the current spec text<br>- Relevant editor group has signed off on the current spec text|Testing and validation.<br><br>- Validate the design of the feature through the development of a rigorous and comprehensive test suite<br>- Develop spec-compliant prototypes to validate implementability, as necessary, or aid in test development|
|3|The proposal has been recommended for implementation. No changes to the proposal are expected, but some necessary changes may still occur due to web incompatibilities or feedback from production-grade implementations.|- The feature has sufficient testing and appropriate pre-implementation experience|Gaining implementation experience and discovering any web compatibility or integration issues.|
|4|The proposed feature is complete and ready to be included in the standard. No further changes will be made to the proposal.|- Two compatible implementations which pass the Test262 acceptance tests<br>- Significant in-the-field experience with shipping implementations, such as that provided by two independent VMs<br>- A pull request has been sent to [tc39/ecma262](https://github.com/tc39/ecma262) or [tc39/ecma402](https://github.com/tc39/ecma402), as appropriate, with the integrated spec text<br>- The relevant editor group has signed off on the pull request|Integration into the draft specification and eventual inclusion in a yearly standard publication.|

## Input into the process

Ideas for evolving the ECMAScript language are accepted in any form. Any discussion, idea, or proposal for a change or addition which has not been submitted as a formal proposal is considered to be a strawperson (Stage 0) and has no acceptance criteria. Such submissions must either come from TC39 delegates or from non-delegates who have [registered](https://tc39.github.io/agreements/contributor) via Ecma International.

## Spec revisions and scheduling

TC39 intends to submit a specification to the Ecma General Assembly for ratification in July of each year. The following is an approximate timeline for producing a new spec revision:

- February 1: Candidate Draft is produced.
- February - March: 60 day royalty-free opt-out period.
- March TC39 Meeting: Stage 4 proposals are incorporated, final semantics are approved, and the new spec version is branched from `main`. Only editorial changes are accepted from this point forward.
- April-June: Ecma Executive Committee (ExeCom) and Ecma General Assembly (GA) review period.
- July: Approval of new standard by the Ecma General Assembly

## Status of in-process additions

TC39 will maintain a list of in-process additions, along with the current maturity stage of each, [on its GitHub](https://github.com/tc39/proposals#active-proposals).

## Spec text

At Stage 2 and later, the semantics, API, and syntax of an addition must be described as edits to the latest published ECMAScript standard, using the same language and conventions. The quality of the spec text expected at each stage is described above.

## Reviewers

Anyone can be a reviewer and submit feedback on an in-process addition. The committee should identify designated reviewers for acceptance during Stage 2. These reviewers must give their sign-off before a proposal enters Stage 2.7. Designated reviewers should not be authors of the spec text for the addition and should have expertise applicable to the subject matter. Designated reviewers must be chosen by the committee, not by the proposal's champion.

When reviewers are designated, a target meeting for Stage 2.7 should be identified. Initial reviewer feedback should be given to the champions at least two weeks before the meeting to allow time for discussion and revisions. The target Stage 2.7 meeting may be postponed by a champion if further refinement is necessary.

## Calls for implementation and feedback

When an addition is accepted at Stage 3, the committee is signifying that design work is complete and further refinement will require implementation experience, significant usage, and external feedback.

## Tips for achieving consensus

During the discussion of a proposal, any aspect may be addressed. Delegates are encouraged to provide feedback on proposals, especially when it is relevant to stage advancement. Feedback and concerns should be raised early and asynchronously to help the champion resolve any issues efficiently. Consensus determines whether a proposal is ready to advance to the next stage.

A delegate may pose a constraint as necessary for advancement. A constraint refers to a desired property of the proposal, supported by a rationale. We encourage this to be done asynchronously in issues, in incubator calls, and in plenary. In this situation, the delegate should work with the champion and other delegates during earlier stages to incorporate the constraint into the solution, and to explore possible tradeoffs. Generally, the earlier a constraint is raised, the better.

Often, multiple conflicting constraints are raised, and the committee may make tradeoffs, selecting a design that compromises one or more constraints.

Given that consensus on Stage 3 means "the solution is complete" (i.e., all open design issues have been resolved including anticipated implementation and ecosystem compatibility issues), all TC39 participants should validate the design of proposals they care about before granting Stage 3 consensus. Stage 3 proposals which have fulfilled the acceptance criteria for Stage 4 may not be withheld from advancement unless the issue raised is related to implementation experience or identifies a problem or information which has not previously been discussed by the committee. The goal is to enable implementers to invest in implementations, and preserve the significance of Stage 3 in the process.

## In cases where the committee does not come to consensus

The committee may come to a point where consensus is not reached in committee regarding the feature. In this case, the committee must record a good description of why a proposal did not advance. At a minimum, this should be documented in both the meeting notes and an issue in the proposal's repository. This helps us understand issues in the proposal and similar proposals in a cohesive way.

There are two forms that this sometimes takes, the first is the violation of a constraint and the other is colloquially known as a "block". Other forms exist but are not addressed here.

In the first case, delegates may consider that the violation of a constraint is sufficiently serious reason to withhold their consensus for stage advancement. The dissenting delegate(s) and the champion(s) should work together accordingly to resolve the issue.

Not all issues with proposals are easily solvable. Some issues are too fundamental and serious, requiring a significant rework of the proposal, or may be unsolvable. In these situations, if consensus is withheld, it might be referred to colloquially as a "block". The proposal will require substantial work to address the concern, may need to be rethought all together, or may not have enough justification to pursue at this time.

When possible, it is preferable to raise an actionable constraint. The committee does not have an established concept of a rejected proposal--it is always possible for the champion to make changes and come back to ask for consensus.

## Conditional advancement

A delegate may request additional time to consider the proposal if a topic they had not considered comes up during discussion. In this case, the delegate should give the champion an actionable request for how to facilitate the analysis (e.g., the champion could walk through the proposal with the delegate offline). In practice, this work should be done during the plenary, or before the next meeting. A delegate may also request additional time to consider the proposal, if it was added to the agenda after the deadline for proposal advancement.

The committee may resolve to _conditionally advance_ a proposal to address a particular well-understood condition offline, e.g., making a particular small specification change concrete, among a group of interested people who have an idea of the solution. Conditional advancement is time-limited, giving the person raising the concern time to discuss with the champions and authors about their concerns. If a proposal has a conditional advancement, an issue must be opened on the proposal’s repository. If the issue is resolved, the proposal automatically reaches the next stage without further discussion by the committee. If the issue cannot be resolved, the proposal does not advance.

## Withdrawing proposals, reverting to earlier stages, and adopting proposals

At any point in the process, a proposal champion may request regressing a proposal to an earlier stage, or withdrawing it altogether. Consensus of the committee is necessary for these transitions. The proposal to make this change must include a rationale explaining why it is appropriate, e.g., a significant issue that may have not been considered, or identified, before.

If the proposal champion is not available or is no longer interested in a proposal, then another committee delegate may volunteer to champion the proposal. From that point on, this other delegate takes over champion duties, and can propose to advance, regress, or withdraw the proposal.

## Scope of responsibility for champions

Champions (or, frequently "champion groups" of several members) are authors and editors of proposals. The champion is responsible for the evolution of the proposal from Stage 0 through Stage 4, at which point maintenance is transferred to the editor group. Champions have admin permissions in the proposal repository and can freely make changes within this repository. Periodically, champions may bring their proposal to TC39 to ask for consensus on stage advancement.

When requesting advancement, the champion is expected to make the entire proposal accessible for review by the committee, including an explanation of its contents, providing supporting documentation, etc. Any substantive changes should be presented explicitly.

While not required, it is often beneficial for champions to provide periodic status updates to the committee, highlighting major changes. These status updates do not require consensus; consensus is only required for stage advancement. A significant design change may require the committee to re-evaluate whether the proposal is currently at the appropriate stage.

## Test262 tests

During Stage 2.7, [Test262](https://github.com/tc39/test262) tests should be authored and submitted via pull request. Once it has been appropriately reviewed, it should be merged to aid implementors in providing the feedback expected during this stage.

## Eliding the process

The committee may elide the process based on the scope of a change under consideration, as it sees fit.

## Role of the editors

In-process additions will likely have spec text which is authored by a champion or a committee member other than the editors, although in some cases one or more of the editors may also be a champion with responsibility for specific features. The editors are responsible for the overall structure and coherence of the ECMAScript specification. It is also the role of the editors to provide guidance and feedback to spec text authors so that as an addition matures, the quality and completeness of its specification improves. It is also the role of the editors to integrate additions which have been accepted as finished (Stage 4) into a new revision of the specification.