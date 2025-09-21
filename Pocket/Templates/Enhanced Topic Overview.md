---
template: enhanced-topic-overview
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

# Knowledge Hub
<div class="note-summary-card">
<div class="note-title"><% topic %> Overview</div>
<div class="note-summary"><% description %></div>
</div>

## All Notes
```dataviewjs
