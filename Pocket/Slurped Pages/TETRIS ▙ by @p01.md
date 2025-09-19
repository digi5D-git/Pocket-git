---
URL: http://www.p01.org/256b_tetris_theme/
Author: Mathieu 'p01' Henri, @p01
Site: "@p01"
Abstract: TETRIS themed music and visuals in 252 bytes of HTML+Javascript
Extracted_On: 25.1909
Web_Title: TETRIS ▙ by @p01
---

## TETRIS ▙

TETRIS themed music and visuals in 252 bytes of HTML+Javascript

[![](http://www.p01.org/256b_tetris_theme/tetris_theme.gif)](http://www.p01.org/256b_tetris_theme/tetris_theme.htm)

Click to start the little show.

## Source code

```
<body onclick="with(new AudioContext)with(o=createOscillator())connect(destination),start(setInterval(v=>innerHTML='TETЯIS&#'+(9624|(o.frequency.value=`RR>AIIA>777${d='ARRIA>>>AIIRRAA7777'}IIIWnnbWRRR${d}`.charCodeAt(++t%58)*4)%7)+'P01',t=232))">click
```

## How does it work

### Initialization & set up

When the users clicks on the page, a new `AudioContext` and oscillator are created, connected and started.

```
<body onclick="with(new AudioContext)with(o=createOscillator())connect(destination),start(...)">click
```

At the same time, we start a `setInterval` with a delay of 232ms to update visuals and music ~4x per second as we increase the variable `t`, the "time" counter.

```
setInterval(v=>...,t=232)
```

### Music

The music is stored in the string `"RR>AIIA>777ARRIA>>>AIIRRAA7777IIIWnnbWRRRARRIA>>>AIIRRAA7777"`, where the character code of each character correspond to the frequency of each note of the theme music of TETRIS. There is a catch though.

The notes of the classic TETRIS theme music are in the octaves 3 and 4, with frequencies in the range 220-440. Using UTF-8 characters with a character code in this range would require twice the amount of bytes to store. So instead we store the notes 2 octaves lower, which brings us to the range 55-110 and maps to the characters `"7>AIRWbn"`. All of which can be stored in a single byte.

Also since one part of the melody is repeated, we save 8 bytes by using a template string.

```
// Using the template string instead of the expanded version below
`RR>AIIA>777${d='ARRIA>>>AIIRRAA7777'}IIIWnnbWRRR${d}`
'RR>AIIA>777ARRIA>>>AIIRRAA7777IIIWnnbWRRRARRIA>>>AIIRRAA7777'
```

To update the note, we set the `frequency.value` of the oscillator to `"musicString".charCodeAt(t)*4` to pick the frequency of the current note and bump it 2 octaves up.

```
o.frequency.value=`RR>AIIA>777${d='ARRIA>>>AIIRRAA7777'}IIIWnnbWRRR${d}`.charCodeAt(++t%58)*4
```

### Visuals

As for the visuals, they are updated by setting the `innerHTML` of the window to the string `TETЯIS@P01`. Except that instead of the character `@` we add an HTML entity between `&#9624;` and `&#9630;` ( ▘ ▙ ▚ ▛ ▜ ▝ ▞ ▟ ) using the formula `9624|(noteFrequency%7)`. Using the frequency of the note we just used to update the music saves a few bytes and has the advantage that the visuals and audio are perfectly in sync.

```
innerHTML='TETЯIS&#'+(9624|(o.frequency.value=`RR>AIIA>777${d='ARRIA>>>AIIRRAA7777'}IIIWnnbWRRR${d}`.charCodeAt(++t%58)*4)%7)+'P01'
```

## Feedback

Hope you like it this little show.

You can find [TETRIS ▙ on Pouet.net](https://www.pouet.net/prod.php?which=85795), the demoscene archive, and leave your feedback there or contact me.