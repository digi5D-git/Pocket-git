# Disk Usage Commands

[Home](@_linux/README.md)

Managing disk space is crucial for maintaining a healthy Linux system. This section covers essential commands for monitoring disk usage, identifying space-consuming files and directories, and managing storage effectively.

Key operations covered:

- Displaying disk space usage of file systems
- Estimating file and directory space usage
- Identifying large files and directories
- Removing files and directories to free up space

These commands are indispensable for system administrators and users who need to keep their Linux systems running smoothly by managing storage resources efficiently.

## Commands

```bash
# Display disk usage of all mounted file systems
df

# Display with sizes in human-readable format (e.g., MB, GB)
df -h

# Display disk usage of the file system containing the specified directory
df /path/to/dir

# Display the total disk usage of the directory
du /path/to/dir

# Display in human-readable format
du -h /path/to/dir

# Display the total disk usage of the directory in readable format without listing subdirectories
du -sh /path/to/dir

# Display disk usage of all files and directories in human-readable format
du -ah /path/to/dir

# Remove a file
rm filename

# Remove a directory and its contents
rm -r directory_name

# Forcefully remove a directory and its contents (use with caution!)
rm -rf directory_name

# Remove empty directory directory_name
rmdir directory_name
```

## Tips

- Regularly monitor disk usage to prevent unexpected out-of-space situations.
- Use the '-h' (human-readable) option with df and du for easier-to-read output.
- Be extremely cautious when using rm commands, especially with the -r (recursive) option. Double-check before deleting.
- Consider using disk usage visualization tools like ncdu for a more interactive experience in analyzing disk usage.
- For large file systems, du can take a long time to execute. Use it with specific directories rather than the entire file system when possible.

For comprehensive explanations, advanced usage scenarios, and best practices in managing disk usage on Linux systems, refer to Chapter "Disk Usage commands" in ["The Practical Linux Handbook".](https://www.amazon.com/dp/B0CYXJNYNL)
