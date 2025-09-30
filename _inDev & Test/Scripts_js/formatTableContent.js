function formatTableContent(tableData, noteType) {
    try {
        if (!tableData) return "";
        
        return `
## ${noteType} Table

${tableData.headerRow}
${tableData.separatorRow}
${tableData.exampleRow}
`;
    } catch (error) {
        console.log("Error formatting table:", error.message);
        return "";
    }
}

module.exports = formatTableContent;