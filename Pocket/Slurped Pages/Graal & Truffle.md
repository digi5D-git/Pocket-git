---
URL: https://blog.plan99.net/graal-truffle-134d8f28fb69
Author: Mike Hearn
Site: Mike’s blog
published: 16.1207
Abstract: Graal & Truffle An obscure research project could radically accelerate innovation in programming language design Since the dawn of computing our industry has been engaged on a never ending quest to …
Extracted_On: 25.1409
Web_Title: Graal & Truffle
set:
  - code
---

## An obscure research project could radically accelerate innovation in programming language design

[

![Mike Hearn](https://miro.medium.com/v2/resize:fill:64:64/0*vCXpXuEWOU7lPZ5C.jpeg)



](https://medium.com/@octskyward?source=post_page---byline--134d8f28fb69---------------------------------------)

Since the dawn of computing our industry has been engaged on a never ending quest to build the perfect language. This quest is difficult: creating a new programming language is a huge task. And too often the act of doing so fractures the programming ecosystem, leading to an endless grind in which basic tools are recreated again and again: compilers, debuggers, HTTP stacks, IDEs, libraries and an endless procession of other wheels are rebuilt for the hot new language of the day. Because perfection in language design is unobtainable and there are always new ideas to try, we are like Sisyphus: condemned by the gods to push boulders up the hill and watch them roll down again, over and over … for ever.

How can the cycle be broken? Let’s dream for a moment and imagine what it would take.

We would want something, some kind of tool or technique, that gave us the following:

1. A way to create a new language in just a few weeks
2. That ran as fast as the fastest other languages, automatically
3. That had high quality debugging support, automatically (ideally without any kind of slowdown)
4. That had profiling support, automatically
5. That had a high quality garbage collector, automatically … but only if we wanted one
6. That could use all the existing code that was out there, no matter what language it was written in
7. That supported any style of language, from low level C or FORTRAN to Java to Haskell to extremely dynamic scripting languages like Python and Ruby
8. And which could be either just-in-time or ahead-of-time compiled
9. And heck, why not, that supports hotswap of code into a running program

Oh, and we’d want this magic tool to be open source of course. And, er, it should come with a pony. I think that’s it.

Being a smart reader, you of course already guessed that I wouldn’t be writing this article unless such a tool actually did exist. It goes by the bizarre name of Graal & Truffle. Despite sounding like it should be a pretentious hipster restaurant, it is actually a vast research project with over 40 computer scientists from across industry and academia. Together they are building a new set of compiler and virtual machine technologies that implements our wishlist above.

By creating a way for anyone to quickly create a new language without the hassle of simultaneously creating libraries, optimising compilers, debuggers, profilers, bindings to C runtimes and all the other paraphernalia that a modern language is expected to have, it promises to unleash a new wave of language innovation that — I hope — could radically reshape the industry.

And that’s what this article is about.

## What are Graal & Truffle?

Graal is a research compiler. Truffle is … well, that’s kind of hard to explain, because there’s not much to compare it to. The shortest summary I can think of is this: Truffle is a framework for implementing languages using nothing more than a simple abstract syntax tree interpreter.

When creating a new language, the first thing you need is a grammar. The grammar is a description of the syntax rules of your language. By feeding the grammar to a tool like [ANTLR](http://www.antlr.org/) you get a parser, and by feeding input text to the parser you get a parse tree:

Press enter or click to view image in full size

In the above image, the following piece of code has been turned into a tree representing its structure by ANTLR:

Abishek AND (country = India OR City = BLR) LOGIN 404 | show name 

A parse tree, and a derivative construct called an _abstract_ _syntax tree_ (AST)_,_ is a natural way to express a program. Once you have a tree of objects representing nodes in a program, the next simplest step to getting your new language up and running is to add an “execute” method to your node classes. Each node’s execute method also invokes the child nodes and then combines the results to calculate the values of the expressions or perform the statements. And that’s it!

Interpreted dynamic languages like Python, JavaScript, PHP and Ruby look the way they do because building such a language is the path of least resistance when you start from a simple parse tree. If you’re creating a language by yourself from scratch, adding complications like a static type system or an optimising compiler would slow you down a lot. The downside of doing things this way is that the result is very slow, and worse, it’s very tempting to add features that are easy to implement in simple/slow AST interpreters, but extremely difficult to make fast.

[Truffle](https://github.com/graalvm/truffle) is a framework for writing interpreters with annotations and small bits of extra code in them which, when Truffle is paired with its sister project [Graal](https://github.com/graalvm/graal-core), allow those interpreters to be converted into JIT compiling VMs … automatically. The resulting runtimes have peak performance competitive with the best hand-tuned language-specific compilers on the market. For example, the TruffleJS engine which implements JavaScript is competitive with V8 in benchmarks. The RubyTruffle engine is faster than all other Ruby implementations by far. The TruffleC engine is roughly competitive with GCC. There are Truffle implementations in various stages of completeness for:

- JavaScript
- Python 3
- Ruby
- LLVM bitcode, allowing C/C++/Objective-C/Swift programs to run on it
- Another engine that interprets C source code directly instead of going via LLVM (this has some benefits described below)
- R
- Smalltalk
- Lua
- A variety of small experimental languages

To give a feel for how easy it is to write these engines, TruffleJS is only about 80,000 lines of code compared to about 1.7 million for V8.

## Skip the boring bits, how do I play with it?

Graal & Truffle are a product of Oracle Labs, the part of the Java team which does VM and compiler research. [**You can download a “GraalVM” here**](http://www.oracle.com/technetwork/oracle-labs/program-languages/overview/index.html). It is an extended Java Development Kit that comes with several of the above languages built in, along with drop-in command line replacements for NodeJS, Ruby, and R. It also has something called “SimpleLanguage” which is a tutorial language used for teaching the framework.

## What does Graal do?

If Truffle is a framework for writing AST interpreters, then Graal is the thing that makes them fast. Graal is a state of the art optimising compiler. It sports the following features:

- Can run either just-in-time or ahead-of-time.
- Extremely advanced optimisations, like [_partial escape analysis_](http://www.ssw.uni-linz.ac.at/Research/Papers/Stadler14/Stadler2014-CGO-PEA.pdf). Escape analysis is a way of eliminating heap allocations of objects when they aren’t actually necessary. EA was made famous by the JVM, but it’s complicated and very few VMs support it. The Turbofan compiler that Chrome uses for Javascript only started getting EA at the end of 2015. Graal features an even more advanced form of the optimisation that lets it work in more cases.
- Recognises interpreters written using Truffle and can convert Truffle ASTs into optimised native code, using a technique called _partial evaluation_. Partial evaluation of a self-specialising interpreter is called the [_first Futamura projection_](https://en.wikipedia.org/wiki/Partial_evaluation).
- Comes with an advanced visualiser tool that lets you explore the compiler’s intermediate representation as it passes through optimisation stages.
- Written in Java, which means it’s significantly easier to hack on and extend than a traditional compiler written in C or C++.
- Starting with Java 9, it can be used as a JVM plugin.

Press enter or click to view image in full size

The IGV visualiser

Graal is designed from the start as a multi-language compiler, but its set of optimisation techniques is especially well suited to compiling programs with high levels of abstraction and dynamism. It runs Java as fast as the existing JVM compilers do, but when applied to Scala programs it runs them about 20% faster. Ruby programs get 400% faster than the _best_ alternative runtime (i.e. not MRI).

## Polyglot

That’s pretty neat by itself, but it’s really just the beginning.

Truffle provides a language interop framework called Polyglot that allows Truffle languages to call each other, and a thing called the Truffle _Object Storage Model_ that standardises and optimises much of the behaviour of dynamically typed objects, allowing languages to share them too. And because Graal & Truffle are fundamentally built on top of the JVM, all these languages can also call in and out of JVM bytecode-based languages like Java, Scala and Kotlin too.

The way Polyglot works is unusual. Because Truffle provides a standard framework for expressing nodes in an abstract syntax tree, calling into another language doesn’t involve any complex hand-written binding layers. Instead, invoking a function simply joins the ASTs of the two languages together. Those two ASTs are then compiled and optimised by Graal as a single unit, meaning any complexity introduced by crossing the language barrier can be analysed and eliminated.

It’s for this reason that researchers decided to implement a C interpreter on top of Truffle. We normally think of C as being an inherently compiled language, but there’s no particular reason it must be so, and in fact C interpreters have a long history of usage — for instance the [Shake special effects app](https://en.wikipedia.org/wiki/Shake_\(software\)) exposed one to its users as a way to script the app.

Because scripting languages are so slow it’s very common to rewrite performance hotspots in dynamically typed programs by hand in C, using the original interpreter’s internal API to interact with the scripted code. Perversely, this technique actually makes it harder to speed up the language in general because running real programs often means running their C extensions too, and that’s very difficult when those extensions make so many assumptions about the runtime’s internals.

When the people creating RubyTruffle hit this problem they came up with a clever solution: write a special C source code interpreter that not only understands ordinary C, but also macros and other constructs that are unique to Ruby extensions. Then by merging the Ruby and C interpreters together on top of the Truffle framework, the code will be blended together into a seamless whole and the interop overhead will be optimised away. This interpreter is called TruffleC.

[You can read an excellent explanation of how this works by Chris Seaton](http://chrisseaton.com/rubytruffle/cext/), one of the researchers behind the Truffle project, or you can read [the research paper that describes it](http://chrisseaton.com/rubytruffle/dls15-interop/dls15-interop.pdf).

## Making C memory safe

C programs are fast, but have a major downside: they’re a hacker’s playground because it’s way too easy to shoot yourself in the foot by mismanaging memory somewhere.

The ManagedC language is an extension of TruffleC that replaces C’s standard memory management with checked, garbage collected allocation. ManagedC still supports pointer arithmetic and other low level constructs yet eliminates a large swathe of programming errors. It costs roughly 15% peak runtime performance vs GCC, and relies much more heavily on exploiting undefined behaviour than most C compilers do, meaning your program that works on GCC might not work on top of ManagedC, despite ManagedC complying with the C99 spec.

You can learn more about this in the paper “[_Memory safe execution of C on a Java VM_](http://chrisseaton.com/plas15/safec.pdf)”.

## Debugging and profiling for free

A common problem people hit when implementing a new language is the lack of high quality tools. A good example of this is Golang, which has spent many years suffering from poor quality, primitive and often not-really-portable debuggers and profilers.

Another common problem is that making a program debuggable means the running code must be very close to the source, to allow a mapping from the paused machine state back to the program the developer expects to see. This implies disabling compiler optimisations which can make debugging a painfully slow experience.

Truffle provides a simple API that can be used from your AST interpreter that provides sophisticated debugging … without slowing down your program. All compiler optimisations still apply, yet the program state still appears as expected in the debugger. This is possible because Graal & Truffle generate metadata when your source is compiled to machine code, and that metadata can then be used to _deoptimise_ parts of the running program back to its original interpreter state. When a breakpoint, watchpoint, profiling point or any other kind of instrumentation is requested, the VM forces the program back to the slow form, adds AST nodes that implement the requested functionality and then recompile it all back to native code, swapping the new code in on the fly.

Of course a debugger requires more than just runtime support. A user interface for it is also rather helpful. There’s [a plugin for the NetBeans IDE](http://plugins.netbeans.org/plugin/61687/truffle-debugging-support) which provides GUI support for debugging arbitrary Truffle languages.

You can read more about this in the paper “[Building debuggers and other tools: we can have it all](http://www.labri.fr/perso/fmoranda/icooolps15/p1.pdf)”.

## LLVM support

Most Truffle runtimes interpret source code, but there’s nothing that says you _have_ to do that. The [Sulong project](https://github.com/graalvm/sulong/) is creating a Truffle interpreter for LLVM bitcode.

Sulong is still very new and code run this way has many limitations. But by running bitcode with Graal & Truffle, the framework should in theory gain support for not only C, but also C++, Objective-C, FORTRAN, Swift and potentially even Rust.

Code compiled with Sulong in mind has access to [a simple C interop API that lets it call into other Truffle languages using Polyglot](https://github.com/graalvm/sulong/blob/master/include/truffle.h). Again, despite the language neutral and therefore completely dynamically-typed nature of this API, at runtime it will be compiled down to nearly optimal code via aggressive use of speculation to eliminate overheads on the common/fast paths.

## HotSwap

Hotswapping is the ability to redefine a programs code whilst it is executing, without a restart. This is one of the main productivity benefits of highly dynamic languages and although I’m not sure if it’s been integrated yet, there is [a research paper on adding hotswap support to the Truffle framework](https://comserv.cs.ut.ee/home/files/Pool_ComputerScience_2016.pdf?study=ATILoputoo&reference=6319668E7151D556131810BC3F4A627D7FEF5F3B). Like with debugging, profiling and speed optimisations, language implementors have to use the new APIs to add support to their language, but doing so is significantly lower effort than coding all the needed runtime support themselves.

## What’s the catch?

As always in life, nothing is quite perfect. Graal & Truffle represent an almost complete wishlist of things you might want when implementing a new language from scratch, but they come with two big costs:

1. Warmup time
2. Memory usage

The process of converting an interpreter into fully optimised native code relies _heavily_ on learning how the code being executed actually works in practice. This is of course hardly new: the notion of the code “warming up” i.e. getting faster as it runs is known to everyone who runs code on advanced VMs like HotSpot or V8. But Graal pushes speculative, profile-guided optimisation techniques far beyond the current state of the art and relies on profiling a whole lot more as a result.

That’s why the research team behind it invariably only quotes _peak_ performance numbers: the speed of a program after it’s been running for a while. This way of measuring performance doesn’t measure how long it takes to reach that peak performance. In server side applications this is often not a big deal as it’s the peak performance that matters the most, but for other kinds of program, long warmup times can be a deal killer. We can easily see this problem in action by simply running the Octane benchmarks included with the tech preview JDK: the scores are a bit lower than Chrome even though Graal gives itself long (15–60 second) warmup times … that it doesn’t count towards its score.

The second issue is memory usage. Programs that rely heavily on speculative optimisations require tables of metadata to be generated by the compiler, so the program can be de-optimised — mapped back from CPU state to the state of the abstract interpreter. This metadata is typically the same size as the compiled code itself, even after compression and optimisation of the data structures. In addition, the original ASTs or bytecodes must also be kept around so there’s something to fall back to if the native code bails out due to relying on an invalid assumption. All this adds up to a significant extra source of RAM consumption.

Compounding these problems is the fact that Graal, Truffle and the Truffle languages are themselves written in Java, meaning _the compilers themselves_ need to warm up and become optimised. And as you go up the hierarchy of higher level languages, memory consumption of basic data structures tends to go up too, meaning the memory consumption of the base compiler infrastructure will also place additional load on the garbage collector.

The people writing Graal & Truffle are not unaware of these problems, and have solutions in mind. One is called the SubstrateVM. This is a whole virtual machine implemented in Java which is designed to be compiled ahead-of-time to native code using Graal & Truffle’s AOT mode. The SubstrateVM is much less advanced than HotSpot is: such a VM can’t do tricks like dynamically loading code over the internet or hotswapping, and the garbage collector is also pretty basic. But by doing a full AOT compile of not only the VM but the source code to be run along with it, the entire thing can be optimised as a whole, and a significant source of warmup time can be eliminated.

There’s one final catch worth knowing about. I said at the start I wanted everything I listed to be open source. Graal & Truffle are huge and very expensive endeavours written by skilled people who don’t come cheap. As a result, only some parts of what I’ve described are fully open source.

These bits are open and can be found on github or other repositories:

- Graal & Truffle themselves.
- The pluggable version of HotSpot they rely on.
- RubyTruffle
- Sulong (LLVM bitcode support)
- The R, Python 3 and Lua implementations (some of these are hobby/research projects).

And these things are not open source:

- TruffleC/ManagedC
- TruffleJS/NodeJS API support
- SubstrateVM
- AOT support

TruffleJS can be downloaded for free as part of the GraalVM preview releases. I don’t know how to play with TruffleC or ManagedC, although as Sulong implements some of their functionality, it may not matter much.

## Learn more

The canonical full-blown, one-stop-shop tutorial on everything Graal & Truffle is this talk: “[One VM to rule them all, one VM to bind them](https://www.youtube.com/watch?v=FJY96_6Y3a4)”. It’s three hours long, so be warned, it’s only for the truly enthusiastic.

There are a couple of tutorials on writing Truffle languages worth reading:

- [A tutorial by Stefan Marr](http://stefan-marr.de/2015/11/add-graal-jit-compilation-to-your-jvm-language-in-5-easy-steps-step-1/)
- [A tutorial by Cristian Esquivas](http://cesquivias.github.io/tags/truffle.html)

## What next?

At the start I said that if we could eliminate the boulder-rolling associated with creating a new language it’d open the door to a new wave of PL innovation. You can find [a list of some initial experimental languages here](https://gist.github.com/smarr/d1f8f2101b5cc8e14e12), but I’m hoping that there’ll be many more in future.

By trying out your new language ideas using Graal & Truffle you gain the possibility of your language being actually useful right from day one, and therefore growing a community of users and contributors who can deploy your language into their existing projects. It enables a virtuous cycle of feedback and improvement that could significantly accelerate the path from research to production. I’m looking forward to it.