# Basic HTML

## Paired and Unpaired HTML Tags

### 1. Paired Tags
Paired HTML tags consist of two instructions - an opening tag (also called a starting tag) that marks the beginning of a block, and a closing tag that looks the same but with an additional slash / .

**For Example:**

* `<h1>`-It's a opening tag and `</h1>`-It's a closing tag

### 2. Unpaired Tags or Self Closing Tags
Unpaired tags have no content inside. They form graphic HTML elements or symbols on a page. So, unpaired HTML tags have only an opening tag.

**For Example**

* `<br>` For new line
* `<img>` For image
* `<hr>` For horizontal rule


## HTML Headings

HTML headings are defined with the `<h1>` to `<h6>` tags.

* `<h1>` First Priority

* `<h2>` Second Priority
* `<h3>` Third Priority
* `<h4>` Fourth Priority
* `<h5>` Fifth Priority
* `<h6>` Sixth Priority

```html
<h1>This is Heading One</h1>
```

## HTML Paragraph

HTML paragraphs are defined with the `<p>` tag

```html
<p>This is a Paragraph</p>
```

## HTML Links

HTML Links are defined with the `<a>` tag. With its `href` attribute, you can create a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.

```html
<a href="https://www.google.com">Go to Google</a>
```

## HTML Image

To insert an image in html, use `<img>` tag.

```html
<img src="picture.jpg" alt="picture">
```

* The `src` attribute specifies the URL

* The `alt` attribute specifies an alternate text for an area, if the image cannot be displayed. The `alt` attribute provides alternative information for an image if a user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader)

## HTML Details

`<details>` Specify details that the user can open and close on demand

```html
<details>
    <summary>About Google</summary>
    <p>
        Google is a multinational technology company that specializes in internet-related products and services. It is a subsidiary of Alphabet Inc. and was founded in 1998 by Sergey Brin and Larry Page.
    </p>
</details>
```

The `<summary>` tag is used in conjunction with `<details>` to specify a visible heading for the details. And the main content `<p>` will be placed below of the `<summary>` tag.

## HTML Text Direction Changing

To change the direction of a text, use `<bdo>` tag

```html
<p><bdo dir="rtl">This is a paragraph</bdo></p>
```

* `dir` Means the direction.

* `rtl` is the value of `dir` attribute.
* `rtl` means right to left and `ltr` means left to right.

## HTML Abbreviation

The `<abbr>` tag defines an abbreviation or an acronym, like "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM".

Use the global title attribute to show the description for the abbreviation/acronym when you mouse over the element.

```html
<p><abbr title="World Wide Web Consortium">W3C</abbr></p>
```

## Terminal Font using HTML `<samp>` Tag

`<samp>` convert a normal font to computer terminal font

```html
<p><samp>Hello world</samp></p>
```

## Show Keyboard using HTML `kbd` Tag

The `<kbd>` tag is used to define keyboard input. The content inside is displayed in the browser's default monospace font.

```html
<p>Press <kbd>Ctrl</kbd> + <kbd>c</kbd> to copy</p>
```

