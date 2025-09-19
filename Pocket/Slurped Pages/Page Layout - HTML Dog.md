---
URL: https://www.htmldog.com/guides/css/intermediate/layout/
Abstract: "In the olden days, pre-hominid apes used HTML tables to layout web
  pages. Hilarious, right?! But CSS, that 2001: A Space Odyssey monolith, soon
  came along and changed all of that."
Extracted_On: 25.1709
Web_Title: Page Layout | HTML Dog
---

In the olden days, pre-hominid apes used HTML **tables** to layout web pages. Hilarious, right?! But CSS, that 2001: A Space Odyssey monolith, soon came along and changed all of that.

Layout with CSS is easy. You just take a chunk of your page and shove it wherever you choose. You can place these chunks **absolutely** or **relative** to another chunk.

## Positioning

The [`position`](https://www.htmldog.com/references/css/properties/position/) property is used to define whether a box is absolute, relative, static or fixed:

- `static` is the default value and renders a box in the normal order of things, as they appear in the HTML.
- `relative` is much like `static` but the box can be offset from its original position with the properties `top`, `right`, `bottom` and `left`.
- `absolute` pulls a box out of the normal flow of the HTML and delivers it to a world all of its own. In this crazy little world, the absolute box can be placed anywhere on the page using `top`, `right`, `bottom` and `left`.
- `fixed` behaves like `absolute`, but it will absolutely position a box in reference to the browser window as opposed to the web page, so fixed boxes should stay exactly where they are on the screen even when the page is scrolled.

### Layout using absolute positioning

You can create a traditional two-column layout with absolute positioning if you have something like the following HTML:

```

<div id="navigation">
    <ul>
        <li><a href="https://www.htmldog.com/guides/css/intermediate/layout/this.html">This</a></li>
        <li><a href="https://www.htmldog.com/guides/css/intermediate/layout/that.html">That</a></li>
        <li><a href="https://www.htmldog.com/guides/css/intermediate/layout/theOther.html">The Other</a></li>
    </ul>
</div>

<div id="content">
    <h1>Ra ra banjo banjo</h1>
    <p>Welcome to the Ra ra banjo banjo page. Ra ra banjo banjo. Ra ra banjo banjo. Ra ra banjo banjo.</p>
    <p>(Ra ra banjo banjo)</p>
</div>
```

And if you apply the following CSS:

```

#navigation {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
}

#content {
    margin-left: 200px;
}
```

You will see that this will set the navigation bar to the left and set the width to 200 pixels. Because the navigation is absolutely positioned, it has nothing to do with the flow of the rest of the page so all that is needed is to set the left margin of the content area to be equal to the width of the navigation bar.

How stupidly easy! And you aren’t limited to this two-column approach. With clever positioning, you can arrange as many blocks as you like. If you wanted to add a third column, for example, you could add a “navigation2” chunk to the HTML and change the CSS to:

```

#navigation {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
}

#navigation2 {
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
}

#content {
    margin: 0 200px; /* setting top and bottom margin to 0 and right and left margin to 200px */
}
```

The only downside to absolutely positioned boxes is that because they live in a world of their own, there is no way of accurately determining where they end. If you were to use the examples above and all of your pages had small navigation bars and large content areas, you would be okay, but, especially when using relative values for widths and sizes, you often have to abandon any hope of placing anything, such as a footer, below these boxes. If you wanted to do such a thing, one way would be to **float** your chunks, rather than absolutely positioning them.

## Floating

Floating a box will shift it to the right or left of a line, with surrounding content flowing around it.

Floating is normally used to shift around smaller chunks within a page, such as pushing a navigation link to the right of a container, but it can also be used with bigger chunks, such as navigation columns.

Using [`float`](https://www.htmldog.com/references/css/properties/float/), you can `float: left` or `float: right`.

Working with the same HTML, you could apply the following CSS:

```

#navigation {
    float: left;
    width: 200px;
}

#navigation2 {
    float: right;
    width: 200px;
}

#content {
    margin: 0 200px;
}
```

Then, if you do not want the next box to wrap around the floating objects, you can apply the [`clear`](https://www.htmldog.com/references/css/properties/clear/) property:

- `clear: left` will clear left floated boxes
- `clear: right` will clear right floated boxes
- `clear: both` will clear both left and right floated boxes.

So if, for example, you wanted a footer in your page, you could add a chunk of HTML…

```

<div id="footer">
    <p>Footer! Hoorah!</p>
</div>
```

…and then add the following CSS:

```

#footer {
    clear: both;
}
```

And there you have it. A footer that will appear underneath all columns, regardless of the length of any of them.