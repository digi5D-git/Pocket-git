---
URL: https://www.htmldog.com/guides/css/intermediate/pseudoelements/
Abstract: The first-letter pseudo element applies to the first letter inside a
  box and first-line to the top-most displayed line in a box.
Extracted_On: 25.1709
Web_Title: Pseudo Elements | HTML Dog
---

## First Letters and First Lines

The `first-letter` pseudo element applies to the first letter inside a box and `first-line` to the top-most displayed line in a box.

![](https://www.htmldog.com/figures/firstLetterFirstLine.png)

Targeting the first letter and first line of a paragraph with pseudo elements.

As an example, you could create drop caps and a bold first-line for paragraphs with something like this:

```

p {
    font-size: 12px;
}

p:first-letter {
    font-size: 24px;
    float: left;
}

p:first-line {
    font-weight: bold;
}
```

## Before and After Content

The `before` and `after` pseudo elements are used in conjunction with the [`content`](https://www.htmldog.com/references/css/properties/content/) property to place content either side of a box without touching the HTML.

The value of the [`content`](https://www.htmldog.com/references/css/properties/content/) property can be `open-quote`, `close-quote`, any **string** enclosed in quotation marks, or any **image**, using `url(imagename)`.

```

blockquote:before {
    content: open-quote;
}

blockquote:after {
    content: close-quote;
}

li:before {
    content: "POW! ";
}

p:before {
    content: url(images/jam.jpg);
}
```

The [`content`](https://www.htmldog.com/references/css/properties/content/) property effectively creates another box to play with so you can also add styles to the “presentational content”:

```

li:before {
    content: "POW! ";
    background: red;
    color: #fc0;
}
```