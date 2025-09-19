---
URL: https://www.htmldog.com/guides/css/beginner/colors/
Abstract: CSS brings 16,777,216 colors to your disposal. They can take the form of a name, an RGB (red/green/blue) value or a hex code.
Extracted_On: 25.1709
Web_Title: Colors | HTML Dog
set:
  - css
---

CSS brings **16,777,216** colors to your disposal. They can take the form of a **name**, an **RGB** (red/green/blue) value or a **hex** code.

The following values, to specify full-on as red-as-red-can-be, all produce the same result:

- `red`
- `rgb(255,0,0)`
- `rgb(100%,0%,0%)`
- `#ff0000`
- `#f00`

Predefined color names include `aqua`, `black`, `blue`, `fuchsia`, `gray`, `green`, `lime`, `maroon`, `navy`, `olive`, `purple`, `red`, `silver`, `teal`, `white`, and `yellow`. `transparent` is also a valid value.

The three values in the RGB value are from 0 to 255, 0 being the lowest level (no red, for example), 255 being the highest level (full red, for example). These values can also be a percentage.

**Hexadecimal** (previously and more accurately known as “**sexadecimal**”) is a **base-16** number system. We are generally used to the **decimal** number system (**base-10**, from 0 to 9), but hexadecimal has 16 digits, from 0 to f.

The hex number is prefixed with a hash character (**#**) and can be three or six digits in length. Basically, the three-digit version is a compressed version of the six-digit (`#ff0000` becomes `#f00`, `#cc9966` becomes `#c96`, etc.). The three-digit version is easier to decipher (the first digit, like the first value in RGB, is red, the second green and the third blue) but the six-digit version gives you more control over the exact color.

## color and background-color

Colors can be applied by using [`color`](https://www.htmldog.com/references/css/properties/color/) and [`background-color`](https://www.htmldog.com/references/css/properties/background-color/) (note that this must be the American English “color” and not “colour”).

A blue background and yellow text could look like this:

```

h1 {
    color: yellow;
    background-color: blue;
}
```

These colors might be a little too harsh, so you could change the code of your CSS file for slightly different shades:

```

body {
    font-size: 14px;
    color: navy;
}

h1 {
    color: #ffc;
    background-color: #009;
}
```

Save the CSS file and refresh your browser. You will see the colors of the first heading (the [`h1`](https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/) element) have changed to yellow and blue.

You can apply the [`color`](https://www.htmldog.com/references/css/properties/color/) and [`background-color`](https://www.htmldog.com/references/css/properties/background-color/) properties to most HTML elements, including [`body`](https://www.htmldog.com/references/html/tags/body/), which will change the colors of the page and everything in it.