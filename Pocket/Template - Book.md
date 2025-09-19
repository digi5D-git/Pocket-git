<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(title);
  } 
  
  tR += "---"
%>
Created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
Publisher: {{publisher}}
Published: {{publishDate}}
Pages: {{totalPage}}
ISBN: {{isbn10}} {{isbn13}}
Cover: {{coverUrl}}
Title: "{{title}}"
Author: {{author}}
Category: {{category}}
Tags: Review/Book
Date Read:
Status: Complete
Rating: 
---
Linkback: [[Books]]

![cover|150]({{coverUrl}})

# <%* tR += title %>

## 🚀 Main takeaways of the book in the shortest possible way
<% tp.file.cursor(1) %>

## 👎 What is something I didn't agree with?
<% tp.file.cursor(2) %>

## 👍 What can I apply to my own life?
*How my life / behavior / thoughts / ideas have changed as a result of reading the book.*
<% tp.file.cursor(3) %>

## 🥇 Top Quotes
>[!quote] <% tp.file.cursor(4) %>
>here

## 📝 Summary + Notes
<% tp.file.cursor(5) %>

## 🧭 How I Discovered It
<% tp.file.cursor(6) %>

## ❓ Who Should Read It?
<% tp.file.cursor(7) %>


# Kindle Highlights
![[03 💡 RESOURCES/📚 Book Notes/Highlights/<%tp.file.title%>#Highlights | Highlights]]

<% await tp.file.move("03 💡 RESOURCES/📚 Book Notes/" + tp.file.title) %>