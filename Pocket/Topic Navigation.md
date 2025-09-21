---
title: Topic Navigation Hub
type: navigation
created: 2025-09-21
---
# Hub
Welcome to your interactive topic navigation system. Click any button below to create notes in that category.

<div class="topic-navigation">

```button
name 💻 Coding
type command
action Templater: Create new note from template
color blue
```

```button  
name 📄 Data Interchange Format
type command
action Templater: Create new note from template  
color purple
```

```button
name 🎨 Design  
type command
action Templater: Create new note from template
color pink
```

```button
name ⌨️ Command Line
type command
action Templater: Create new note from template
color cyan
```

```button
name 🔬 Computer Science
type command
action Templater: Create new note from template
color green
```

```button
name 🧪 Science
type command
action Templater: Create new note from template
color orange
```

```button
name 🤔 Logic & Reasoning
type command
action Templater: Create new note from template
color yellow
```

```button
name 📊 Project & Research
type command
action Templater: Create new note from template
color red
```

```button
name 🤖 Android
type command
action Templater: Create new note from template
color lime
```

```button
name 🖥️ PC
type command
action Templater: Create new note from template
color indigo
```

</div>
## 🔍 Quick Search by Topic

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

## 📈 Recent Activity

```dataview
TABLE WITHOUT ID
  "📝 " + file.link as "Recently Modified",
  choice(category, category, "General") as "Category", 
  choice(subcategory, subcategory, "General") as "Subcategory",
  dateformat(file.mtime, "MMM dd, HH:mm") as "Modified"
FROM ""
SORT file.mtime DESC
LIMIT 10
```
