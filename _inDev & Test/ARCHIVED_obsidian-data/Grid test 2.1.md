
# Simple grid


```md
> [!grid-card]
> - This is a simple list inside a special callout called "grid"
> - Each element is a grid item
> - 
> 	- You can have a sub-list
> 	- with multiple elements inside
> 
> > [!grid-item]
> > This is another grid item inside a callout alled "grid-item" as an alternate way
> 
> - You can use both at the same time
> 
> > [!tip]
> > And use any callout as grid item !
```

> [!grid-card]
> - This is a simple list inside a special callout called "grid"
> - Each element is a grid item
> - 
> 	- You can have a sub-list
> 	- with multiple elements inside
> 
> > [!grid-item]
> > This is another grid item inside a callout alled "grid-item" as an alternate way
> 
> - You can use both at the same time
> 
> > [!tip]
> > And use any callout as grid item !


```markdown
> [!grid-3 card]
> - This
> - is
> - a
> 	- nested
> 		- nested 2
> 	- other
> - simple
> - grid
> - formed with
> - markdown lists
```

> [!grid-3 card]
> - This
> - is
> - a
> 	- nested
> 		- nested 2
> 	- other
> - simple
> - grid
> - formed with
> - markdown lists

# Complex grid

```md
> [!grid-card]
> > [!grid-item]
> > ### Lorem ipsum dolor
> > sit amet
> > 
> > ---
> > 
> > > Sed ut perspiciatis unde omnis iste natus
> 
> > [!success]
> > consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
> > ```
> > Ut enim ad minim veniam, quis nostrud exercitation
> > ```
> 
> -
> 	- **ullamco laboris nisi ut**
> 	- ***aliquip*** ex ea *commodo* consequat.
> 	- Duis aute irure [[dolor in]]
> 
> > [!grid-item]
> > > [!success]
> > > voluptate velit esse cillum dolore eu fugiat nulla pariatur.
> 
> > [!grid-item]
> > - [x] Excepteur sint occaecat cupidatat
> > 
> > ![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
> > <small>Engelbart</small>
>
> > [!grid-card-2]
> > - This
> > - is
> > 
> > > [!grid-item col-span-2]
> > > a nested grid 🤯
```

