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

# <% cpu %> <% topic %> Overview

## Description
<% description %>

## Related Notes
```dataview
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
```
