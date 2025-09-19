---
URL: https://www.htmldog.com/guides/html/beginner/tags/
Abstract: Although the basics of HTML is plain text, we need a bit more to make
  it a nice and shiny HTML document.
Extracted_On: 25.1709
Web_Title: Tags, Attributes, and Elements | HTML Dog
---

Although the basics of HTML is plain text, we need a bit more to make it a nice and shiny HTML document.

## Tags

The basic structure of an HTML document includes tags, which surround content and apply meaning to it.

Change your document so that it looks like this:

```

<!DOCTYPE html>
<html>
<body>
    This is my first web page
</body>
</html>
```

Now save the document again, go back to the web browser and reload the page.

The appearance of the page will not have changed at all, but the purpose of HTML is to apply meaning, not presentation, and this example has now defined some fundamental elements of a web page.

The first line on the top, `<!DOCTYPE html>`, is a **document type declaration** and it lets the browser know which flavor of HTML you’re using (HTML5, in this case). It’s very important to stick this in - If you don’t, browsers will assume you don’t really know what you’re doing and act in a very peculiar way.

To get back to the point, `<html>` is the **opening tag** that kicks things off and tells the browser that everything between that and the `</html>` **closing tag** is an HTML document. The stuff between `<body>` and `</body>` is the main content of the document that will appear in the browser window.

### Closing tags

The `</body>` and `</html>` put a close to their respective elements (more on elements in a moment).

## Attributes

Tags can also have **attributes**, which are extra bits of information. Attributes appear inside the opening tag and their values sit inside quotation marks. They look something like `<tag attribute="value">Margarine</tag>`. We will come across tags with attributes later.

## Elements

Tags tend not to do much more than mark the beginning and end of an element. Elements are the bits that make up web pages. You would say, for example, that everything that is in between (and includes) the `<body>` and `</body>` tags is the body element. As another example, whereas “`<title>`” and “`</title>`” are **tags**, “`<title>Rumple Stiltskin</title>`” is a title **element**.