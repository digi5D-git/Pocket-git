function formatCodeBlockContent(codeData) {
    try {
        if (!codeData) return "";
        
        return `
## ${codeData.purpose}

\`\`\`${codeData.language}
${codeData.placeholder}
\`\`\`
`;
    } catch (error) {
        console.log("Error formatting code block:", error.message);
        return "";
    }
}

module.exports = formatCodeBlockContent;