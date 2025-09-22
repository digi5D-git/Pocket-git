---
URL: https://www.htmldog.com/guides/css/beginner/applyingcss/
Abstract: Inline styles are plonked straight into the HTML tags using the style attribute.
Extracted_On: 25.1709
Web_Title: Applying CSS | HTML Dog
set:
  - css
---

## Inline

Inline styles are plonked straight into the HTML tags using the `style` attribute.

They look something like this:

```

<p style="color: red">text</p>
```

This will make that specific paragraph red.

But, if you remember, the best-practice approach is that the HTML should be a stand-alone, **presentation free** document, and so in-line styles should be avoided wherever possible.

## Internal

Embedded, or internal, styles are used for the whole page. Inside the [`head`](https://www.htmldog.com/references/html/tags/head/) element, the [`style`](https://www.htmldog.com/references/html/tags/style/) tags surround all of the styles for the page.

```

<!DOCTYPE html>
<html>
<head>
<title>CSS Example</title>
<style>

    p {
        color: red;
    }

    a {
        color: blue;
    }

</style>
...
```

This will make all of the paragraphs in the page red and all of the links blue.

Although preferable to soiling our HTML with inline presentation, it is similarly usually preferable to keep the HTML and the CSS files separate, and so we are left with our savior…

## External

External styles are used for the whole, multiple-page website. There is a **separate CSS file**, which will simply look something like:

```html
p {
    color: red;
}

a {
    color: blue;
}
```

If this file is saved as “style.css” in the same directory as your HTML page then it can be linked to in the HTML like this:

```

<!DOCTYPE html>
<html>
<head>
    <title>CSS Example</title>
    <link rel="stylesheet" href="https://www.htmldog.com/guides/css/beginner/applyingcss/style.css">
...
```

## Apply!

To get the most from this guide, it would be a good idea to try out the code as we go along, so start a fresh new file with your text-editor and save the blank document as “style.css” in the same directory as your HTML file.

Now change your HTML file so that it starts something like this:

```

<!DOCTYPE html>
<html>
<head>
    <title>My first web page</title>
    <link rel="stylesheet" href="https://www.htmldog.com/guides/css/beginner/applyingcss/style.css">
</head>
...
```

Save the HTML file. This now links to the CSS file, which is empty at the moment, so won’t change a thing. As you work your way through the CSS Beginner Tutorial, you will be able to add to and change the CSS file and see the results by simply refreshing the browser window that has the HTML file in it, as we did before.