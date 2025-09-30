async function getTableTypePrompt(tp, category) {
    try {
        const getTableTemplates = require('./getTableTemplates');
        const templates = getTableTemplates(category);
        const templateNames = Object.keys(templates);
        
        // Add custom option
        templateNames.push("Custom Table");
        
        const tableType = await tp.system.suggester(
            templateNames,
            templateNames
        );
        
        if (tableType === "Custom Table") {
            return null; // Will trigger custom table creation
        }
        
        return {
            type: tableType,
            headers: templates[tableType]
        };
    } catch (error) {
        console.log("Error getting table type:", error.message);
        return null;
    }
}

module.exports = getTableTypePrompt;