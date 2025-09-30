# Directory Navigation

[Home](@_linux/README.md)

Navigating the Linux file system is a fundamental skill for any user or administrator. This section covers essential commands for moving around directories, checking your current location, and executing files.

Key concepts covered:

- Changing directories
- Displaying the current working directory
- Understanding special directory references (`.`, `..`, `~`)
- Executing scripts in the current directory

These commands form the backbone of file system navigation in Linux. Mastering them will significantly improve your efficiency when working in the terminal.

## Commands

```bash
# Change directory
cd /home/user/projects/my_project

# Print working directory
pwd

# Execute a script in the current directory
./script.sh

# Go up one directory level
cd ..

# Navigate to home directory
cd
# or
cd ~
```

## Tips

- Use Tab completion to quickly navigate long directory paths.
- The `cd -` command can be used to switch to the previous working directory.
- Remember that Linux file systems are case-sensitive.

For more detailed explanations and advanced usage of these commands, refer to Chapter "Directory Navigation Commands" in ["The Practical Linux Handbook".](https://www.amazon.com/dp/B0CYXJNYNL)