> [!grid-card]
> > [!grid-item]
> > ### Lorem ipsum dolor
> > sit amet
> > 
> > ---
> > 
> > > Sed ut perspiciatis unde omnis iste natus
> 
> > [!success]
> > consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
> > ```
> > Ut enim ad minim veniam, quis nostrud exercitation
> > ```
> 
> -
> 	- **ullamco laboris nisi ut**
> 	- ***aliquip*** ex ea *commodo* consequat.
> 	- Duis aute irure [[dolor in]]
> 
> > [!grid-item]
> > > [!success]
> > > voluptate velit esse cillum dolore eu fugiat nulla pariatur.
> 
> > [!grid-item]
> > - [x] Excepteur sint occaecat cupidatat
> > 
> > ![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
> > <small>Engelbart</small>
>
> > [!grid-card-2]
> > - This
> > - is
> > 
> > > [!grid-item col-span-2]
> > > a nested grid 🤯

```md
> [!grid-card]
> -
> 	- ### Lorem ipsum dolor
> 	- sit amet
> 	- ---
> 	- > Sed ut perspiciatis unde omnis iste natus
> -
> 	- consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
> 	- `Ut enim ad minim veniam, quis nostrud exercitation`
> -
> 	- - **ullamco laboris nisi ut**
> 	- - ***aliquip*** ex ea *commodo* consequat.
> 	- - Duis aute irure [[dolor in]]
> - > [!success]
>   > voluptate velit esse cillum dolore eu fugiat nulla pariatur.
> - 
> 	- - [x] Excepteur sint occaecat cupidatat
> 	- 
> 	- ![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
> 	- <small>Engelbart</small>
```

> [!grid-card]
> -
> 	- ### Lorem ipsum dolor
> 	- sit amet
> 	- ---
> 	- > Sed ut perspiciatis unde omnis iste natus
> -
> 	- consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
> 	- `Ut enim ad minim veniam, quis nostrud exercitation`
> -
> 	- - **ullamco laboris nisi ut**
> 	- - ***aliquip*** ex ea *commodo* consequat.
> 	- - Duis aute irure [[dolor in]]
> - > [!success]
>   > voluptate velit esse cillum dolore eu fugiat nulla pariatur.
> - 
> 	- - [x] Excepteur sint occaecat cupidatat
> 	- 
> 	- ![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
> 	- <small>Engelbart</small>

# Advanced grid options

To customize a grid, add keywords after "grid".

```md
> [!grid ADD OPTIONS HERE]
```

## Grid items

3 ways to have grid items :

- Simple lists
- The special callout called "grid-item"
- Any other callout

```
> [!grid-card-3]
> - This is an item
>
> > [!grid-item]
> > This is another item
> 
> > [!info]
> > And this is another item
```

> [!grid-card-3]
> - This is an item
>
> > [!grid-item]
> > This is another item
> 
> > [!info]
> > And this is another item

## Nested grids

```
> [!grid-card-2]
> - First grid's item
> 
> > [!grid-card-2]
> > - Second grid's item
> > - Second grid's item
> > - Second grid's item
> 
> > [!grid-card-3]
> > - Third grid's item
> > - Third grid's item
> > - Third grid's item
> 
> - First grid's item
```

> [!grid-card-2]
> - First grid's item
> 
> > [!grid-card-2]
> > - Second grid's item
> > - Second grid's item
> > - Second grid's item
> 
> > [!grid-card-3]
> > - Third grid's item
> > - Third grid's item
> > - Third grid's item
> 
> - First grid's item

## Cards

> "card" Is a shortcut for the other options "padding border gap bg"

```md
> [!grid-2 card]
```

> [!grid-2 card]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> 
> > [!grid-item]
> > 4

> [!grid-2 card]
> - 1
> - 2
> - 3
> - 4

> `grid-card` and `grid-card-3` : Is a shortcut for `grid-3 grid-tablet-2 grid-mobile-1 padding border gap bg same-width same-height`

```md
> [!grid-card]
```

```md
> [!grid-card-3]
```

> [!grid-card-3]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> 
> > [!grid-item]
> > 4

> [!grid-card-3]
> - 1
> - 2
> - 3
> - 4

> `grid-card-2` : Is a shortcut for `grid-2 grid-tablet-1 grid-mobile-1 padding border gap bg same-width same-height`

```md
> [!grid-card-2]
```

> [!grid-card-2]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> 
> > [!grid-item]
> > 4

> [!grid-card-2]
> - 1
> - 2
> - 3
> - 4

## Number of columns

```md
> [!grid-auto card]
```

> [!grid-auto card]
> > [!grid-item]
> > This is a grid
> 
> > [!grid-item]
> > with
> 
> > [!grid-item]
> > multiple items inside
> 
> > [!grid-item]
> > of different widths and different heights
> 
> > [!grid-item]
> > Some items
> > can be
> > on
> > multiple lines
> 
> > [!grid-item]
> > 
> 
> > [!grid-item]
> > <- Or some can be empty

> [!grid-auto card]
> - This is a grid
> - with
> - multiple items inside
> - of different widths and different heights
> - Some items
> 	- can be
> 	- on
> 	- multiple lines
> -
> - <- Or some can be empty

```md
> [!grid-2 grid-3 grid-4 grid-5 grid-6 grid-7 grid-8 card]
```

> [!grid-2 card]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2

> [!grid-3 card]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3

> [!grid-4 card]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> 
> > [!grid-item]
> > 4

> [!grid-5 card]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> 
> > [!grid-item]
> > 4
> 
> > [!grid-item]
> > 5

> [!grid-6 card]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> 
> > [!grid-item]
> > 4
> 
> > [!grid-item]
> > 5
> 
> > [!grid-item]
> > 6

> [!grid-7 card]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> 
> > [!grid-item]
> > 4
> 
> > [!grid-item]
> > 5
> 
> > [!grid-item]
> > 6
> 
> > [!grid-item]
> > 7

> [!grid-8 card]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> 
> > [!grid-item]
> > 4
> 
> > [!grid-item]
> > 5
> 
> > [!grid-item]
> > 6
> 
> > [!grid-item]
> > 7
> 
> > [!grid-item]
> > 8

> [!grid-2 card]
> - 1
> - 2

> [!grid-3 card]
> - 1
> - 2
> - 3

> [!grid-4 card]
> - 1
> - 2
> - 3
> - 4

> [!grid-5 card]
> - 1
> - 2
> - 3
> - 4
> - 5

> [!grid-6 card]
> - 1
> - 2
> - 3
> - 4
> - 5
> - 6

> [!grid-7 card]
> - 1
> - 2
> - 3
> - 4
> - 5
> - 6
> - 7

> [!grid-8 card]
> - 1
> - 2
> - 3
> - 4
> - 5
> - 6
> - 7
> - 8

## Number of columns on tablet / mobile

```md
> [!grid-4 grid-tablet-2 grid-mobile-1 card]
```

> [!grid-4 grid-tablet-3 grid-mobile-1 card]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> 
> > [!grid-item]
> > 4

> [!grid-4 grid-tablet-3 grid-mobile-1 card]
> - 1
> - 2
> - 3
> - 4

## Same width

- By default every column takes the space based on their content.
- If you add the `same-width` option, every column takes a fraction of the available space evenly.
- Is an alias for `col-1-1`, `col-2-1` up to `col-8-1`.

```md
> [!grid-4 card]
```

> [!grid-4 card]
> > [!grid-item]
> > 111111111
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> 
> > [!grid-item]
> > 4444
> 
> > [!grid-item]
> > 5
> 
> > [!grid-item]
> > 6
> 
> > [!grid-item]
> > 777777777777777

```md
> [!grid-4 card same-width]
```

> [!grid-4 card same-width]
> > [!grid-item]
> > 111111111
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> 
> > [!grid-item]
> > 4444
> 
> > [!grid-item]
> > 5
> 
> > [!grid-item]
> > 6
> 
> > [!grid-item]
> > 777777777777777

> [!grid-4 card same-width]
> - 111111111
> - 2
> - 3
> - 4444
> - 5
> - 6
> - 77777777777777

## Same height

```md
> [!grid-4 bg border gap padding]
```

> [!grid-4 bg border gap padding]
> > [!grid-item]
> > 111111111
> > 111
> > 11111
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> > 3
> 
> > [!grid-item]
> > 4444
> 
> > [!grid-item]
> > 5
> 
> > [!grid-item]
> > 6
> 
> > [!grid-item]
> > 77777777777777777
> > 7
> > 7
> > 7

```md
> [!grid-4 bg border gap padding same-height]
```

> ⚠️ Does not work with "grid-auto"

> [!grid-4 bg border gap padding same-height]
> > [!grid-item]
> > 1
> > 1
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> > 3
> 
> > [!grid-item]
> > 4
> 
> > [!grid-item]
> > 5
> 
> > [!grid-item]
> > 6
> 
> > [!grid-item]
> > 7
> > 7
> > 7
> > 7
> > 7

> [!grid-4 bg border gap padding same-height]
> - 1
> 	- 1
> - 2
> - 3
> 	- 3
> - 4
> - 5
> - 6
> - 7
> 	- 7
> 	- 7
> 	- 7
> 	- 7

## Same height across all rows

```md
> [!grid-4 bg border gap padding same-height-all]
```

> ⚠️ Does not work with "grid-auto"

> [!grid-4 bg border gap padding same-height-all]
> > [!grid-item]
> > 1
> > 1
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> > 3
> 
> > [!grid-item]
> > 4
> 
> > [!grid-item]
> > 5
> 
> > [!grid-item]
> > 6
> 
> > [!grid-item]
> > 7
> > 7
> > 7
> > 7
> > 7

> [!grid-4 bg border gap padding same-height-all]
> - 1
> 	- 1
> - 2
> - 3
> 	- 3
> - 4
> - 5
> - 6
> - 7
> 	- 7
> 	- 7
> 	- 7
> 	- 7

## Grid columns sizes

By default every column takes the space based on their content.
You can define more space for all column with the `all-col-` option.
You can define more space for any column with the `col-` option.

How sizing works :

- `auto` keyword means that the column takes the space based on their content
- A `number` means that the column takes the number's fraction of the available space

Changing all columns sizes (`all-col-` option)

- You can change how all columns sizes by specifying the `all-col-` option
- `all-col-auto` means every column takes the space based on their content (default behavior)
- `same-width` and `all-col-1` means every column takes 1 fraction of the available space
- `all-col-2` means every column takes 2 fractions of the available space

Changing individual columns sizes (`col-` option)

- You can change how individual columns sizes by specifying the `col-` option
- `col-1-auto` means the first column takes the space based on their content
- `col-1-1` means the first column takes 1 fraction of the available space
- `col-1-3` means the first column takes 3 fractions of the available space
- `col-6-3` means the sixth column takes 3 fractions of the available space

All columns size can be changed based on mobile or tablet with :

- `all-mobile-col-` option
- `all-tablet-col-` option
- `mobile-col-` option
- `tablet-col-` option

For example :

`col-1-2` means the first column will takes 2 fractions of the space, other columns will take 1 fraction of the space due to `all-col-1`.

```
> [!grid-4 card all-col-1 col-1-2]
> - 1
> - 2
> - 3
> - 4
```

> [!grid-4 card all-col-1 col-1-2]
> - 1
> - 2
> - 3
> - 4

```
> [!all-col-auto]
> [!all-col-1]
> [!all-col-2]
...
> [!all-col-7]
> [!all-col-8]

> [!col-1-auto]
> [!col-1-1]
> [!col-1-2]
...
> [!col-8-7]
> [!col-8-8]
```

```
> [!grid-2 card col-1-3 col-2-1]
```

> [!grid-2 card col-1-3 col-2-1]
> - col-1-3
> - col-2-1

```
> [!grid-3 card col-1-3 col-2-auto col-3-1]
```

> [!grid-3 card col-1-3 col-2-auto col-3-1]
> - col-1-3
> - col-2-auto
> - col-3-1

```
> [!grid-4 card   same-width                col-2-2]

... is the same as ...

> [!grid-4 card   all-col-1                 col-2-2]

... is the same as ...

> [!grid-4 card   col-1-1 col-3-1 col-4-1   col-2-2]
```

> [!grid-4 card same-width col-2-2]
> - item
> - col-2-1
> - item
> - item

> [!grid-4 card all-col-1 col-2-2]
> - item
> - col-2-1
> - item
> - item

> [!grid-4 card col-1-1 col-2-2 col-3-1 col-4-1]
> - item
> - col-2-1
> - item
> - item

```
> [!grid-4 card                  col-2-1]

... is the same as ...

> [!grid-4 card   all-col-auto   col-2-1]
```

> [!grid-4 card col-2-1]
> - item
> - col-2-1
> - item
> - item

> [!grid-4 card all-col-auto col-2-1]
> - item
> - col-2-1
> - item
> - item

```
> [!grid-3 card all-col-2 col-3-1]
```

> [!grid-3 card all-col-2 col-3-1]
> - item
> - item
> - col-3-1

```
> [!grid-3 card all-col-1 col-3-2  grid-tablet-2 tablet-col-2-1   grid-mobile-1]
```

> [!grid-3 card all-col-1 col-3-2  grid-tablet-2 tablet-col-2-1   grid-mobile-1]
> - item
> - item
> - col-3-1

## Grid items span

A grid item can span up to 8 columns and 8 rows with `col-span-` and `row-span-`

```
> [!grid-5 card same-width same-height]
> - [1]
> 	- [1]
> 
> - [2]
> 
> > [!grid-item col-span-2]
> > [3] Spanning 2 columns
>
> > [!grid-item row-span-3]
> > [4] Spanning 3 rows
> 
> > [!grid-item col-span-2 row-span-2]
> > [5] Spanning 2 columns and 2 rows
> 
> - [6]
> 	- [6]
> - [7]
> - [8]
> - [9]
```

> [!grid-5 card same-width same-height]
> - [1]
> 	- [1]
> 
> - [2]
> 
> > [!grid-item col-span-2]
> > [3] Spanning 2 columns
>
> > [!grid-item row-span-3]
> > [4] Spanning 3 rows
> 
> > [!grid-item col-span-2 row-span-2]
> > [5] Spanning 2 columns and 2 rows
> 
> - [6]
> 	- [6]
> - [7]
> - [8]
> - [9]

```
> > [!grid-item col-span-2]
> > [!grid-item col-span-3]
> > [!grid-item col-span-4]
> > [!grid-item col-span-5]
> > [!grid-item col-span-6]
> > [!grid-item col-span-7]
> > [!grid-item col-span-8]
> > [!grid-item row-span-2]
> > [!grid-item row-span-3]
> > [!grid-item row-span-4]
> > [!grid-item row-span-5]
> > [!grid-item row-span-6]
> > [!grid-item row-span-7]
> > [!grid-item row-span-8]
```

> [!grid-8 card same-width same-height]
> > [!grid-item col-span-2]
> > col span 2
> 
> > [!grid-item col-span-3]
> > col span 3
>
> - item
> - item
> - item
>
> > [!grid-item col-span-4]
> > col span 4
>
> - item
> - item
> - item
> - item
> 
> > [!grid-item col-span-5]
> > col span 5
>
> - item
> - item
> - item
> 
> > [!grid-item col-span-6]
> > col span 6
>
> - item
> - item
> 
> > [!grid-item col-span-7]
> > col span 7
>
> - item
> 
> > [!grid-item col-span-8]
> > col span 8
> 
> > [!grid-item row-span-2]
> > row span 2
> 
> > [!grid-item row-span-3]
> > row span 3
>
> > [!grid-item row-span-4]
> > row span 4
> 
> > [!grid-item row-span-5]
> > row span 5
> 
> > [!grid-item row-span-6]
> > row span 6
> 
> > [!grid-item row-span-7]
> > row span 7
> 
> > [!grid-item row-span-8]
> > row span 8
>
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item
> - item

## Borders

```md
> [!grid-4]
```

> [!grid-4]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> 
> > [!grid-item]
> > 4

```md
> [!grid-4 border]
```

> [!grid-4 border]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> 
> > [!grid-item]
> > 4

> [!grid-4 border]
> - 1
> - 2
> - 3
> - 4

## Gap

```md
> [!grid-4 border]
```

> [!grid-4 border]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> 
> > [!grid-item]
> > 4

```md
> [!grid-4 border gap]
```

> [!grid-4 border gap]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> 
> > [!grid-item]
> > 4

> [!grid-4 border gap]
> - 1
> - 2
> - 3
> - 4

## Padding

```md
> [!grid-4 border gap]
```

> [!grid-4 border gap]
> > [!grid-item]
> > left
> 
> > [!grid-item]
> > left
> 
> > [!grid-item]
> > left
> 
> > [!grid-item]
> > left

```md
> [!grid-4 border gap padding]
```

> [!grid-4 border gap padding]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> 
> > [!grid-item]
> > 4

> [!grid-4 border gap padding]
> - 1
> - 2
> - 3
> - 4

## Background

```md
> [!grid-4 border gap padding bg]
```

> [!grid-4 border gap padding bg]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2
> 
> > [!grid-item]
> > 3
> 
> > [!grid-item]
> > 4

> [!grid-4 border gap padding bg]
> - 1
> - 2
> - 3
> - 4

## Alignment

```md
> [!grid-4 card]
```

> [!grid-4 card]
> > [!grid-item]
> > left
> 
> > [!grid-item]
> > left
> 
> > [!grid-item]
> > left
> 
> > [!grid-item]
> > left

```md
> [!grid-4 card center]
```

> [!grid-4 card center]
> > [!grid-item]
> > center
> 
> > [!grid-item]
> > center
> 
> > [!grid-item]
> > center
> 
> > [!grid-item]
> > center

> [!grid-4 card center]
> - center
> - center
> - center
> - center

```md
> [!grid-4 card right]
```

> [!grid-4 card right]
> > [!grid-item]
> > right
> 
> > [!grid-item]
> > right
> 
> > [!grid-item]
> > right
> 
> > [!grid-item]
> > right

> [!grid-4 card right]
> - right
> - right
> - right
> - right

```md
> [!grid-4 card same-height top]
```

> [!grid-4 card same-height top]
> > [!grid-item]
> > top
> > top
> 
> > [!grid-item]
> > top
> 
> > [!grid-item]
> > top
> 
> > [!grid-item]
> > top
> > top
> > top
> > top

> [!grid-4 card same-height top]
> - top
> 	- top
> - top
> - top
> -
> 	- top
> 	- top
> 	- top
> 	- top

```md
> [!grid-4 card same-height middle]
```

> [!grid-4 card same-height middle]
> > [!grid-item]
> > middle
> > middle
> 
> > [!grid-item]
> > middle
> 
> > [!grid-item]
> > middle
> 
> > [!grid-item]
> > middle
> > middle
> > middle
> > middle

> [!grid-4 card same-height middle]
> - middle
> 	- middle
> - middle
> - middle
> -
> 	- middle
> 	- middle
> 	- middle
> 	- middle

```md
> [!grid-4 card same-height bottom]
```

> [!grid-4 card same-height bottom]
> > [!grid-item]
> > bottom
> > bottom
> 
> > [!grid-item]
> > bottom
> 
> > [!grid-item]
> > bottom
> 
> > [!grid-item]
> > bottom
> > bottom
> > bottom
> > bottom

> [!grid-4 card same-height bottom]
> - bottom
> 	- bottom
> - bottom
> - bottom
> - bottom
> 	- bottom
> 	- bottom
> 	- bottom

```md
> [!grid-4 card same-height center middle]
```

> [!grid-4 card same-height center middle]
> > [!grid-item]
> > center + middle
> > center + middle
> 
> > [!grid-item]
> > center + middle
> 
> > [!grid-item]
> > center + middle
> 
> > [!grid-item]
> > center + middle
> > center + middle
> > center + middle
> > center + middle

> [!grid-4 card same-height center middle]
> - center + middle
> 	- center + middle
> - center + middle
> - center + middle
> - center + middle
> 	- center + middle
> 	- center + middle
> 	- center + middle

```md
> [!grid-4 card same-height center bottom]
```

> [!grid-4 card same-height center bottom]
> > [!grid-item]
> > center + bottom
> > center + bottom
> 
> > [!grid-item]
> > center + bottom
> 
> > [!grid-item]
> > center + bottom
> 
> > [!grid-item]
> > center + bottom
> > center + bottom
> > center + bottom
> > center + bottom

> [!grid-4 card same-height center bottom]
> - center + bottom
> 	- center + bottom
> - center + bottom
> - center + bottom
> - center + bottom
> 	- center + bottom
> 	- center + bottom
> 	- center + bottom

```md
> [!grid-4 card same-height right middle]
```

> [!grid-4 card same-height right middle]
> > [!grid-item]
> > right + middle
> > right + middle
> 
> > [!grid-item]
> > right + middle
> 
> > [!grid-item]
> > right + middle
> 
> > [!grid-item]
> > right + middle
> > right + middle
> > right + middle
> > right + middle

> [!grid-4 card same-height right middle]
> - right + middle
> 	- right + middle
> - right + middle
> - right + middle
> - right + middle
> 	- right + middle
> 	- right + middle
> 	- right + middle

## Only show on mobile / tablet / pc

```md
> [!grid-2 card pc-only]
```

> [!grid-2 grid-2 card pc-only]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2

```md
> [!grid-2 card tablet-only]
```

> [!grid-2 card tablet-only]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2

```md
> [!grid-2 card mobile-only]
```

> [!grid-2 card mobile-only]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2

## Hide on mobile / tablet / pc

```md
> [!grid-2 card hide-on-pc]
```

> [!grid-2 card hide-on-pc]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2

```md
> [!grid-2 card hide-on-tablet]
```

> [!grid-2 card hide-on-tablet]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2

```md
> [!grid-2 card hide-on-mobile]
```

> [!grid-2 card hide-on-mobile]
> > [!grid-item]
> > 1
> 
> > [!grid-item]
> > 2

# Positioning fixes

## Add margin to the bottom if next element is not a div / hr

> [!grid-card-2]
> - 1
> - 2

next element is text (margin added)

> [!grid-card-2]
> - 1
> - 2

---
^-- next element is hr (no margin added)

> [!grid-card-2]
> - 1
> - 2

> [!info]
> next element is div (no margin added)

## Add margin between multiple grid callouts

> [!grid-card-2]
> - 1
> - 2

> [!grid-card-2]
> - 3
> - 4

^-- should not be sticked

## By default lists and other elements in callouts have too much margin-block, avoid that

> [!grid-card-2]
> > [!grid-item]
> > 1
>
> > [!grid-item]
> > 2

^-- should be the same margin-block inside with :

> [!grid-card-2]
> - 1
> - 2
