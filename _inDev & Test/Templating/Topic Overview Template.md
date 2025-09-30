---
template: topic-overview
topic: <% topic %>
icon: <% icon %>
description: <% description %>
created: <% tp.date.now() %>
modified: <% tp.date.now() %>
---


<%*
const topic = await tp.system.prompt("Topic name:");
const icon = await tp.system.prompt("Icon emoji:");
const description = await tp.system.prompt("Brief description:");
-%>

# <% icon %> <% topic %> Overview

## Description
<% description %>

## Related Notes
```datacards
TABLE WITHOUT ID
  "📝 " + file.link as "Note",
  choice(summary, summary + "...", "No summary available") as "Summary",
  dateformat(file.mtime, "MMM dd, yyyy") as "Modified",
  file.tags as "Tags"
FROM ""
WHERE contains(lower(file.name), "<% topic.toLowerCase() %>") OR 
      contains(lower(join(file.tags, " ")), "<% topic.toLowerCase() %>") OR
      contains(lower(file.frontmatter.category), "<% topic.toLowerCase() %>") OR
      contains(lower(file.frontmatter.subcategory), "<% topic.toLowerCase() %>")
SORT file.mtime DESC
LIMIT 20

// Settings
preset: grid
columns: 4
fontSize: small
showLabels: true
propertiesAlign: center
titleAlign: center
enableShadows: true
mobilePreset: compact
mobileColumns: 1
```


## Statistics
```dataview
TABLE WITHOUT ID
  "📊 **Total Notes**: " + length(rows) as "Count"
FROM ""
WHERE contains(lower(file.name), "<% topic.toLowerCase() %>") OR 
      contains(lower(join(file.tags, " ")), "<% topic.toLowerCase() %>") OR
      contains(lower(file.frontmatter.category), "<% topic.toLowerCase() %>") OR
      contains(lower(file.frontmatter.subcategory), "<% topic.toLowerCase() %>")
```

## Recent
```dataview
LIST
FROM ""
WHERE contains(lower(file.name), "<% topic.toLowerCase() %>") OR 
      contains(lower(join(file.tags, " ")), "<% topic.toLowerCase() %>") OR
      contains(lower(file.frontmatter.category), "<% topic.toLowerCase() %>") OR
      contains(lower(file.frontmatter.subcategory), "<% topic.toLowerCase() %>")
SORT file.mtime DESC
LIMIT 5
```


>[!info] Noted on:
*<% tp.date.now("YYYY-MM-DD HH:mm") %>*