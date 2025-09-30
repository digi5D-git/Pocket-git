---
cssclass:
src:
sub:
nod:
tags:
id:: W3C Web Color Basic
initial:: 250627 HH.mm
revision:: 250628 HH.mm
---

# W3C Web Color Basic

## Basic Color Name Keywords

> Table below is the Basic color keywords and associated values from the W3C

| Name    | Hex       | Decimal       |
| ------- | --------- | ------------- |
| Black   | `#000000` | 0, 0, 0       |
| Silver  | `#C0C0C0` | 192, 192, 192 |
| Gray    | `#808080` | 128, 128, 128 |
| White   | `#FFFFFF` | 255, 255, 255 |
| Maroon  | `#800000` | 128, 0, 0     |
| Red     | `#FF0000` | 255, 0, 0     |
| Purple  | `#800080` | 128, 0, 128   |
| Fuchsia | `#FF00FF` | 255, 0, 255   |
| Green   | `#008000` | 0, 128, 0     |
| Lime    | `#00FF00` | 0, 255, 0     |
| Olive   | `#808000` | 128, 128, 0   |
| Yellow  | `#FFFF00` | 255, 255, 0   |
| Navy    | `#000080` | 0, 0, 128     |
| Blue    | `#0000FF` | 0, 0, 255     |
| Teal    | `#008080` | 0, 128, 128   |
| Aqua    | `#00FFFF` | 0, 255, 255   |

## Web Work with Color Hex Values

### Numerical Formatting & Values

> [!css]+ RGB and HEX
> Formatting for HEX values for RGB is a pound (#) followed by a 3 or 6 digit HEX value
> HEX 3 digit notation (`#rgb`) is converted to 6 digit (`#rrggbb`) by digit replicating NOT addition of zeros (0).
> 
> > `#FB0` expands to `#FFBB00`
> 
> This is to ensure values such as white (`#FFFFFF`) can be specified with 3 digit notation (`#FFF`) and removes any dependencies on color depth of display.
