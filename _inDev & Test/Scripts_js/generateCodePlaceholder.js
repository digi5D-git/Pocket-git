function generateCodePlaceholder(language, purpose) {
    switch (language.toLowerCase()) {
        case "javascript":
            if (purpose === "Function Definition") {
                return "function exampleFunction(param1, param2) {\n    // Your code here\n    return result;\n}";
            }
            return `// JavaScript ${purpose.toLowerCase()}\nconsole.log('Hello, World!');`;
        case "python":
            if (purpose === "Function Definition") {
                return "def example_function(param1, param2):\n    \"\"\"Function description\"\"\"\n    # Your code here\n    return result";
            }
            return `# Python ${purpose.toLowerCase()}\nprint('Hello, World!')`;
        case "html":
            return "<!DOCTYPE html>\n<html>\n<head>\n    <title>Example</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n</body>\n</html>";
        case "css":
            return `/* CSS ${purpose.toLowerCase()} */\n.example-class {\n    property: value;\n}`;
        case "json":
            return '{\n    "key": "value",\n    "array": [1, 2, 3],\n    "nested": {\n        "property": true\n    }\n}';
        case "sql":
            return `-- SQL ${purpose.toLowerCase()}\nSELECT column1, column2\nFROM table_name\nWHERE condition;`;
        default:
            return `// ${language.toUpperCase()} ${purpose.toLowerCase()}\n// Your code here`;
    }
}
