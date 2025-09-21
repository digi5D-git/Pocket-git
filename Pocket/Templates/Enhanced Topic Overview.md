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
const topic = "<% topic.toLowerCase() %>";
const pages = dv.pages().where(p => 
    p.file.name.toLowerCase().includes(topic) ||
    (p.file.tags && p.file.tags.some(tag => tag.toLowerCase().includes(topic))) ||
    (p.category && p.category.toLowerCase().includes(topic)) ||
    (p.subcategory && p.subcategory.toLowerCase().includes(topic))
);

for (let page of pages.sort(p => p.file.mtime, 'desc')) {
    const summary = page.summary || 
                   page.description || 
                   page.file.frontmatter?.description ||
                   "No summary available";
    
    const tags = page.file.tags ? 
                 page.file.tags.map(tag => `<span class="note-tag">#${tag}</span>`).join('') : 
                 '<span class="note-tag">untagged</span>';
    
    const lastModified = page.file.mtime ? 
                        page.file.mtime.toFormat("MMM dd, yyyy") : 
                        "Unknown";
    
    dv.paragraph(`
<div class="note-summary-card">
    <div class="note-title">📄 ${page.file.link}</div>
    <div class="note-metadata">Modified: ${lastModified}</div>
    <div class="note-summary">${summary}</div>
    <div class="note-tags">${tags}</div>
</div>
    `);
}

if (pages.length === 0) {
    dv.paragraph(`
<div class="note-summary-card">
    <div class="note-summary">No notes found for topic: <strong><% topic %></strong></div>
</div>
    `);
}
```
## statistics

