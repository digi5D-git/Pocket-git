# Text Processing Commands

[Home](@_linux/README.md)

Text processing is a core strength of Linux systems, offering powerful tools for manipulating and analyzing text data. This section covers essential commands for working with text files, from basic operations to more complex transformations.

Key operations covered:

- Counting words, lines, and characters in text files
- Transforming text (changing case, replacing characters)
- Extracting specific parts of text
- Comparing and merging text files
- Reversing lines or characters in text
- Splitting files into smaller pieces

These commands are invaluable for developers, data analysts, system administrators, and anyone who works with text-based data in Linux.

## Commands

```bash
# Count lines, words, and characters in a file
wc file.txt

# Count only lines
wc -l file.txt

# Count only words
wc -w file.txt

# Count only characters
wc -c file.txt

# Convert all uppercase characters in a text to lowercase
echo "HELLO WORLD" | tr 'A-Z' 'a-z'

# Delete all digit characters from a text
echo "Hello123" | tr -d '0-9'

# Replace all spaces with underscores
echo "Hello World" | tr ' ' '_'

# Reverse the content of each line
echo "Hello" | rev

# Reverse the content of each line in a file and save to another file
rev input.txt > reversed.txt

# Split a file into chunks of 10 lines each
split -l 10 file.txt

# Split a file into chunks of 1,024 bytes each, with a custom prefix for the output files
split -b 1024 file.txt custom_prefix_

# Compare two sorted files
comm file1.txt file2.txt

# Display only lines that are unique to file1.txt
comm -23 file1.txt file2.txt

# Display only lines that are unique to file2.txt
comm -13 file1.txt file2.txt

# Display only lines that appear in both files
comm -12 file1.txt file2.txt
```

## Tips

- Many of these commands can be combined using pipes (|) to create powerful text processing pipelines.
- For complex text transformations, consider using sed or awk for more flexibility and power.
- When working with large files, be mindful of memory usage. Some commands may need to process the entire file at once.
- Regular expressions can greatly enhance the capabilities of text processing commands. Investing time in learning regex can be very beneficial.
- For repetitive text processing tasks, consider creating shell scripts to automate your workflows.

For in-depth explanations, advanced usage examples, and best practices in text processing with Linux, refer to Chapter "Text Processing commands" in ["The Practical Linux Handbook".](https://www.amazon.com/dp/B0CYXJNYNL)
