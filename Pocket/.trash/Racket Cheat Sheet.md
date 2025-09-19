---
URL: https://docs.racket-lang.org/racket-cheat/index.html
Author: Jay McCarthy
Abstract: "8.18"
Extracted_On: 25.1409
Web_Title: Racket Cheat Sheet
---

8.18

Data

## Lists

## Immutable Hash

## Vector

## Streams

## Mutable Hash

Systems

## Input/Output

## Files

## Miscellaneous

## Security

## Concurrency

## Parallelism

Syntax (Beginner)

## Structures

|   |   |
|---|---|
|Definition|([struct](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define-struct.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._struct%2529%2529&version=8.18) dillo (weight color))|
|Create|([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) danny (dillo 17.5 'purple))|
|Observe|(dillo? danny) (dillo-weight danny) (dillo-color danny)|
|Modify|([struct-copy](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=struct-copy.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._struct-copy%2529%2529&version=8.18) dillo danny ([weight 18.0]))|
|Match Pattern|(dillo w c)|

## Pattern Matching

|   |   |
|---|---|
|Basics|([match](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=match.html%23%2528form._%2528%2528lib._racket%252Fmatch..rkt%2529._match%2529%2529&version=8.18) value [pat body] ...)|
|Definitions|([match-define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=match.html%23%2528form._%2528%2528lib._racket%252Fmatch..rkt%2529._match-define%2529%2529&version=8.18) pat value)|
|Patterns|(quote datum) ([list](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._list%2529%2529&version=8.18) lvp ...) (list-no-order pat ...) (vector lvp ...) (struct-id pat ...) (regexp rx-expr pat) (or pat ...) (and pat ...) (? expr pat ...)|

Syntax (Intermediate)

## Contracts

## Iteration

## Structures

## Generics