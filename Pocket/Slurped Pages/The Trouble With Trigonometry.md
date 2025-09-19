---
URL: https://www.crockford.com/trig.html
Author: Douglas Crockford
Abstract: 2020-12-08
Extracted_On: 25.1409
Web_Title: The Trouble With Trigonometry
---

2020-12-08

> _But seas between us braid hae roar’d  
> Sin auld lang syne._

Trigonometry is the gateway to higher mathematics. It also has many practical applications, including architecture, music synthesis, computer graphics, astronomy, electronics, digital media, mapping, navigation, robotics, autotune, and determining the heights of flag poles. All students should learn trigonometry. Unfortunately, the odd conventions used in the practice of trigonometry scare away most students, and are ultimately forgotten by most who study it. These conventions have been incorporated into the subject over hundreds of years. All mathematicians adopt and internalize them, often losing the ability to understand why novices struggle.

Computer science, being a younger field, is somewhat less bothered with tradition than mathematics. We routinely practice refactoring, where we attempt to wrangle the complexity of our systems, streamlining and simplifying to improve performance, reliability, maintainability, and ease of use. Trigonometry can be refactored, making it easier to learn, easier to practice, more memorable, and less scary. This flies in the face of tradition, but we should not allow tradition to stand in the way of progress.

Some mathematicians will find this to be blasphemous. They can argue, correctly, that the current conventions have served us well for centuries, and further argue, incorrectly, that there is no need to change. The proposed changes are not for them. This is for the next generation of trigonometeers.

## Function Power Tricks

Mathematical notation is intentionally terse and cryptic. Apparently it was optimized for frantic scribbling on chalk boards. By contrast, in computer science we have benefitted from notations that are more literate and self-descriptive. Mathematicians are trying to reduce the time to write down an expression. Programmers are trying to reduce the time it takes to make an expression work correctly.

#### f2x

The mathematical expression `f2x` is a short hand for using a function twice: `f(f(x))`. For example:

negate2(x) = negate(negate(x))

In programming, we do not have such a convention because it has little practical value. We would simply repeat the function.

#### sin2x

The mathematical expression `sin2`x does not mean `sin(sin(x))`. It instead means `sin(x)2`. The purpose of this convention is to allow the omission of the parentheses. In programming, we have determined that parentheses are valuable for reducing confusion. In this case, the convention that allows for the omission of the parentheses is itself a source of confusion.

#### sin-1x

The mathematical expression `sin-1x` does not mean `sin(x)-1`. It instead means `arcsin(x)`. It uses an entirely different function! The justification is that `-1` is one character less than `arc`. This is inexcusable. All of these function power tricks are bad habits that should be avoided. They should never be shown to innocent school children.

## Vocabulary

Much of the vocabulary of trigonometry is unnecessarily weird or ambiguous. If we replace these terms with less confusing alternatives, then we will not have to waste instructional time by teaching the confusions.

#### Right

The right in right angle confuses students. Is there a left angle? Are the other angles wrong angles? The correct sense is upright, but that implies a specific orientation, which is confusing when we add rotation. What is important to communicate with this word is the angle's orthogonality.

I think the best word is lateral, as Gauss suggested.

A triangle containing a lateral angle is a lateral triangle, or more compactly, a trigon, a very particular sort of three-sided polygon.

The terms acute and obtuse should be replaced with sublateral and superlateral.

long near far angle

The Sides Of The Trigon

#### Hypotenuse

The word hypotenuse is intimidating. It is also unnecessary. When teachers explain problems, they start with "The long side is the hypotenuse." This is a wasted step. "The long side" unambiguously identifies the side opposite the lateral angle. There is no need to frighten students by giving the long side a mysterious Greek alias.

#### Opposite

The word opposite is overloaded. It can mean negation, reciprocal, inverse, undo, other, and flipped. It is used to describe the side that is farthest from the angle. We should instead call that side the far side. That way, we can say that the long side is opposite the lateral angle (which it is) without creating confusion.

#### Adjacent

The word adjacent is fine, excepting the silent d. But if we are replacing hypotenuse and opposite, we should replace this word too. We will instead call it the near side.

#### Sine

The `sine` is the most important function in trigonometry. The name sine has problems. First, it is a homophone of sign, which is confusing because the signs of the inputs and outputs of the `sine` function are critical in understanding what it does as it gracefully oscillates between the positive and negative.

Second, the word sine is meaningless. This is how the sine got its name: In India, the function was called जीवा, meaning bowstring, a cord connecting two points on a circle (which modern teaching misspells as chord). That word entered Arabic as a loan word جب which sounded similar to the Sanskrit word. When it entered Latin, it was not recognized that جب was a loan word, so it was misinterpreted as جَيْب, the Arabic word for the hole in a garment that the head passes through, becoming sinus, a loop of the toga that hangs over the chest. It was not noticed at the time that this makes no sense. It still makes no sense. The word `sine` is folderol.

#### Tangent

A tangent is a line that touches a circle at one point. The `tangent` function gives the length of a segment of a tangent. The length of a line segment is not the same thing as a tangent. This is confusing.

