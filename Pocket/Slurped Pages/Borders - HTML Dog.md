---
URL: https://www.htmldog.com/guides/css/beginner/borders/
Abstract: Borders can be applied to most HTML elements within the body.
Extracted_On: 25.1709
Web_Title: Borders | HTML Dog
set:
  - html
---

**Borders** can be applied to most HTML elements within the body.

To make a border around an element, all you need is [`border-style`](https://www.htmldog.com/references/css/properties/border-style/). The values can be `solid`, `dotted`, `dashed`, `double`, `groove`, `ridge`, `inset` and `outset`.

![](https://www.htmldog.com/figures/border-style.png)

[Basic border styles.](https://www.htmldog.com/examples/borders/)

[`border-width`](https://www.htmldog.com/references/css/properties/border-width/) sets the **width** of the border, most commonly using pixels as a value. There are also properties for [`border-top-width`](https://www.htmldog.com/references/css/properties/border-top-width/), [`border-right-width`](https://www.htmldog.com/references/css/properties/border-right-width/), [`border-bottom-width`](https://www.htmldog.com/references/css/properties/border-bottom-width/) and [`border-left-width`](https://www.htmldog.com/references/css/properties/border-left-width/).

Finally, [`border-color`](https://www.htmldog.com/references/css/properties/border-color/) sets the **color**.

Add the following code to the CSS file:

```

h2 {
    border-style: dashed;
    border-width: 3px;
    border-left-width: 10px;
    border-right-width: 10px;
    border-color: red;
}
```

This will make a red dashed border around all HTML secondary headers (the [`h2`](https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/) element) that is 3 pixels wide on the top and bottom and 10 pixels wide on the left and right (these having over-ridden the 3 pixel wide width of the entire border).

##### REFERENCE

-  [CSS Property: border-style](https://www.htmldog.com/references/css/properties/border-style/)
-  [CSS Property: border-width](https://www.htmldog.com/references/css/properties/border-width/)
-  [CSS Property: border-color](https://www.htmldog.com/references/css/properties/border-color/)
-  [CSS Property: border](https://www.htmldog.com/references/css/properties/border/)
