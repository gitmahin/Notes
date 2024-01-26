# Getting Started

## What is HTML?
HTML is the standard markup language for creating Web pages. Also HTML is called the language of tags because documents are made up of various tags.

* Full form - **Hyper Text Markup Language**.

* HTML describes the structure of the Web pages.
* HTML elements tell the browser how to display the content.
* HTML is not a programming language. Programmers use this language to beautifully arrange or format text, audio, video, graphics or animation on web pages.
* HTML file is known as **Text** or **ASCII**.
* The extensions of HTML file are **.htm** or **.html** (For best practice we will always use **.html** file extension)

## When HTML was invented?
**Tim Berners-Lee, a software engineer at CERN, invented HTML in 1993.**

## The current version of HTML
The current version of HTML is **HTML5**. HTML5 is the fifth and final major version of HTML recommended by the World Wide Web Consortium (W3C).

HTML5 has improved the markup available for documents and has introduced application programming interfaces (API) and Document Object Model (DOM). It also supports audio and video controls with the use of `<audio>` and `<video>` tags.

## What is the difference between OLD HTML and Advanced HTML(**HTML5**)?

HTML | HTML5
--- | ---
Longer document type declaration. | Shorter document type declaration. 
Longer character encoding declaration. Uses the ASCII character set. | Shorter character encoding declaration. Uses the UTF-8 character set.
HTML only uses browser cache and cookies to store data temporarily.| HTML5 uses web SQL databases, local storage, and application cache for storing data temporarily.
HTML doesn’t allow users to draw shapes such as circles, triangles, and rectangles. | HTML5 allows users to draw shapes such as circles, triangles, and rectangles.
HTML only supports vector graphics if used in conjunction with different technologies like Flash, VML, or Silverlight. | HTML5 supports SVG (Scalable Vector Graphics), Canvas, and other virtual vector graphics.
HTML does not provide native audio and video support. | HTML5 provides native audio and video support.
Built based on Standard Generalized Markup Language (SGML). | HTML5 has improved parsing rules providing enhanced compatibility. 

## Basic startup on HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Boilerplate Template</title>
</head>
<body>
    <h1>This is Heading 1</h1>
    <p>This is Paragraph</p>
</body>
</html>
```

* `<!DOCTYPE html>` Defines that this document is an HTML5 document.

* `<html>` The root element of an HTML page.

* `<head>` Contains meta information about the HTML page.

* `<title>` Specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab).

* `<body>` Defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

* `<h1>` Defines a large heading (High priority).

* `<p>` Defines a paragraph.

**`<>` This is opening tag and `</>` This is closing tag.**

## More about HTML

The former maintainer of the HTML is the **World Wide Web Consortium (W3C).**

HTML is not a case sensitive language. This means HTML code can use English uppercase or lowercase and it will be treated as the same.