#### Secant

Secant, derived from Latin, means a cutting, specifically a line segment. The secant function does give the length of a particular line segment, but this name is not helpful in remembering which segment that is. The word is too vague.

#### Co-

Three of these functions have a `co-` prefix. The `co-` stands for complement, referring to a complementary angle, the third angle of the trigon. The three `co-` functions can be defined in terms of the other three functions.

cosine(angle)    = sin(lateral - angle)
cotangent(angle) = tangent(lateral - angle)
cosecant(angle)  = secant(lateral - angle)

The value of the constant `lateral` is either `90`, `pi / 2`, or `0.25`, depending on the units being used. [See Cycles.](https://www.crockford.com/cycles.html)

This was helpful when these functions were implemented as tables. If you did not have a `cosine` table, you could subtract your angle from the lateral angle and then look up the answer in the `sine` table.

In the 1980s, cheap calculators became available that could compute the functions, making tables obsolete. The vestigial `co-` gives little help in remembering what the functions do.

|hint|function|meaning|
|---|---|---|
|SOH|`sine`|`opposite / hypotenuse`|
|CAH|`cosine`|`adjacent / hypotenuse`|
|TOA|`tangent`|`opposite / adjacent`|

## Mnemonic

Students are taught the mnemonic SOHCAHTOA to give them clues about what the functions do. Unfortunately, the mnemonic is itself difficult to remember. It also only gives hints for three of the six functions.

Ideally, the functions should be given names that are more descriptive.

## Reciprocal Functions

The functions can be paired with their reciprocals.

sine(angle)    = 1 / cosecant(angle)
cosine(angle)  = 1 / secant(angle)
tangent(angle) = 1 / cotangent(angle)

Unfortunately, the names of the functions do not give a clue as to how the functions are paired.

## Abbrev.

Mathematicians seem to feel that the word sine is too long. They usually abbreviate it to sin. Fortunately, there is a simple rule for abbreviating these names: Take the first three letters. Unfortunately, cosine and cosecant start with the same prefix, so the less popular is abbreviated to its first three consonants. Since there are two names now for each function, there are vague rules for determining when each name should be used. So, for example, it is a transgression to refer to _The Law of Sins_.

There is a lot of unnecessary complexity here. Each function should have one name and be short enough to not require truncation.

The Six Basic Trigonometry Functions

|function|meaning|also known as|aka|
|---|---|---|---|
|`fol`|`far / long`|`sine`|`sin`|
|`fon`|`far / near`|`tangent`|`tan`|
|`lof`|`long / far`|`cosecant`|`csc`|
|`lon`|`long / near`|`secant`|`sec`|
|`nof`|`near / far`|`cotangent`|`cot`|
|`nol`|`near / long`|`cosine`|`cos`|

## New Function Names

Each function is given a three letter name that is a mnemonic for the ratio that defines the function. So `fol` is short for `far over long`. No Greek. No Latin. No tables.

> Given: The angle and the length of the near side.
> 
> Find: The length of the far side.
> 
> Method: Use the function whose initial letter is the side you need (`f` for far), and whose final letter is the side you have (`n` for near). Multiply the length of the side you have by the result of the function.
> 
> Solution: `fon(angle) * length(near)`

If you can remember far near long, then you can remember which function produces which ratio.

Taught in this form, supported by smart calculators and simple programming languages, basic trigonometry can be introduced much earlier and completed much faster and retained much longer. The prerequisites are division (a much more difficult subject) and real numbers.

Later, in analytic geometry, we introduce the cartesian plane and the `angle-` functions that are the inverses.

> Given: A point (`x`, `y`).
> 
> Find: The polar coordinates of the point.
> 
> Method: Use the `anglenof` function and the `absolute` function.
> 
> Solution: `[anglenof(x, y), absolute(x, y)]`

  

This graph requires JavaScript.

The graph above has the angle in radians on the horizontal axis, and the amplitude of the `fol` and `nol` functions on the vertical axis. If you touch an angle, you will see it displayed on the unit circle on the left.

You can observe how the intersection of `fol` and `nol` is always touching the circle. The other four functions form a triangle whose long side is tangent to the circle at the radius. At the boundaries of the quadrants, one corner shoots to infinity, and then flips over into the next quadrant. The angle at which this happens is a multiple of `lateral = (pi / 2)`, where `fol` and `nol` cross the `0` line.

The values of the functions provide the lengths of six similar triangles.

|near|far|long|height|
|---|---|---|---|
|`fol`|`nol`|`1`||
|`fon`|`1`|`lon`|`fol`|
|`1`|`nof`|`lof`|`nol`|
|`lon`|`lof`|`fon + nof`|`1`|
|`nol`|`lof - fol`|`nof`||
|`lon - nol`|`fol`|`fon`||

##### [Cycles](https://www.crockford.com/cycles.html)

##### [Nions, Short Up Tack, and Complex Numbers](https://www.crockford.com/nion.html)

##### [Plane](https://www.crockford.com/plane.html)