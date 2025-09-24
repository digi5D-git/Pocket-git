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
        this.container = container || document.createElement("div"); // Fallback container
        this.app = window.app || {}; // Fallback for Obsidian API
    }
    
    createGrid(buttons, columns = 2) {
        const grid = this.container.createDiv ? this.container.createDiv({ cls: "js-button-grid" }) : document.createElement("div");
        grid.className = "js-button-grid";
        grid.style.cssText = `
            display: grid;
            grid-template-columns: repeat(${columns}, 1fr);
            gap: 10px;
            padding: 12px;
            background: var(--background-secondary); /* #1a1a1a */
            border-radius: 8px;
            margin: 10px 0;
            border: 1px solid var(--background-modifier-border); /* #424242 */
            box-shadow: 0 1px 3px var(--shadow); /* Subtle Iridium shadow */
            position: relative;
            z-index: 1; /* Ensure visibility */
        `;
        
        buttons.forEach(btnData => {
            this.createButton(grid, btnData);
        });
        
        // Append to DOM if not already attached
        if (!this.container.contains(grid)) {
            this.container.appendChild(grid);
        }
    }
    
    createButton(parent, { name, action, type = "link", color = "var(--interactive-accent)", icon = "" }) {
        const btn = parent.createEl ? parent.createEl("button") : document.createElement("button");
        btn.innerHTML = `${icon ? icon + " " : ""}${name}`;
        btn.style.cssText = `
            padding: 10px 16px;
            background: var(--background-primary); /* #212121 */
            color: var(--text-normal); /* #e0e0e0 */
            border: 1px solid var(--background-modifier-border); /* #424242 */
            border-radius: 6px;
            cursor: pointer;
            font-size: 13px;
            font-weight: 500;
            transition: all 0.2s ease;
            box-shadow: 
                1px 1px 3px var(--shadow), 
                inset 0 1px 0 rgba(255,255,255,0.06), 
                -1px -1px 3px rgba(255,255,255,0.04);
            min-height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 2;
            overflow: hidden;
        `;
        
        if (color !== "var(--interactive-accent)") {
            btn.style.background = `
                linear-gradient(135deg, 
                    ${color}1f 0%, 
                    var(--background-primary) 100%
                )
            `;
        }
        
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "translateY(-0.5px)";
            btn.style.boxShadow = `
                2px 2px 4px var(--shadow), 
                inset 0 1px 0 var(--background-modifier-hover), 
                -2px -2px 4px rgba(255,255,255,0.06)
            `;
            if (color !== "var(--interactive-accent)") {
                btn.style.background = `
                    linear-gradient(135deg, 
                        ${color}33 0%, 
                        var(--background-primary) 100%
                    )
                `;
            }
        });
        
        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translateY(0)";
            btn.style.boxShadow = `
                1px 1px 3px var(--shadow), 
                inset 0 1px 0 rgba(255,255,255,0.06), 
                -1px -1px 3px rgba(255,255,255,0.04)
            `;
            if (color !== "var(--interactive-accent)") {
                btn.style.background = `
                    linear-gradient(135deg, 
                        ${color}1f 0%, 
                        var(--background-primary) 100%
                    )
                `;
            }
        });
        
        btn.addEventListener("click", () => {
            btn.style.transform = "translateY(0.5px)";
            btn.style.boxShadow = `
                inset 1px 1px 2px var(--shadow), 
                inset -1px -1px 2px rgba(255,255,255,0.03)
            `;
            setTimeout(() => {
                btn.style.transform = "translateY(0)";
                btn.style.boxShadow = `
                    1px 1px 3px var(--shadow), 
                    inset 0 1px 0 rgba(255,255,255,0.06), 
                    -1px -1px 3px rgba(255,255,255,0.04)
                `;
                this.handleAction(action, type);
            }, 100);
        });
    }
    
    handleAction(action, type) {
        switch(type) {
            case "link":
                if (this.app.workspace) {
                    this.app.workspace.openLinkText(action.replace(/\[\[|\]\]/g, ""), "");
                }
                break;
            case "command":
                if (this.app.commands) {
                    this.app.commands.executeCommandById(action);
                }
                break;
            case "template":
                if (this.app.commands) {
                    this.app.commands.executeCommandById("templater-obsidian:insert-templater");
                }
                break;
            default:
                console.log("Unknown action type:", type);
        }
    }
}

// Configuration
const buttonData = [
    { name: "Coding", action: "[[Coding Index]]", color: "#4285f4", icon: "💻" },
    { name: "Design", action: "[[Design Index]]", color: "#9c27b0", icon: "🎨" },
    { name: "Terminal", action: "[[Command Line Index]]", color: "#4caf50", icon: "⚡" },
    { name: "CompSci", action: "[[CompSci Index]]", color: "#f44336", icon: "🧠" },
    { name: "Philosophy", action: "[[SotM Index]]", color: "#ff9800", icon: "🤔" },
    { name: "Search", action: "global-search:open", type: "command", color: "#607d8b", icon: "🔍" }
];

// Create button manager and render grid
const manager = new ButtonManager(dv.container);
manager.createGrid(buttonData, 2);
```