---
URL: https://www.latex-project.org/help/documentation/#general-documentation
Abstract: References to the official LaTeX documentation and to documentation that is available on the net. Also contains a non-English documentation  section.
Extracted_On: 25.1409
Web_Title: LaTeX Documentation
set:
  - latex
---

---

This page contains references to core documentation about LaTeX written by the [LaTeX team](https://www.latex-project.org/about/team/). Articles on specific topics, talks, etc. can be found on [the publication page](https://www.latex-project.org/publications/indexbytopic/) indexed by topic.

In addition pointer to documentation in other languages (usually developed and maintained by user groups) is given. To find documentation that is available elsewhere on the net, visit the [links page](https://www.latex-project.org/help/links). Also, there's a whole page dedicated to [books on LaTeX and related topics](https://www.latex-project.org/help/books).

If you know about a good resource of TeX and related documentation not listed here or on the [links page](https://www.latex-project.org/help/links), please [contact us](https://www.latex-project.org/contact).

- [Distributed LaTeX documentation](https://www.latex-project.org/help/documentation/#documentation-distributed-with-latex)
    - [General documentation](https://www.latex-project.org/help/documentation/#general-documentation)
    - [Hook management](https://www.latex-project.org/help/documentation/#documentation-of-the-new-hook-management)
    - [Page mark management](https://www.latex-project.org/help/documentation/#documentation-of-the-new-mark-mechanism)
    - [Typesetting mathematics](https://www.latex-project.org/help/documentation/#typesetting-complex-mathematics)
    - [Japanese translations](https://www.latex-project.org/help/documentation/#japanese-translations-of-documentation)
    - [Summary of changes by release](https://www.latex-project.org/help/documentation/#quick-summary-of-changes-by-release)
    - [Source code documentation](https://www.latex-project.org/help/documentation/#source-code-documentation)
- [Other non-english documentation resources](https://www.latex-project.org/help/documentation/#other-non-english-documentation)
    - [German](https://www.latex-project.org/help/documentation/#german)
    - [French](https://www.latex-project.org/help/documentation/#french)

---

## Documentation distributed with LaTeX

### General documentation

A short introduction to newer features of LaTeX is given in the following document:

- [LaTeX2e for authors — new features](https://www.latex-project.org/help/documentation/usrguide.pdf)

The original guide describing commands introduced with LaTeX2e in 1994 (with some focus on the differences between the old LaTeX 2.09 and current standard LaTeX2e) is available as well. It remains relevant because the commands introduced between 1994 and 2020 are not included in the previous document:

- [LaTeX2e for authors — historic version](https://www.latex-project.org/help/documentation/usrguide-historic.pdf)

For more extensive introductory documentation take a look at the [links to contributed documentation](https://www.latex-project.org/help/links/) that have their own page.

More advanced documentation about core LaTeX, which is available via the net includes:

- [LaTeX2e for class and package writers — current version](https://www.latex-project.org/help/documentation/clsguide.pdf)
- [LaTeX2e for class and package writers — historic version](https://www.latex-project.org/help/documentation/clsguide-historic.pdf) (the original document with updates until 2020 with more focus on changes between LaTeX 2.09 and LaTeX2e)
- [LaTeX2e font selection](https://www.latex-project.org/help/documentation/fntguide.pdf)
- [LaTeX2e font encodings](https://www.latex-project.org/help/documentation/encguide.pdf)
- [Cyrillic languages support in LaTeX](https://www.latex-project.org/help/documentation/cyrguide.pdf)
- [Configuration options for LaTeX2e](https://www.latex-project.org/help/documentation/cfgguide.pdf)
- [Modifying LaTeX](https://www.latex-project.org/help/documentation/modguide.pdf)
- [The LaTeX3 Project](https://www.latex-project.org/help/documentation/ltx3info.pdf)

The LaTeX3 programming layer (which is part of the LaTeX format) is documented in

- [The L3 programming layer interface documentation](https://mirrors.ctan.org/macros/latex/required/l3kernel/interface3.pdf)

### Documentation of the new hook management

The hook management introduced in 2020 is largely intended for package developers. However, most of the available hooks can also be useful for document authors. The documentation is currently split across several documents:

- [Overview of LaTeX’s hook management and core hooks — `lthooks-doc.pdf`](https://www.latex-project.org/help/documentation/lthooks-doc.pdf)
- [Generic hooks for document-level commands — `ltcmdhooks-doc.pdf`](https://www.latex-project.org/help/documentation/ltcmdhooks-doc.pdf)
- [Hooks available when reading files — `ltfilehook-doc.pdf`](https://www.latex-project.org/help/documentation/ltfilehook-doc.pdf)
- [Hooks available when writing pages — `ltshipout-doc.pdf`](https://www.latex-project.org/help/documentation/ltshipout-doc.pdf) (e.g., for background pictures, etc.)
- [Hooks available when processing paragraphs — `ltpara-doc.pdf`](https://www.latex-project.org/help/documentation/ltpara-doc.pdf)

### Documentation of the new mark mechanism

The new mark mechanism introduced in 2022 offers arbitrary many independent marks and resolves the issues with LaTeX legacy marks (available through `\markbox` and `\markright`). The old mechanism remains available so that classes using it continue to work without any updates.

- [Overview of LaTeX’s new mark mechanism — `ltmarks-doc.pdf`](https://www.latex-project.org/help/documentation/ltmarks-doc.pdf)

### Typesetting complex mathematics

Specifically targeting the typesetting of mathematics is:

- [User’s Guide for the amsmath Package (Version 2.1)](https://www.latex-project.org/help/documentation/amsldoc.pdf)

### Japanese translations of documentation

Yukitoshi FUJIMURA kindly translated two of the above documents to the Japanese language. These are

- [著者のための LaTeX 2e](https://www.latex-project.org/help/documentation/usrguide_jpn.pdf) (LaTeX2e for authors) [[source]](https://www.latex-project.org/help/documentation/usrguide_jpn.tex)
- [amsmath パッケージユーザガイド（Version2.1）](https://www.latex-project.org/help/documentation/amsldoc_jpn.pdf) (User’s Guide for the amsmath Package) [[source]](https://www.latex-project.org/help/documentation/amsldoc_jpn.tex)

He also provided a translation of “Short Math Guide for LaTeX” distributed and maintained by the American Mathematical Society (AMS):

- [はやわかり LaTeX で数式組版](https://www.latex-project.org/help/documentation/short-math-guide_jpn.pdf) (Short Math Guide for LaTeX) [[source]](https://www.latex-project.org/help/documentation/short-math-guide_jpn.tex)

Here are [his comments on the translation](https://www.latex-project.org/help/documentation/readme_jpn/).

### Quick summary of changes by release

Changes made to the LaTeX kernel or to core packages maintained by the LaTeX team are discussed in some detail in the [LaTeX News Newsletters](https://www.latex-project.org/news/latex2e-news/) that come as part of each release.

A document with all available issues bundled together in their historical order is [`ltnews.pdf`](https://www.latex-project.org/news/latex2e-news/ltnews.pdf).

### Source code documentation

The full documentation of the source code with all commands and their implementation can be obtained by processing `source2e.tex` distributed as part of the LaTeX2e distribution. A compiled version (from the current release) with a list of all major changes and an index of all commands and their usage within the kernel is

- [The LaTeX2e Sources (1000+ pages)](https://mirrors.ctan.org/macros/latex/base/source2e.pdf)
- [The L3 programming layer sources (1000+ pages)](https://mirrors.ctan.org/macros/latex/required/l3kernel/source3.pdf)

As a companion document Martin Scharrer compiled a useful reference list with links back into the 2e source document if both are stored in the same directory:

- [List of internal LaTeX2e Macros useful to Package Authors](https://mirrors.ctan.org/info/macros2e/macros2e.pdf)

For the implementation of the standard classes `article`, `report`, and `book` there also exists a document that contains the complete sources with commentary:

- [Standard Document Classes for LaTeX2e](https://www.latex-project.org/help/documentation/classes.pdf)

In 2015 we introduced a roll-back/roll-forward functionality by which it becomes possible to reset the kernel code (though not external packages at this stage) to the behavior that it had on a particular date. This can be useful when processing older documents. It is documented here:

- [The latexrelease package](https://www.latex-project.org/help/documentation/latexrelease.pdf)

## Other non-english documentation

There is a lot of documentation in languages other than English. Lists of books and other resources in other languages are maintained by TeX user groups in the respective countries. The following are known to us:

### German

- [German LaTeX documentation maintained by German TeX User Group Dante e.V.](https://www.dante.de/)

### French

- [French LaTeX documentation maintained by the Francophone TeX Users Group GUTenberg](https://www.gutenberg.eu.org/-TeXniques-)
- [Tout ce que vous avez toujours voulu savoir sur LaTeX](http://lozzone.free.fr/index.php?vlunch=latex)
- [A collection of french LaTeX documentation](https://www.framasoft.net/rubrique266.html) maintained by [Framasoft](http://www.framasoft.net/)
- [Apprends LaTeX!](http://www.babafou.eu.org/Apprends_LaTeX/)

---

---

[

### LaTeX Books

List of books on LaTeX in English, French, German, and Spanish.

](https://www.latex-project.org/help/books/)

[

### Useful Links

Links to contributed documentation, tutorials, videos, communities, etc.

](https://www.latex-project.org/help/links/)

[

### Getting LaTeX

Get LaTeX for Linux, Mac OS X, Windows and Online.

](https://www.latex-project.org/get/)