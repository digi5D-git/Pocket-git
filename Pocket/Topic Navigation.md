---
title: Topic Navigation Hub
type: navigation
created: 2024-01-15
---
# Knowledge Hub
<div class="topic-navigation">

```button
name Programming by Language
type command
action Templater: Create new note from template
templater True
```

```button
name Web Design and Development
type command
action Templater: Create new note from template
templater True
```
```button
name Sciences and Technology
type command
action Templater: Create new note from template
templater True
```

```button
name Mind
type command
action Templater: Create new note from template
templater True
```
</div>
## Quick Look
```dataview
TABLE WITHOUT ID
  "📂 " + choice(category, category, "Uncategorized") as "Category",
  length(rows) as "Notes Count",
  "[[" + choice(category, category + " Overview", "Uncategorized Overview") + "]]" as "View All"
FROM ""
WHERE category != null
GROUP BY category
SORT category ASC
```


## Recent
```dataview
TABLE WITHOUT ID
  "📝 " + file.link as "Recently Modified",
  choice(category, category, "General") as "Category", 
  dateformat(file.mtime, "MMM dd, HH:mm") as "Modified"
FROM ""
SORT file.mtime DESC
LIMIT 10
```