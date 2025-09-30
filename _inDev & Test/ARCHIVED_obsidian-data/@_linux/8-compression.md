# Compression/Decompression Commands

[Home](@_linux/README.md)

In Linux, working with compressed files is a common task that can save storage space and reduce file transfer times. This section covers essential commands for compressing and decompressing files and directories using various compression algorithms.

Key operations covered:

- Compressing single files and directories
- Decompressing files
- Creating and extracting tar archives
- Working with different compression formats (gzip, bzip2, xz)
- Viewing contents of compressed files without full decompression

These commands are crucial for system administrators, developers, and users who need to manage storage efficiently or work with archived data in Linux environments.

## Commands

```bash
# Compress a file.txt to file.txt.gz and remove the original file.txt
gzip file.txt

# Compress a file and keep the original
gzip -c file.txt > file.txt.gz

# Decompress a gzipped file (or use gunzip)
gzip -d file.txt.gz

# Decompress file.txt.gz and remove the compressed file.txt.gz
gunzip file.txt.gz

# Create a tar archive
tar -cvf archive.tar file1.txt file2.txt

# Extract a tar archive
tar -xvf archive.tar

# Create a gzipped tar archive
tar -czvf archive.tar.gz directory/

# Extract a gzipped tar archive
tar -xzvf archive.tar.gz

# Create a bzip2 compressed tar archive
tar -cjvf archive.tar.bz2 directory/

# Extract a bzip2 compressed tar archive
tar -xjvf archive.tar.bz2

# Create file.txt.bz2 and remove the original file.txt
bzip2 file.txt

# Decompress a bzip2 compressed file
bzip2 -d file.txt.bz2

# Create file.txt.xz and remove the original file.txt
xz file.txt

# Decompress an xz compressed file
xz -d file.txt.xz

# Create a tar archive compressed with xz
tar -cJvf archive.tar.xz directory/

# Extract a tar archive compressed with xz
tar -xJvf archive.tar.xz
```

## Tips

- Choose the appropriate compression method based on your needs for compression ratio vs. speed.
- Use the tar command with compression options to create compressed archives of multiple files or directories.
- Remember that higher compression levels often result in longer compression/decompression times.
- When working with large files, consider using the 'pv' command in pipelines to monitor progress.
- Always verify the integrity of your archives after creating them, especially for important data.

For comprehensive coverage of file compression techniques, including advanced topics and best practices, refer to Chapter "Compression/Decompression commands" in ["The Practical Linux Handbook".](https://www.amazon.com/dp/B0CYXJNYNL)
