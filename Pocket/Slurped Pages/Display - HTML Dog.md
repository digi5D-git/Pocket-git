---
URL: https://www.htmldog.com/guides/css/intermediate/display/
Abstract: A key trick to the manipulation of HTML elements is understanding that there’s nothing at all special about how most of them work. Most pages could be made up from just a few tags that can be styled any which way you choose. The browser’s default visual representation of most HTML elements consist of varying font styles, margins, padding and, essentially, display types.
Extracted_On: 25.1709
Web_Title: Display | HTML Dog
set:
  - html
---

A key trick to the manipulation of HTML elements is understanding that there’s nothing at all special about how most of them work. Most pages could be made up from just a few tags that can be styled any which way you choose. The browser’s default visual representation of most HTML elements consist of varying font styles, margins, padding and, essentially, **display types**.

The most fundamental types of display are **inline**, **block** and **none** and they can be manipulated with the [`display`](https://www.htmldog.com/references/css/properties/display/) property and the shockingly surprising values `inline`, `block` and `none`.

## Inline

`inline` does just what it says — boxes that are displayed inline follow the flow of a line. Anchor (links) and emphasis are examples of elements that are displayed inline by default.

![](https://www.htmldog.com/figures/displayInline.png)

Inline boxes.

The following code, for example, will cause all list items in a list to appear next to each other in one continuous line rather than each one having its own line:

```

li { display: inline }
```

## Block

`block` makes a box standalone, fitting the entire width of its containing box, with an effective line break before and after it. Unlike inline boxes, block boxes allow greater manipulation of height, margins, and padding. Heading and paragraph elements are examples of elements that are displayed this way by default in browsers.

![](https://www.htmldog.com/figures/displayBlock.png)

Block boxes.

The next example will make all links in “nav” large clickable blocks:

```

#navigation a {
    display: block;
    padding: 20px 10px;
}
```

## None

`none`, well, doesn’t display a box at all, which may sound pretty useless but can be used to good effect with dynamic effects, such as switching extended information on and off at the click of a link, or in alternative stylesheets.

The following code, for example, could be used in a print stylesheet to basically “turn off” the display of elements such as navigation that would be useless in that situation:

```

#navigation, #related_links { display: none }
```

## Tables

OK. So that was the basics. Now for something a little more advanced and rarely used…

Perhaps the best way to understand the table-related [`display`](https://www.htmldog.com/references/css/properties/display/) property values is to think of HTML tables. `table` is the initial display and you can mimic the [`tr`](https://www.htmldog.com/references/html/tags/tr/) and [`td`](https://www.htmldog.com/references/html/tags/td/) elements with the `table-row` and `table-cell` property values respectively.

The [`display`](https://www.htmldog.com/references/css/properties/display/) property goes further by offering `table-column`, `table-row-group`, `table-column-group`, `table-header-group`, `table-footer-group` and `table-caption` as values, which are all quite self-descriptive. The immediately obvious benefit of these values is that you can construct a table by columns, rather than the row-biased method used in HTML.

Finally, the value `inline-table` basically sets the table without line breaks before and after it.

## Other display types

`list-item` displays a box in the way that you would usually expect an [`li`](https://www.htmldog.com/references/html/tags/li/) HTML element to be displayed. To work properly then, elements displayed this way should be nested in a [`ul`](https://www.htmldog.com/references/html/tags/ul/) or [`ol`](https://www.htmldog.com/references/html/tags/ol/) element.

`run-in` makes a box either in-line or block depending on the display of its parent.