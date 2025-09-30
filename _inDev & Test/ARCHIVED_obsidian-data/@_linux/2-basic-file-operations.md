# Basic File Operations

[Home](@_linux/README.md)

Manipulating files and directories is a core part of working with Linux systems. This section covers fundamental commands for listing, creating, copying, moving, and deleting files and directories, as well as searching for content within files.

Key operations covered:

- Listing directory contents
- Viewing file contents
- Copying and moving files
- Creating and removing directories
- Finding files and searching within them
- Working with compressed files

Mastering these commands will enable you to efficiently manage files and directories in your Linux environment.

## Commands

```bash
# List files and directories in the current directory
ls

# Long format listing
ls -l

# List all files including hidden ones
ls -a

# Combination of long format and all files
ls -la

# List files in a specified directory
ls /home/user

# Display the contents of file.txt
cat file.txt

# Display the first 10 lines of file.txt
head file.txt

# Display the first 5 lines of file.txt
head -n 5 file.txt

# Display the last 10 lines of file.txt
tail file.txt

# Display the last 5 lines of file.txt
tail -n 5 file.txt

# Copy source.txt to destination.txt
cp source.txt destination.txt

# Recursively copy a directory
cp -r source_directory destination_dir

# Rename old_name.txt to new_name.txt
mv old_name.txt new_name.txt

# Move file.txt to the specified directory
mv file.txt /path/to/dir/

# Remove file.txt
rm file.txt

# Recursively remove a directory and its contents
rm -r directory_name

# Forcefully and recursively remove a directory (use with caution!)
rm -rf directory_name

# Find all .txt files starting from the specified path
find /path/to/start -name "*.txt"

# Find all directories named "target_dir" starting from the current directory
find . -type d -name "target_dir"

# Delete all .log files in the /path/to/logs directory and its subdirectories
find /path/to/logs -name "*.log" -type f -delete

# Search for "pattern" in file.txt
grep "pattern" file.txt

# Recursively search for "pattern" starting from the specified path
grep -r "pattern" /path/to/start

# Case-insensitive search
grep -i "pattern" file.txt

# Create a new empty file named "newfile.txt" or update its timestamp if it exists
touch newfile.txt

# Create a new directory named "new_directory"
mkdir new_directory

# Create nested directories
mkdir -p path/to/new_directory

# Remove an empty directory named empty_directory
rmdir empty_directory

# Show contents of "file.gz"
zcat file.gz

# Search for a specific string in a compressed file
zcat file.gz | grep 'searchString'

# Search for a pattern in a file
egrep 'pattern' filename

# Count the number of lines with the pattern in a file
egrep -c 'pattern' filename

# Find lines with 'foo' or 'bar' in a file
egrep 'foo|bar' filename
```

## Tips

- Use wildcards (like \* and ?) with these commands to operate on multiple files at once.
- Be cautious with remove commands (rm), especially when used with options like -r (recursive) or -f (force).
- The 'find' command is powerful but can be resource-intensive on large file systems. Use it judiciously.
- Remember that many of these commands have additional options that can modify their behavior. Consult the man pages (e.g., 'man ls') for more details.

For more detailed explanations and advanced usage of these file operation commands, refer to Chapter "Basic File Operations commands" in ["The Practical Linux Handbook".](https://www.amazon.com/dp/B0CYXJNYNL)
