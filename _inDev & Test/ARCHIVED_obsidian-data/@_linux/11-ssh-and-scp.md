# SSH & SCP Commands

[Home](@_linux/README.md)

Secure Shell (SSH) and Secure Copy (SCP) are essential tools for secure remote system administration and file transfer in Linux environments. This section covers key commands for establishing secure connections, executing remote commands, and transferring files securely between systems.

Key operations covered:

- Connecting to remote systems securely
- Executing commands on remote machines
- Transferring files and directories between local and remote systems
- Using SSH keys for authentication
- Tunneling and port forwarding
- Troubleshooting SSH connections

These commands are crucial for system administrators, developers, and any users who need to work with remote Linux systems or transfer files securely over a network.

## Commands

```bash
# Connect to a remote server
ssh username@remote_host

# Connect using a specific port
ssh -p 2222 username@remote_host

# Run a command on a remote server without logging in
ssh username@remote_host 'ls -l /path/to/directory'

# Use a specific private key for authentication
ssh -i /path/to/private_key.pem username@remote_host

# Enable verbose mode for troubleshooting
ssh -v username@remote_host

# Copy a file from the local system to a remote server
scp /path/to/local_file.txt username@remote_host:/path/on/remote/server/

# Copy a file from a remote server to the local system
scp username@remote_host:/path/on/remote/server/file.txt /path/to/local_directory/

# Copy a directory recursively from the local system to a remote server
scp -r /path/to/local_directory username@remote_host:/path/on/remote/server/

# Transfer a file between two remote servers from the local system
scp username1@remote_host1:/path/on/server1/file.txt username2@remote_host2:/path/on/server2/

# Use a specific port and private key for authentication
scp -P 2222 -i /path/to/private_key.pem /path/to/local_file.txt username@remote_host:/path/on/remote/server/
```

## Tips

- Always use strong, unique passwords or SSH keys for authentication.
- Keep your SSH client and server software up to date to maintain security.
- Use SSH config files to simplify connection to frequently accessed hosts.
- When using SCP, be mindful of file permissions and ownership during transfers.
- For frequent or large file transfers, consider using 'rsync' over SSH for efficiency.
- Use the '-v' (verbose) option with SSH for troubleshooting connection issues.

For in-depth coverage of SSH and SCP, including advanced topics like SSH tunneling, key management, and security best practices, refer to Chapter "SSH & SCP commands" in ["The Practical Linux Handbook".](https://www.amazon.com/dp/B0CYXJNYNL)
