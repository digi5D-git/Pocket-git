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
        this.app = app; // Obsidian API, globally available in Dataview
    }
    
    createGrid(buttons, columns = 2) {
        const grid = this.container.createDiv({ cls: "js-button-grid" });
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
        `;
        
        buttons.forEach(btnData => {
            this.createButton(grid, btnData);
        });
    }
    
    createButton(parent, { name, action, type = "link", color = "var(--interactive-accent)", icon = "" }) {
        const btn = parent.createEl("button");
        btn.innerHTML = `${icon} ${name}`;
        btn.style.cssText = `
            padding: 10px 16px;
            background: var(--background-primary); /* #212121 */
            color: var(--text-normal); /* #e0e0e0 */
            border: 1px solid var(--background-modifier-border); /* #424242 */
            border-radius: 6px;
            cursor: pointer;
            font-size: 13px;
            font-weight: 500;
            transition: all 0.2s ease; /* Matches Iridium's smooth transitions */
            box-shadow: 
                1px 1px 3px var(--shadow), /* rgba(0,0,0,0.2) */
                inset 0 1px 0 rgba(255,255,255,0.06), /* Subtle highlight */
                -1px -1px 3px rgba(255,255,255,0.04); /* Neuromorphic depth */
            min-height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        `;
        
        if (color !== "var(--interactive-accent)") {
            btn.style.background = `
                linear-gradient(135deg, 
                    ${color}1f 0%, /* ~12% opacity */
                    var(--background-primary) 100%
                )
            `;
        }
        
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "translateY(-0.5px)";
            btn.style.boxShadow = `
                2px 2px 4px var(--shadow), 
                inset 0 1px 0 var(--background-modifier-hover), /* rgba(255,255,255,0.1) */
                -2px -2px 4px rgba(255,255,255,0.06)
            `;
            if (color !== "var(--interactive-accent)") {
                btn.style.background = `
                    linear-gradient(135deg, 
                        ${color}33 0%, /* ~20% opacity for hover pop */
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

// Define globally for Dataview compatibility
window.ButtonManager = ButtonManager;

// Export for CommonJS compliance (optional, for future-proofing)
module.exports = ButtonManager;
```