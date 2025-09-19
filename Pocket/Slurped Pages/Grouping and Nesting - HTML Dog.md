---
URL: https://www.htmldog.com/guides/css/intermediate/grouping/
Abstract: You can give the same properties to a number of selectors without having to repeat them.
Extracted_On: 25.1709
Web_Title: Grouping and Nesting | HTML Dog
set:
  - html
---

## Grouping

You can give the same properties to a number of selectors without having to repeat them.

For example, if you have something like:

```

h2 {
    color: red;
}

.thisOtherClass {
    color: red;
}

.yetAnotherClass {
    color: red;
}
```

You can simply separate selectors with **commas** in one line and apply the same properties to them all so, making the above:

```

h2, .thisOtherClass, .yetAnotherClass {
    color: red;
}
```

## Nesting

If the CSS is structured well, there shouldn’t be a need to use many class or ID selectors. This is because you can specify properties to selectors _within_ other selectors.

For example:

```

#top {
    background-color: #ccc;
    padding: 1em
}

#top h1 {
    color: #ff0;
}

#top p {
    color: red;
    font-weight: bold;
}
```

This removes the need for classes or IDs on the [`p`](https://www.htmldog.com/references/html/tags/p/) and [`h1`](https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/) tags if it is applied to HTML that looks something like this:

```

<div id="top">
    <h1>Chocolate curry</h1>
    <p>This is my recipe for making curry purely with chocolate</p>
    <p>Mmm mm mmmmm</p>
</div>
```

This is because, by separating selectors with spaces, we are saying “[`h1`](https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/) inside ID `top` is colour `#ff0`” and “[`p`](https://www.htmldog.com/references/html/tags/p/) inside ID `top` is `red` and `bold`”.

This can get quite complicated (because it can go for more than two levels, such as this inside this inside this inside this etc.) and may take a bit of practice.