---
tags: 
references:
index:
note: pkg Management
generated: 2Q25 - May 18th || 138
last modified: 2Q25 - May 18th || 138
---

| CMD                       | ACTION                                    |
| ------------------------- | ----------------------------------------- |
| `pkg autoclean`           | remove outdated .deb[^1] files from cache |
| `pkg clean`               | remove ALL .deb files from cache          |
| `pkg files <package>`     | list files installed by specific package  |
| `pkg list-all`            | list all available packages               |
| `pkg list-installed`      | list currently installed packages         |
| `pkg reinstall <package>` | reinstall specified package               |
| `pkg search <query>`      | search package by query                   |
| `pkg show <package>`      | show information on specific package      |

[^1]: most commonly associated with the Debian Software Package Format. A type of compressed file.