# Customizing Primary Theme Code Blocks in Obsidian

## Method 1: CSS Snippets (Recommended for Android)

### Step 1: Create a CSS Snippet
1. **Open Obsidian Settings** → **Appearance** → **CSS Snippets**
2. **Click the folder icon** next to "Snippets folder" to open the snippets directory
3. **Create a new file** called `custom-code-blocks.css`
4. **Paste your custom CSS** (examples below)
5. **Return to Obsidian** → **Refresh** → **Enable the snippet**

### Step 2: Find Code Block Styles from Other Themes

#### Popular Code Block Styles to Copy:

**Minimal Theme Style (Clean & Modern):**
```css
/* Minimal Theme Code Block Style */
.theme-dark .cm-s-obsidian .HyperMD-codeblock,
.theme-dark .cm-s-obsidian .HyperMD-codeblock-begin,
.theme-dark .cm-s-obsidian .HyperMD-codeblock-end {
    background-color: #1e1e1e;
    color: #d4d4d4;
}

.theme-dark .markdown-preview-view pre code {
    background-color: #1e1e1e;
    color: #d4d4d4;
    border-radius: 8px;
    padding: 16px;
    font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
    font-size: 14px;
    line-height: 1.5;
}

.theme-light .cm-s-obsidian .HyperMD-codeblock,
.theme-light .cm-s-obsidian .HyperMD-codeblock-begin,
.theme-light .cm-s-obsidian .HyperMD-codeblock-end {
    background-color: #f8f8f8;
    color: #383a42;
}

.theme-light .markdown-preview-view pre code {
    background-color: #f8f8f8;
    color: #383a42;
    border-radius: 8px;
    padding: 16px;
    font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
    font-size: 14px;
    line-height: 1.5;
}
```

**ITS Theme Style (Colorful Syntax):**
```css
/* ITS Theme Inspired Code Blocks */
.markdown-preview-view pre {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    padding: 0;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.markdown-preview-view pre code {
    background-color: #282c34;
    color: #abb2bf;
    padding: 20px;
    border-radius: 0 0 12px 12px;
    display: block;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    line-height: 1.6;
}

/* Add language label */
.markdown-preview-view pre:before {
    content: attr(class);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
}
```

**AnuPpuccin Theme Style (Catppuccin Colors):**
```css
/* Catppuccin Inspired Code Blocks */
.theme-dark .markdown-preview-view pre {
    background-color: #1e1e2e;
    border: 1px solid #313244;
    border-radius: 8px;
    padding: 0;
}

.theme-dark .markdown-preview-view pre code {
    background-color: #1e1e2e;
    color: #cdd6f4;
    padding: 16px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    line-height: 1.5;
}

/* Syntax highlighting colors */
.theme-dark .token.comment { color: #6c7086; }
.theme-dark .token.string { color: #a6e3a1; }
.theme-dark .token.keyword { color: #cba6f7; }
.theme-dark .token.number { color: #fab387; }
.theme-dark .token.function { color: #89b4fa; }
.theme-dark .token.operator { color: #f5c2e7; }
```

### Step 3: Advanced Customizations

#### Add Copy Button to Code Blocks:
```css
/* Copy button for code blocks */
.markdown-preview-view pre {
    position: relative;
}

.markdown-preview-view pre:hover::after {
    content: "Copy";
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: rgba(0,0,0,0.7);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
    transition: opacity 0.2s;
}
```

#### Line Numbers for Code Blocks:
```css
/* Line numbers */
.markdown-preview-view pre code {
    counter-reset: line;
}

.markdown-preview-view pre code .line:before {
    counter-increment: line;
    content: counter(line);
    display: inline-block;
    width: 2em;
    padding-right: 1em;
    margin-right: 1em;
    color: #666;
    border-right: 1px solid #444;
}
```

