---
URL: https://beza1e1.tuxen.de/articles/accidentally_turing_complete.html
Author: Andreas Zwinkau
Site: "@azwinkau"
Abstract: A list of things that were not supposed to be Turing-complete, but are.
Extracted_On: 25.1409
Web_Title: Accidentally Turing-Complete
set:
  - tech
---

Some things were not supposed to be [Turing-complete](http://en.wikipedia.org/wiki/Turing_completeness). This is a collection of such accidents.

Stuff which is somehow limited (stack overflows, arbitrary configuration, etc) is still considered Turing complete, since all "physical" Turing machines are resource limited.

## C++ Templates

Although they were initially not supposed to, C++ templates are Turing-complete. For proof look at this [paper (pdf)](http://web.archive.org/web/20131101122512/http://ubietylab.net/ubigraph/content/Papers/pdf/CppTuring.pdf).

## TypeScript Type System

In a very similar fashion to C++, the type system of TypeScript can be used to [implement a prime check](https://github.com/Microsoft/TypeScript/issues/14833).

## Java Generics

Although Java set out to fix the errors of C++, it also fell into Turing-completeness eventually. [Radu Grigore built a parser generator for fluent interfaces](https://arxiv.org/pdf/1605.05274.pdf).

## X86 Mov

The paper [mov is Turing-complete](http://stedolan.net/research/mov.pdf) starts as this:

> It is well-known that the x86 instruction set is baroque, overcomplicated, and redundantly redundant. We show just how much fluff it has by demonstrating that it remains Turing-complete when reduced to just one instruction.

It inspired [movfuscator](https://github.com/xoreaxeaxeax/movfuscator), the single instruction C compiler. Building on this, there is [a branchless, mov-only version of the classic DOOM video game](https://github.com/xoreaxeaxeax/movfuscator/tree/master/validation/doom).

> This is thought to be entirely secure against the Meltdown and Spectre CPU vulnerabilities, which require speculative execution on branch instructions.
> 
> The mov-only DOOM renders approximately one frame every 7 hours, so playing this version requires somewhat increased patience.

## X86 MMU

The page fault handling in X86 can be used to [implement](https://github.com/jbangert/trapcc) a simple machine. Basically, a page fault pushes a word to the stack, which might underflow generating another trap. This mechanism provides a "subtract and branch if less than or equal to zero" instruction. Enough to implement a Turing machine.

Also see [the talk](http://www.youtube.com/watch?v=NGXvJ1GKBKM).

## Magic: The Gathering

Magic is a card game. [Apparently](http://boingboing.net/2012/09/12/magic-the-gathering.html), the rules are complex enough to reach Turing-completeness.

There is even a paper about it: [Magic: The Gathering is Turing Complete](https://arxiv.org/abs/1904.09828)

> Magic: The Gathering is a popular and famously complicated trading card game about magical combat. In this paper we show that optimal play in real-world Magic is at least as hard as the Halting Problem, solving a problem that has been open for a decade. To do this, we present a methodology for embedding an arbitrary Turing machine into a game of Magic such that the first player is guaranteed to win the game if and only if the Turing machine halts. Our result applies to how real Magic is played, can be achieved using standard-size tournament-legal decks, and does not rely on stochasticity or hidden information. Our result is also highly unusual in that all moves of both players are forced in the construction. This shows that even recognising who will win a game in which neither player has a non-trivial decision to make for the rest of the game is undecidable. We conclude with a discussion of the implications for a unified computational theory of games and remarks about the playability of such a board in a tournament setting.

And here is someone actual doing it with real cards.

## HTML5 + CSS3

While older HTML/CSS versions are not, with some new additions, you [can](http://lambda-the-ultimate.org/node/4222) write a [rule 110 automaton](http://en.wikipedia.org/wiki/Rule_110). The original page has [moved here](http://eli.fox-epste.in/rule110-full.html) and there is also [Github](https://github.com/elitheeli/stupid-machines/tree/master/rule110) and a video.

## Minecraft

Maybe this one was intentional, but the complexity of the computers people build in Minecraft is impressive.

## Dwarf Fortress

In a similar vein, the infamous Dwarf Fortress game provides various ways to build logical AND, OR, or NAND gates for [computing](http://dwarffortresswiki.org/index.php/DF2014:Computing). A very impressive example is a space invaders game in the following video.

## Doom

Doom is probably the most widely ported game but so far nobody has ported anything _onto_ Doom. [Jared Candelaria shows how to build all kinds of gates as Doom levels and monsters as signals](https://calabi-yau.space/blog/doom.html). Unfortunately, a maximum of 65535 gates is a very small target.

## SQL

SQL is usually not considered to be Turing-complete. However, with the features Common Table Expressions and Windowing, [SQL is Turing Complete](http://wiki.postgresql.org/wiki/Cyclic_Tag_System). The proof is in [these slides](http://assets.en.oreilly.com/1/event/27/High%20Performance%20SQL%20with%20PostgreSQL%20Presentation.pdf). Also, look a [Mandelbrot in SQL:2008](http://wiki.postgresql.org/wiki/Mandelbrot_set). A [broader exploration of various SQL-turing-machines](http://blog.coelho.net/database/2013/08/17/turing-sql-1/) was done by Fabien Coelho.

## (C Preprocessor)

The C preprocessor is only Turing-complete if executed in a loop which feeds the output to the input ad infinitum. An example has won the [IOCCC 2001](http://www.ioccc.org/years.html#2001) contest. Look into the herrmann1 entry. Nonetheless included in this list for coolness.

## Apache Rewrite Rules

Apache comes with the mod_rewrite plugin to rewrite URLs. These rules ultimately are a Turing complete [string rewrite system](http://olsner.se/2008/01/21/an-excursion-in-mod_rewrite/). Though the default configuration sets very low limits to recursion.

## (Pokemon Yellow)

A Pokemon game, which is [finished in 1minute 36seconds](http://tasvideos.org/2913S.html). The interesting point about this speedrun is the bug it exploits. Turns out the game logic itself is Turing-complete in the sense that you can write assembly by filling the player inventory appropriately. Executing this assembly is not part of the (intended) game though. I consider it close enough to keep it on this list. For example, someone turned the [game into a MIDI player](http://aurellem.org/vba-clojure/html/total-control.html).

## Scala Type System

Apparently, you can [implement the SKI calculus](http://michid.wordpress.com/2010/01/29/scala-type-level-encoding-of-the-ski-calculus/) (which is Turing complete) in Scala types. However, the compilers stack overflows at some point.

## MediaWiki Templates

In MediaWiki you can define [templates](http://en.wikipedia.org/wiki/Wikipedia:Template_messages). Since they provide recursion, you can apparently [implement lambda calculus](https://web.archive.org/web/20130101055126/http://mentalpolyphonics.com/posts/wikimedia-proves-greenspuns-tenth-law).

## Little Big Planet

Yet another game, where you can build a basic computer. For example, Conways Game of Life:

## Server Side Includes

While [SSI](http://en.wikipedia.org/wiki/Server_Side_Includes) was design as a scripting language, loops were not planned. The trick was to find [a way for recursion](http://www.janschejbal.de/projekte/ssituring/). The recursion is limited in all web servers.

## Sendmail

The venerable mail server is known for its arcane configuration. [Turns out](http://okmij.org/ftp/Computation/sendmail-as-turing-machine.txt) the configuration is also turing complete.

Actually, it [turned out two years earlier](https://web.archive.org/web/20091119062928/http://www.hopf.demon.co.uk/demon/turing.txt). For preservation, [Peter created a Docker container](https://github.com/pvanheus/sendmail-turing).

## Vim Normal-Mode

Let me just quote verbatim from [Github Readme](https://github.com/ealter/vim_turing_machine):

Ever wish you could run your code in your editor? Tired of installing huge dependencies like bash or python to run your scripts? Love Vim so much that you never want to leave it? Why not run your code... in your editor itself? Enter [vim_turing_machine](https://github.com/ealter/vim_turing_machine): a tool to allow you to run a Turing machine using only **normal mode** Vim commands.

And now you might ask, but what can we do on a Turing machine! To demonstrate its capabilities, we implemented a solution to the Merge Overlapping Intervals question and defined all the state transitions needed to solve this glorious problem. So next time you need to merge some intervals, don't hand-write a 10-line python program. Instead, take out your favorite editor and watch it solve the problem in less than a minute with 1400 state transitions!

But a simple naysayer may say, 'We already have vimscript! Why in God's name would I want to use a Turing machine instead?' To that, we retort: our Turing machine only uses normal mode. So you could theoretically just type in the program and then execute it without running a single script! No ex mode either! This project proves that normal mode in Vim is as powerful as any computer!

## Border Gateway Protocol (BGP)

BGP is an internet backbone technology, which manages the routes your data packages take. The paper "[Using Routers to Build Logic Circuits: How Powerful is BGP?](http://vanbever.eu/pdfs/vanbever_turing_icnp_2013.pdf)" prove Turing-Completeness via logic gate comparison.

## Excel

It is no surprise, since Excel includes a scripting language. However, there is a nice blog post, which shows how to [encode a Turing machine in Excel](http://www.felienne.com/archives/2974) using only formulas.

## Super Mario World

There are glitches in Super Mario World, such that you can write arbitrary values into some unused parts of the memory and then execute them. Here is a video, where a human (not a script!) creates a playable Flappy Bird clone this way.

## PowerPoint

Tom Wildenhain made a hilarious presentation (see video below) and also wrote [a paper "On the Turing Completeness of MS PowerPoint](https://www.andrew.cmu.edu/user/twildenh/PowerPointTM/Paper.pdf). It answers the question "whether any other applications are necessary at all, or if all computational tasks can be accomplished through the creation of dedicated .pptx files" with "Yes". Of course, he does not use VBScript or Macros. Wildenhain only used AutoShape, Animation, and hyperlinks. Nevertheless, Powerpoint is not really Turing-complete as the viewer is required to click for each step of the machine.

## Font Shaping

Here is [how someone made a font which is adding numbers](https://litherum.blogspot.com/2019/03/addition-font.html). Well, there is slight cheating involved since it only works with a shaping librarys where the hardcoded limitations are increased. I decided to include it nonetheless, because it is mostly meant for simple glyph replacements but can be used for arbitrary computations. The fact that it is contained in a very small box instead of having an infinite tape does not change that fact.

## JBIG2 Image Compression

Images can be Turing-complete as well. [In this case](https://googleprojectzero.blogspot.com/2021/12/a-deep-dive-into-nso-zero-click.html?m=1), it was even exploited in practice in [CVE-2021-30860](https://nvd.nist.gov/vuln/detail/CVE-2021-30860):

> JBIG2 doesn't have scripting capabilities, but when combined with a vulnerability, it does have the ability to emulate circuits of arbitrary logic gates operating on arbitrary memory. So why not just use that to build your own computer architecture and script that!? That's exactly what this exploit does. Using over 70,000 segment commands defining logical bit operations, they define a small computer architecture with features such as registers and a full 64-bit adder and comparator which they use to search memory and perform arithmetic operations. It's not as fast as Javascript, but it's fundamentally computationally equivalent.

## Stupid RDMA NICs

SmartNICs are networking devices where you can execute algorithms on. The best algorithm the old "stupid" NICs can do, is to transfer whole chunks of memory to do remote direct memory access (RDMA). Now [this paper](https://www.usenix.org/conference/nsdi22/presentation/reda) ([DOI](https://doi.org/10.48550/arXiv.2103.13351) link) shows that RDMA is actually Turing-complete and thus capable of any algorithm like SmartNICs:

> We present RedN, a principled, practical approach to implementing complex RDMA offloads, without requiring any hardware modifications. Using self-modifying RDMA chains, we lift the existing RDMA verbs interface to a Turing complete set of programming abstractions.

## (CPU Cache)

The paper [The Gates of Time: Improving Cache Attacks with Transient Execution](https://www.usenix.org/conference/usenixsecurity23/presentation/katzman) is about security on the surface, but maybe the most interesting part is the Turing-machine construction. We have to subtract some point, because the machine is not perfectly accurate.

> Our final example is Conway’s game of life. It consists of 6 464 gates per generation and correctly computes one generation of an 12 × 12 universe in 62.76% of the cases.

---

[Gwern also made a similar page](https://www.gwern.net/Turing-complete).

Also interesting: [When Goto Is Just Fine](https://beza1e1.tuxen.de/articles/when_goto_is_fine.html), [One Letter Programming Languages](https://beza1e1.tuxen.de/one_letter_proglangs.html), and [Hacker Titles for Business Cards](https://beza1e1.tuxen.de/articles/titles.html).

A list of things that were not supposed to be Turing-complete, but are.