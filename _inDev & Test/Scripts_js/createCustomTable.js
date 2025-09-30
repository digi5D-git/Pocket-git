async function createCustomTable(tp, noteType = "Table") {
    const numColumns = parseInt(await tp.system.prompt("How many columns for your table? (2-6):", "3"));
    let headers = [];
    for (let i = 0; i < numColumns; i++) {
        headers.push(
            await tp.system.prompt(`Header ${i + 1} name:`, `Column ${i + 1}`)
        );
    }
    const headerRow = "| " + headers.join(" | ") + " |";
    const separatorRow = "|" + " --- |".repeat(numColumns);
    const exampleRow = "| " + headers.map(() => "...").join(" | ") + " |";
    return `## ${noteType} Table\n\n${headerRow}\n${separatorRow}\n${exampleRow}\n`;
}
