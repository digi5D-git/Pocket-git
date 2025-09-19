---
cssclass:
cat:
tags:
icon:
uID:: meta_bind_guide
generated:: 250918 // 23.38
mod:: 250919 // 16.23
---

# Obsidian Meta Bind Plugin - Complete Guide

## What is Meta Bind?

Meta Bind allows you to create interactive input fields that automatically update your note's frontmatter and YAML properties. It turns static metadata into dynamic, clickable interfaces.

## Installation Steps

1. **Install Plugin**: Settings → Community Plugins → Browse → "Meta Bind" → Install & Enable
2. **Basic Setup**: No additional configuration needed to start
3. **Optional**: Configure Meta Bind settings for advanced features

## Core Syntax Overview

```
INPUT[type:property_name]
INPUT[type:property_name(option1, option2)]
INPUT[type(class):property_name]
```

## Common Use Cases & Examples

### 1. Project Management System

#### Project Status Tracking

```markdown
---
project_status: "Not Started"
priority: "Medium"
completion: 0
due_date: ""
assigned_to: ""
---

# Project: Website Redesign

**Status**: `INPUT[select:project_status(Not Started, Planning, In Progress, Review, Complete)]`
**Priority**: `INPUT[select:priority(Low, Medium, High, Critical)]`
**Progress**: `INPUT[slider:completion(0,100,1)]`%
**Due Date**: `INPUT[date:due_date]`
**Assigned**: `INPUT[text:assigned_to]`

## Project Details
Content goes here...
```

#### Task Management Dashboard

```markdown
---
task_type: "Development"
estimated_hours: 0
actual_hours: 0
is_billable: false
client_approved: false
---

# Task Template

**Type**: `INPUT[select:task_type(Development, Design, Testing, Documentation, Meeting)]`
**Estimated Hours**: `INPUT[number:estimated_hours]`
**Actual Hours**: `INPUT[number:actual_hours]`
**Billable**: `INPUT[toggle:is_billable]`
**Client Approved**: `INPUT[toggle:client_approved]`
```

### 2. Learning & Knowledge Management

#### Study Progress Tracker

```markdown
---
subject: "JavaScript"
difficulty: 3
mastery_level: 0
needs_review: false
last_studied: ""
study_method: "Reading"
---

# `$=this.subject$` Study Notes

**Subject**: `INPUT[text:subject]`
**Difficulty** (1-5): `INPUT[slider:difficulty(1,5,1)]`
**Mastery Level**: `INPUT[slider:mastery_level(0,100,10)]`%
**Needs Review**: `INPUT[toggle:needs_review]`
**Last Studied**: `INPUT[date:last_studied]`
**Study Method**: `INPUT[select:study_method(Reading, Video, Practice, Teaching)]`

## Notes
Your study content here...
```

#### Book/Course Rating System

```markdown
---
title: ""
author: ""
rating: 0
completion_status: "Not Started"
would_recommend: false
key_takeaways: []
---

# Book Review: `$=this.title$`

**Title**: `INPUT[text:title]`
**Author**: `INPUT[text:author]`
**Rating**: `INPUT[slider:rating(0,5,0.5)]` ⭐
**Status**: `INPUT[select:completion_status(Not Started, Reading, Completed, Abandoned)]`
**Would Recommend**: `INPUT[toggle:would_recommend]`
```

### 3. Content Creation & Writing

#### Blog Post Management

```markdown
---
title: ""
category: "Technology"
tags: []
word_count: 0
seo_optimized: false
featured_image: false
publish_ready: false
target_audience: "General"
---

# Blog Post: `$=this.title$`

**Title**: `INPUT[text:title]`
**Category**: `INPUT[select:category(Technology, Lifestyle, Business, Tutorial, Review)]`
**Word Count**: `INPUT[number:word_count]`
**SEO Optimized**: `INPUT[toggle:seo_optimized]`
**Featured Image**: `INPUT[toggle:featured_image]`
**Ready to Publish**: `INPUT[toggle:publish_ready]`
**Target Audience**: `INPUT[select:target_audience(Beginner, Intermediate, Advanced, General)]`

## Content
Your blog post content here...
```

### 4. Health & Habit Tracking

#### Daily Habit Tracker

```markdown
---
date: 2024-01-15
exercise: false
meditation: false
reading_minutes: 0
water_glasses: 0
sleep_quality: 3
mood_rating: 3
---

# Daily Habits - `$=this.date$`

**Date**: `INPUT[date:date]`
**Exercise Complete**: `INPUT[toggle:exercise]`
**Meditation**: `INPUT[toggle:meditation]`
**Reading Time**: `INPUT[number:reading_minutes]` minutes
**Water Intake**: `INPUT[slider:water_glasses(0,12,1)]` glasses
**Sleep Quality** (1-5): `INPUT[slider:sleep_quality(1,5,1)]`
**Mood** (1-5): `INPUT[slider:mood_rating(1,5,1)]`
```

### 5. Meeting & Event Management

#### Meeting Template

