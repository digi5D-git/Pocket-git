---
cssclass:
cat:
tags:
icon:
uID:: Idex
generated:: 250919 // 17.57
mod:: 250919 // 17.58
---
```dataviewjs
const { app } = this;

// Create a container
const container = dv.container;
container.style.display = "flex";
container.style.gap = "20px";

// Help to run a command either by id or by display name
function runCommand(command) {
    // First, check if it's an exact command ID
    if (app.commands.commands[command]) {
        app.commands.executeCommandById(command);
        return;
    }
    // Otherwise, try to find by display name
    const commands = Object.values(app.commands.commands);
    const match = commands.find(cmd => cmd.name === command);
    if (match) {
        app.commands.executeCommandById(match.id);
    } else {
        new Notice(`Command not found: ${command}`);
    }
}

// Helper to create a button
function createButton(text, command, color = "#76b3fa") {
    const button = document.createElement("button");
    button.textContent = text;
    button.style.backgroundColor = color;
    button.style.color = "black";
    button.style.border = "none";
    button.style.padding = "6px 12px";
    button.style.borderRadius = "6px";
    button.style.cursor = "pointer";
    button.style.fontSize = "var(--button-size)";
    button.onclick = () => {
        runCommand(command);
    };
    return button;
}

// Add your buttons here
container.appendChild(createButton("Title", "command", "color"));
```