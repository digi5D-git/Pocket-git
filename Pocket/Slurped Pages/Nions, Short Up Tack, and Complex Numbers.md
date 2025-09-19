---
URL: https://www.crockford.com/nion.html
Author: Douglas Crockford
Abstract: 2020-05-11
Extracted_On: 25.1409
Web_Title: Nions, Short Up Tack, and Complex Numbers
---

2020-05-11

## Complex numbers

Complex numbers are a powerful concept in Mathematics, but they have had relatively little application in programming. The name is confusing and intimidating. If you are not a math major, you might want to stay away from the complex numbers. But they really are not very complex. They are just pairs of numbers. There are things in mathematics that are very complex, but the complex numbers are not. They have also been called Double Algebra. They need a better name. I want to call them binions, meaning two numbers.

Complex numbers are usually represented as

x + (i * y)

There are several problems with this. First, the constant `i` uses the most popular letter in programming. The opportunities for confusion are enormous. In some disciplines, to mitigate the ambiguity of `i`, the letter `j` is used instead. Now, as they say, you have two problems.

The `i` stands for `sqrt(-1)`. The `x` value is real, and the `(i * y)` value is imaginary. But this is nonsense. What is actually happening here is that `x` is giving a position on the horizontal axis, and `y` is giving a position on the vertical axis. Verticality is not more imaginary than horizontality. Horizontal is not more real than vertical. A binion is just the specification of a point on a plane using two mutually orthogonal distances from the origin.

The value of `i` is `sqrt(-1)`, which is an important piece of mathematical lore, but it is baffling to the uninitiated. The purpose of `i` is to rotate `y` by 90 degrees. Understanding that mystery is not a prerequisite to using binions effectively.

This looks like an addition, but from the perspective of software, this is really a construction. We are making an object that will contain the values of `x` and `y`. The addition of a product of `i` obscures the true effect of the expression in an unhelpful way. Information hiding is generally a good thing, but not when it promotes confusion.

This is why most programming languages do not provide complex numbers, and complex numbers are underutilized in the languages that do. This is a shame because binions are points with powerful computational properties.

So while respecting the mathematical roots, we can reformulate to better serve software development.

## Short up tack

I propose that binions be constructed with the `⫠`short up tack (U+2AE0) operator. It looks like a `+`plus sign where the cross bar is dropped to the bottom. It suggests orthogonal or lateral, which is just want we want. It is an infix operator that takes two numbers and returns a new binion object.

x ⫠ y

The square root of `-1` can be written as

0 ⫠ 1

The arithmetic operators (`+`add `-`subtract `*`multiply `/`divide `**`power) and the math functions will know what to do with binion values.

To extract a part, use the subscript operator, which views a binion as a two element array.

(2 ⫠ 3)[0]    // 2
(2 ⫠ 3)[1]    // 3

A binion object is immutable.

## Nions

Binions are an example of nions. Other useful nions are quaternions and octonions.

Quaternions, which were developed by William Rowan Hamilton in 1843, take this idea to four dimensions.

s ⫠ x ⫠ y ⫠ z

Octonions, which were developed by Hamilton's friend John T. Graves, take this idea to eight dimensions.

s ⫠ t ⫠ u ⫠ v ⫠ w ⫠ x ⫠ y ⫠ z

Not every language needs bions and quaternions. Indeed, not every language needs floating point. More languages should be including nions because they provide powerful tools for reasoning about geometry. They are left out of most languages because they seem weird and intimidating. When they are included, it is in a sense of mathematical completionism. The feature is there, but not in a way that many people will bother to use.

I think shedding the complex mathematical cladding will make this more accessible. My intention is not to dumb math down, but to remove some of the vestigial clutter. It is my hope that the `⫠`short up tack will find its way into the next generation of programming languages.