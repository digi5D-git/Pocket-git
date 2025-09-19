---
URL: https://www.htmldog.com/guides/css/beginner/margins/
Abstract: margin and padding are the two most commonly used properties for spacing-out elements. A margin is the space outside something, whereas padding is the space inside something.
Extracted_On: 25.1709
Web_Title: Margins and Padding | HTML Dog
set:
  - css
---

[`margin`](https://www.htmldog.com/references/css/properties/margin/) and [`padding`](https://www.htmldog.com/references/css/properties/padding/) are the two most commonly used properties for spacing-out elements. A margin is the space **outside** something, whereas padding is the space **inside** something.

Change the CSS code for `h2` to the following:

```

h2 {
    font-size: 1.5em;
    background-color: #ccc;
    margin: 20px;
    padding: 40px;
}
```

This leaves a 20-pixel width space around the secondary header and the header itself is fat from the 40-pixel width padding.

The four sides of an element can also be set individually. [`margin-top`](https://www.htmldog.com/references/css/properties/margin-top/), [`margin-right`](https://www.htmldog.com/references/css/properties/margin-right/), [`margin-bottom`](https://www.htmldog.com/references/css/properties/margin-bottom/), [`margin-left`](https://www.htmldog.com/references/css/properties/margin-left/), [`padding-top`](https://www.htmldog.com/references/css/properties/padding-top/), [`padding-right`](https://www.htmldog.com/references/css/properties/padding-right/), [`padding-bottom`](https://www.htmldog.com/references/css/properties/padding-bottom/) and [`padding-left`](https://www.htmldog.com/references/css/properties/padding-left/) are the self-explanatory properties you can use.

## The Box Model

Margins, padding and borders (see [next page](https://www.htmldog.com/guides/css/beginner/borders/)) are all part of what’s known as **the Box Model**. The Box Model works like this: in the middle you have the content area (let’s say an image), surrounding that you have the padding, surrounding that you have the border and surrounding that you have the margin. It can be visually represented like this:

You don’t have to use all of these, but it can be helpful to remember that the box model can be applied to every element on the page, and that’s a powerful thing!