# System Monitoring Commands

[Home](@_linux/README.md)

Keeping track of system performance and resource usage is crucial for maintaining a healthy and efficient Linux environment. This section covers essential commands for monitoring various aspects of your system, including CPU usage, memory utilization, and I/O operations.

Key operations covered:

- Real-time system performance monitoring
- Viewing and analyzing process information
- Checking memory usage and statistics
- Monitoring CPU utilization
- Tracking I/O and storage performance

These commands are invaluable for system administrators, developers, and power users who need to diagnose performance issues, optimize system resources, and ensure smooth operation of Linux systems.

## Commands

```bash
# Display dynamic real-time view of a running system
top

# An interactive process viewer, an enhanced version of top
htop

# Display memory, processes, paging, block IO, traps, and CPU activity
vmstat

# Update vmstat every 5 seconds
vmstat 5

# Display CPU and IO statistics
iostat

# Display extended statistics with a 5-second interval
iostat -xz 5

# Display activity for all CPUs
mpstat -P ALL

# Display memory usage in human-readable format
free -h
```

## Tips

- Use these commands regularly to establish a baseline for your system's normal performance.
- Combine different monitoring tools to get a comprehensive view of your system's health.
- For long-term monitoring, consider setting up automated scripts or using more advanced monitoring solutions.
- The 'top' and 'htop' commands provide interactive interfaces; explore their built-in commands for sorting and filtering.
- Be aware that some monitoring commands may themselves consume noticeable system resources when run continuously.

For in-depth explanations of system monitoring techniques, interpreting output, and advanced troubleshooting strategies, refer to Chapter "System Monitoring commands" in ["The Practical Linux Handbook".](https://www.amazon.com/dp/B0CYXJNYNL)
