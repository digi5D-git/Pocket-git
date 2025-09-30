# Data Processing Commands

[Home](@_linux/README.md)

Linux provides powerful tools for processing and manipulating text and data. This section covers essential commands for text transformation, data extraction, sorting, and more. These commands are invaluable for system administrators, data analysts, and anyone working with text-based data in Linux.

Key operations covered:

- Text processing with awk and sed
- Sorting and removing duplicate lines
- Extracting specific fields or columns from text
- Merging and comparing files
- Text transformation and character manipulation
- Splitting files and counting words/lines

Mastering these commands will significantly enhance your ability to process and analyze data efficiently in Linux.

## Commands

```bash
# Extract the second field from a colon-separated string
echo "1:apple:100" | awk -F":" '{print $2}'

# Extract the fifth column from a space-separated file and sum its values
awk '{sum += $5} END {print sum}' data.txt

# Replace "world" with "universe" in a string
echo "Hello world" | sed 's/world/universe/'

# Remove all lines containing "ERROR" from a log file
sed '/ERROR/d' logfile.txt

# Sort lines in file.txt
sort file.txt

# Sort lines in reverse order
sort -r file.txt

# Sort by the second field (default delimiter is whitespace)
sort -k2 file.txt

# Remove duplicate lines from a sorted file
sort file.txt | uniq

# Prefix lines by the number of occurrences
sort file.txt | uniq -c

# Extract the second field from a colon-separated string
echo "1:apple:100" | cut -d":" -f2

# Merge corresponding lines of two files side by side
paste file1.txt file2.txt

# Join on the first field of both files (assuming files are sorted)
join -1 1 -2 1 file1.txt file2.txt

# Compare two sorted files line by line
comm file1.txt file2.txt

# Convert text to lowercase
echo "HELLO" | tr 'A-Z' 'a-z'

# Delete numbers from a string
echo "hello 123" | tr -d '0-9'

# Split data.txt every 100 lines, with output files named prefix_aa, prefix_ab, etc.
split -l 100 data.txt prefix_

# Count lines in file.txt
wc -l file.txt

# Count words in file.txt
wc -w file.txt

# Write contents of file.txt to output1.txt and write lines matching "pattern" to output2.txt
cat file.txt | tee output1.txt | grep "pattern" > output2.txt
```

## Tips

- Many of these commands can be combined using pipes (|) to create powerful data processing pipelines.
- For complex text processing tasks, consider using awk or sed scripts for better readability and reusability.
- When working with large datasets, be mindful of memory usage. Some commands may need to be adjusted for optimal performance.
- Regular expressions can greatly enhance the capabilities of commands like grep, sed, and awk. Investing time in learning regex can be very beneficial.

For in-depth explanations, advanced usage examples, and best practices for data processing in Linux, refer to Chapter "Data Processing commands" in ["The Practical Linux Handbook".](https://www.amazon.com/dp/B0CYXJNYNL)
