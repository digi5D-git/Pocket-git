


---
category: "<% selectedCategory %>"
subcategory: "<% selectedSubcategory %>"
type: "<% noteType %>"
created: <% tp.date.now("YYYY-MM-DD") %>
---

<%*
// Predefined categories list
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

// Predefined subcategories based on main category
const subcategories = {
    "Code & Markup": ["JavaScript", "Python", "Java", "C++", "Go", "Rust", "Typescript", "Standardization", "Racket", "General"],
    "Data Interchange Format": ["JSON", "XML", "YAML", "Markup", "LaTeX", "TeX", "Standardization"],
    "Design": ["CSS", "HTML", "Color", "Typography", "Concept & Theory", "UI/UX"],
    "Command Line": ["Powershell", "BASH", "CMD", "Regex", "Scripting" "Shell", "General"],
    "Computer Science": ["Algorithm", "Data Structures", "Computation", "Systems & Architecture", "Theory", "Network & Security"],
    "Science": ["Physics", "Mathematics", "Theory", "White Paper"],
    "Logic & Reasoning": ["Logic", "Philosophy", "Deduction & Reason", "Study"],
    "Project & Research": ["Project Note", "Idea", "Supporting Information", "Research"],
    "Android": ["Android System", "Mobile Applications", "App Guides", "App Development", "Apps of Interest"],
	"PC": ["Operating System", "Hardware", "App Guides", "App Development", "Apps of Interest"]
};

// Get user inputs
const selectedCategory = await tp.system.suggester(categories, categories);
const availableSubcategories = subcategories[selectedCategory] || ["General"];
const selectedSubcategory = await tp.system.suggester(availableSubcategories, availableSubcategories);

const noteTitle = await tp.system.prompt("Note title:");
const noteType = await tp.system.suggester(
    ["Guide", "Reference", "Tutorial", "Cheatsheet", "White Paper", "Notes", "Project"], 
    ["Guide", "Reference", "Tutorial", "Cheatsheet", "White Paper", "Notes", "Project"]
);

const action = await tp.system.suggester(
    ["Review", "Informational", "Archive", "Pending"], 
    ["Review", "Informational", "Archive", "Pending"]
);

// Ask if user wants to create a custom table
const wantsTable = await tp.system.suggester(
    ["Yes, create table", "No"], 
    [true, false]
);

let tableHeaders = [];
let tableContent = "";

if (wantsTable) {
    // Get number of columns
    const numColumns = parseInt(await tp.system.prompt("How many columns for your table? (2-6):", "3"));
    
    // Get header names
    for (let i = 0; i < numColumns; i++) {
        const header = await tp.system.prompt(`Header ${i + 1} name:`, `Column ${i + 1}`);
        tableHeaders.push(header);
    }
    
    // Create table structure
    const headerRow = "| " + tableHeaders.join(" | ") + " |";
    const separatorRow = "|" + " --- |".repeat(numColumns);
    const exampleRow = "| " + tableHeaders.map(() => "...").join(" | ") + " |";
    
    tableContent = `
## ${noteType} Table

${headerRow}
${separatorRow}
${exampleRow}
`;
}

// Ask if user wants to create a code block
const wantsCodeBlock = await tp.system.suggester(
    ["Yes, add a code block", "No, skip code block"], 
    [true, false]
);

let codeBlockContent = "";

if (wantsCodeBlock) {
// Get languages based on selected category or provide general list
    let availableLanguages = languagesByCategory[selectedCategory] || [
        "javascript", "python", "java", "cpp", "html", "css", "json", "sql", 
        "bash", "powershell", "yaml", "xml", "markdown", "text", "pseudocode"
    ];
// Add option for custom language
    availableLanguages.push("custom");
    
    const selectedLanguage = await tp.system.suggester(availableLanguages, availableLanguages);
    
    let finalLanguage = selectedLanguage;
    if (selectedLanguage === "custom") {
        finalLanguage = await tp.system.prompt("Enter custom language identifier:", "text");
    }
    
    // Ask for code block purpose
    const codeBlockPurpose = await tp.system.suggester(
        ["Example Code", "Syntax Reference", "Implementation", "Configuration", "Sample Data", "Algorithm", "Function Definition"],
        ["Example Code", "Syntax Reference", "Implementation", "Configuration", "Sample Data", "Algorithm", "Function Definition"]
    );
    
    // Generate appropriate placeholder content based on language and purpose
    let placeholderContent = "";
    
if (finalLanguage === "javascript") {
        placeholderContent = codeBlockPurpose === "Function Definition" 
            ? "function exampleFunction(param1, param2) {\n    // Your code here\n    return result;\n}"
            : "// JavaScript " + codeBlockPurpose.toLowerCase() + "\nconsole.log('Hello, World!');";
    } else if (finalLanguage === "python") {
        placeholderContent = codeBlockPurpose === "Function Definition"
            ? "def example_function(param1, param2):\n    \"\"\"Function description\"\"\"\n    # Your code here\n    return result"
            : "# Python " + codeBlockPurpose.toLowerCase() + "\nprint('Hello, World!')";
    } else if (finalLanguage === "html") {
        placeholderContent = "<!DOCTYPE html>\n<html>\n<head>\n    <title>Example</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n</body>\n</html>";
    } else if (finalLanguage === "css") {
        placeholderContent = "/* CSS " + codeBlockPurpose.toLowerCase() + " */\n.example-class {\n    property: value;\n}";
    } else if (finalLanguage === "json") {
        placeholderContent = "{\n    \"key\": \"value\",\n    \"array\": [1, 2, 3],\n    \"nested\": {\n        \"property\": true\n    }\n}";
    } else if (finalLanguage === "sql") {
        placeholderContent = "-- SQL " + codeBlockPurpose.toLowerCase() + "\nSELECT column1, column2\nFROM table_name\nWHERE condition;";
    } else {
        placeholderContent = "// " + finalLanguage.toUpperCase() + " " + codeBlockPurpose.toLowerCase() + "\n// Your code here";
    }

codeBlockContent = `
## ${codeBlockPurpose}

\`\`\`${finalLanguage}
${placeholderContent}
\`\`\`
`;
}

-%>

# <% noteTitle %>

## Overview
*Brief description goes here...*

**Category**: <% selectedCategory %> â†’ <% selectedSubcategory %>  
**Action**: <% action %>

<% tableContent %>

## Content

### Abstraction Points
- Point 1
- Point 2  
- Point 3

### Details
Your detailed content goes here...

<% codeBlockContent %>

## References
- [Link 1]()
- [Link 2]()

---
*Created: <% tp.date.now("YYYY-MM-DD HH:mm") %>*
*Tags: <% autoTags.map(tag => `#${tag}`).join(' ') %>*
```

