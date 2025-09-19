---
URL: https://www.htmldog.com/guides/css/beginner/text/
Abstract: You can alter the size and shape of the text on a web page with a
  range of properties.
Extracted_On: 25.1709
Web_Title: Text | HTML Dog
---

You can alter the size and shape of the text on a web page with a range of properties.

## font-family

This is the font itself, such as Times New Roman, Arial, or Verdana.

The user’s browser has to be able to find the font you specify, which, in most cases, means it needs to be on **their** computer so there is little point in using obscure fonts that are only sitting on **your** computer. There are a select few “**safe**” fonts (the most commonly used are Arial, Verdana and Times New Roman), but you can specify more than one font, separated by **commas**. The purpose of this is that if the user does not have the first font you specify, the browser will go through the list until it finds one it does have. This is useful because different computers sometimes have different fonts installed. So `font-family: arial, helvetica, serif`, will look for the Arial font first and, if the browser can’t find it, it will search for Helvetica, and then a common serif font.

Note: if the name of a font is more than one word, it should be put in quotation marks, such as `font-family: "Times New Roman"`.

## font-size

[`font-size`](https://www.htmldog.com/references/css/properties/font-size/) sets the size of the font. Be careful with this — text such as headings should not just be an HTML paragraph ([`p`](https://www.htmldog.com/references/html/tags/p/)) in a large font - you should still use headings ([`h1`](https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/), [`h2`](https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/) etc.) even though, in practice, you could make the font-size of a paragraph larger than that of a heading (not recommended for sensible people).

## font-weight

[`font-weight`](https://www.htmldog.com/references/css/properties/font-weight/) states whether the text is bold or not. Most commonly this is used as `font-weight: bold` or `font-weight: normal` but other values are `bolder`, `lighter`, `100`, `200`, `300`, `400` (same as `normal`), `500`, `600`, `700` (same as `bold`), `800` or `900`.

![](https://www.htmldog.com/figures/weightStyle.gif)

[`font-weight`](https://www.htmldog.com/references/css/properties/font-weight/), [`font-style`](https://www.htmldog.com/references/css/properties/font-style/), [`font-variant`](https://www.htmldog.com/references/css/properties/font-variant/), and [`text-transform`](https://www.htmldog.com/references/css/properties/text-transform/).

## font-style

[`font-style`](https://www.htmldog.com/references/css/properties/font-style/) states whether the text is italic or not. It can be `font-style: italic` or `font-style: normal`.

## text-decoration

[`text-decoration`](https://www.htmldog.com/references/css/properties/text-decoration/) states whether the text has got a line running under, over, or through it.

- `text-decoration: underline`, does what you would expect.
- `text-decoration: overline` places a line above the text.
- `text-decoration: line-through` puts a line through the text (“strike-through”).

This property is usually used to decorate links and you can specify no underline with `text-decoration: none`.

## text-transform

[`text-transform`](https://www.htmldog.com/references/css/properties/text-transform/) will change the case of the text.

- `text-transform: capitalize` turns the first letter of every word into uppercase.
- `text-transform: uppercase` turns everything into uppercase.
- `text-transform: lowercase` turns everything into lowercase.
- `text-transform: none` I’ll leave for you to work out.

So, a few of these things used together might look like this:

```

body {
    font-family: arial, helvetica, sans-serif;
    font-size: 14px;
}

h1 {
    font-size: 2em;
}

h2 {
    font-size: 1.5em;
}

a {
    text-decoration: none;
}

strong {
    font-style: italic;
    text-transform: uppercase;
}
```

## Text spacing

Before we move on from this introduction to styling text, a quick look at how to space out the text on a page.

![](https://www.htmldog.com/figures/spacingOutText.gif)

[Spacing out text](https://www.htmldog.com/examples/textalign/)

The [`letter-spacing`](https://www.htmldog.com/references/css/properties/letter-spacing/) and [`word-spacing`](https://www.htmldog.com/references/css/properties/word-spacing/) properties are for spacing between letters or words. The value can be a length or `normal`.

The [`line-height`](https://www.htmldog.com/references/css/properties/line-height/) property sets the height of the lines in an element, such as a paragraph, without adjusting the size of the font. It can be a number (which specifies a multiple of the font size, so “2” will be two times the font size, for example), a length, a percentage, or `normal`.

The [`text-align`](https://www.htmldog.com/references/css/properties/text-align/) property will align the text inside an element to left, right, center, or justify.

The [`text-indent`](https://www.htmldog.com/references/css/properties/text-indent/) property will indent the first line of a paragraph, for example, to a given length or percentage. This is a style traditionally used in print, but rarely in digital media such as the web.

```

p {
    letter-spacing: 0.5em;
    word-spacing: 2em;
    line-height: 1.5;
    text-align: center;
}
```