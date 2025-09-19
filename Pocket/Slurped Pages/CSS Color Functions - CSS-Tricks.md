---
URL: https://css-tricks.com/css-color-functions/
Author: Sunkanmi Fafowora
Site: CSS-Tricks
published: 25.1906
Abstract: CSS has a number of functions that can be used to set, translate, and manipulate colors. Learn what they are and how they are used with a bunch of examples to get you started.
Extracted_On: 25.1609
Web_Title: CSS Color Functions | CSS-Tricks
set:
  - css
---

If you asked me a few months ago, “What does it take for a website to stand out?” I may have said fancy animations, creative layouts, cool interactions, and maybe just the general aesthetics, without pointing out something in particular. If you ask me now, after working on color for the better part of the year, I can confidently say it’s all color. Among all the aspects that make a design, a good color system will make it as beautiful as possible.

However, color in CSS can be a bit hard to fully understand since there are many ways to set the same color, and sometimes they even look the same, but underneath are completely different technologies. That’s why, in this guide, we will walk through _all_ the ways you can set up colors in CSS and _all_ the color-related properties out there!

---

## Colors are in everything

They are in your phone, in what your eye sees, and on any screen you look at; they essentially capture everything. Design-wise, I see the amazing use of colors on sites listed over at [awwwards.com](https://www.awwwards.com/websites/colorful/), and I’m always in awe.

Not all color is the same. In fact, similar colors can live in different worlds, known as color spaces. Take for example, sRGB, the color space used on the web for the better part of its existence and hence the most known. While it’s the most used, there are many colors that are simply missing in sRGB that new color spaces like [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) and [Oklab](https://en.wikipedia.org/wiki/Oklab_color_space) bring, and they cover [a wider range of colors sRGB could only dream of](https://rmit.pressbooks.pub/colourtheory1/chapter/colour-spaces-or-gamuts/), but don’t let me get ahead of myself.

---

## What’s a color space?

A color space is the way we arrange and represent colors that exist within a device, like printers and monitors. We have different types of color spaces that exist in media (Rec2020, Adobe RGB, etc), but not all of them are covered in CSS. Luckily, the ones we have are sufficient to produce all the awesome and beautiful colors we need. In this guide, we will be diving into the three main color spaces available in CSS: sRGB, CIELAB, and OkLab.

---

## The sRGB Color Space

The sRGB is one of the first color spaces we learn. Inside, there are three color functions, which are essentially notations to define a color: `rgb()`, `hsl()`, and `hwb()`.

sRGB has been a standard color space for the web [since 1996](https://www.w3.org/Graphics/Color/sRGB.html). However, it’s closer to how old computers represented color, rather than how humans understand it, so it had some problems like not being able to capture the full gamut of modern screens. Still, many modern applications and websites use sRGB, so even though it is the “old way” of doing things, it is still widely accepted and used today.

### The `rgb()` function

![Diagram of the rgb function showing arguments for red, green, blue, and alpha.](https://i0.wp.com/css-tricks.com/wp-content/uploads/2025/06/rgb-color-function-syntax.webp?resize=900%2C500&ssl=1)

`rgb()` uses three values, `r`, `g`, and `b` which specifies the redness, greenness, and blueness of the color you want.

All three values are non-negative, and **they go from `0` to `255`**.

```
.element {
  color: rgb(245 123 151);
}
```

It also has an optional value (the _alpha_ value) preceded by a forward slash. It determines the level of opacity for the color, which goes from `0` (or `0%`) for a completely transparent color, to `1` (or `100%`) for a fully opaque one.

```
.element {
  color: rgb(245 123 151 / 20%);
}
```

There are two ways you can write inside `rgb()`. Either using the **legacy syntax** that separates the three values with **commas** or the **modern syntax** that separates each with **spaces**.

You want to combine the two syntax formats, yes? That’s a no-no. It won’t even work.

```
/* This would not work */
.element {
  color: rgb(225, 245, 200 / 0.5);
}

/* Neither will this */
.element {
  color: rgb(225 245 200, 0.5);
}

/* Or this */
.element {
  color: rgb(225, 245 200 / 0.5);
}
```

But, following _one_ consistent format will do the trick, so do that instead. Either you’re so used to the old syntax and it’s hard for you to move on, continue to use the **legacy syntax**, or you’re one who’s willing to try and stick to something new, use the **modern syntax**.

```
/* Valid (Modern syntax)  */
.element {
  color: rgb(245 245 255 / 0.5);
}

/* Valid (Legacy syntax)  */
.element {
  color: rgb(245, 245, 255, 0.5);
}
```

### The `rgba()` function

`rgba()` is essentially the same as `rgb()` with an extra alpha value used for transparency.

In terms of syntax, the `rgba()` function can be written in two ways:

- Comma-separated and without percentages
- Space-separated, with the alpha value written after a forward slash (`/`)

```
.element {
  color: rgba(100, 50, 0, 0.5);
}

.element {
  color: rgba(100 50 0 / 0.5);
}
```

So, what’s the difference between `rgba()` and `rgb()`?

Breaking news! **There is no difference.** Initially, only `rgba()` could set the alpha value for opacity, but in recent years, `rgb()` now supports transparency using the forward slash (`/`) before the alpha value.

`rgb()` also supports legacy syntax (commas) and modern syntax (spaces), so there’s practically no reason to use `rgba()` anymore; it’s even noted as a [CSS mistake](https://wiki.csswg.org/ideas/mistakes) by folks at W3C.

In a nutshell, `rgb()` and `rgba()` are the same, so **just use `rgb()`**.

```
/* This works */
.element-1 {
    color: rgba(250 30 45 / 0.8);
}

/* And this works too, so why not just use this? */
.element-2 {
    color: rgb(250 30 45 / 0.8);
}
```

### The hexadecimal notation

![Diagram of the hex color notation showing how #3dFa4C corresponds to the #RRGGBB color channels.](https://i0.wp.com/css-tricks.com/wp-content/uploads/2025/06/hex-color-diagram.webp?resize=900%2C500&ssl=1)

The hexadecimal CSS color code is a 3, 4, 6, or 8 (being the maximum) digit code for colors in sRGB. It’s basically a shorter way of writing `rgb()`. The hexadecimal color (or hex color) begins with a hash token (`#`) and then a hexadecimal number, which means it goes from `0` to `9` and then skips to letters `a` to `f` (`a` being 10, `b` being 11, and so on, up to `f` for 15).

In the hexadecimal color system, the 6-digit _style_ is done in pairs. Each pair represents red (`RR`), blue (`BB`), and green (`GG`).

Each value in the pair can go from `00` to `FF`, which it’s equivalent to `255` in `rgb()`.

> Notice how I used caps for the letters (`F`) and not lowercase letters like I did previously? Well, that’s because hexadecimals are not case-sensitive in CSS, so you don’t have to worry about uppercase or lowercase letters when dealing with hexadecimal colors.

- **3-digit hexadecimal.** The 3-digit hexadecimal system is a shorter way of writing the 6-digit hexadecimal system, where each value represents the color’s redness, greenness, and blueness, respectively

```
.element {
  color: #abc;
}
```

In reality, each value in the 3-digit system is duplicated and then translated to a visible color

```
.element {
  color: #abc; /* Equals #AABBCC  */
}
```

BUT, this severely limits the colors you can set. What if I want to target the color `213` in the red space, or how would I get a blue of value `103`? It’s impossible. That’s why you can only get a total number of 4,096 colors here as opposed to the 17 million in the 6-digit notation. Still, if you want a fast way of getting a certain color in hexadecimal without having to worry about the millions of other colors, use the 3-digit notation.

- **4-digit hexadecimal.** This is similar to the 3-digit hexadecimal notation except it includes the optional alpha value for opacity. It’s a shorter way of writing the 8-digit hexadecimal which also means that all values here are repeated once during color translation.

```
.element {
  color: #abcd; /* Same as #AABBCCDD */
}
```

For the alpha value, `0` represents `00` (a fully transparent color) and `F` represents `FF` (a fully opaque color).

- **6-digit hexadecimal.** The 6-digit hexadecimal system just specifies a hexadecimal color’s redness, blueness, and greenness _without_ its alpha value for color opacity.

```
.element {
  color: #abcdef;
}
```

- **8-digit hexadecimal.** This 8-digit hexadecimal system specifies hexadecimal color’s redness, blueness, greenness, and its alpha value for color opacity. Basically, it is complete for color control in sRGB.

```
.element {
  color: #faded101;
}
```

### The `hsl()` function

![Diagram of the hsl function showing arguments for hue, saturation, lightness, and alpha.](https://i0.wp.com/css-tricks.com/wp-content/uploads/2025/06/hsl-color-function.webp?resize=900%2C500&ssl=1)

Both `hsl()` and `rgb()` live in the sRGB space, but they access colors differently. And while the consensus is that `hsl()` is far more intuitive than `rgb()`, it all boils down to your preference.

`hsl()` takes three values: `h`, `s`, and `l`, which set its hue, saturation, and lightness, respectively.

- The **hue** sets the base color and represents a direction in the color wheel, so it’s written in angles from `0deg` to `360deg`.
- The **saturation** sets how much of the base color is present and goes from `0` (or `0%`) to `100` (or `100%`).
- The **lightness** represents how close to white or black the color gets.

One cool thing: the hue angle goes from (`0deg`–`360deg`), but we might as well use negative angles or angles above `360deg`, and they will circle back to the right hue. Especially useful for infinite color animation. Pretty neat, right?

Plus, you can easily get a **complementary color** from the opposite angle (i.e., adding `180deg` to the current hue) on the color wheel.

```
/* Current color */
.element {
  color: hsl(120deg 40 60 / 0.8);
}

/* Complementary color */
.element {
  color: hsl(300deg 40 60 / 0.8);
}
```

You want to combine the two syntax formats like in `rgb()`, yes? That’s also a no-no. It won’t work.

```
/* This would not work */
.element {
  color: hsl(130deg, 50, 20 / 0.5);
}

/* Neither will this */
.element {
  color: hsl(130deg 50 20, 0.5);
}

/* Or this */
.element {
  color: hsl(130deg 50, 20 / 0.5);
}
```

Instead, stick to one of the syntaxes, like in `rgb()`:

```
/* Valid (Modern syntax)  */ 
.element {
  color: hsl(130deg 50 20 / 0.5);
}

/* Valid (Modern syntax)  */ 
.element {
  color: hsl(130deg, 50, 20, 0.5);
}
```

### The `hsla()` function

`hsla()` is essentially the same with `hsl()`. It uses three values to represent its color’s hue (`h`), saturation (`s`), and lightness (`l`), and yes (again), an alpha value for transparency (`a`). We can write `hsla()` in two different ways:

- Comma separated
- Space separated, with the alpha value written after a forward slash (`/`)

```
.element {
  color: hsla(120deg, 100%, 50%, 0.5);
}

.element {
  color: hsla(120deg 100% 50% / 0.5);
}
```

So, what’s the difference between `hsla()` and `hsl()`?

Breaking news (again)! **They’re the same.** `hsl()` and `hsla()` both:

- Support legacy and modern syntax
- Have the power to increase or reduce color opacity

So, why does `hsla()` still exist? Well, apart from being [one of the mistakes of CSS](https://wiki.csswg.org/ideas/mistakes), many applications on the web still use `hsla()` since there wasn’t a way to set opacity with `hsl()` when it was first conceived.

My advice: **just use `hsl()`**. It’s the same as `hsla()` but less to write.

```
/* This works */
.element-1 {
    color: hsla(120deg 80 90 / 0.8);
}

/* And this works too, so why not just use this? */
.element-2 {
    color: hsl(120deg 80 90 / 0.8);
}
```

### The `hwb()` function

![Diagram of the hwb color function showing arguments for hue, whiteness, blackness, and alpha.](https://i0.wp.com/css-tricks.com/wp-content/uploads/2025/06/hwb-color-function.webp?resize=900%2C500&ssl=1)

`hwb()` also uses hue for its first value, but instead takes two values for whiteness and blackness to determine how your colors will come out (and yes, it also does have an optional transparency value, `a`, just like `rgb()` and `hsl()`).

```
.element {
  color: hwb(80deg 20 50 / 0.5);
}
```

- The first value `h` is the same as the hue angle in `hsl()`, which represents the color position in the color wheel from `0` (or `0deg`) to `360` (or `360deg`).
- The second value, `w`, represents the whiteness in the color. It ranges from `0`/`0%` (no white) to `100`/`100%` (full white if `b` is `0`).
- The third value, `b`, represents the blackness in the color. It ranges from `0`/`0%` (no black) to `100`/`100%` (fully black if `w` is `0`).
- The final (optional) value is the alpha value, `a`, for the color’s opacity, preceded by a forward slash The value’s range is from `0.0` (or `0%`) to `1.0` (or `100%`).

Although this color function is [barely used](https://css-tricks.com/why-is-nobody-using-the-hwb-color-function/), it’s completely valid to use, so it’s up to personal preference.

### Named colors

CSS named colors are hardcoded keywords representing predefined colors in sRGB. You are probably used to the basic: `white`, `blue`, `black`, `red`, but there are a lot more, [totaling 147 in all](https://css-tricks.com/snippets/css/named-colors-and-hex-equivalents/), that are defined in the [Color Modules Level 4 specification](https://www.w3.org/TR/css-color-4/#named-colors).

Named colors are often discouraged because [their names do not always match what color you would expect](https://css-tricks.com/the-tragicomic-history-of-css-color-names/).

---

## The CIELAB Color Space

The CIELAB color space is a relatively new color space on the web that represents a wider color gamut, closer to what the human eye can see, so it holds a lot more color than the sRGB space.

### The `lab()` function

![Diagram of the lab color function showing arguments for lightness, greenness to redness, blueness to yellowness, and the alpha transparency.](https://i0.wp.com/css-tricks.com/wp-content/uploads/2025/06/lab-color-function.webp?resize=900%2C500&ssl=1)

For this color function, we have three axes in a space-separated list to determine how the color is set.

```
.element {
    color: lab(50 20 20 / 0.9);
}
```

- The first value `l` represents the degree of whiteness to blackness of the color. Its range being `0`/(or `0%`) (black) to `100` (or `100%`) (white).
- The second value `a` represents the degree of greenness to redness of the color. Its range being from `-125`/`0%` (green) to`125` (or `100%`) (red).
- The third value `b` represents the degree of blueness to yellowness of the color. Its range is also from `-125` (or `0%`) (blue) to `125` (or `100%`) (red).
- The fourth and final value is its alpha value for color’s opacity. The value’s range is from `0.0` (or `0%`) to `1.0` (or `100%`).

This is useful when you’re trying to obtain new colors and provide support for screens that do support them. Actually, most screens and all major browsers now support `lab()`, so you should be good.

> The CSS `lab()` color function’s `a` and `b` values are actually unbounded. Meaning they don’t technically have an upper or lower limit. But, at practice, those are their limits according to the spec.

### The `lch()` function

![Diagram of the lch color function chowing arguments for whiteness to blackness, chroma, hue, and the alpha transparency.](https://i0.wp.com/css-tricks.com/wp-content/uploads/2025/06/lch-color-function.webp?resize=900%2C500&ssl=1)

The CSS `lch()` color function is said to be better and more intuitive than `lab()`.

```
.element {
    color: lch(10 30 300deg);
}
```

They both use the same color space, but instead of having `l`, `a`, and `b`, `lch` uses lightness, chroma, and hue.

- The first value `l` represents the degree of whiteness to blackness of the color. Its range being `0` (or `0%`) (black) to `100` (or `100%`) (white).
- The second value `c` represents the color’s chroma (which is like saturation). Its range being from `0` (or `100%`) to `150` or (or `100%`).
- The third value `h` represents the color hue. The value’s range is also from `0` (or `0deg`) to `360` (or `360deg`).
- The fourth and final value is its alpha value for color’s opacity. The value’s range is from `0.0` (or `0%`) to `1.0` (or `100%`).

> The CSS `lch()` color function’s chroma (`c`) value is actually unbounded. Meaning it doesn’t technically have an upper or lower limit. But, in practice, the chroma values above are the limits according to the spec.

---

## The OkLab Color Space

[Björn Ottosson](https://bottosson.github.io/about/) created this color space as [an “OK” and even better version of the lab color space](https://www.smashingmagazine.com/2024/10/interview-bjorn-ottosson-creator-oklab-color-space/). It was created to solve [the limitations of CIELAB and CIELAB color space](https://www.w3.org/Graphics/Color/Workshop/slides/talk/lilley#limit) like image processing in `lab()`, such as making an image grayscale, and perceptual uniformity. The two color functions in CSS that correspond to this color space are `oklab()` and `oklch()`.

Perceptual uniformity occurs when there’s a smooth change in the direction of a gradient color from one point to another. If you notice stark contrasts like the example below for `rgb()` when transitioning from one hue to another, that is referred to as a non-uniform perceptual colormap.

Notice how the change from one color to another is the same in `oklab()` without any stark contrasts as opposed to `rgb()`? Yeah, OKLab color space solves the stark contrasts present and gives you access to many more colors not present in sRGB.

OKlab actually provides a better saturation of colors while still maintaining the hue and lightness present in colors in CIELAB (and even a smoother transition between colors!).

### The `oklab()` function

![Diagram of the oklab color function syntax showing arguments for whiteness to blackness, green-ness to redness, blueness to yellowness, and the alpha transparency.](https://css-tricks.com/wp-content/uploads/2025/06/oklab-color-function.svg)

The `oklab()` color function, just like `lab()`, generates colors according to their lightness, red/green axis, blue/yellow axis, and an alpha value for color opacity. Also, the values for `oklab()` are different from that of `lab()` so please watch out for that.

```
.element {
  color: oklab(30% 20% 10% / 0.9);
}
```

- The first value `l` represents the degree of whiteness to blackness of the color. Its range being `0` (or `0%`) (black) to `0.1` (or `100%`) (white).
- The second value `a` represents the degree of greenness to redness of the color. Its range being from `-0.4` (or `-100%`) (green) to `0.4` (or `100%`) (red).
- The third value `b` represents the degree of blueness to yellowness of the color. The value’s range is also from `-0.4` (or `0%`) (blue) to `0.4` (or `-100%`) (red).
- The fourth and final value is its alpha value for color’s opacity. The value’s range is from `0.0` (or `0%`) to `1.0` (or `100%`).

Again, this solves one of the issues in lab which is perceptual uniformity so if you’re looking to use a better alternative to lab, use `oklab()`.

> The CSS `oklab()` color function’s `a` and `b` values are actually unbounded. Meaning they don’t technically have an upper or lower limit. But, theoretically, those are the limits for the values according to the spec.

### The `oklch()` function

![Diagram of the oklch function showing the arguments for whiteness, chroma, hue, and alpha.](https://i0.wp.com/css-tricks.com/wp-content/uploads/2025/06/oclch-color-function-syntax.webp?resize=900%2C500&ssl=1)

The `oklch()` color function, just like `lch()`, generates colors according to their lightness, chroma, hue, and an alpha value for color opacity. The main difference here is that it solves the [issues present in `lab()` and `lch()`](https://bottosson.github.io/posts/oklab/).

```
.element {
  color: oklch(40% 20% 100deg / 0.7);
}
```

- The first value `l` represents the degree of whiteness to blackness of the color. Its range being `0.0` (or `0%`) (black) to `1.0` (or `100%`) (white).
- The second value `c` represents the color’s chroma. Its range being from `0` (or `0%`) to `0.4` (or `100%`) (it theoretically doesn’t exceed `0.5`).
- The third value `h` represents the color hue. The value’s range is also from `0` (or `0deg`) to `360` (or `360deg`).
- The fourth and final value is its alpha value for color’s opacity. The value’s range is from `0.0` (or `0%`) to `1.0` (or `100%`).

> The CSS `oklch()` color function’s chroma (`c`) value is actually unbounded. Meaning it doesn’t technically have an upper or lower limit. But, theoretically, the chroma values above are the limits according to the spec.

---

## The `color()` function

![Example of the color function syntax showing the arguments for the colorspace, c1, c2, and c3, and the alpha transparency channel.](https://i0.wp.com/css-tricks.com/wp-content/uploads/2025/06/relatibre-color-syntax-diagram.webp?resize=900%2C500&ssl=1)

The `color()` function allows access to colors in nine different color spaces, as opposed to the previous color functions mentioned, which only allow access to one.

To use this function, you must simply be aware of these 6 parameters:

- The first value specifies the `color space` you want to access colors from. They can either be `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50`, or `xyz-d65`
- The next three values (`c1`, `c2`, and `c3`) specifies the coordinates in the color space for the color ranging from `0.0` – `1.0`.
- The sixth and final value is its alpha value for color’s opacity. The value’s range is from `0.0` (or `0%`) to `1.0` (or `100%`).

---

## The `color-mix()` function

![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2025/06/color-mix-function-syntax-new.webp?resize=720%2C400&ssl=1)

The `color-mix()` function mixes two colors of any type in a given color space. Basically, you can create an endless number of colors with this method and explore more options than you normally would with any other color function. A pretty powerful CSS function, I would say.

```
.element {
  color-mix(in oklab, hsl(40 20 60) 80%, red 20%);
}
```

You’re basically mixing two colors of any type in a color space. Do take note, the accepted color spaces here are different from the color spaces accepted in the `color()` function.

To use this function, you must be aware of these three values:

- The first value `in colorspace` specifies the interpolation method used to mix the colors, and these can be any of these 15 color spaces: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz`, `xyz-d50`, `xyz-d65`, `hsl`, `hwb`, `lch`, and `oklch`.
- The second and third values specifies an accepted color value and a percentage from `0%` to `100%`.

---

## The Relative Color Syntax

![Example of the relative color syntax labelling the color function, the mandatory keyword, the origin color, the color channel inputs, and the alpha value.](https://i0.wp.com/css-tricks.com/wp-content/uploads/2025/06/relative-color-syntax.webp?resize=900%2C500&ssl=1)

Here’s how it works. We have:

```
.element{
  color-function(from origin-color c1 c2 c3 / alpha)
}
```

- The first value `from` is a mandatory keyword you must set to extract the color values from `origin-color`.
- The second value, `origin-color`, represents a color function or value or even another relative color that you want to get color from.
- The next three values, c1, c2, and c3 represent the current color function’s color channels and they correspond with the color function’s **valid** color values.
- The sixth and final value is its alpha value for color’s opacity. The value’s range is from `0.0` (or `0%`) to `1.0` (or `100%`) which either set from the `origin-color` or set manually,

Let’s take an example, say, converting a color from `rgb()` to `lab()`:

```
.element {
  color: lab(from rgb(255 210 01 / 0.5) l a b / a);
}
```

All the values above will be translated to the corresponding colors in `rgb()`. Now, let’s take a look at another example where we convert a color from `rgb()` to `oklch()`:

```
.element {
    color: oklch(from rgb(255 210 01 / 0.5) 50% 20% h / a);
}
```

Although, the `l` and `c` values were changed, the `h` and `a` would be taken from the original color, which in this case is a light yellowish color in `rgb()`.

You can even be wacky and use math functions:

All CSS color functions support the [relative color syntax](https://www.w3.org/TR/css-color-5/#relative-colors). The relative color syntax, simply put, is a way to access other colors in another color function or value, then translating it to the values of the current color function. It goes “from `<color>`” to another.

```
.element {
  color: oklch(from rgb(255 210 01 / 0.5) calc(50% + var(--a)) calc(20% + var(--b)) h / a);
}
```

The relative color syntax is, however, different than the `color()` function in that you have to include the color space name and then fully write out the channels, like this:

```
.element {
  color: color(from origin-color colorspace c1 c2 c3 / alpha);
}
```

Remember, the `color-mix()` function is not a part of this. You can have relative color functions inside the color functions you want to mix, yes, but the relative color syntax is not available in `color-mix()` directly.

---

## Color gradients

![Gradient transitioning from a rich magenta color to bright orange at a 145 degree angle.](https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/11/css-gradient.png?resize=1024%2C512)

CSS is totally capable of transitioning from one color to another. See the [“CSS Gradients Guide”](https://css-tricks.com/a-complete-guide-to-css-gradients/) for a full run-down, including of the different types of gradients with examples.

---

## Properties that support color values

There are **a lot** of properties that support the use of color. Just so you know, this list does not contain deprecated properties.

`accent-color`

This CSS property sets the accent color for UI controls like checkboxes and radio buttons, and any other form element

```
progress {
  accent-color: lightgreen;
}
```

> Accent colors are a way to style unique elements in respect to the chosen color scheme.

`background-color`

Applies solid colors as background on an element.

```
.element {
  background-color: #ff7a18;
}
```

`border-color`

Shorthand for setting the color of all four borders.

```
/* Sets all border colors */
.element {
    border-color: lch(50 50 20);
}

/* Sets top, right, bottom, left border colors */
.element {
  border-color: black green red blue;
}
```

`box-shadow`

Adds shadows to element for creating the illusion of depth. The property accepts a number of arguments, one of which sets the shadow color.

```
.element {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
```

`caret-color`

Specifies the color of the text input cursor (caret).

```
.element {
    caret-color: lch(30 40 40);
}
```

`color`

Sets the foreground color of text and text decorations.

```
.element {
  color: lch(80 10 20);
}
```

`column-rule-color`

Sets the color of a line between columns in a multi-column layout. This property can’t act alone, so you need to set the `columns` and `column-rule-style` property first before using this.

```
.element {
  column: 3;
  column-rule-style: solid;
  column-rule-color: lch(20 40 40); /* highlight */
}
```

`fill`

Sets the color of the SVG shape

```
.element {
  fill: lch(40 20 10);
}
```

`flood-color`

Specifies the flood color to use for `<feFlood>` and `<feDropShadow>` elements inside the `<filter>` element for `<svg>`. This should not be confused with the `flood-color` CSS attribute, as this is a CSS property and that’s an HTML attribute (even though they basically do the same thing). If this property is specified, it overrides the CSS `flood-color` attribute

```
.element {
  flood-color: lch(20 40 40);
}
```

`lighting-color`

Specifies the color of the lighting source to use for `<feDiffuseLighting>` and `<feSpecularLighting>` elements inside the `<filter>` element for `<svg>`.

```
.element {
  lighting-color: lch(40 10 20);
}
```

`outline-color`

Sets the color of an element’s outline.

```
.element {
  outline-color: lch(20 40 40);
}
```

`stop-color`

Specifies the color of gradient stops for the `<stop>` tags for `<svg>`.

```
.element {
  stop-color: lch(20 40 40);
}
```

`stroke`

Defines the color of the outline of `<svg>`.

```
.element {
  stroke: lch(20 40 40);
}
```

`text-decoration-color`

Sets the color of text decoration lines like underlines.

```
.element {
  text-decoration-color: lch(20 40 40);
}
```

`text-emphasis-color`

Specifies the color of emphasis marks on text.

```
.element {
  text-emphasis-color: lch(70 20 40);
}
```

`text-shadow`

Applies shadow effects to text, including color.

```
.element {
  text-shadow: 1px 1px 1px lch(50 10 30);
}
```

---

## Almanac references

Color functions

**Almanac** on Feb 22, 2025

### [rgb()](https://css-tricks.com/almanac/functions/r/rgb/)

[`.element { color: rgb(0 0 0 / 0.5); }`](https://css-tricks.com/almanac/functions/r/rgb/)

**Almanac** on Feb 22, 2025

### [hsl()](https://css-tricks.com/almanac/functions/h/hsl/)

[`.element { color: hsl(90deg, 50%, 50%); }`](https://css-tricks.com/almanac/functions/h/hsl/)

**Almanac** on Jun 12, 2025

### [hwb()](https://css-tricks.com/?page_id=385888)

[`.element { color: hwb(136 40% 15%); }`](https://css-tricks.com/?page_id=385888)

**Almanac** on Mar 4, 2025

### [lab()](https://css-tricks.com/almanac/functions/l/lab/)

[`.element { color: lab(50% 50% 50% / 0.5); }`](https://css-tricks.com/almanac/functions/l/lab/)

**Almanac** on Mar 12, 2025

### [lch()](https://css-tricks.com/almanac/functions/l/lch/)

[`.element { color: lch(10% 0.215 15deg); }`](https://css-tricks.com/almanac/functions/l/lch/)

**Almanac** on Apr 29, 2025

### [oklab()](https://css-tricks.com/almanac/functions/o/oklab/)

[`.element { color: oklab(25.77% 25.77% 54.88%; }`](https://css-tricks.com/almanac/functions/o/oklab/)

**Almanac** on May 10, 2025

### [oklch()](https://css-tricks.com/almanac/functions/o/oklch/)

[`.element { color: oklch(70% 0.15 240); }`](https://css-tricks.com/almanac/functions/o/oklch/)

**Almanac** on May 2, 2025

### [color()](https://css-tricks.com/almanac/functions/c/color/)

[`.element { color: color(rec2020 0.5 0.15 0.115 / 0.5); }`](https://css-tricks.com/almanac/functions/c/color/)

Color properties

**Almanac** on Apr 19, 2025

### [accent-color](https://css-tricks.com/almanac/properties/a/accent-color/)

[`.element { accent-color: #f8a100; }`](https://css-tricks.com/almanac/properties/a/accent-color/)

**Almanac** on Jan 13, 2025

### [background-color](https://css-tricks.com/almanac/properties/b/background/background-color/)

[`.element { background-color: #ff7a18; }`](https://css-tricks.com/almanac/properties/b/background/background-color/)

**Almanac** on Jan 27, 2021

### [caret-color](https://css-tricks.com/almanac/properties/c/caret-color/)

[`.element { caret-color: red; }`](https://css-tricks.com/almanac/properties/c/caret-color/)

**Almanac** on Jul 11, 2022

### [color](https://css-tricks.com/almanac/properties/c/color/)

[`.element { color: #f8a100; }`](https://css-tricks.com/almanac/properties/c/color/)

**Almanac** on Jul 11, 2022

### [column-rule-color](https://css-tricks.com/almanac/properties/c/column-rule-color/)

[`.element { column-rule-color: #f8a100; }`](https://css-tricks.com/almanac/properties/c/column-rule-color/)

**Almanac** on Jan 27, 2025

### [fill](https://css-tricks.com/almanac/properties/f/fill/)

[`.element { fill: red; }`](https://css-tricks.com/almanac/properties/f/fill/)

**Almanac** on Jul 11, 2022

### [outline-color](https://css-tricks.com/almanac/properties/o/outline/outline-color/)

[`.element { outline-color: #f8a100; }`](https://css-tricks.com/almanac/properties/o/outline/outline-color/)

**Almanac** on Dec 15, 2024

### [stroke](https://css-tricks.com/almanac/properties/s/stroke/)

[`.module { stroke: black; }`](https://css-tricks.com/almanac/properties/s/stroke/)

**Almanac** on Aug 2, 2021

### [text-decoration-color](https://css-tricks.com/almanac/properties/t/text-decoration/text-decoration-color/)

[`.element { text-decoration-color: orange; }`](https://css-tricks.com/almanac/properties/t/text-decoration/text-decoration-color/)

**Almanac** on Jan 27, 2023

### [text-emphasis](https://css-tricks.com/almanac/properties/t/text-emphasis/)

[`.element { text-emphasis: circle red; }`](https://css-tricks.com/almanac/properties/t/text-emphasis/)

**Almanac** on Jan 27, 2023

### [text-shadow](https://css-tricks.com/almanac/properties/t/text-shadow/)

[`p { text-shadow: 1px 1px 1px #000; }`](https://css-tricks.com/almanac/properties/t/text-shadow/)

---

## Related articles & tutorials

**Article** on Aug 12, 2024

### [Working With Colors Guide](https://css-tricks.com/nerds-guide-color-web/)

**Article** on Aug 23, 2022

### [The Expanding Gamut of Color on the Web](https://css-tricks.com/the-expanding-gamut-of-color-on-the-web/)

**Link** on Oct 13, 2015

### [The Tragicomic History of CSS Color Names](https://css-tricks.com/the-tragicomic-history-of-css-color-names/)

**Article** on Feb 11, 2022

### [A Whistle-Stop Tour of 4 New CSS Color Features](https://css-tricks.com/new-css-color-features-preview/)

**Link** on Feb 7, 2022

### [Using Different Color Spaces for Non-Boring Gradients](https://css-tricks.com/color-spaces-for-more-interesting-css-gradients/)

**Article** on Oct 29, 2024

### [Come to the light-dark() Side](https://css-tricks.com/come-to-the-light-dark-side/)

**Article** on Sep 24, 2024

### [Color Mixing With Animation Composition](https://css-tricks.com/color-mixing-with-animation-composition/)

**Article** on Sep 13, 2016

### [8-Digit Hex Codes?](https://css-tricks.com/8-digit-hex-codes/)

**Article** on Feb 24, 2021

### [A DRY Approach to Color Themes in CSS](https://css-tricks.com/a-dry-approach-to-color-themes-in-css/)

**Article** on Apr 6, 2017

### [Accessibility Basics: Testing Your Page For Color Blindness](https://css-tricks.com/accessibility-basics-testing-your-page-for-color-blindness/)

**Article** on Mar 9, 2020

### [Adventures in CSS Semi-Transparency Land](https://css-tricks.com/adventures-in-css-semi-transparency-land/)

**Article** on Mar 4, 2017

### [Change Color of All Four Borders Even With `border-collapse: collapse;`](https://css-tricks.com/table-border-collapse-issue/)

**Article** on Jan 2, 2020

### [Color contrast accessibility tools](https://css-tricks.com/color-contrast-accessibility-tools/)

**Article** on Aug 14, 2019

### [Contextual Utility Classes for Color with Custom Properties](https://css-tricks.com/contextual-utility-classes-for-color-with-custom-properties/)

**Article** on Jun 26, 2021

### [Creating Color Themes With Custom Properties, HSL, and a Little calc()](https://css-tricks.com/creating-color-themes-with-custom-properties-hsl-and-a-little-calc/)

**Link** on May 4, 2021

### [Creating Colorful, Smart Shadows](https://css-tricks.com/creating-colorful-smart-shadows/)

**Article** on Feb 21, 2018

### [CSS Basics: Using Fallback Colors](https://css-tricks.com/css-basics-using-fallback-colors/)

**Link** on Oct 21, 2019

### [Designing accessible color systems](https://css-tricks.com/designing-accessible-color-systems/)

**Article** on Jun 22, 2021

### [Mixing Colors in Pure CSS](https://css-tricks.com/mixing-colors-in-pure-css/)

**Article** on Jul 26, 2016

### [Overriding The Default Text Selection Color With CSS](https://css-tricks.com/overriding-the-default-text-selection-color-with-css/)

**Article** on Oct 21, 2015

### [Reverse Text Color Based on Background Color Automatically in CSS](https://css-tricks.com/reverse-text-color-mix-blend-mode/)

**Article** on Dec 27, 2019

### [So Many Color Links](https://css-tricks.com/so-many-color-links/)

**Article** on Aug 18, 2018

### [Switch font color for different backgrounds with CSS](https://css-tricks.com/switch-font-color-for-different-backgrounds-with-css/)

**Article** on Jan 20, 2020

### [The Best Color Functions in CSS?](https://css-tricks.com/the-best-color-functions-in-css/)

**Article** on Dec 3, 2021

### [What do you name color variables?](https://css-tricks.com/what-do-you-name-color-variables/)

**Article** on May 8, 2025

### [Why is Nobody Using the hwb() Color Function?](https://css-tricks.com/why-is-nobody-using-the-hwb-color-function/)