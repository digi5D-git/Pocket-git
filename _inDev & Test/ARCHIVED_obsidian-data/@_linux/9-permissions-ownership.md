# Permission & Ownership Commands

[Home](@_linux/README.md)

Managing file permissions and ownership is crucial for maintaining security and controlling access in Linux systems. This section covers essential commands for viewing, modifying, and managing file permissions and ownership.

Key operations covered:

- Changing file and directory permissions
- Modifying file ownership and group association
- Understanding and using symbolic and numeric permission notations
- Setting default permissions for new files
- Using special permissions (setuid, setgid, sticky bit)
- Executing commands with elevated privileges using sudo

These commands are fundamental for system administrators, developers, and any user who needs to ensure proper access control in a Linux environment.

## Commands

```bash
# Add read permission to the owner
chmod u+r file.txt

# Add write permission to the group
chmod g+w file.txt

# Add execute permission to others
chmod o+x file.txt

# Remove read permission from the owner
chmod u-r file.txt

# Remove write permission from the group
chmod g-w file.txt

# Add read and write permissions to owner, and remove execute permission from the group
chmod u+rw,g-x file.txt

# Grant execute permission to everyone
chmod a+x file.txt

# Remove write permission from everyone
chmod a-w file.txt

# Give full permission to the owner and none to the group and others
chmod 700 file.txt

# Give read and write permissions to the owner, full permissions to the group, and read permissions to others
chmod 761 file.txt

# Grant read and execute permissions to everyone
chmod 555 file.txt

# Full control for the owner, read & execute for others and group (common for directories)
chmod 755 directory/

# Read & write for the owner, read-only for the group and others (common for files)
chmod 644 file.txt

# Apply permissions recursively to a directory and all its contents
chmod -R 744 directory/

# Change the owner of a file to "john"
chown john file.txt

# Change the owner to "john" and the group to "developers" for a file
chown john:developers file.txt

# Change the owner and group for a directory and all its contents (recursively)
chown -R john:developers directory/

# Change the group of a file to "developers"
chgrp developers file.txt

# Change the group for a directory and all its contents (recursively)
chgrp -R developers directory/

# Install a package or software
sudo apt-get install nginx

# Edit a configuration file that requires superuser privileges
sudo nano /etc/apache2/apache2.conf

# Change the ownership of a file "example.txt" to a user named "john"
sudo chown john example.txt
```

## Tips

- Always use the principle of least privilege when setting permissions.
- Be cautious when changing permissions, especially for system files or directories.
- Remember that permissions are applied differently to files and directories.
- Use the '-R' option with chmod and chown carefully, as it applies changes recursively.
- Understand the implications of setuid, setgid, and sticky bits before using them.
- When using sudo, be aware of the security implications and use it judiciously.

For in-depth explanations of Linux file permissions, advanced access control techniques, and best practices for maintaining system security, refer to Chapter "Permission & Ownership commands" in ["The Practical Linux Handbook".](https://www.amazon.com/dp/B0CYXJNYNL)
