# Environment & System Commands

[Home](@_linux/README.md)

Understanding and managing the system environment is crucial for effective Linux administration and usage. This section covers essential commands for viewing and manipulating environment variables, obtaining system information, and monitoring system processes and open files.

Key operations covered:

- Displaying and modifying environment variables
- Viewing system and kernel information
- Listing open files and processes
- Identifying which processes are using specific files or ports
- Running commands with modified environment settings

These commands are invaluable for system administrators, developers, and power users who need to understand and control their Linux environment.

## Commands

```bash
# Display all environment variables
env

# Use env to run a program under a modified environment
env DEBUG=1 ./my_program

# Display the kernel name
uname

# Print all system information
uname -a

# Display the kernel release
uname -r

# Print the hardware name (e.g., x86_64 for 64-bit systems)
uname -m

# List all open files
lsof

# Display all files opened by a specific user
lsof -u john

# Show all open files by a specific process
lsof -c nginx

# Find which process is using a specific port
lsof -i :8080

# List all open files in a directory
lsof +D /var/log

# Find out which process is using a specific file
lsof /path/to/file.txt
```

## Tips

- Environment variables set in the shell are local to that shell session unless explicitly exported.
- Use caution when modifying system-wide environment variables, as it can affect the behavior of various programs.
- The 'lsof' command is particularly useful for troubleshooting issues related to file locks or port usage.
- When using 'uname', remember that different options provide different levels of system information.
- For persistent changes to the environment, consider modifying the appropriate startup files (e.g., .bashrc, .profile).

For comprehensive coverage of Linux environment management, system information retrieval, and advanced system monitoring techniques, refer to Chapter "Environment & System commands" in ["The Practical Linux Handbook".](https://www.amazon.com/dp/B0CYXJNYNL)
