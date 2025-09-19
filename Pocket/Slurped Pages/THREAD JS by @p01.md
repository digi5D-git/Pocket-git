---
URL: http://www.p01.org/64b_thread_js/
Author: Mathieu 'p01' Henri, @p01
Site: "@p01"
Abstract: Breaking the 64 bytes fronteer with the famous
Extracted_On: 25.1909
Web_Title: THREAD JS by @p01
---

## THREAD JS

Breaking the 64 bytes fronteer with the famous "10 print" maze generator.

[![](http://www.p01.org/64b_thread_js/thread.png)](http://www.p01.org/64b_thread_js/thread.htm)

## Sixty four bytes

```
<p onmousemove=b.innerHTML+='​╱╲'[event.screenX%3] id=b>Hi
```

That's it. Now go, wiggle your mouse and make your way!

## New territory

As futile as it may be, I have been trying to break the 64 bytes fronteer of creative Javascript productions for a few years now.

The famous `10 print` program from the Commodore 64 Basic manual came back under the spotlight in a brilliant book [10 print](http://10print.org/) by [Nick Montfort](http://nickm.com/post/tag/10-print/) et al. I remember seeing this one-line program back when I was going to my local computer club in the 80's.

The first insanely small implementation of the `10 print` program I saw was [Thread by Nick Montfort](http://www.pouet.net/prod.php?which=55212) in 22 bytes in June 2010. Later came a few other implementations which culminated with a 12 bytes record in [Thread over](http://www.pouet.net/prod.php?which=60810) in December 2012.

## The original

```
10 PRINT CHR$(205.5+RND(1)); : GOTO 10
```

The original Commodore 64 BASIC program consists in an infinite loop that randomly prints out the character 205 or 206, i.e. the slash or back-slash characters, which as they fill the screen form some intricate pattern akin to a maze or a weaving thread.

## How to do this in DHTML

Unlike on a fixed hardware where you have a strict baseline, fonts, layout of the memory, ... Web developers have little control over the system or even fonts installed on the system of the end users.

### Unicode baby

However we can count on UNICODE, and especially three characters `U+2571`, `U+2572` and `U+200B`: the two full width diagonals, and the zero width space.

If we only used the full width diagonals, the browser wouldn't know where to break the line. Inserting a zero width space here and there allows the browser to break the lines without any visual impact if the space is inserted in the middle of the viewport.

### Analog random number generator

I needed to randomly display one of the three UNICODE characters mentionned above. There are a couple of ways to get a (pseudo) random number between 0 and 2 in Javascript

```
Math.random()*3|0
New Date%3
```

The first one is too long and the second one is too predictable and doesn't cope well with burst calls.

The next best thing was to use an analog random number by letting the user do some of the job by wiggling the mouse around and picking the x coordinate of the mouse module 3.

```
event.screenX%3
```

### p element

Ideally I would use the `html` element, so as to catch the mousemove event anywhere on the viewport. Unfortunately the 64 bytes size limit is merciless. I had to use a `p` which means you have to wiggle the mouse _inside_ the bouding box of the element.

## Closing words.

I'm glad I finally managed to beat this challenge and hope you appreciate this little feat and that this will inspire others to persevere and push the limits.

As usual with my demoscene productions, you can find [Thread.js on Pouet.net](http://www.pouet.net/prod.php?which=62295).