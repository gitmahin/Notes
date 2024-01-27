# CSS Implementation

### There are three ways to add CSS to HTML documents:

* **Inline:** Use the style attribute inside HTML elements. This method is used to style a single HTML element on the page.

* **Internal:** Use a `<style>` element in the `<head>` section. This method is also known as embedded CSS.

* **External:** Use a `<link>` element to link to an external CSS file. This method is the most common way to implement CSS. It allows you to define the style of a whole website using a single document.

**Note:** External style sheets can help you manage your CSS better. They allow you to keep all the standard-compliant CSS code in one place and load it from there.

## 1. Inline CSS Syntax

```html
<h1 style="color: red; font-size: 22px;">This is Heading One</h1>
```

## 2. Internal CSS Syntax

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            h1{
                color: red;
                font-size: 22px;
            }
        </style>
    </head>
    <body>
        <h1>This is Heading One</h1>
    </body>
</html>
```

## 3. External CSS

* **Step-1:** Create a `style.css` file

* **Step-2:** Go to `HTML` file and use a `<link>` element to link to an external CSS file and implement your CSS file into the **link> href="`style.css`"**.

* **Step-3** The HTML `rel=stylesheet` attribute specifies that an external link is a stylesheet that will be applied to the current page. 
