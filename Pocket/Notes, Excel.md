---
icon:
cssclass:
cat:
tags:
uID:: Notes, Excel
generated:: 250917 // 06.40
mod:: 250920 // 14.48
---

>[!infobox-right] iBox callout
> the infobox


## UNIX Timestamps

> [!info] UNIX differences
> **10** digit UNIX timestamps: Date & time down to seconds
> **13** digits: Date & time down to milliseconds

> UNIX = Number of seconds passed since 1 Jan 1970

> [!tip] 13 digit converted
> 
> =TEXT(((A1/1000)+DATE(1970,1,1)-TIME(5,0,0), "yyyy-mm-dd hh:mm:ss"

## Formulas

> [!bug]- Extract Unique Values
> **Columns**:
> 
> > `UNIQUE(A:A)`
> **ROWS**:
> > `UNIQUE(A1:F1)`  

#### The LAMBDA Function

[How LAMBDA Works](https://www.xda-developers.com/use-lambda-write-custom-functions-excel/)
