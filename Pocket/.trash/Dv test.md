---
iconcolor:
indx:
cssclass:
tags:
icon:
fn: Dv test
aliases: Dv test
key: Dv test
"created:": 250919_19.28
"modified:": 250920_16.18
---

```dataviewjs
let propertyName = "set"; // Replace with your desired frontmatter property name
let propertyValue = "mind"; // Replace with the specific value you are looking for

let pages = dv.pages()
    .where(p => p[propertyName] && p[propertyName] === propertyValue);

dv.table(["File", propertyName], 
    pages.map(p => [p.file.link, p[propertyName]])
);
```
