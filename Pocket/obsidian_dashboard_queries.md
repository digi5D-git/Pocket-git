---
generated:: 250918 // 23.53
mod:: 250919 // 14.26
---
# Technical Knowledge Dashboard

## Setup Instructions

### Step 1: Install Required Plugin
1. Open Obsidian on Android
2. Go to Settings (gear icon) → Community Plugins
3. Turn on Community Plugins if not already enabled
4. Browse → Search "Dataview" → Install and Enable

### Step 2: Prepare Your Notes
Add frontmatter to your notes like this example:
```yaml
---
category: Programming Languages
subcategory: Python
type: Guide
difficulty: Intermediate
last_reviewed: 2024-01-15
status: Complete
---
```

### Step 3: Create Dashboard Note
Create a new note called "📊 Dashboard" and paste the queries below.

## Dashboard Queries

### Programming Languages Card
```dataview
TABLE WITHOUT ID
  "📝 " + file.link as "Note",
  subcategory as "Language",
  difficulty as "Level",
  status as "Status"
FROM ""
WHERE category = "Programming Languages"
SORT subcategory ASC, difficulty ASC
```

### Computer Science Card
```dataview
TABLE WITHOUT ID
  "🔬 " + file.link as "Topic",
  subcategory as "Area",
  difficulty as "Level",
  dateformat(last_reviewed, "MMM dd, yyyy") as "Last Reviewed"
FROM ""
WHERE category = "Computer Science"
SORT subcategory ASC, file.name ASC
```

### Web Development Card
```dataview
TABLE WITHOUT ID
  "🌐 " + file.link as "Resource",
  subcategory as "Technology",
  type as "Type",
  status as "Progress"
FROM ""
WHERE category = "Web Development" OR subcategory IN ["CSS", "HTML", "JavaScript"]
SORT subcategory ASC, type ASC
```

### Mathematics Card
```dataview
TABLE WITHOUT ID
  "🧮 " + file.link as "Topic",
  subcategory as "Branch",
  difficulty as "Level",
  choice(status = "Complete", "✅", choice(status = "In Progress", "🔄", "⭕")) as "Status"
FROM ""
WHERE set = "math"
```

### Data Formats & APIs Card
```dataview
TABLE WITHOUT ID
  "📋 " + file.link as "Guide",
  subcategory as "Format/Type",
  type as "Resource Type",
  dateformat(file.mtime, "MMM dd") as "Modified"
FROM ""
WHERE subcategory IN ["JSON", "XML", "API", "REST", "GraphQL"] OR category = "Data Formats"
SORT subcategory ASC, file.mtime DESC
```

## Alternative: List-Based Cards

If you prefer compact list views, use these instead:

### Programming Languages (List View)
```dataview
LIST
FROM ""
WHERE category = "Programming Languages"
GROUP BY subcategory
SORT subcategory ASC
```

### Recent Updates Across All Categories
```dataview
TABLE WITHOUT ID
  "⚡ " + file.link as "Recently Updated",
  category as "Category",
  subcategory as "Subcategory",
  dateformat(file.mtime, "MMM dd, HH:mm") as "Modified"
FROM ""
WHERE category IN ["Programming Languages", "Computer Science", "Web Development", "Mathematics", "Data Formats"]
SORT file.mtime DESC
LIMIT 15
```

## Quick Stats Dashboard
```dataview
TABLE WITHOUT ID
  category as "Category",
  length(rows) as "Total Notes",
  length(filter(rows, (r) => r.status = "Complete")) as "Completed",
  length(filter(rows, (r) => r.status = "In Progress")) as "In Progress"
FROM ""
WHERE category != null
GROUP BY category
SORT category ASC
```

## Recommended Frontmatter Schema

Use this consistent frontmatter structure in your notes:

```yaml
---
category: "Programming Languages" | "Computer Science" | "Web Development" | "Mathematics" | "Data Formats"
subcategory: "Python" | "Algorithms" | "CSS" | "Calculus" | "JSON" | etc.
type: "Guide" | "Reference" | "Tutorial" | "Cheatsheet" | "Examples"
difficulty: "Beginner" | "Intermediate" | "Advanced"
status: "Not Started" | "In Progress" | "Complete" | "Needs Review"
last_reviewed: 2024-01-15
tags: [relevant, tags, here]
---
```

## Implementation Tips

1. **Start Small**: Begin with one category and gradually add frontmatter to your existing notes
2. **Batch Updates**: Use Obsidian's search and replace to add frontmatter to multiple files
3. **Consistent Naming**: Use the exact same category and subcategory names across all notes
4. **Mobile Optimization**: Keep table columns narrow for better mobile viewing
5. **Regular Maintenance**: Update the `last_reviewed` field periodically

## Customization Options

- **Icons**: Change the emoji icons to match your preference
- **Colors**: Add CSS snippets to color-code different categories
- **Sorting**: Modify SORT clauses to prioritize different criteria
- **Filters**: Add WHERE clauses to show only specific statuses or difficulties
- **Grouping**: Use GROUP BY to create nested categorization