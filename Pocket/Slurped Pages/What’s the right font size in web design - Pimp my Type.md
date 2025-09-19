---
URL: https://pimpmytype.com/font-size/
Author: Oliver
Site: Pimp my Type
published: 21.2109
Abstract: If you want your text to be read, set it at a sufficient size! But
  what is a good font size, and how can you apply it in your web or app design?
  This article and video has answerers for you with some practical examples
  focused on body text in responsive web design. Ready – then let’s size up, how
  to size your fonts!
Extracted_On: 25.1909
Web_Title: What’s the right font size in web design? - Pimp my Type
---

If you want your text to be read, set it at a sufficient size! But what is a good font size, and how can you apply it in your web design? This article and [video](https://youtu.be/JagGAq7fwyc) has answerers for you with some practical examples focused on body text in responsive web design. Ready – then let’s size up, how to size your fonts!

TL;DR: Start with your body text and set it at a default size of `1em`, which is calculated as 16 px in most browsers. Use relative units and from there, scale up the font size and ideally also the layout proportionally and make it larger on bigger view ports, since we can assume that the viewer is further away.

## The holy trinity of typography

**A font is only as good as it’s being set.** You can choose the [best typefaces](https://pimpmytype.com/fontfriday) ever for your web or app design, and still f*** it up big time (pun intended) when setting it so small or in other ways inappropriate. The holy trinity of typography when it comes to setting your text is:

1. font size,
2. line height (or leading), and
3. line length (or measure)

These three parameters are **strongly related to each other,** and effect if your text can be easily read the most. So when adjusting the type size, the other parameters might be adjusted as well. I always start out with picking a proper typeface, followed by setting the appropriate font size, and then take care of [line length and line height](https://pimpmytype.com/line-length-line-height/).

For this article, let’s do the same and focus on size. I will not go into [modular scale](https://type-scale.com/) (which is beneficial) or more advanced [fluid typography](https://css-tricks.com/simplified-fluid-typography/). For the purpose of clarity, I want to keep it as simple as possible to be a solid introduction.

## Different kinds of text have different sizes

As with [picking a proper typeface](https://pimpmytype.com/kinds-of-text/), ask yourself, what’s the main application of your text? Is it a **long reading** format, like a blog? Then body text is the star of your show. Is it a portfolio or a more **marketing** show-off site? Then [display text](https://pimpmytype.com/display-text/) comes into play. Is it an **app or a UI** with very short precise information, then [functional text](https://pimpmytype.com/functional-text/) is your main actor. Here are values I use in my projects. Use them as helpful guidelines.

![The different types of text shown in an app. 1. Display text is pointing to the headline. 2. Body text is pointing to long reading text below it. 3. Functional text is pointing to the caption below a pullquote.](https://pimpmytype.com/wp-content/uploads/2020/12/different-types-of-text-in-an-app-1200x675.png)

Display text, like headings or pull quotes, is set larger. Body text should ideally be around the browser defaults. Functional text can be slightly smaller.

### Body text

Default: `16px` or `1em`  
On mobile: Use the defaults, at times 10% smaller  
On Desktop: go up until `24px` or `1.5em`

I see a lot of sites that set the body text too small. In the video, I show [a horrible example](https://youtu.be/JagGAq7fwyc?t=230) of a hotel’s website where the body text is set at only 11 px on desktop, which is ridiculous. Even for mobile, it would be too small.

### Display text (Heading 1)

Default: `40px` or `2.5em` for an `<h1>`  
On mobile: `32px` or `2em` or smaller, since it uses up too much space.  
On Desktop: go up until `64px` or `4em`

I use this as the **maximum for my font sizes.** For the other headings, you would pick some values in between that will still create a visual hierarchy. In most cases, you only need to style your `<h1>` to `<h4>`. The `<h4>` could have the same size as your body text, but set in a bolder weight or a different typeface, so it still stands out as a heading.

### Functional text (captions, nav)

Default: `12px` to `14px` or `0.75em` to `0.875em`  
On mobile: Don’t go below the defaults, it’s already very small  
On Desktop: go up until `16px` or `1em`

This text **can be smaller** than the body text. This is because otherwise you would have a hard time fitting it into your design. It should still be readable, though. One tip here is to use a slightly stronger weight (like medium) and increase the tracking as well (at 1% or 0.01em).

#### Pimp my Type on Patreon

Get several benefits while supporting my content creation.  
[Join Patreon](https://patreon.com/pimpmytype)

## Relative units rock

`em` and `rem` are both relative units used in CSS, and for this article, let’s treat them as interchangeable (but if you want, find out here [when to em or rem](https://zellwk.com/blog/rem-vs-em/)). The reason why I love relative units is, because they **make things easier** for us typographers. Of course, your text will eventually be displayed at a specific pixel size and your root size should be sufficient for it (look at the minimum sizes above). But for designing and coding, I find it very helpful to **think in relations between the different elements,** rather than exact sizes.

Looking at the following code example, the rem are easier to understand and process for me as a designer.

```
p {
 font-size: 1rem;
}

h1 {
 font-size: 3rem; /* 3 times the body text */
}

h2 {
 font-size: 2rem; /* 2 times the body text */
}

h3 {
 font-size: 1.5rem; /* 1 ½ times the body text */
}

figcaption {
 font-size: 0.75rem; /* ¾ of the body text */
}
```

## Increase the font-size on larger displays

We talked about a good default size as starting point, and about relative units. Let’s bring it all together to the one thing I find **most crucial for sizing your text right in responsive web design.** It is sizing your text appropriate to the reader’s distance from the device. Let’s assume that the larger the viewport is, the further it is away from the reader. A width of 370 px might be a smartphone, held closer to your body. On the other hand, a 1920 px wide viewport might be an external monitor or an iMac positioned on a desktop further away from the reader. Besides my rough guidelines, a great tool for that is the [Font Size Calculator](https://www.leserlich.info/werkzeuge/schriftgroessenrechner/index-en.php) by leserlich.info.

![A desktop computer with text set at 24 px, a laptop with text set at 20 px, a tablet with text set at 16 px and a smartphone with text set at 16 px font size.](https://pimpmytype.com/wp-content/uploads/2021/09/font-size-responsive-web-design-different-devices-1400x755.png)

The larger the screen, the larger the font size should be. On a smaller screen, go with the defaults, maybe slightly smaller.

This means you can **increase the font size** at certain steps. Here the relative units from above bring you a big advantage. You can scale up everything proportionally, by changing the root size of the `html` element at certain breakpoints. In the video I [explain this in detail](https://youtu.be/JagGAq7fwyc?t=256), so I won’t do it here. Also, play around with it [on CodePen](https://codepen.io/glyphe/pen/abWydyO) and change the width of the view port there.

## It depends on the typeface

These were all rough guidelines to point you in the right direction. Bear in mind, that it will always **depend on your exact application,** and the typeface you choose. Because of the design of a typeface and super complicated technical stuff called [vertical metrics](https://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align), you can almost lose yourself in that subject, and I could go on forever about more details and exceptions. Eventually it does not matter that much.

![](https://pimpmytype.com/wp-content/uploads/2021/09/font-size-gill-sans-vs-arpona-sans-1400x517.png)

Irritating, but true: both typefaces are set at the same size. On the left, Gill Sans, has a lower x-height which makes it appear smaller than [Arpona Sans](https://pimpmytype.com/arpona-sans/) on the right with a larger x-height.

This [short video](https://youtube.com/shorts/WX-56wRA4aY?feature=share) and also the review of _[Captura Now](https://pimpmytype.com/captura-now/)_**_,_** also goes into the details of the font size in Relation to the x-height.

**Judge what you see,** and not what is calculated. Use this article as another step of your typographic journey to train your eye, taste, and assessment. If you have trouble with that, you can always [book a private coaching call](https://pimpmytype.com/coaching-call/) for assistance!

---

I hope this article was helpful, so you can make a more educated decision, when it comes to font sizes. **Do you miss something, or have questions?** I’m happy to answer them in the comments below!