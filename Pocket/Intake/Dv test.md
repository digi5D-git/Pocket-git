---
cssclass:
cat:
tags:
icon:
"generated:": 250918 // 20.32
"mod:": 250918 // 20.33
generated:: 250918 // 20.32
mod:: 250918 // 20.36
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