#### Mobile-Optimized Code Blocks:
```css
/* Mobile responsive code blocks */
@media (max-width: 768px) {
    .markdown-preview-view pre code {
        font-size: 12px;
        padding: 12px;
        overflow-x: auto;
        white-space: pre;
        word-wrap: normal;
    }
    
    /* Horizontal scroll for long lines */
    .markdown-preview-view pre {
        overflow-x: auto;
    }
}
```

## Method 2: Direct Theme Modification (Advanced)

### For Desktop Users:

#### Step 1: Locate Theme Files
1. **Open file manager** and navigate to your vault
2. **Go to**: `.obsidian/themes/Primary/`
3. **Find**: `theme.css` or `obsidian.css`

#### Step 2: Backup Original
1. **Copy** the original CSS file
2. **Rename copy** to `theme-backup.css`

#### Step 3: Edit Theme File
1. **Open** `theme.css` in a text editor
2. **Search for** code block selectors:
   - `.cm-s-obsidian .HyperMD-codeblock`
   - `.markdown-preview-view pre`
   - `.markdown-preview-view code`
3. **Replace** with your preferred styles

## Method 3: Combining Multiple Theme Elements

### Creating a Hybrid Style:
```css
/* Combining Primary theme base with custom code blocks */

/* Keep Primary's general styling */
body {
    /* Let Primary theme handle body styles */
}

/* Override only code block styles */
.markdown-preview-view pre {
    /* Your custom code block container */
    background: linear-gradient(145deg, #2d3748, #1a202c);
    border-radius: 12px;
    padding: 0;
    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
    margin: 1em 0;
}

.markdown-preview-view pre code {
    /* Your custom code content */
    background: transparent;
    color: #e2e8f0;
    padding: 20px;
    font-family: 'Fira Code', 'SF Mono', Consolas, monospace;
    font-size: 14px;
    line-height: 1.6;
    display: block;
}

/* Language-specific colors */
.language-javascript .token.keyword { color: #ff6b6b; }
.language-python .token.keyword { color: #4ecdc4; }
.language-css .token.property { color: #45b7d1; }
```

## Step-by-Step Implementation

### For Android Users:

1. **Install File Manager** (if not already installed)
2. **Navigate to vault folder** in file manager
3. **Go to** `.obsidian/snippets/` folder
4. **Create new file** called `my-code-blocks.css`
5. **Copy-paste** one of the CSS examples above
6. **Open Obsidian** → Settings → Appearance → CSS Snippets
7. **Refresh** and **enable** your snippet

### Testing Your Changes:

1. **Create a test note** with various code blocks:
```markdown
```javascript
function hello() {
    console.log("Hello World!");
}
```

```python
def hello():
    print("Hello World!")
```

```css
.example {
    color: blue;
    font-size: 16px;
}
```
```

2. **Toggle between** Edit and Preview mode to see changes
3. **Adjust CSS** as needed

## Common Code Block Selectors

### Edit Mode (Source Mode):
- `.cm-s-obsidian .HyperMD-codeblock` - Code block background
- `.cm-s-obsidian .cm-hmd-codeblock` - Code text
- `.HyperMD-codeblock-begin` - Opening ```
- `.HyperMD-codeblock-end` - Closing ```

### Preview Mode (Reading Mode):
- `.markdown-preview-view pre` - Code block container
- `.markdown-preview-view pre code` - Code content
- `.markdown-preview-view code` - Inline code

## Troubleshooting

**CSS Not Working:**
1. Check file extension is `.css`
2. Verify snippet is enabled in Settings
3. Restart Obsidian
4. Check for CSS syntax errors

**Conflicts with Other Plugins:**
1. Disable other CSS snippets temporarily
2. Check plugin-specific selectors
3. Use more specific CSS selectors

**Mobile Issues:**
1. Test CSS on mobile device
2. Add mobile-specific media queries
3. Avoid complex animations for better performance

This guide will help you create beautiful, custom code blocks while maintaining the Primary theme's overall aesthetic!