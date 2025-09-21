function createPredefinedTable(tableType, headers) {
    try {
        const headerRow = "| " + headers.join(" | ") + " |";
        const separatorRow = "|" + " --- |".repeat(headers.length);
        const exampleRow = "| " + headers.map(() => "...").join(" | ") + " |";
        
        return {
            type: tableType,
            headerRow,
            separatorRow,
            exampleRow,
            headers
        };
    } catch (error) {
        console.log("Error creating predefined table:", error.message);
        return null;
    }
}

module.exports = createPredefinedTable;