async function promptForTable(tp) {
    try {
        const wantsTable = await tp.system.suggester(
            ["Yes, create a custom table", "No, skip table creation"], 
            [true, false]
        );
        
        return wantsTable;
    } catch (error) {
        console.log("Error in table prompt:", error.message);
        return false;
    }
}

module.exports = promptForTable;