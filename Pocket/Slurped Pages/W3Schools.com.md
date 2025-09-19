---
URL: https://www.w3schools.com/xml/xml_whatis.asp#:~:text=What%20is%20XML?%20%C2%B7%20XML%20stands%20for,and%20transport%20data%20%C2%B7%20XML%20was%20designed
Abstract: W3Schools offers free online tutorials, references and exercises in
  all the major languages of the web. Covering popular subjects like HTML, CSS,
  JavaScript, Python, SQL, Java, and many, many more.
Extracted_On: 25.1809
Web_Title: W3Schools.com
---

## Introduction to XML

---

XML is a software- and hardware-independent tool for storing and transporting data.

---

## What is XML?

- XML stands for eXtensible Markup Language
- XML is a markup language much like HTML
- XML was designed to store and transport data
- XML was designed to be self-descriptive
- XML is a W3C Recommendation

---

## XML Does Not DO Anything

Maybe it is a little hard to understand, but XML does not DO anything.

This note is a note to Tove from Jani, stored as XML:

<note>  
  <to>Tove</to>  
  <from>Jani</from>  
  <heading>Reminder</heading>  
  <body>Don't forget me this weekend!</body>  
</note>

The XML above is quite self-descriptive:

- It has sender information
- It has receiver information
- It has a heading
- It has a message body

But still, the XML above does not DO anything. XML is just information wrapped in tags.

Someone must write a piece of software to send, receive, store, or display it:

## Note

To: Tove

From: Jani

### Reminder

Don't forget me this weekend!

---

## The Difference Between XML and HTML

XML and HTML were designed with different goals:

- XML was designed to carry data - with focus on what data is
- HTML was designed to display data - with focus on how data looks
- XML tags are not predefined like HTML tags are

---

---

## XML Does Not Use Predefined Tags

The XML language has no predefined tags.

The tags in the example above (like <to> and <from>) are not defined in any XML standard. These tags are "invented" by the author of the XML document.

HTML works with predefined tags like <p>, <h1>, <table>, etc.

With XML, the author must define both the tags and the document structure.

---

## XML is Extensible

Most XML applications will work as expected even if new data is added (or removed).

Imagine an application designed to display the original version of note.xml (<to> <from> <heading> <body>).

Then imagine a newer version of note.xml with added <date> and <hour> elements, and a removed <heading>.

The way XML is constructed, older version of the application can still work:

<note>  
  <date>2015-09-01</date>  
  <hour>08:30</hour>  
  <to>Tove</to>  
  <from>Jani</from>  
  <body>Don't forget me this weekend!</body>  
</note>

### Old Version

## Note

To: Tove

From: Jani

### Reminder

Don't forget me this weekend!

### New Version

## Note

To: Tove

From: Jani

Date: 2015-09-01 08:30

Don't forget me this weekend!

---

## XML Simplifies Things

- XML simplifies data sharing
- XML simplifies data transport
- XML simplifies platform changes
- XML simplifies data availability

Many computer systems contain data in incompatible formats. Exchanging data between incompatible systems (or upgraded systems) is a time-consuming task for web developers. Large amounts of data must be converted, and incompatible data is often lost.

XML stores data in plain text format. This provides a software- and hardware-independent way of storing, transporting, and sharing data.

XML also makes it easier to expand or upgrade to new operating systems, new applications, or new browsers, without losing data.

With XML, data can be available to all kinds of "reading machines" like people, computers, voice machines, news feeds, etc.

---

## XML is a W3C Recommendation

XML became a W3C Recommendation as early as in February 1998.

  

[★ +1](https://profile.w3schools.com/log-in?redirect_url=https%3A%2F%2Fmy-learning.w3schools.com "Your W3Schools Profile")

Track your progress - it's free!