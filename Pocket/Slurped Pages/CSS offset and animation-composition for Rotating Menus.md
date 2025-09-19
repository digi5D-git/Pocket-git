---
URL: https://frontendmasters.com/blog/css-offset-and-animation-composition-for-rotating-menus/
Author: |-
  Preethi Sam
        on
        September 17, 2025
Abstract: The article explains how to design and animate a *circular* menu (that rotates in a circle!) in CSS using offset and animation-composition.
Extracted_On: 25.1809
Web_Title: CSS offset and animation-composition for Rotating Menus
set:
  - css
---

Circular menu design exists as a space-saver or choice, and there’s an easy and efficient way to create and animate it in CSS using `offset` and `animation-composition`. Here are some examples (click the button in the center of the choices):

I’ll take you through the second example to cover the basics.

## The Layout

Just some semantic HTML here. Since we’re offering a menu of options, a `<menu>` seems appropriate (yes, [`<li>` is correct as a child](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/menu)!) and each button is focusable.

`<main>   <div class="menu-wrapper">     <menu>       <li><button>Poland</button></li>       <li><button>Brazil</button></li>       <li><button>Qatar</button></li>       <!-- etc. -->     </menu>     <button class="menu-button" onclick="revolve()">See More</button>   </div> </main>`Code language: HTML, XML (xml)

Other important bits:

The menu and the menu button (`<button id="menu-button">`) are the same size and shape and stacked on top of each other.

Half of the menu is hidden via `overflow: clip;` and the menu wrapper being pulled upwards.

`main {    ==overflow: clip;== } .menu-wrapper {    display: grid;  place-items: center;  ==transform: translateY(-129px);==  menu, .menu-button {    width: 259px;    height: 129px;    grid-area: 1 / 1;    border-radius: 50%;  } }`
Code language: CSS (css)

Set the menu items (`<li>`s) around the `<menu>`’s center using `offset`.

`menu {     padding: 30px;    --gap: 10%; /* The in-between gap for the 10 items */ } li {   offset: padding-box 0deg;  ==offset-distance: calc((sibling-index() - 1) * var(--gap));==  /* or    &:nth-of-type(2) { offset-distance: calc(1 * var(--gap)); }    &:nth-of-type(3) { offset-distance: calc(2 * var(--gap)); }    etc...  */ }`
Code language: CSS (css)

The `offset` (a longhand property) positions all the `<li>` elements along the `<menu>`’s `padding-box` that has been set as the _offset path_.

> The **offset** CSS shorthand property sets all the properties required for animating an element along a defined path. The offset properties together help to define an offset transform, a transform that aligns a point in an element ([offset-anchor](https://developer.mozilla.org/en-US/docs/Web/CSS/offset-anchor)) to an offset position ([offset-position](https://developer.mozilla.org/en-US/docs/Web/CSS/offset-position)) on a path ([offset-path](https://developer.mozilla.org/en-US/docs/Web/CSS/offset-path)) at various points along the path ([offset-distance](https://developer.mozilla.org/en-US/docs/Web/CSS/offset-distance)) and optionally rotates the element ([offset-rotate](https://developer.mozilla.org/en-US/docs/Web/CSS/offset-rotate)) to follow the direction of the path. — [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/offset)

The `offset-distance` is set to spread the menu items along the path based on the given gap between them (`--gap: 10%`).

|Items|Initial value of `offset-distance`|
|---|---|
|1|0%|
|2|10%|
|3|20%|

## The Animation

`@keyframes rev1 {    to {     offset-distance: 50%;   }  }  @keyframes rev2 {    from {     offset-distance: 50%;   }    to {     offset-distance: 0%;   }  }`Code language: CSS (css)

Set two `@keyframes` animations to move the menu items halfway to the left, clockwise, (`rev1`), and then from that position back to the right (`rev2`)

`li {   /* ... */  animation: 1s forwards;  ==animation-composition: add;==  }`
Code language: CSS (css)

Set `animation-time` (`1s`) and `animation-direction` (`forwards`), and `animation-composition` (`add`) for the `<li>` elements

Even though animations can be triggered in CSS — for example, within a `:checked` state — since we’re using a `<button>`, the names of the animations will be set in the `<button>`’s click handler to trigger the animations.

By using `animation-composition`, the animations are made to _add_, not replace by default, the `offset-distance` values inside the `@keyframes` rulesets to the initial `offset-distance` values of each of the `<li>`.

|Items|Initial Value|to|
|---|---|---|
|1|0%|(0% + 50%) **50%**|
|2|10%|(10% + 50%) **60%**|
|3|20%|(20% + 50%) **70%**|

rev1 animation w/ `animation-composition: add`

|Items|from|back to Initial Value|
|---|---|---|
|1|(0% + 50%) **50%**|(0% + 0%) **0%**|
|2|(10% + 50%) **60%**|(10% + 0%) **10%**|
|3|(20% + 50%) **70%**|(20% + 0%) **20%**|

rev2 animation w/ `animation-composition: add`

Here’s how it _would’ve been_ without `animation-composition: add`:

|Items|Initial Value|to|
|---|---|---|
|1|0%|50%|
|2|10%|50%|
|3|20%|50%|

> The **animation-composition** CSS property specifies the [composite operation](https://developer.mozilla.org/en-US/docs/Glossary/Composite_operation) to use when multiple animations affect the same property simultaneously.
> 
> [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-composition)

## The Trigger

`const LI = document.querySelectorAll('li'); let flag = true; function revolve() {   LI.forEach(li => li.style.animationName = flag ? "rev1" : "rev2");   flag = !flag; }`Code language: JavaScript (javascript)

In the menu button’s click handler, `revolve()`, set the `<li>` elements’ `animationName` to `rev1` and `rev2`, alternatively.

Assigning the animation name triggers the corresponding keyframes animation each time the `<button>` is clicked.

Using the method covered in this post, it’s possible to control how much along a revolution the elements are to move (demo one), and which direction. You can also experiment with different offset path shapes. You can declare (`@keyframes`) and trigger (`:checked`, `:hover`, etc.) the animations in CSS, or using JavaScript’s [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect) that includes the animation composition property.