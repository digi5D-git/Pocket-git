---
cssclass:
subset:
file: Data-Hub
aliases: Data-Hub
key: Data-Hub
---
```dataviewjs
class ButtonManager {
    constructor(container) {
        this.container = container;
        this.app = app;
    }
    
    createGrid(buttons, columns = 2) {
        const grid = this.container.createDiv({ cls: "js-button-grid" });
        grid.style.cssText = `
            display: grid;
            grid-template-columns: repeat(${columns}, 1fr);
            gap: 12px;
            padding: 15px;
            background: var(--background-secondary);
            border-radius: 10px;
            margin: 10px 0;
        `;
        
        buttons.forEach(btnData => {
            this.createButton(grid, btnData);
        });
    }
    
    createButton(parent, { name, action, type = "link", color = "#4285f4", icon = "" }) {
        const btn = parent.createEl("button");
        btn.innerHTML = `${icon} ${name}`;
        btn.style.cssText = `
            padding: 15px 20px;
            background: linear-gradient(135deg, ${color}, ${color}dd);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            min-height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "translateY(-2px) scale(1.02)";
            btn.style.boxShadow = "0 4px 16px rgba(0,0,0,0.2)";
        });
        
        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translateY(0) scale(1)";
            btn.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
        });
        
        btn.addEventListener("click", () => this.handleAction(action, type));
    }
    
    handleAction(action, type) {
        switch(type) {
            case "link":
                this.app.workspace.openLinkText(action.replace(/\[\[|\]\]/g, ""), "");
                break;
            case "command":
                this.app.commands.executeCommandById(action);
                break;
            case "template":
                this.app.commands.executeCommandById("templater-obsidian:insert-templater");
                break;
            default:
                console.log("Unknown action type:", type);
        }
    }
}

// Configuration
const buttonData = [
    { name: "Coding", action: "[[Coding Index]]", color: "#ffffa3", icon: "💻" },
    { name: "Design", action: "[[Design Index]]", color: "#e30022", icon: "🎨" },
    { name: "Terminal", action: "[[Command Line Index]]", color: "#03c03c", icon: "⚡" },
    { name: "CompSci", action: "[[CompSci Index]]", color: "#ed872d", icon: "🧠" },
    { name: "Philosophy", action: "[[SotM Index]]", color: "#555d50", icon: "🤔" },
    { name: "Search", action: "global-search:open", type: "command", color: "#607d8b", icon: "🔍" }
];

// Create button manager and render grid
const manager = new ButtonManager(dv.container);
manager.createGrid(buttonData, 2);
```

