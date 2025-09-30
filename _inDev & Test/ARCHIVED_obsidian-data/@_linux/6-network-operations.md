# Network Operations Commands

[Home](@_linux/README.md)

Networking is a fundamental aspect of modern computing, and Linux provides a robust set of tools for network operations. This section covers essential commands for managing network connections, troubleshooting network issues, and performing basic network diagnostics.

Key operations covered:

- Downloading files from the web
- Displaying network socket information
- Checking network connectivity
- Configuring network interfaces
- Viewing and modifying routing tables
- Testing network performance

These commands are crucial for system administrators, network engineers, and anyone working with networked Linux systems.

## Commands

```bash
# Download file.txt from example.com
wget http://example.com/file.txt

# Display the content of file.txt from example.com
curl http://example.com/file.txt

# Display listening TCP and UDP sockets with port numbers
netstat -tuln

# Show the routing table
netstat -r

# Display listening TCP and UDP sockets with port numbers (using ss)
ss -tuln

# Send ICMP echo requests to google.com to check connectivity
ping google.com

# Display all network interfaces (older command)
ifconfig

# Display all network interfaces using the newer 'ip' command
ip a

# Display the routing table using ip
ip route show
```

## Tips

- Always be cautious when making changes to network configurations, as they can potentially disrupt connectivity.
- The 'ip' command is the modern replacement for many older networking tools like 'ifconfig' and 'route'.
- Use 'ss' instead of 'netstat' for better performance when working with a large number of connections.
- When troubleshooting, start with basic connectivity tests (like ping) before moving to more complex diagnostics.
- Remember that some network commands may require root privileges to run.

For comprehensive coverage of network operations in Linux, including advanced topics like network security and protocol analysis, refer to Chapter "Network Operations commands" in "The Practical Linux Handbook."
