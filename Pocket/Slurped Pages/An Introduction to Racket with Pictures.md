---
URL: https://docs.racket-lang.org/quick/index.html
Author: Matthew Flatt
Abstract: |-
  This tutorial provides a brief introduction to the Racket
  programming language by using one of its picture-drawing
  libraries. Even if you don’t intend to use Racket for your artistic
  endeavours, the picture library supports interesting and enlightening
  examples. After all, a picture is worth five hundred “hello world”s.
Extracted_On: 25.1409
Web_Title: An Introduction to Racket with Pictures
set:
  - code
---

This tutorial provides a brief introduction to the Racket programming language by using one of its picture-drawing libraries. Even if you don’t intend to use Racket for your artistic endeavours, the picture library supports interesting and enlightening examples. After all, a picture is worth five hundred “hello world”s.

Along the same lines, we assume that you will run the examples using [DrRacket](http://download.racket-lang.org/). Using DrRacket is the fastest way to get a sense of what the language and system feels like, even if you eventually use Racket with Emacs, vi, or some other editor.

## 1 Ready...[🔗](https://docs.racket-lang.org/quick/index.html#\(part._.Ready___\) "Link to here")ℹ

[Download Racket](http://download.racket-lang.org/), install, and then start DrRacket.

## 2 Set...[🔗](https://docs.racket-lang.org/quick/index.html#\(part._.Set___\) "Link to here")ℹ

To draw pictures, we must first load some picture functions, which are part of a library for creating slide presentations. Copy the following into the definitions area, which is the top text area that you see in DrRacket:

> [#lang](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=guide&rel=Module_Syntax.html%23%2528part._hash-lang%2529&version=8.18) [slideshow](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=slideshow&rel=index.html&version=8.18)

Then click the Run button. You’ll see the text caret move to the bottom text area, which is the interactions area.

If you’ve used DrRacket before, you might need to reset DrRacket to use the language declared in the source via the Language|Choose Language... menu item before clicking Run.

## 3 Go![🔗](https://docs.racket-lang.org/quick/index.html#\(part._.Go_\) "Link to here")ℹ

When you type an expression after the > in the interactions window and hit Enter, DrRacket evaluates the expression and prints its result. An expression can be just a value, such as the number 5 or the string "art gallery":

> |   |
> |---|
> |> 5|
> |5|
> |> "art gallery"|
> |"art gallery"|

An expression can also be a function call. To call a function, put an open parenthesis before the function name, then expressions for the function arguments, and then a close parenthesis, like this:

A result from the [circle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._circle%2529%2529&version=8.18) function is a picture value, which prints as an expression result in much the same way that numbers or strings print. The argument to [circle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._circle%2529%2529&version=8.18) determines the circle’s size in pixels. As you might guess, there’s a [rectangle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._rectangle%2529%2529&version=8.18) function that takes two arguments instead of one:

Try giving [circle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._circle%2529%2529&version=8.18) the wrong number of arguments, just to see what happens:

> |   |
> |---|
> |> ([circle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._circle%2529%2529&version=8.18) 10 20)|
> |circle: arity mismatch;|
> |the expected number of arguments does not match the given|
> |number|
> |expected: 1 plus optional arguments with keywords|
> |#:border-color and #:border-width|
> |given: 2|
> |arguments...:|
> |10|
> |20|

Note that DrRacket highlights in pink the expression that triggered the error (but pink highlighting is not shown in this documentation).

In addition to basic picture constructors like [circle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._circle%2529%2529&version=8.18) and [rectangle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._rectangle%2529%2529&version=8.18), there’s a [hc-append](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Pict_Combiners.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._hc-append%2529%2529&version=8.18) function that combines pictures. When you start composing function calls in Racket, it looks like this:

The hyphen in the name [hc-append](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Pict_Combiners.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._hc-append%2529%2529&version=8.18) is just a part of the identifier; it’s not hc minus append. The function name starts with h because it combines pictures horizontally, and the next letter is c because the pictures are centered vertically.

If you wonder what other functions exist—perhaps a way to stack pictures vertically and left-aligned?—move the text caret to the name [hc-append](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Pict_Combiners.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._hc-append%2529%2529&version=8.18) and press the F1 key in DrRacket. A browser window will open, and it will give you a link to the documentation for [hc-append](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Pict_Combiners.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._hc-append%2529%2529&version=8.18). Click the link, and you’ll see lots of other functions.

If you’re reading this in HTML form, you can also just click on [hc-append](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Pict_Combiners.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._hc-append%2529%2529&version=8.18) or any other imported identifier that is used in this tutorial.

## 4 Definitions[🔗](https://docs.racket-lang.org/quick/index.html#\(part._.Definitions\) "Link to here")ℹ

To use a particular circle and rectangle picture many times, it’s simpler to give them names. Move back to the definitions area (the top area) and add two definitions, so that the complete content of the definitions area looks like this:

Then click Run again. Now, you can just type c or r:

As you can see, the [hc-append](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Pict_Combiners.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._hc-append%2529%2529&version=8.18) function accepts an optional number argument before the picture arguments, and it accepts any number of picture arguments. When a number is provided, it specifies the amount of space to add between pictures.

We could have evaluated the [define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) forms for c and r in the interactions area instead of the definitions area. In practice, though, the definitions area is where your program lives—it’s the file that you save—while the interaction area is for transient explorations and debugging tasks.

Let’s add a function definition to the program. A function definition uses [define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18), just like our shape definitions, but with an open parenthesis before the function name, and names for the function arguments before the matching close parenthesis:

> |   |
> |---|
> |([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) (square n)|
> |; A semi-colon starts a line comment.|
> |; The expression below is the function body.|
> |([filled-rectangle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._filled-rectangle%2529%2529&version=8.18) n n))|

The syntax of the definition mirrors the syntax of a function call:

> |   |
> |---|
> |> (square 10)|
> |![image](https://docs.racket-lang.org/quick/pict_7.png)|

In the same way that definitions can be evaluated in the interactions area, expressions can be included in the definitions area. When a program is run, expression results from the definition area are shown in the interaction area. From now on, we’ll write our example definitions and expressions together, and you can put them in whichever area you prefer. The examples will build on each other, however, so it’s best to put at least the definitions in the definition area.

## 5 Local Binding[🔗](https://docs.racket-lang.org/quick/index.html#\(part._.Local_.Binding\) "Link to here")ℹ

The [define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) form can be used in some places to create local bindings. For example, it can be used inside a function body:

More typically, Racketeers use the [let](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=let.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fletstx-scheme..rkt%2529._let%2529%2529&version=8.18) or [let*](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=let.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fletstx-scheme..rkt%2529._let%252A%2529%2529&version=8.18) form for local binding. An advantage of [let](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=let.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fletstx-scheme..rkt%2529._let%2529%2529&version=8.18) is that it can be used in any expression position. Also, it binds many identifiers at once, instead of requiring a separate [define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) for each identifier:

> |   |
> |---|
> ||
> ||
> |\|   \|<br>\|---\|<br>\|<br>\|![image](https://docs.racket-lang.org/quick/pict_9.png)\||

A [let](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=let.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fletstx-scheme..rkt%2529._let%2529%2529&version=8.18) form binds many identifiers at the same time, so the bindings cannot refer to each other. The [let*](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=let.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fletstx-scheme..rkt%2529._let%252A%2529%2529&version=8.18) form, in contrast, allows later bindings to use earlier bindings:

> |   |
> |---|
> ||
> ||
> |\|   \|<br>\|---\|<br>\|> (checkerboard (square 10))\|<br>\|![image](https://docs.racket-lang.org/quick/pict_10.png)\||

## 6 Functions are Values[🔗](https://docs.racket-lang.org/quick/index.html#\(part._.Functions_are_.Values\) "Link to here")ℹ

Instead of calling [circle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._circle%2529%2529&version=8.18) as a function, try evaluating just [circle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._circle%2529%2529&version=8.18) as an expression:

That is, the identifier [circle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._circle%2529%2529&version=8.18) is bound to a function (a.k.a. “procedure”), just like c is bound to a circle. Unlike a circle picture, there’s not a simple way of completely printing the function, so DrRacket just prints #<procedure:circle>.

This example shows that functions are values, just like numbers and pictures (even if they don’t print as nicely). Since functions are values, you can define functions that accept other functions as arguments:

> |   |
> |---|
> ||
> ||
> |\|   \|<br>\|---\|<br>\|> (series [circle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._circle%2529%2529&version=8.18))\|<br>\|![image](https://docs.racket-lang.org/quick/pict_11.png)\|<br>\|> (series square)\|<br>\|![image](https://docs.racket-lang.org/quick/pict_12.png)\||

When calling a function that accepts a function argument, the argument function often isn’t needed anywhere else. Having to write down the function via [define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) would be a hassle, because you have to make up a name and find a place to put the function definition. The alternative is to use [lambda](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=lambda.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._lambda%2529%2529&version=8.18), which creates an anonymous function:

> |   |
> |---|
> |> (series ([lambda](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=lambda.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._lambda%2529%2529&version=8.18) (size) (checkerboard (square size))))|
> |![image](https://docs.racket-lang.org/quick/pict_13.png)|

The parenthesized names after a [lambda](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=lambda.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._lambda%2529%2529&version=8.18) are the arguments to the function, and the expression after the argument names is the function body. Using the word “lambda” instead of “function” or “procedure” is part of Racket’s history and culture.

A [define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) form for a function is really a shorthand for a simple [define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) using [lambda](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=lambda.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._lambda%2529%2529&version=8.18) as the value. For example, the series definition could be written as

Most Racketeers prefer to use the shorthand function form with [define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) instead of expanding to [lambda](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=lambda.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._lambda%2529%2529&version=8.18).

## 7 Lexical Scope[🔗](https://docs.racket-lang.org/quick/index.html#\(part._.Lexical_.Scope\) "Link to here")ℹ

Racket is a lexically scoped language, which means that whenever an identifier is used as an expression, something in the textual environment of the expression determines the identifier’s binding. This rule applies to identifiers in a [lambda](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=lambda.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._lambda%2529%2529&version=8.18) body as well as anywhere else.

In the following rgb-series function, the uses of mk in each [lambda](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=lambda.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._lambda%2529%2529&version=8.18) form refer to the argument of rgb-series, since that’s the binding that is textually in scope:

> |   |
> |---|
> ||
> ||
> |\|   \|<br>\|---\|<br>\|> (rgb-series [circle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._circle%2529%2529&version=8.18))\|<br>\|![image](https://docs.racket-lang.org/quick/pict_14.png)\|<br>\|> (rgb-series square)\|<br>\|![image](https://docs.racket-lang.org/quick/pict_15.png)\||

Here’s another example, where rgb-maker takes a function and returns a new one that remembers and uses the original function.

> |   |
> |---|
> ||
> ||
> |\|   \|<br>\|---\|<br>\|> (series (rgb-maker [circle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._circle%2529%2529&version=8.18)))\|<br>\|![image](https://docs.racket-lang.org/quick/pict_16.png)\|<br>\|> (series (rgb-maker square))\|<br>\|![image](https://docs.racket-lang.org/quick/pict_17.png)\||

Note how composing functions via rgb-maker creates a different alignment of objects within the picture compared to using rgb-series.

## 8 Lists[🔗](https://docs.racket-lang.org/quick/index.html#\(part._.Lists\) "Link to here")ℹ

Racket inherits much of its style from the language Lisp, whose name originally stood for “LISt Processor,” and lists remain an important part of Racket.

The [list](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._list%2529%2529&version=8.18) function takes any number of arguments and returns a list containing the given values:

> |   |
> |---|
> |> ([list](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._list%2529%2529&version=8.18) "red" "green" "blue")|
> |'("red" "green" "blue")|
> |> ([list](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._list%2529%2529&version=8.18) ([circle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._circle%2529%2529&version=8.18) 10) (square 10))|
> |'(![image](https://docs.racket-lang.org/quick/pict_18.png) ![image](https://docs.racket-lang.org/quick/pict_19.png))|

As you can see, a list prints as a single quote and then pair of parentheses wrapped around the printed form of the list elements. There’s room for confusion here, because parentheses are used for both expressions, such as ([circle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._circle%2529%2529&version=8.18) 10), and printed results, such as '("red" "green" "blue"). The quote is the key difference, as [discussed elsewhere](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=guide&rel=Pairs__Lists__and_Racket_Syntax.html%23%2528part._quoting-lists%2529&version=8.18). To help emphasize the difference, in the documentation and in DrRacket, result parentheses are printed in blue, unlike expression parentheses.

If you have a list, then you’ll eventually want to do something with each of the elements. The [map](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528lib._racket%252Fprivate%252Fmap..rkt%2529._map%2529%2529&version=8.18) function takes a list and a function to apply to each element of the list; it returns a new list to combine the function’s results:

Another function that works with lists is [apply](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=procedures.html%23%2528def._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._apply%2529%2529&version=8.18). Like [map](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528lib._racket%252Fprivate%252Fmap..rkt%2529._map%2529%2529&version=8.18), it takes a function and a list, but a function given to [apply](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=procedures.html%23%2528def._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._apply%2529%2529&version=8.18) should take all of the arguments at once, instead of each one individually. The [apply](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=procedures.html%23%2528def._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._apply%2529%2529&version=8.18) function is especially useful with functions that take any number of arguments, such as [vc-append](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Pict_Combiners.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._vc-append%2529%2529&version=8.18):

Note that ([vc-append](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Pict_Combiners.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._vc-append%2529%2529&version=8.18) (rainbow (square 5))) would not work, because [vc-append](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Pict_Combiners.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._vc-append%2529%2529&version=8.18) does not want a list as an argument; it wants a picture as an argument, and it is willing to accept any number of them. The [apply](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=procedures.html%23%2528def._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._apply%2529%2529&version=8.18) function bridges the gap between a function that wants many arguments and a list of those arguments as a single value.

## 9 Modules[🔗](https://docs.racket-lang.org/quick/index.html#\(part._.Modules\) "Link to here")ℹ

Since your program in the definitions window starts with

> [#lang](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=guide&rel=Module_Syntax.html%23%2528part._hash-lang%2529&version=8.18) [slideshow](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=slideshow&rel=index.html&version=8.18)

all of the code that you put in the definitions window is inside a module. Furthermore, the module initially imports everything from the module designated by [slideshow](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=slideshow&rel=index.html&version=8.18), which exports picture-making functions as well as more commonly used functions such as [list](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._list%2529%2529&version=8.18) and [map](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=pairs.html%23%2528def._%2528%2528lib._racket%252Fprivate%252Fmap..rkt%2529._map%2529%2529&version=8.18).

To import additional libraries, use the [require](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=require.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._require%2529%2529&version=8.18) form. For example, the library [pict/flash](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=More_Pict_Constructors.html%23%2528mod-path._pict%252Fflash%2529&version=8.18) provides a [filled-flash](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=More_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fflash..rkt%2529._filled-flash%2529%2529&version=8.18) function:

Modules are named and distributed in various ways:

- Some modules are packaged in the Racket distribution or otherwise installed into a hierarchy of collections. For example, the module name [pict/flash](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=More_Pict_Constructors.html%23%2528mod-path._pict%252Fflash%2529&version=8.18) means “the module implemented in the file "flash.rkt" that is located in the "pict" collection.” When a module name includes no slash, then it refers to a "main.rkt" file.
    
- Some collections of modules are distributed as packages. Packages can be installed using the Install Package... menu item in DrRacket’s File menu, or they can be installed using the raco pkg command-line tool. For example, installing the "avl" package makes the [avl](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?tag=%28mod-path._.%27avl.%27%29&version=8.18) module available.
    
    Packages can be registered at [https://pkgs.racket-lang.org/](https://pkgs.racket-lang.org/), or they can be installed directly from a Git repository, web site, file, or directory. See [Package Management in Racket](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pkg&rel=index.html&version=8.18) for more information about packages.
    
- Some modules live relative to other modules, without necessarily belonging to any particular collection or package. For example, in DrRacket, if you save your definitions so far in a file "quick.rkt" and add the line
    
    > ([provide](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=require.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._provide%2529%2529&version=8.18) rainbow square)
    
    then you can open a new tab or window in DrRacket, type the new program "use.rkt" in the same directory as "quick.rkt":
    
    and when you run "use.rkt", a rainbow list of squares is the output. Note that "use.rkt" is written using the initial import [racket](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=index.html&version=8.18), which does not supply any picture-making functions itself—but does provide [require](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=require.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._require%2529%2529&version=8.18) and the function-calling syntax.
    

Racketeers typically write new programs and libraries as modules that import each other through relative paths and collection-based paths. When a program or library developed this way seems useful to others, it can be registered as a package, especially if the implementation is hosted in a Git repository.

## 10 Macros[🔗](https://docs.racket-lang.org/quick/index.html#\(part._.Macros\) "Link to here")ℹ

Here’s another library to try:

Instead of a circle, the result is a picture of the code that, if it were used as an expression, would produce a circle. In other words, [code](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=More_Pict_Constructors.html%23%2528form._%2528%2528lib._pict%252Fcode..rkt%2529._code%2529%2529&version=8.18) is not a function, but instead a new syntactic form for creating pictures; the bit between the opening parenthesis with [code](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=More_Pict_Constructors.html%23%2528form._%2528%2528lib._pict%252Fcode..rkt%2529._code%2529%2529&version=8.18) is not an expression, but instead manipulated by the [code](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=More_Pict_Constructors.html%23%2528form._%2528%2528lib._pict%252Fcode..rkt%2529._code%2529%2529&version=8.18) syntactic form.

This helps explain what we meant in the previous section when we said that [racket](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=index.html&version=8.18) provides [require](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=require.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._require%2529%2529&version=8.18) and the function-calling syntax. Libraries are not restricted to exporting values, such as functions; they can also define new syntactic forms. In this sense, Racket isn’t exactly a language at all; it’s more of an idea for how to structure a language so that you can extend it or create entirely new languages.

One way to introduce a new syntactic form is through [define-syntax](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define-syntax%2529%2529&version=8.18) with [syntax-rules](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=stx-patterns.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fstxcase-scheme..rkt%2529._syntax-rules%2529%2529&version=8.18):

This kind of definition is a macro. The (pict+code expr) part is a pattern for uses of the macro; instances of the pattern in a program are replaced by instances of the corresponding template, which is ([hc-append](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Pict_Combiners.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._hc-append%2529%2529&version=8.18) 10 expr ([code](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=More_Pict_Constructors.html%23%2528form._%2528%2528lib._pict%252Fcode..rkt%2529._code%2529%2529&version=8.18) expr)). In particular, (pict+code ([circle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._circle%2529%2529&version=8.18) 10)) matches the pattern with ([circle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._circle%2529%2529&version=8.18) 10) as expr, so it is replaced with ([hc-append](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Pict_Combiners.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._hc-append%2529%2529&version=8.18) 10 ([circle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._circle%2529%2529&version=8.18) 10) ([code](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=More_Pict_Constructors.html%23%2528form._%2528%2528lib._pict%252Fcode..rkt%2529._code%2529%2529&version=8.18) ([circle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._circle%2529%2529&version=8.18) 10))).

Of course, this sort of syntactic extension cuts both ways: inventing a new language can make it easier to say what you want, but harder for others to understand. As it happens, the developers of Racket are constantly giving talks and writing papers that involve Racket code, and it’s worthwhile for everyone who works on those products to know about [code](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=More_Pict_Constructors.html%23%2528form._%2528%2528lib._pict%252Fcode..rkt%2529._code%2529%2529&version=8.18).

In fact, you might want to take a look at the [source of this document](https://docs.racket-lang.org/quick/quick.scrbl). You’ll see that it starts with #lang, but otherwise doesn’t look a lot like Racket; nevertheless, we build this document by running its source as a Racket program. We have to use a lot more than [syntax-rules](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=stx-patterns.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fstxcase-scheme..rkt%2529._syntax-rules%2529%2529&version=8.18) to extend Racket’s syntax enough for writing documents, but Racket’s syntactic extension can take you a long way.

## 11 Objects[🔗](https://docs.racket-lang.org/quick/index.html#\(part._.Objects\) "Link to here")ℹ

An object system is another example of a sophisticated language extension that is worth learning and using for Racket users. Objects are sometimes better than functions, even when you have [lambda](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=lambda.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._lambda%2529%2529&version=8.18), and objects work especially well for graphical user interfaces. The API for Racket’s GUI and graphics system is expressed in terms of objects and classes.

The class system itself is implemented by the [racket/class](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=mzlib_class.html&version=8.18) library, and the [racket/gui/base](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=gui&rel=index.html&version=8.18) library provides the GUI and drawing classes. By convention, the classes are given names that end with %:

> |   |
> |---|
> |\|   \|<br>\|---\|<br>\|([require](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=require.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._require%2529%2529&version=8.18) racket/class\|<br>\|racket/gui/base)\|<br>\|([define](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=define.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._define%2529%2529&version=8.18) f ([new](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=objcreation.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fclass-internal..rkt%2529._new%2529%2529&version=8.18) [frame%](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=gui&rel=frame_.html&version=8.18) [label "My Art"]\|<br>\|[width 300]\|<br>\|[height 300]\|<br>\|[alignment '(center center)]))\||
> ||
> ||

The [new](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=objcreation.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fclass-internal..rkt%2529._new%2529%2529&version=8.18) form creates an instance of a class, where initialization arguments like label and width are provided by name. The [send](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=ivaraccess.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fclass-internal..rkt%2529._send%2529%2529&version=8.18) form calls a method of the object, such as show, with arguments after the method name; the argument #t in this case is the boolean constant “true.”

Pictures generated with [slideshow](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=slideshow&rel=index.html&version=8.18) encapsulate a function that uses the graphics toolbox’s drawing commands to render the picture to a drawing context, such as a canvas in a frame. The [make-pict-drawer](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Rendering.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._make-pict-drawer%2529%2529&version=8.18) function from [slideshow](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=slideshow&rel=index.html&version=8.18) exposes a picture’s drawing function. We can use [make-pict-drawer](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Rendering.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._make-pict-drawer%2529%2529&version=8.18) in a canvas-painting callback to draw a picture into a canvas:

> |   |
> |---|
> ||
> ||
> |\|   \|<br>\|---\|<br>\|> (add-drawing (pict+code ([circle](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Basic_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._circle%2529%2529&version=8.18) 10)))\|<br>\|#(struct:object:canvas% ...)\|<br>\|> (add-drawing ([colorize](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=Pict_Drawing_Adjusters.html%23%2528def._%2528%2528lib._pict%252Fmain..rkt%2529._colorize%2529%2529&version=8.18) ([filled-flash](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=pict&rel=More_Pict_Constructors.html%23%2528def._%2528%2528lib._pict%252Fflash..rkt%2529._filled-flash%2529%2529&version=8.18) 50 30) "yellow"))\|<br>\|#(struct:object:canvas% ...)\||

> ![[image]](https://docs.racket-lang.org/quick/img2.png)

Each canvas stretches to fill an equal portion of the frame, because that’s how a frame manages its children by default.

## 12 Where to Go From Here[🔗](https://docs.racket-lang.org/quick/index.html#\(part._.Where_to_.Go_.From_.Here\) "Link to here")ℹ

This introduction to Racket purposely avoids many of the traditional ways of introducing and distinguishing Lisp or Scheme: prefix arithmetic notation, symbols, quoting and quasiquoting lists, [eval](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=eval.html%23%2528def._%2528%2528quote._%7E23%7E25kernel%2529._eval%2529%2529&version=8.18), first-class continuations, and the idea that all syntax is really just a [lambda](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=reference&rel=lambda.html%23%2528form._%2528%2528lib._racket%252Fprivate%252Fbase..rkt%2529._lambda%2529%2529&version=8.18) in disguise. While those are all part of Racket, they are not the main ingredients of day-to-day programming in Racket.

Instead, Racket programmers typically program with functions, records, objects, exceptions, regular expressions, modules, and threads. That is, instead of a “minimalist” language—which is the way that Scheme is often described—Racket offers a rich language with an extensive set of libraries and tools.

If you are new to programming or if you have the patience to work through a textbook, we recommend reading [How to Design Programs](http://www.htdp.org/). If you have already read it, or if you want to see where the book will take you, then see [Continue: Web Applications in Racket](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?tag=%28part._%28.%27%28lib._web-server%2Fscribblings%2Ftutorial%2Fcontinue..scrbl%29.%27._.%27top.%27%29%29&version=8.18).

For experienced programmers, to continue touring Racket from a systems-oriented perspective instead of pictures, your next stop is [More: Systems Programming with Racket](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=more&rel=index.html&version=8.18).

To instead start learning about the full Racket language and tools in depth, move on to [The Racket Guide](https://download.racket-lang.org/releases/8.18/doc/local-redirect/index.html?doc=guide&rel=index.html&version=8.18).