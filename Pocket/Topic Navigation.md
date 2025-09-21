---
cssclass:
tags: 
icon:
iconcolor:
indx:
fn: Topic Navigation
aliases: 🧭 Knowledge Navigation Hub
key: 🧭 Knowledge Navigation Hub
type: navigation
---


# 🧭 Knowledge Navigation Hub

Welcome to your interactive topic navigation system. Click any button below to explore notes in that category.

<div class="topic-navigation">

```button
name 💻 Programming Languages
type command
action Templater: Create new note from template
templater True
```
```button
name 🌐 Web Development
type command
action Templater: Create new note from template
templater True
```
```button
name 🔬 Computer Science  
type command
action Templater: Create new note from template
templater True
```

```button
name 🧮 Mathematics
type command
action Templater: Create new note from template
templater True
```

```button
name 📋 Data Formats
type command
action Templater: Create new note from template
templater True
```
```button
name ⚙️ Tools & Utilities
type command
action Templater: Create new note from template
templater True
```

</div>

# Topic Quick Search
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
