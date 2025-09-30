# Job Control Commands

[Home](@_linux/README.md)

Job control in Linux allows users to manage multiple tasks efficiently within a single terminal session. This section covers essential commands for running, monitoring, and controlling background and foreground processes.

Key operations covered:

- Running processes in the background
- Bringing background jobs to the foreground
- Listing active jobs in the current session
- Suspending and resuming processes
- Detaching processes from the terminal
- Terminating processes

These commands are invaluable for system administrators, developers, and power users who need to multitask effectively in a command-line environment.

## Commands

```bash
# Run a long-running command in the background
long_running_command &

# Bring a background job to the foreground (job number 1)
fg %1

# List all background jobs
jobs

# Run a command that keeps running even after terminal closes
nohup long_running_command &

# Kill a process with a specific Process ID (PID)
kill 12345

# Send the KILL signal (a more forceful way to terminate a process)
kill -s KILL 12345
# or simply
kill -9 12345

# Send the HUP signal (often used to ask a process to reload its configuration)
kill -s HUP 12345
```

## Tips

- Use Ctrl+Z to suspend a running foreground process, then 'bg' to continue it in the background.
- The '%' symbol is used to refer to jobs by their number (e.g., 'fg %2' brings job 2 to the foreground).
- 'nohup' is useful for running commands that need to continue even after you log out.
- Be cautious with 'kill -9'; it's a forceful termination and should be used as a last resort.
- For long-running processes, consider using 'screen' or 'tmux' for more robust session management.
- Remember that background jobs are still tied to your terminal session unless explicitly detached.

For comprehensive coverage of Linux job control, including advanced process management techniques and best practices for multitasking in the shell, refer to Chapter "Job Control commands" in ["The Practical Linux Handbook".](https://www.amazon.com/dp/B0CYXJNYNL)