```markdown
---
meeting_type: "Team Standup"
attendees: []
date: ""
duration: 60
action_items_count: 0
follow_up_required: false
meeting_rating: 3
---

# Meeting: `$=this.meeting_type$`

**Type**: `INPUT[select:meeting_type(Team Standup, Client Meeting, Project Review, Brainstorm, One-on-One)]`
**Date**: `INPUT[date:date]`
**Duration**: `INPUT[number:duration]` minutes
**Action Items**: `INPUT[number:action_items_count]`
**Follow-up Required**: `INPUT[toggle:follow_up_required]`
**Meeting Effectiveness** (1-5): `INPUT[slider:meeting_rating(1,5,1)]`

## Agenda
- Item 1
- Item 2

## Notes
Meeting notes here...

## Action Items
- [ ] Action 1
- [ ] Action 2
```

### 6. Financial Tracking

#### Expense Tracker

```markdown
---
amount: 0
category: "Food"
payment_method: "Credit Card"
is_business_expense: false
receipt_saved: false
date: ""
---

# Expense Entry

**Amount**: $`INPUT[number:amount]`
**Category**: `INPUT[select:category(Food, Transportation, Shopping, Bills, Entertainment, Business, Health)]`
**Payment Method**: `INPUT[select:payment_method(Cash, Credit Card, Debit Card, Digital Wallet)]`
**Business Expense**: `INPUT[toggle:is_business_expense]`
**Receipt Saved**: `INPUT[toggle:receipt_saved]`
**Date**: `INPUT[date:date]`

## Description
Details about this expense...
```

### 7. Recipe & Cooking Management

#### Recipe Template

```markdown
---
recipe_name: ""
cuisine_type: "American"
difficulty: 2
prep_time: 15
cook_time: 30
servings: 4
tried_it: false
family_approved: false
dietary_restrictions: []
---

# Recipe: `$=this.recipe_name$`

**Name**: `INPUT[text:recipe_name]`
**Cuisine**: `INPUT[select:cuisine_type(American, Italian, Mexican, Asian, Mediterranean, Indian)]`
**Difficulty** (1-5): `INPUT[slider:difficulty(1,5,1)]`
**Prep Time**: `INPUT[number:prep_time]` minutes
**Cook Time**: `INPUT[number:cook_time]` minutes
**Servings**: `INPUT[number:servings]`
**Tried It**: `INPUT[toggle:tried_it]`
**Family Approved**: `INPUT[toggle:family_approved]`

## Ingredients
- Ingredient 1
- Ingredient 2

## Instructions
1. Step 1
2. Step 2
```

## Advanced Features

### 1. Conditional Display

```markdown
**Priority Tasks**: `INPUT[toggle:show_priority_tasks]`

```meta-bind-js-view
{show_priority_tasks} === true
---
Priority tasks are visible!
```

### 2. Calculated Fields

```markdown
---
hours_worked: 0
hourly_rate: 50
---

**Hours**: `INPUT[number:hours_worked]`
**Rate**: $`INPUT[number:hourly_rate]`
**Total**: $`$= this.hours_worked * this.hourly_rate $`
```

### 3. Multi-Select Options

```markdown
---
programming_languages: []
---

**Languages**: `INPUT[multi-select:programming_languages(JavaScript, Python, Java, C++, Go, Rust)]`
```

## Styling & CSS Classes

### Custom Styling

```markdown
`INPUT[text(mb-input-large):project_name]`
`INPUT[toggle(mb-toggle-success):task_complete]`
```

Add this CSS to your vault:

```css
.mb-input-large input {
    font-size: 1.2em;
    padding: 8px;
    border-radius: 6px;
}

.mb-toggle-success .checkbox-container {
    --checkbox-color: #10b981;
}
```

## Integration with Dataview

### Query Meta Bind Properties

```dataview
TABLE 
  project_status as "Status",
  priority as "Priority", 
  completion + "%" as "Progress"
FROM ""
WHERE project_status != null
SORT priority DESC, completion ASC
```

## Mobile Optimization Tips

1. **Use Sliders Sparingly**: Number inputs work better on mobile than sliders
2. **Keep Labels Short**: Long labels may wrap awkwardly
3. **Test Touch Targets**: Ensure toggles and buttons are easily tappable
4. **Use Select Dropdowns**: Better than multi-select on mobile

## Best Practices

1. **Start Simple**: Begin with basic toggles and text inputs
2. **Consistent Naming**: Use consistent property names across templates
3. **Template Notes**: Create template notes with Meta Bind fields
4. **Regular Backup**: Properties are stored in frontmatter - easily backed up
5. **Performance**: Don't overuse complex inputs on large vaults

## Troubleshooting

- **Fields Not Updating**: Check YAML syntax in frontmatter
- **Mobile Issues**: Ensure Meta Bind is updated to latest version
- **Sync Problems**: Meta Bind works with Obsidian Sync
- **Performance**: Limit complex inputs per note for better performance

This guide covers the most practical applications of Meta Bind for creating interactive, data-driven notes in your Obsidian vault!
