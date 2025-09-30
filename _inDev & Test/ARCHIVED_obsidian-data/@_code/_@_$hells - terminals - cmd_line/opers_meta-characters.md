---
cssclasses: 
src: https://opensource.com/
sub: operators
nod: Bash
tags:
  - shell
  - operators
  - metacharacters
  - bash
  - regex
"v-id:": opers_meta-characters
"generated:": 250701 // 06.58
"mod:": 250701 // 07.08
v-id:: opers_meta-characters
generated:: 250701 // 06.58
mod:: 250701 // 07.09
---

# meta-characters & shells

![meta-characters_cheatsheet](META%20Characters%20cheatsheet%20(230209).pdf)

## Listing of common chars & operations

﻿~ Home directory
$     Denote a variable (as in $HOME or $USER)
& Run a command in the background
; Command termination
&& Continue to the next command upon success (AND)
|| Continue to the next command upon failure (OR)
| Use output of the first command as input for the next
' Treat all contents as literal
" Treat spaces as literal, but expand variables 
\ Treat the next character as literal
( ) Execute contents in a subshell
{ ;} Execute in current shell (terminate with semi-colon)
\[\[ \]\] Test expression
(( )) Evaluate contents as a mathematical expression
[[ ]] Test expression, returning 0 or 1

\> Overwrite existing content
< Overwrite existing content
\>> Append to existing content
<< Append to existing content

? Match exactly one of any character
\* Match zero or more of any character

[0-9] Any digit
[a-z] Any lowercase alpha
[A-Z] Any uppercase alpha
[a-zA-Z] Any lowercase or uppercase alpha
[abc] Only a, b, and c
[!a-z] No lowercase alpha
[!1-3] No 1, 2, or 3, but all other digits
[b-hot] Lowercase b through h, and the letter o and the letter t
[A-M0-9] Uppercase alpha A through M, and any digit

\b Backspace
\e Escape
\f Form feed (like a non-returning newline)
\n Newline
\r Carriage return
\t Horizontal tab
\v Vertical tab
\\ Backslash
\cH Control-H
\uHHHH Unicode character of hexadecimal value HHHH
\NNN 8-bit character with octal value NNN

---

﻿NETWORKING

## nslookup 
dig @192.168.1.1 example.com A +noall +answer +nocmd

## nslookup (ptr)
dig -x @192.168.1.1 example.com  +noall +answer +nocmd

## ifconfig
ip address

## route -n
ip route list

## netstat -n --tcp --listen
ss --numeric --tcp --listen

UTILITIES

## fgrep 'tux' /etc/passwd
grep -F 'tux' /etc/passwd

## egrep '^[fj]' /etc/passwd
grep -E '^[fj]' /etc/passwd

## du
dust

## find
fd

## man
tealdeer

## ls
exa

## cat
bat --plain

PACKAGING

## yum
dnf

## apt-get
apt

## pip
python3 -m pip

## repoquery
dnf repoquery

