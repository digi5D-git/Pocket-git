async function promptForCodeBlock(tp) {
    try {
        const wantsCodeBlock = await tp.system.suggester(
            ["Yes, add a code block", "No, skip code block"], 
            [true, false]
        );
        
        return wantsCodeBlock;
    } catch (error) {
        console.log("Error in code block prompt:", error.message);
        return false;
    }
}

module.exports = promptForCodeBlock;