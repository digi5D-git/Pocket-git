async function createCodeBlock(tp, languagesByCategory, selectedCategory) {
    let availableLanguages = languagesByCategory[selectedCategory] || [
        "javascript", "python", "java", "cpp", "html", "css", "json", "sql",
        "bash", "powershell", "yaml", "xml", "markdown", "text", "pseudocode"
    ];
    availableLanguages.push("custom");
    let selectedLanguage = await tp.system.suggester(availableLanguages, availableLanguages);
    let finalLanguage = selectedLanguage === "custom"
        ? await tp.system.prompt("Enter custom language identifier:", "text")
        : selectedLanguage;
    let codeBlockPurpose = await tp.system.suggester(
        [
            "Example Code", "Syntax Reference", "Implementation", "Configuration",
            "Sample Data", "Algorithm", "Function Definition"
        ],
        [
            "Example Code", "Syntax Reference", "Implementation", "Configuration",
            "Sample Data", "Algorithm", "Function Definition"
        ]
    );
    let placeholderContent = generateCodePlaceholder(finalLanguage, codeBlockPurpose);
    return `## ${codeBlockPurpose}\n\n\`\`\`${finalLanguage}\n${placeholderContent}\n\`\`\`\n`;
}
