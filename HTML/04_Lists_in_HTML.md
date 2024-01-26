# HTML Lists

HTML lists are used to group related information so that it is easy to read and clearly associated with each other.

## Types Of Lists

There are three main types of HTML lists:

* **Ordered List:**
Also known as a numbered list, this type of list groups related items in a specific order.

* **Unordered List:**
Also known as a bulleted list, this type of list groups related items in no particular order.

* **Description List:**
Also known as a definition list, this type of list displays name/value pairs such as terms and definitions.


## 1. Ordered List

Basic Syntax

```html
<ol>
    <li>Adam</li>
    <li>Rahim</li>
    <li>Jhon</li>
</ol>
```

### Type Attribute in Ordered list

The type attribute in HTML specifies the type of numbering to use for an ordered list. The default type is Arabic numerals. 
The type attribute can be used to customize the numbering style of an ordered list. 

For example, the following values can be used for the type attribute:

* `1` Arabic numerals

* `a` Alphabetical order
* `A` Uppercase alphabetical order
* `i` Lowercase Roman numerals
* `I` Uppercase Roman numerals

```html
<ol type="A">
    <li>Adam</li>
    <li>Rahim</li>
    <li>Jhon</li>
</ol>
```

### Start Attribute in Ordered List

The start attribute specifies the start value of the first list item in an ordered list. This value is always an integer, even when the numbering type is letters or romans.

```html
<ol type="A" start="3">
    <li>Adam</li>
    <li>Rahim</li>
    <li>Jhon</li>
</ol>
```

## 2. Unorder List

Basic Syntax

```html
<ul>
    <li>Adam</li>
    <li>Rahim</li>
    <li>Jhon</li>
</ul>
```

### Type Attribute in Unordered list

The type attribute is used to tell the browser which type of list marker to apply to a list. The accepted values include `disc`, `circle`, and `square`. The default value applied by the browser is circle, so when no value is provided, that is the value used.

```html
<ul type="square">
    <li>Adam</li>
    <li>Rahim</li>
    <li>Jhon</li>
</ul>
```

## 3. Definition List

A definition list in HTML is a list of terms and their corresponding definitions or explanations. It displays elements in definition form, similar to a dictionary. 

To create a definition list, you can use the following HTML elements and some text:

* `<dl>` Defines the description list

* `<dt>` Defines the data term
* `<dd>` Defines the definition description

```html
<dl>
    <dt>Hello World</dt>
    <dd>
        A "Hello, World!" program is generally a simple computer program which outputs (or displays) to the screen (often the console) a message similar to "Hello, World!" while ignoring any user input.
    </dd>
</dl>
```