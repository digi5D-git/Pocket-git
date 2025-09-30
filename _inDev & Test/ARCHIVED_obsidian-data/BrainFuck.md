---
link: 
tags: minimalist progammation programming language machine encoding coding
registry: Coding
token: "[[4-Data Registries/Coding/Programming Language|Programming Language]]"
source: https://www.dcode.fr/brainfuck-language
Data Id: BrainFuck
Data Generated: 3Q24, Sep 14th - 19.35
Modified: 3Q24, Sep 14th - 19.59
---

# BrainFuck

> [!obsidian] What the Fuck is BrainFuck?
> **BrainFuck**, aka **BF** or **Brainf##k**, is a minimalist programmation language that uses only **8** commands to manipulate memory & perform operations.
> 
> > The name derives from two words, **brain** & **fuck**, in reference to a sort of major frustration for your brain

## How Does it Work

Brainfuck works like a **Turing Machine**,[^1] with a read/write head (pointer) that manipulates a buffer.

The **8** possible machine operations are:
- `>` : increment the pointer position, (+1)
- `<` : decrement the pointer position, (-1)
- `+` : increment the byte in the memory cell where the pointer is located
- `-` : decrement the byte memory cell where the pointer is located
- `.` : send the value of the pointed byte as output (treated as an *ASCII* value)
- `,` : insert an input byte (user input) in the memory cell where the pointer is located (ASCII value)
- `[` : if the pointed byte is **0** then jump to instruction after the corresponding `]`
- `]` : if the pointed byte is ==not== **0** then jump to the instruction after the corresponding `[`

> [!warning] 
> Brainfuck is **NOT** a proper encryption system, but rather an obfuscated/unreadable programming language

Encoding in Brainfuck consists of writing machine code, *input*, that returns text as *output*.

In practice, increment the pointer memory box to the desired ASCII value & display the corresponding character as output.

## Origins & Use

Created by **Urban Miller** in **1993**, Brainfuck, is never used a language in real development projects. This is due to its complexity & lack of features.
However, it is sometimes used for educational purposes, like teaching programming concepts such as memory manipulation, loops, & conditional jumps.
It can also be used as a challenge for programmers wanting to test their skills & understanding of fundamental programming concepts.

[^1]: 1st described by Alan Turing in *Turing 1936-7*, Turing machines are simple abstract computational devices intended to help investigate the extent & limitations of what can be computed. Also coined in 1936 as **automatic machines**, they were specifically devised for the computing of real numbers 