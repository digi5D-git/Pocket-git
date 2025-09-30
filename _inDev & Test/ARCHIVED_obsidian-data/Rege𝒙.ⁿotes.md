---
cssclass:
src:
sub:
nod:
tags:
v-id:: Rege𝒙.ⁿotes
generated:: 250720 // 16.11
mod:: 250720 // 18.14
---

# Overview

## metacharacters

> Metacharacters in *regular expression* are characters that have special meaning for pattern processing.

> [!info] MetaCharacters can be thought of as the underlying grammar of *regular expression*

**CORE CHARACTERS**
-  `.`
	- matching any character. "Wild card"
-  `^`&`$` 
	- anchoring to line start/end
-  `*`, `+`, `?`
	-  quantifiers
-  `[ ]`
	-  Character Classes
-  `\`
	- Escaping
-  `|`
	- Alternative
-  `( )`
	- Grouping

### Character Classes
Character classes, or character sets, are denoted by square brackets and are used for matching one character out of the class, or set. In the classic example gr[ae]y, matches "gray" and "grey". Hyphens can be used to specify ranges like [a-d] which is equivalent to [abcd]. You can also combine shorthand character classes like \w within character classes like [\w.=] which is equivalent to [a-zA-Z0-9_.=].

### Alternatives
Alternatives (also referred to as alternations) within subexpressions (also referred to as groups) are useful for telling the engine to look for this string or that string. For example, if I wanted to find all occurrences of "prefix" and "suffix" I could use this regex:(pre|suf)fix. Alternatives are denoted by the pipe character, | and subexpressions are denoted with open and close parens, ( ). When reading and writing regular expressions you can think of alternatives as the logical OR operator

### Capture Groups
Looking at Computer
Looking at Computer
Regex is (almost) all you need
How Gitleaks combines regex, entropy, and allowlists to find secrets
Zachary Rice
Jan 27, 2025
6
When it comes to secret detection, regex is all you need. Almost. A well crafted regular expression can filter out lots of false positives while capturing things that look like secrets1. Using regular expressions for secret detection does have its limitations. For example, it would be difficult to craft a regular expression that could correctly label MyServiceToken="secret123" as a false positive and MyServiceToken="8dyfuiRyq=vVc3RRr_edRk-fK__JItpZ" as a true positive.

In order to differentiate between "clearly not a secret" and "looks like a secret" we have to introduce some filtering using allowlists and entropy, but before we get to covering those filters, let's first take a look at how we capture things that look like secrets using regular expressions. In this post we'll examine the generic rule in Gitleaks as it provides the widest funnel for capturing things that look like secrets.


The Generic Rule
I don't have any data on this but if I were to guess, most Gitleaks users use the default configuration which includes a generic rule. Below is the regular expression for the generic rule.

(?i)[\w.-]{0,50}?(?:access|auth|(?-i:[Aa]pi|API)|credential|creds|key|passw(?:or)?d|secret|token)(?:[ \t\w.-]{0,20})[\s'"]{0,3}(?:=|>|:{1,3}=|\|\||:|=>|\?=|,)[\x60'"\s=]{0,5}([\w.=-]{10,150}|[a-z0-9][a-z0-9+/]{11,}={0,3})(?:[\x60'"\s;]|\\[nr]|$)

This regular expression is the result of an active community of Gitleaks users regularly submitting PRs and opening issues. Special thanks and recognition go to Richard Gomez, whose ongoing contributions to Gitleaks have been invaluable, particularly his work on the generic rule. You can see how this rule is constructed and tested here.

Before diving into the generic rule's regex, let's cover some regex 101 as it relates to secret scanning:

Metacharacters are characters that have special meaning during pattern processing. You can think of metacharacters as the underlying grammar for regular expressions. The core metacharacters include: . (matching any character), ^ and $ (anchoring to line start/end), *, +, and ? (quantifiers), [] (character classes), \ (escaping), | (alternative), and () (grouping).

Character classes, or character sets, are denoted by square brackets and are used for matching one character out of the class, or set. In the classic example gr[ae]y, matches "gray" and "grey". Hyphens can be used to specify ranges like [a-d] which is equivalent to [abcd]. You can also combine shorthand character classes like \w within character classes like [\w.=] which is equivalent to [a-zA-Z0-9_.=].

Alternatives (also referred to as alternations) within subexpressions (also referred to as groups) are useful for telling the engine to look for this string or that string. For example, if I wanted to find all occurrences of "prefix" and "suffix" I could use this regex:(pre|suf)fix. Alternatives are denoted by the pipe character, | and subexpressions are denoted with open and close parens, ( ). When reading and writing regular expressions you can think of alternatives as the logical OR operator

Capture groups are a kind of subexpression that can be used to extract targeted information from a regular expression match. For example if we wanted to capture the content of all the <h1> tags in an html document we could use this regex <h1>(.*?)</h1>. The pattern .*? tells the engine to match any character zero or more times as little as possible using the lazy modifier, *?.
So if we are parsing some html doc that looks like:
<h1>hello world</h1>

…

content

…

<h1>goodbye</h1>
then we could extract “hello world”, and “goodbye” using capture groups. Capture groups are particularly useful in secret detection as we can specify which part of a match contains the secret.
