---
tags: []
references: 
index: 
note: CSS Cheat Sheet Basics
generated: 1Q25 - Feb 11th || 042
last modified: 1Q25 - Feb 14th || 045
---


# [CSS Cheat Sheet - A Basic Guide to CSS - GeeksforGeeks](https://www.geeksforgeeks.org/css-cheat-sheet-a-basic-guide-to-css/?ref=outind#CSS%20Basics)

**What is CSS?**

[CSS](https://www.geeksforgeeks.org/css/) i.e. Cascading Style Sheets is a stylesheet language used to describe the presentation of a document written in a markup language such as HTML, XML, etc. CSS enhances the look and feel of the webpage by describing how elements should be rendered on screen or in other media.


**What is a CSS Cheat Sheet?**

CSS Cheat Sheet provides you with the most common style snippets CSS gradient, background, button, font family, order, radius, box, and text-shadow generators, color picker, and more tools to add more visual weight to your document. All these and other useful web design tools can be found on a single page.

**Table of Content:**

**CSS Basics:** Cascading Style Sheet(CSS) is used to set the style in web pages that contain HTML elements, here we will see in how many ways we can add CSS for our HTML, there three different ways to do so one by one we will see those procedure.

**External CSS:** External CSS contains a separate CSS file with a .css extension which contains only style property with the help of tag attributes.

```
selector{
    property1: value1;
    property2: value2;
}

```

**Include external CSS file:** The external CSS file is linked to the HTML document using a link tag.

```
<link rel="stylesheet" type="text/css" href="/style.css" />
```

**Internal CSS or Embedded:** CSS is embedded within the HTML file using a style HTML tag.

```
<style type="text/css">
div { color: #444;}
</style>
```

**Inline CSS:** It contains CSS properties in the body section specified within HTML tags.

```
<tag style="property: value"> </tag>
```

**Clearfix:** It clears floats to select or control margins and padding.

```
.clearfix::after {
    content: "";
    clear: both;
    display: block;
}
```

**Selectors:** Used to find or select the HTML elements you want to style. These are categorized as follows:

|                                                                      |                                                                                                   |                                                                                     |
|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
|                         **Basic Selectors**                          |                                          **Description**                                          |                                     **Syntax**                                      |
|     **[Universal](https://www.geeksforgeeks.org/css-selector/)**     |                                Selects all elements on the pages.                                 |                                 \*{property:value;}                                 |
|   **[Type](https://www.geeksforgeeks.org/css-element-selector/)**    |                   Selects all HTML tag/element of given type in your document.                    |                                 p {property:value;}                                 |
|       **[Id](https://www.geeksforgeeks.org/css-id-selector/)**       |                 Selects an element based on the value of its unique id attribute                  |                                id {property:value;}                                |
|    **[Class](https://www.geeksforgeeks.org/css-class-selector/)**    |             Selects all elements in the document that have the given class attribute.             |                              .class {property:value;}                               |
|**[Attribute](https://www.geeksforgeeks.org/css-attribute-selector/)**|                       Selects all elements that have a specified attribute.                       |                        a[attribute=value] {property:value;}                         |
|  **[Combinators](https://www.geeksforgeeks.org/css-combinators/)**   |  Complex selectors consisting of more than one selectors having some relationship between them.   |selector1 selector2/ selector 1+selector2 / selector 1> selector 2 {property: value;}|
|   **[Pseudo](https://www.geeksforgeeks.org/css-pseudo-classes/)**    |Define the special state of an element to add an effect to an existing element based on its states.|            selector: pseudo-class{  <br/> property: value;  <br/><br/>}             |

CSS
----------

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ```<title>* Selectors</title> `<br/><br/>```<!-- CSS Selectors are in used --> `<br/><br/>```background-color``: hsl(``325``, ``63%``, ``82%``); `<br/><br/>```background-color``: skyblue; `<br/><br/>```background-color``: yellow; `<br/><br/>```background-color``: orange; `<br/><br/>```*(Universal) Selector here gives a pink background `<br/><br/>```<span>This span is styled using type selector. `<br/><br/>```This div is styled using id selector `<br/><br/>```This div is styled using class selector `<br/><br/>```<div style=``"color:green"``> `<br/><br/>```This div is styled using attribute selector `<br/><br/>```<div style=``"text-align:center;"``> `<br/><br/>```This div is styled using combinators `<br/><br/>```My color changes if you hover over me! ` |

**Font Properties:** CSS font properties are used to set the font's content of the HTML element as per requirement.

|                                                                            |                                                                                  |                                                                  |
|----------------------------------------------------------------------------|----------------------------------------------------------------------------------|------------------------------------------------------------------|
|                                **Property**                                |                                 **Description**                                  |                            **Syntax**                            |
| **[Font-family](https://www.geeksforgeeks.org/css-font-family-property/)** |       Specifies the font family to be used for the element's text content.       |font-family:  <br/> family-name |generic-family |initial |inherit;|
|  **[Font-style](https://www.geeksforgeeks.org/css-font-style-property/)**  |Styles the text content in a normal, italic, or oblique face from its font-family.|  font-style:  <br/> normal |italic |oblique |initial |inherit;   |
|**[Font-variant](https://www.geeksforgeeks.org/css-font-variant-property/)**|              Converts all lowercase letters into uppercase letters.              |        font-variant:  <br/> normal| small caps | initial;        |
| **[Font-weight](https://www.geeksforgeeks.org/css-font-weight-property/)** |                    Specifies thickness or weight of the font                     |font-weight:  <br/> normal| bold |number |initial |inherit |unset;|
|   **[Font-size](https://www.geeksforgeeks.org/css-font-size-property/)**   |                 Specifies the size of the text in HTML document.                 |    font-size:   <br/>small |medium |large |initial |inherit;     |

CSS
----------

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|```<title>Font properties</title> `<br/><br/>```font-family``: ``"Times New Roman"``, ``"sans-serif"``; `<br/><br/>```font-family``: ``"sans-serif"``; `<br/><br/>```<p>Normal text aligned ``center``sized ``10``px</p> `<br/><br/>```<div class=``"style1"``>Geeks for Geeks</div> `<br/><br/>```<p>Italic text aligned ``left``sized ``15px``</p> `<br/><br/>```<div class=``"style2"``>Geeks for geeks</div> `<br/><br/>```<p>Oblique text aligned ``right``sized ``20px``, in ``small``caps</p> `<br/><br/>```<div class=``"style3"``>Geeks for geeks</div> `|

**Text-properties:** CSS text formatting properties are used to format and style text by setting their color, alignment, spacing, etc. as per requirement.

|                                                                                     |                                                     |                                                                                                |
|-------------------------------------------------------------------------------------|-----------------------------------------------------|------------------------------------------------------------------------------------------------|
|                                    **Property**                                     |                   **Description**                   |                                           **Syntax**                                           |
|         **[Text-color](https://www.geeksforgeeks.org/css-color-property/)**         |             Sets the color of the text.             |                                         color: value;                                          |
|    **[Text-alignment](https://www.geeksforgeeks.org/css-text-align-property/)**     |    Defines the horizontal alignment of the text.    |            text-align:  <br/>left|right|center|  <br/><br/>justify|initial|inherit;            |
| **[Text-decoration](https://www.geeksforgeeks.org/css-text-decoration-property/)**  |          Add or remove textdecorations.           |                            text-decoration:  <br/>decoration-type;                             |
|**[Text-transformation](https://www.geeksforgeeks.org/css-text-transform-property/)**|   Changes the case(uppercase|lowercase) of text.    |     text-transform:  <br/>none|capitalize|uppercase|  <br/><br/>lowercase|initial|inherit;     |
|   **[Text-indentation](https://www.geeksforgeeks.org/css-text-indent-property/)**   |        Indents the first line of text block.        |                          text-indent:   <br/>length|initial|inherit;                           |
|  **[Letter spacing](https://www.geeksforgeeks.org/css-letter-spacing-property/)**   |Specifies spacing between the characters of the text.|               letter-spacing:   <br/>normal|length|  <br/><br/>initial|inherit;                |
|     **[Line height](https://www.geeksforgeeks.org/css-line-height-property/)**      | Specifies the space between the lines of the text.  |        line-height:   <br/>normal|number|length|  <br/><br/>percentage|initial|inherit;        |
|     **[Text-shadow](https://www.geeksforgeeks.org/css-text-shadow-property/)**      |              Adds shadow to the text.               |text-shadow:  <br/>h-shadow v-shadow   <br/><br/>blur-radius<br/><br/>color|none|initial|inherit|
|    **[Word spacing](https://www.geeksforgeeks.org/css-word-spacing-property/)**     |       Specifies space between words of lines.       |                 word-spacing:  <br/>normal|length|  <br/><br/>initial|inherit;                 |

CSS
----------

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|```<title>Text formatting properties</title> `<br/><br/>```<div style=``" color: red"``> `<br/><br/>```<div style=``" text-align: center"``> `<br/><br/>```Text align property used here `<br/><br/>```<div style=``" text-decoration: underline"``> `<br/><br/>```Text decoration property used here `<br/><br/>```<div style=``"text-transform: lowercase"``> `<br/><br/>```Text transform property used here `<br/><br/>```<div style=``"text-indent: 80px"``> `<br/><br/>```Text indent property used here `<br/><br/>```<div style=``" letter-spacing: 4px"``> `<br/><br/>```Text line spacing property used here `<br/><br/>```<div style=``"line-height: 40px"``> `<br/><br/>```Text line height property used here `<br/><br/>```<div style=``"text-shadow: 3px 1px blue;"``> `<br/><br/>```Text shadow property used here `<br/><br/>```<div style=``"word-spacing: 15px;"``> `<br/><br/>```Text word spacing property used here `|

**Background properties:** The CSS background properties are used to design the background and define the background effects for elements.

|                                                                                              |                                                                             |                                                                                             |
|----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
|                                         **Property**                                         |                               **Description**                               |                                         **Syntax**                                          |
|     **[Background-color](https://www.geeksforgeeks.org/css-background-color-property/)**     |                Specifies the background color of an element.                |                            background-color:  <br/>color\_name;                             |
|     **[Background-image](https://www.geeksforgeeks.org/css-background-image-property/)**     |              Adds one or more background images to an element.              |                             background-image:  <br/>url('url');                             |
|    **[Background-repeat](https://www.geeksforgeeks.org/css-background-repeat-property/)**    |Adds or remove repeat the background image both horizontally and vertically. |  background-repeat:  <br/>repeat|repeat-x|repeat-y|  <br/><br/>no-repeat|initial|inherit;   |
|  **[Background-position](https://www.geeksforgeeks.org/css-background-position-property/)**  |          Specifies the positioning of the image in a certain way.           |                              background-position:  <br/>value;                              |
|    **[Background-origin](https://www.geeksforgeeks.org/css-background-origin-property/)**    |             Used to adjust the background image of the webpage.             |background-origin:  <br/>padding-box |border-box   <br/><br/>|content-box | initial| inherit;|
|**[Background-attachment](https://www.geeksforgeeks.org/css-background-attachment-property/)**|Specifies the kind of attachment of the background image in its container/td>|              background-attachment:  <br/>scroll|fixed|local|initial|inherit;               |
|      **[Background-clip](https://www.geeksforgeeks.org/css-background-clip-property/)**      |    Used to define how far the background (color or image) should extend.    |         background-clip:  <br/>border-box|padding-box|content-box|initial|inherit;          |

**Box Properties:** The CSS box model is essentially a box that wraps around every HTML element consisting of the border, padding, margin, and content. The CSS properties used to attain the box model are:

|                                                                 |                                                                                    |               |
|-----------------------------------------------------------------|------------------------------------------------------------------------------------|---------------|
|                          **Property**                           |                                  **Description**                                   |  **Syntax**   |
|**[Margin](https://www.geeksforgeeks.org/css-margins-padding/)** |                               Used to set the margin                               |margin: value; |
|**[Padding](https://www.geeksforgeeks.org/css-margins-padding/)**|      Specifies the space between the border and the content of the selector.       |padding: value;|
|**[Border](https://www.geeksforgeeks.org/css-border-property/)** |Sets the element's border width and set the style, and color of an element's border.|border: value; |
| **[Width](https://www.geeksforgeeks.org/css-width-property/)**  |                          Used to set an element's width.                           | width: value; |
|**[Height](https://www.geeksforgeeks.org/css-height-property/)** |                          Used to set an element's height                           |height: value; |

CSS
----------

|                                                                                                                                                                                                                                                                                                          |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|```<title>CSS Box Model</title> `<br/><br/>```background-color``: ``#c5c5db``; `<br/><br/>```background-color``: ``#c5c5db``; `<br/><br/>```<div class=``"main"``>CSS Box-Model Property</div> `<br/><br/>```<div class=``"gfg1"``>GeeksforGeeks</div> `<br/><br/>```A computer science portal for geeks `|

**Shadow properties:** These shadow properties are used to add shadow to text or boxes or frames of elements.

|                                                                          |                                                            |                                                                                                  |
|--------------------------------------------------------------------------|------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
|                               **Property**                               |                      **Description**                       |                                            **Syntax**                                            |
|**[Text shadow](https://www.geeksforgeeks.org/css-text-shadow-property/)**|                    Adds shadow to text.                    |        text-shadow:  <br/> h-shadow v-shadow blur-radius color| none |initial | inherit;         |
| **[Box shadow](https://www.geeksforgeeks.org/css-box-shadow-property/)** |Gives shadow-like effect to the box or frames of an element.|box-shadow:  <br/>h-offset v-offset blur spread   <br/><br/>color |none |inset |initial | inherit;|

CSS
----------

|                                                                                                                                                             |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|```<title>CSS box-shadow Property</title> `<br/><br/>```text-shadow``: ``5px``5px``8px``#00FF00``; `<br/><br/>```<h``1``>Welcome to GeeksforGeeks!</h``1``> `|

**Gradient:** The CSS gradient property is used to create transition between two or more specified colors

|                                                                                  |                                            |                                                                                            |
|----------------------------------------------------------------------------------|--------------------------------------------|--------------------------------------------------------------------------------------------|
|                                   **Gradient**                                   |              **Description**               |                                         **Syntax**                                         |
|**[Linear Gradient](https://www.geeksforgeeks.org/css-linear-gradient-function/)**|     Creates smooth color transitions.      |      background-image:  <br/>linear-gradient(direction, color-stop1, color-stop2, …);      |
|**[Radial Gradient](https://www.geeksforgeeks.org/css-radial-gradient-function/)**|Used to obtain an elliptical shape gradient.|background-image:  <br/>radial-gradient(shape size at position, start-color, …, last-color);|

CSS
----------

|                                                                                                                                                                                                                                                                                    |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|```<title>CSS Gradients</title> `<br/><br/>```background-image``: linear-gradient(``white``, ``green``); `<br/><br/>```background-image``: radial-gradient(``#090``, `<br/><br/>```<div class=``"gfg"``>GeeksforGeeks</div> `<br/><br/>```<div class=``"gfg"``>GeeksforGeeks</div> `|

**Border Properties:** The CSS border properties allow you to specify how the border of the box representing an element should look.

|                                                                            |                                                                                                   |                                                                 |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
|                                **Property**                                |                                          **Description**                                          |                           **Syntax**                            |
|**[Border Color](https://www.geeksforgeeks.org/css-border-color-property/)**|Specifies the color of the border of the box. Works only when the border-style property is defined.|                border-color:   <br/>color-value;                |
|**[Border Style](https://www.geeksforgeeks.org/css-border-style-property/)**|                    Sets the style of the border as solid, dotted, rigged, etc.                    |                   border-style:  <br/>value;                    |
|**[Border Width](https://www.geeksforgeeks.org/css-border-width-property/)**|                           Sets the width of the border of the element.                            |border-width:  <br/>length |thin |medium |thick |initial |inherit|

CSS
----------

|                                                                                                                                                                                      |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|```<title> Border Properties</title> `<br/><br/>```Demonstration of ``solid``thick``border of color ``blue`<br/><br/>```Demonstration of ``dotted``2px``width border of color ``green`|

**Classification Properties:** The CSS classification properties allow you to specify how and where an element is displayed.

|                                                                        |                                                                          |                                                                                                                   |
|------------------------------------------------------------------------|--------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
|                              **Property**                              |                             **Description**                              |                                                    **Syntax**                                                     |
|   **[Display](https://www.geeksforgeeks.org/css-display-property/)**   |           Defines how elements are displayed in the web page.            |                    display:  <br/>inline|block|flex|  <br/><br/>grid|table|group|none|inherit;                    |
|         **[Float](https://www.geeksforgeeks.org/css-float/)**          |                         Defines flow of content                          |                            float:  <br/> none|left|right|  <br/><br/>initial| inherit;                            |
|**[Position](https://www.geeksforgeeks.org/css-positioning-elements/)** |     Specifies the positioning method of html entity on the web page.     |                        position:  <br/>fixed|static|absolute  <br/><br/>|relative |sticky;                        |
|     **[Clear](https://www.geeksforgeeks.org/css-clear-property/)**     |Sets the sides of an element where no other floating elements are allowed.|                                        clear:  <br/>left|right|both|none;                                         |
|**[Visibility](https://www.geeksforgeeks.org/css-visibility-property/)**|                    Set an element as visible or not.                     |                            visibility:   <br/>visible|hidden|collapse|initial|inherit;                            |
|    **[Cursor](https://www.geeksforgeeks.org/css-cursor-property/)**    |                  Specifies the type or shape of cursor                   |cursor:  <br/> auto|default|pointer|crosshair|help   <br/><br/>| e-resize | all-scroll |progress |initial |inherit;|

CSS
----------

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|```<title>Classification properties</title> `<br/><br/>```<p>display Property: ``block``</p> `<br/><br/>```<div id=``"geeks1"``>Block ``1``</div> `<br/><br/>```<div id=``"geeks2"``>Block ``2``</div> `<br/><br/>```<div id=``"geeks3"``>Block ``3``</div> `<br/><br/>```<p>Float Property:``left``</p> `<br/><br/>```<div style=``"font-size:20px; color:#006400; float:right;"``> `<br/><br/>```<p>Position Property:``relative``</p> `<br/><br/>```This div element has ``position``: ``relative``; `<br/><br/>```<p>Clear property: ``left``</p> `<br/><br/>```A computer science portal for geeks `<br/><br/>```<p class=``"GFG"``>GeeksforGeeks</p> `<br/><br/>```<p>Visibility property: ``visible``/ ``hidden``</p> `<br/><br/>```<div style=``"visibility: visible;"``>Content here is ``visible``</div> `<br/><br/>```<div style=``"visibility: hidden"``>Content here is ``hidden``</div> `<br/><br/>```<p>Cursor property: ``wait``</p> `<br/><br/>```Mouse over the words to change the mouse cursor. `|

**CSS Functions:** CSS has a range of inbuilt functions. These are used as a value for various CSS properties. Some of the CSS functions can be nested as well. It ranges from simple color functions to mathematical, shape, color, transform, gradient, and animations functions. Some of the key functions are:

|                                                              |                                                                               |                                |
|--------------------------------------------------------------|-------------------------------------------------------------------------------|--------------------------------|
|                         **Function**                         |                                **Description**                                |           **Syntax**           |
|**[attr()](https://www.geeksforgeeks.org/css-attr-function/)**|         Retrieves the value of an attribute of the selected elements          |      attr( attr\_name );       |
|**[calc()](https://www.geeksforgeeks.org/css-calc-function/)**|Takes a single mathematical expression as its parameter and performs operations|      calc( Expression );       |
| **[max()](https://www.geeksforgeeks.org/css-max-function/)** |    Returns the largest number of the given set of comma separated numbers.    | max(value 1, value2, value3…)  |
| **[url()](https://www.geeksforgeeks.org/css-url-function/)** |Takes a string URL as a parameter and is used to load images, fonts and content|url( <string> <url-modifier>\* )|
| **[var()](https://www.geeksforgeeks.org/css-var-function/)** | Inserts the value of a custom property. Its name must start with two dashes.  | var( custom\_property, value ) |

CSS
----------

|                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|```<title>CSS functions</title> `<br/><br/>```height``: calc(``100px``- ``20px``); `<br/><br/>```background-color``: var(--main-bg-color); `<br/><br/>```<p>attribute function</p> `<br/><br/>```<h``3``>The calc() Function</h``3``> `<br/><br/>```<div class=``"url"``style=``"height:200px; width:100%"``> `<br/><br/>```<h``3``>CSS ``url``() function</h``3``> `<br/><br/>```<div class=``"gfg1"``>demonstration of var function</div><br> `|

**Media Queries:** The CSS Media Query is used to make the web page more responsive according to the different screens or media types. Media queries include a block of CSS only if a certain expression is true.

**Syntax:**

```
@media not | only mediatype and (expression) {
    // Code content
```

|              |                                                         |
|--------------|---------------------------------------------------------|
|**Media Type**|                     **Description**                     |
|   **All**    |            It is used for all media devices.            |
|  **Print**   |           It is used when printer is in use.            |
|  **Screen**  |    It is used for computer screens, smartphones etc.    |
|  **Speech**  |It is used for screen readers that read the screen aloud.|

[Previous Article](https://www.geeksforgeeks.org/html-cheat-sheet/?ref=previous_article)

[Next Article](https://www.geeksforgeeks.org/javascript-cheat-sheet-a-basic-guide-to-javascript/?ref=next_article)

[JavaScript Cheat Sheet - A Basic Guide to JavaScript](https://www.geeksforgeeks.org/javascript-cheat-sheet-a-basic-guide-to-javascript/?ref=next_article)
