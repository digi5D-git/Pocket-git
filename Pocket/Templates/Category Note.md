<%*
const categories = [
    "Coding",
    "Data Interchange Format", 
    "Design",
    "Command Line",
    "Computer Science",
    "Science",
    "Logic & Reasoning",
    "Project & Research",
    "Android",
    "PC"
];

const subcategories = {
    "Coding": ["JavaScript", "Python", "Java", "C++", "Go", "Rust", "Typescript", "General"],
    "Data Interchange Format": ["JSON", "XML", "YAML", "Markup", "LaTeX", "TeX", "Standardization", "General"],
    "Design": ["CSS", "HTML", "Color", "Typography", "Concept & Theory", "UI/UX", "General"],
    "Command Line": ["Powershell", "BASH", "CMD", "Regex", "Scripting", "Shell", "General"],
    "Computer Science": ["Algorithm", "Data Structures", "Computation", "Systems & Architecture", "Theory", "Network & Security", "General"],
    "Science": ["Physics", "Mathematics", "Theory", "White Paper", "General"],
    "Logic & Reasoning": ["Logic", "Philosophy", "Deduction & Reason", "Study", "General"],
    "Project & Research": ["Project Note", "Idea", "Supporting Information", "Research", "General"],
    "Android": ["Android System", "Mobile Applications", "App Guides", "App Development", "Apps of Interest", "General"],
    "PC": ["Operating System", "Hardware", "App Guides", "App Development", "Apps of Interest", "General"]
};

const registers = [
    "Informational",
    "Guide",
    "Reference",
    "Read",
    "Cheat Sheet",
    "Archive"
];

// Prompt for metadata
const category = await tp.system.suggester(categories, categories);
const availableSubcategories = subcategories[category] || ["General"];
const subcategory = await tp.system.suggester(availableSubcategories, availableSubcategories);
const register = await tp.system.suggester(registers, registers);
let noteTitle = await tp.system.prompt("Note title:");
if (!noteTitle) noteTitle = tp.file.title;

// Optionally add table
const wantsTable = await tp.system.suggester(["Yes", "No"], [true, false]);
let tableContent = "";
if (wantsTable) {
    const numColumns = parseInt(await tp.system.prompt("Number of table columns (2-6):", "3"), 10);
    let headers = [];
    for (let i = 0; i < numColumns; i++) {
        headers.push(await tp.system.prompt(`Column ${i+1} header:`, `Column ${i+1}`));
    }
    const headerRow = "| " + headers.join(" | ") + " |";
    const separatorRow = "|" + " --- |".repeat(numColumns);
    const exampleRow = "| " + headers.map(() => "...").join(" | ") + " |";
    tableContent = `\n## Table\n${headerRow}\n${separatorRow}\n${exampleRow}\n`;
}

// Optionally add code block
const wantsCodeBlock = await tp.system.suggester(["Yes", "No"], [true, false]);
let codeBlockContent = "";
if (wantsCodeBlock) {
    let languageOptions = [
        "javascript", "python", "java", "cpp", "go", "rust", "typescript",
        "json", "xml", "yaml", "html", "css", "cmd", "bash", "powershell", "text"
    ];
    languageOptions.push("custom");
    let langChoice = await tp.system.suggester(languageOptions, languageOptions);
    if (langChoice === "custom") {
        langChoice = await tp.system.prompt("Enter custom language identifier:", "text");
    }
    codeBlockContent = `\n## Code Block\n\`\`\`${langChoice}\n// Your code here\n\`\`\`\n`;
}
-%>

---
category: "<% category %>"
subcategory: "<% subcategory %>"
register: "<% register %>"
created: <% tp.date.now("YYYY-MM-DD") %>
type: "Note"
---

# <% noteTitle %>

## Overview
*Brief description of this note*

<% tableContent %>

<% codeBlockContent %>
