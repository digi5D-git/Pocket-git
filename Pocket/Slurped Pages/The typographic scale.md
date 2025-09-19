---
URL: https://spencermortensen.com/articles/typographic-scale/
Author: Spencer Mortensen
Site: Spencer Mortensen
published: 11.1611
Abstract: The typographic scale has been used for centuries to choose harmonious
  font sizes. It has been likened to a harmonious musical scale. But there are
  *flaws* in those historical values.
Extracted_On: 25.1909
Web_Title: The typographic scale
---

The typographic scale is the bedrock of modern typography, used for centuries to choose harmonious font sizes. But there are _flaws_ in those historical values.

This is the classic typographic scale, as recorded by Mr. Bringhurst in The Elements of Typographic Style:

The classic typographic scale is a collection of font sizes that are in visual harmony. A typographer chooses sizes from a typographic scale in the same way that a musician chooses notes from a musical scale.

Like a musical scale, a typographic scale is a _scale_, so it must obey the scaling property: if _f_ is a size in the scale, then _rf_ must also be a size in the scale, where _r_ is the ratio of the scale.

The font sizes 6, 12, 24, …, all appear in the scale. Each size is twice as big as the last, so the _ratio_ of the classic typographic scale is _two_. The ratio in classical typography is the _same_ as the ratio in classical music.

The second defining property of any scale is the number of notes, _n_. In classical music, there are _twelve_ notes in an octave. In the classical typography, there are _five_ sizes in an interval. (We rarely nest content deeper than one or two levels, so it makes sense that a typographic scale would have only a few notes.)

The third and final property of any scale is its fundamental frequency, _f_0. In the chromatic scale, this is the Stuttgart pitch. In the classic typographic scale, the fundamental frequency is the _pica_. This value, 1 pica = 12 pt, is the baseline font size used in print typography.

And here is the formula for the frequency _fi_ of the _i_th note in the scale:

![\\huge{f_i = f_0 r^\\frac{i}{n}}](https://spencermortensen.com/articles/typographic-scale/images/formula.png)

Using this formula, we can calculate every font size in the classic typographic scale:

**6**_a_**7**_a_**8**_a_**9**_a_**10**_a_**12**_a_**14**_a_**16**_a_**18**_a_**21**_a_**24**_a_**28**_a_**32**_a_**36**_a_**42**_a_**48**_a_**55**_a_**63**_a_**73**_a_**84**_a_**96**_a_

And _now_ we can _compare_ those mathematical values against the historical values guessed by the early human typographers:

**6**_a__a__a__a__a_

**12**_a_

_a__a__a__a_**24**_a_**28**_a_

**32**_a_

**36**_a_**42**_a_**48**_a_**55**_a_

**63**_a_

**73**_a_

**84**_a_**96**_a_

The human intuition was very close, but there _are_ discrepancies:

**A note is missing.** There is no 42 pt font size, despite it being perfectly in tune with the other font sizes. It is _necessary_ to complete the progression 10 , 21 pt, _, 84 pt, but it is simply _not there_.

**There is an extra note.** Every interval of the classic typographic scale has five notes, but the original typographic charts have _six_ notes in the first interval. _There is an extra note!_ The 11 pt size doesn’t belong in the scale.

**There is a semitone.** The 30 pt font size is midway between two notes, 28 pt and 32 pt, which makes it a _semitone_. The first two intervals are correct, then the mistake appears, and then it gets doubled up into the next interval as well (60 pt).

And there is a rounding error: The 72 pt font size got rounded down to the nearest pica, which puts it slightly out of tune—by 1 pt.

## Applications in design

The point (pt) is the standard unit of print typography. However, some media are better suited to other units of measure—such as web typography, with its em and px units. It would be helpful if we could adapt the classic typographic scale to _all_ media.

We know from music that changing the scale can change the “feel” of a composition: Perhaps something similar would be possible in a typographic composition?

There are three ways you can change a scale:

By changing the **fundamental frequency**, _f_0, you can adapt an existing scale to a new medium. For example, _f_0 = 12 pt generates the font sizes for print typography, whereas _f_0 = 1 em generates the font sizes for web typography.

By changing the **number of notes**, _n_, you change the _quantity_ of font sizes in your palette.

By changing the **ratio**, _r_, you change the impact of your headings. When averaged over many websites, the title is almost exactly twice the size of the body. So there is one value for _r_ that is particularly interesting: the musical ratio, _r_ = 2. If you set your typography in a musical ratio, your copy will have a beautiful property: the title and body are the same note, one interval apart.

Here are some of the most beautiful musical scales:

## [musical tritonic scale](https://type-scale.spencermortensen.com/3/2/1em)

- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum

_n_ = 3, _r_ = 2, _f_0 = _1_ units:

`h1 { font-size: 2em; } h2 { font-size: 1.5874em; } h3 { font-size: 1.2599em; } p { font-size: 1em; } footer { font-size: .7937em; }`

## [musical tetratonic scale](https://type-scale.spencermortensen.com/4/2/1em)

- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum

_n_ = 4, _r_ = 2, _f_0 = _1_ units:

`h1 { font-size: 2em; } h2 { font-size: 1.6818em; } h3 { font-size: 1.4142em; } h4 { font-size: 1.1892em; } p { font-size: 1em; } footer { font-size: .8409em; }`

## [classic typographic scale](https://type-scale.spencermortensen.com/5/2/1em)

- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum

_n_ = 5, _r_ = 2, _f_0 = _1_ units:

`h1 { font-size: 2em; } h2 { font-size: 1.7411em; } h3 { font-size: 1.5157em; } h4 { font-size: 1.3195em; } h5 { font-size: 1.1487em; } p { font-size: 1em; } footer { font-size: .8706em; }`

The classic typographic scale is a musical scale.

But there _are_ alternatives. For example, some designs are based on the golden ratio (_r_ = _ϕ_ ≈ 1.618034); those designs will be most beautiful when set in a golden typographic scale:

## [golden ditonic scale](https://type-scale.spencermortensen.com/3/2.0582)

- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum

_n_ = 2, _r_ = _ϕ_, _f_0 = _1_ units:

`h1 { font-size: 2.0582em; } h2 { font-size: 1.618em; } h3 { font-size: 1.272em; } p { font-size: 1em; } footer { font-size: .7862em; }`

In other cases, a custom solution may be the most appropriate. For example, a website with consistently short, punchy titles may be well suited to a scale with a higher ratio (such as _r_ = 3). This would add impact to the headings, while remaining in harmony with the rest of the page.

And here is a calculator, so you can try out your ideas!

## [classic typographic scale](https://type-scale.spencermortensen.com/5/2/1em)

- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum

_n_ = , _r_ = _2_, _f_0 = _1_ units:

`h1 { font-size: 2em; } h2 { font-size: 1.7411em; } h3 { font-size: 1.5157em; } h4 { font-size: 1.3195em; } h5 { font-size: 1.1487em; } p { font-size: 1em; } footer { font-size: .8706em; }`