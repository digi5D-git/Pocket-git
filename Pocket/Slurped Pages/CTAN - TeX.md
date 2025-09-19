---
URL: https://www.ctan.org/tex
Author: Contact Author
Abstract: |-
  TeX and associated programs such as LaTeX is a system for computer
        typesetting of documents. It is well known for its skill with mathematical
        and scientific text and other difficult typesetting jobs:  long or
        complicated and multi-lingual documents.
Extracted_On: 25.1409
Web_Title: "CTAN: TeX"
set:
  - tex
---

## What are TeX and its friends?

![](https://www.ctan.org/assets/teaser/M/tex-2.png)

TeX and associated programs such as LaTeX is a system for computer typesetting of documents. It is well known for its skill with mathematical and scientific text and other difficult typesetting jobs:  long or complicated and multi-lingual documents.

TeX systems produce output — on paper or on the computer screen — of the highest typographic quality. This quality is crucial for complex texts, where the reader's ability to understand the material depends on the clarity with which it is presented. TeX is Free software. It is available on almost every computer that people are using today. For the many advantages of the TeX see [below](#whytex).

Due to these advantages, TeX systems are now the standard communication tool in the sciences. For instance, TeX has been adopted by the [American Mathematical Society](http://www.ams.org/tex/) and many other professional societies as their preferred format. It is also widely used in other academic areas, in the humanities, and the social sciences.

![](https://www.ctan.org/assets/teaser/M/tex-1.png)

## History

[![Donald Ervin Knuth (cropped)](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Donald_Ervin_Knuth_%28cropped%29.jpg/256px-Donald_Ervin_Knuth_%28cropped%29.jpg)](https://commons.wikimedia.org/wiki/File:Donald_Ervin_Knuth_\(cropped\).jpg "Alex Handy, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons")  
Donald E. Knuth

The TeX project was started in 1978 by [Donald E. Knuth](http://www-cs-faculty.stanford.edu/~knuth/ "Link to page in Stanford"), while revising the second volume of his _Art of Computer Programming_. When he got the galleys back, he saw that the publisher had switched to a new digital typesetting system and was shocked at the poor quality.

He reasoned that because digital typesetting meant arranging 1's and 0's (ink and no ink) in the proper pattern, as a computer scientist he should be able to make a better job of it. He originally estimated that this would take six months but ultimately it took nearly ten years. He had to handle not only the challenges of routine typesetting such as right-justification and page formatting flexible enough to allow for different output styles, but also the additional demands of academic publishing – footnotes, floating figures and tables, etc. And, beyond that, he had to tell the computer how to typeset formulas and other technical material.

A year after he had begun, Knuth was invited to give one of the principal lectures at the AMS's annual meeting. He spoke on his work on TeX, presenting not only the typographical aspects but also the mathematical ideas behind the programs. TeX's popularity took off from there.

An important boost to that popularity came in 1985 with the introduction of LaTeX by Leslie Lamport. This is a set of commands that allows authors to interact with the system at a higher level than Knuth's original command set (called Plain TeX). Another boost came in 1990, when Hans Hagen introduced ConTeXt to the world; ConTeXt started with similar aims to (though a different focus from) LaTeX, and is also very widely used. Both LaTeX and ConTeXt have large and active user communities.

Today, TeX systems continue to be a well-known standard. They are used every day for research preprints, drafts of textbooks, and conference proceedings. And, active development of the software continues. Members of the community contribute a steady stream of new and updated enhancement packages, there have been great [improvements in LaTeX](http://www.latex-project.org/)'s font-handling, and also improvements in TeX's ability with multi-lingual texts, there is now a version of TeX [that outputs directly to PDF format](http://www.tug.org/applications/pdftex/), an extension [which seamlessly uses current font formats](http://en.wikipedia.org/wiki/XeTeX), and much more.

## Why TeX?

This section describes some of the major advantages of TeX systems.

### Compared to word processors

Most people have used a word processor, so a comparison may be helpful.

With a word processors your text is placed while you type it, referred to as “what you see is what you get.” In contrast, TeX is a formatter: it separates the steps of entering the material and placing it on the page.

To see the difference, consider how a typical user of each system might start a new section. In a word processor a typical user might start that section by hitting `<Enter>` twice to get two lines of vertical space, typing “`Section 1.2: New results`”, clicking to highlight that text, clicking to select a larger type size, clicking to select a new type style, and finally entering two more lines of vertical space. A typical user TeX user will type into a file the line “`\section{New results}`”. That is, a word processing user is formatting the text as they enter it, while the TeX user describes the meaning of the text and later TeX will format it.

Beginners like word processing but when they graduate to complex jobs the appeal fades. Word processing a twenty page technical article is hard; for instance, keeping the vertical space between sections uniform is error-prone, and so is making sure that all of the bibliographic entries follow the required format. In particular, very few people have both the knowledge and the eye to correctly lay out equations — people often say their equations “just don't look right.” That is, as a user becomes more experienced and knowledgable the TeX approach of having the typesetting done by the program becomes the better choice. (Some word processors offer as advanced features TeX-like facilities for organizing input text, although few users take advantage of them.)

### We'll give you ten good reasons ...

These are the reasons most often cited for using TeX, grouped into four areas: Output Quality, Superior Engineering, Freedom, and Popularity.

Output Quality

You write documents to be read. Your first concern should be: how good is the output?

1. TeX has the best output.

What you'll end up with is of the highest quality that a non-professional can produce.

This is especially holds for complex documents such as ones with mathematics; see [this sample](http://localhost/tex/rogers.pdf) from Rogers's _Recursive Functions_. It also holds for documents that are complex in other ways: with many tables, or many cross references or hyper-links, or just with many pages.

Even on simple documents TeX does a better job than a word processor. Compare [these samples of plain text](http://localhost/tex/zen.pdf) from Herigel's _Zen in the Art of Archery_ done in the word processor _Word_, and TeX. These are short and the typographic differences are subtle but even a non-expert will sense that the TeX page looks better. For instance, the word processor's page has some lines with wide gaps between words and some lines with too many words stuffed in; contrast the second paragraph's second line with its third. TeX's output is better.

2. TeX knows about typesetting.

As those plain text samples show, TeX's has more sophisticated typographical algorithms such as those for making paragraphs and for hyphenating.

TeX's expertise comes into its own in setting technical material. TeX lets the software handle this task as much as is possible. For instance, it automatically classifies each mathematical symbol as a variable, or a relation, etc., and sets them with appropriate amounts of surrounding space. It also sizes superscripts and subscripts, radicals, brackets, and many other things. The result is that, because your document follows the conventions of professional typesetting, your readers will know exactly what you mean. You almost never have to fret about the formulas. They just come out looking right.

The quality of output is the best reason to use TeX.

Superior Engineering

Everyone has been frustrated with software that is slow, fat, buggy, or that undergoes frequent incompatible version changes. TeX will not give you those troubles; from a Computer Science standpoint, TeX is very impressive.

3. TeX is fast.

On today's machines TeX is very fast. It is easy on memory and disk space, too.

4. TeX is stable.

It is in wide use, with a long history. It has been tested by millions of users, on demanding input. It will never eat your document. Never.

But there is more here than just that the program is reliable. TeX's designer has frozen the central engine, the actual `tex` program. Documents that run today will still run in ten years, or fifty. So “stable” means more than that it actually works. It means that it will continue to work, forever.

5. TeX is stable, but not rigid.

A system locked into 1978's technology would have gaps today. That's why TeX is extendible, so that innovations can be added on.

An example is the LaTeX macro package, which is the most popular way to use TeX today. It extends TeX by adding convenience features such as automatic cross references, sectioning, indexing, a table of contents, automatic numbering of chapters, sections, theorems, etc., in a variety of styles, and a straightforward but powerful way to make tables.

LaTeX also contains many features that encourage authors to structure documents by meaning rather than by appearance. For instance, a LaTeX author might indicate an acronym as “`the \ac{Tree Based Hashing} method`.” This approach has two advantages. First, since `\ac` is run by a computer and not hand-entered by a person, we can rely on type style, size, etc., being the same throughout the document; in this case the first time the acronym is used in the paper it will appear as “Tree Based Hashing (TBH)” while in later times “TBH” will be all that is shown. Second, once information on the meaning is in the computer then we can do more with it, perhaps by producing an index of acronyms.

And, LaTeX itself can be extended. There are thousands of “style files” that do everything from adapting the basics to the needs of the [American Math Society](ftp://ftp.ams.org/pub/tex/doc/amsmath/short-math-guide.pdf), to [making cross-references into hyper-references](ftp://tug.ctan.org/tex-archive/macros/latex/contrib/hyperref/doc/manual.pdf), all the way to allowing you to [add epigraphs](ftp://tug.ctan.org/tex-archive/macros/latex/contrib/epigraph/epigraph.pdf), the short quotations that sometimes decorate the start or end of a chapter.

6. The input is plain text.

TeX's source files are portable to any computing platform. They are compact; for instance, all of the files for [a 450 page textbook and 125 page answer supplement](http://joshua.smcvt.edu/linearalgebra) fit easily on one floppy disk. And, they integrate with other tools such as search programs.

Use of this type of input file stems from TeX's roots in the world of science and engineering where there is a tradition of close cooperation among colleagues. A binary input format, especially a proprietary one, is bad for cooperation: you probably have had to go through the trouble of upgrading a word processor version because coworkers upgraded and you could no longer read their files. With TeX systems that rarely happens — the last time that a 9LaTeX release lost even a small amount of compatibility was in 1995.

Another advantage of plain text is that the text may be automatically generated, for instance if it is drawn out of a database for a report. Getting a word processor into that work flow is a challenge. But TeX fits right in.

There are even ways to run TeX directly from XML input, which many people think is the standard input format of the future. So, with the TeX engine in the middle the input may be adjusted to meet your needs, and changing times.

7. The output can be anything.

As with inputting, TeX's outputting step is separate from its typesetting. The TeX engine's results can be converted to a printer language such as PostScript or to PDF or HTML, or, probably, to whatever will appear in the future. And, the typesetting — line breaks, etc. — will be the same no matter where your output appears. (Did you know that word processing output depends on the printer's fonts, so that if you email your work to someone with a different printer then for them the line and page breaks are likely to come out differently?)

Many people find that TeX's input language fits with how they think about their material. For instance, a scientist might describe a formula to a colleague over a telephone using TeX constructs.

Freedom

Most computer users have heard about Free and Open-Sourced software and know that, as with the GNU programs, Linux, Apache, Perl, etc., this style of development can yield software that is first class. TeX systems fall into this category.

8. TeX is free.

The source of the main `tex` engine is open; the [Free Software Foundation](http://www.fsf.org/) uses it for their documents. All of the other main components are open, also.

9. TeX runs anywhere.

Whatever platform meets your needs — Windows, Macintosh, a variety of Unix, or almost anything else — you can [get TeX](http://localhost/starter/), either freely distributed or in a commercial version.

So although the core of TeX was written some time ago it fits well with today's trends.

Popularity

Using the same system as many other people has advantages. For instance, you can get answers to your questions. And, because of this large user base, your system is sure to be around for years.

10. TeX is the standard.

Most scientists, especially academic scientists, know TeX. Research preprints, drafts of textbooks, and conference proceedings, all are regularly produced with TeX. As a result, many publishers of technical material are set up to work with it.

Because it is the standard, TeX's support by other technical software is the best. For example, there are editing modes to make input convenient, such as [AUCTeX for Emacs](http://www.gnu.org/software/auctex/). Another example is that all major computer algebra systems, such as [SAGE](http://www.sagemath.org/), [Maxima](http://maxima.sourceforge.net/), etc., will give output in TeX. And no doubt technical software developed in the future will support TeX.

In addition, TeX is used by many people outside of the sciences, for all of the reasons given in this document. For instance, there is a way to produce beautiful [critical](http://localhost/tex-archive/macros/plain/contrib/edmac) [edition](http://localhost/tex-archive/macros/latex/contrib/ledmac) [texts](http://localhost/tex-archive/macros/latex/contrib/ledmac/ledarden.eps).

Having to use a bad system simply because it is popular would be sad. But nonetheless, the existence of such a base is itself one argument in favor of a software package.

## More

- [What is TeX?](http://www.tug.org/TUGboat/Articles/tb24-2/tb77waud-what.pdf) by Doug Waud gives an expanded introduction.
- [TeX advertising brochure](http://www.ucc.ie/TeX/leaflet.pdf) by Peter Flynn
- [The TeX showcase](http://www.tug.org/texshowcase/) is pure showmanship.

## In Summary …

TeX is a typesetting system that produces publication-quality output, even for difficult material such as mathematics. It is freely available. Its design makes it shine in areas where the system familiar to most beginning computer users, word processors, falls short. Briefly, that is, it was designed well.