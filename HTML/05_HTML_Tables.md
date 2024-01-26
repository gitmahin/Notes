# Create Table in HTML

HTML tables allow web developers to organize data into rows and columns. They are a design pattern for displaying large amounts of data in rows and columns, making them efficient for doing comparative analysis on categorical objects. 

Basic Structure

```html
<table>
    <tr>
        <td>Name</td>
        <td>Salary</td>
    </tr>
    <tr>
        <td>Rohan</td>
        <td>1200$</td>
    </tr>
    <tr>
        <td>Shohan</td>
        <td>1100$</td>
    </tr>
</table>
```

## RowSpan Attribute in Table

In HTML, the rowspan attribute specifies the number of rows a cell should span. This allows a single table cell to span the height of more than one cell or row. For example, if a row spans two rows, it will take up the space of two rows in that table


```html
<table border="1">
    <tr>
        <td>Name</td>
        <td>Salary</td>
    </tr>
    <tr>
        <td rowspan="2">Rohan</td>
        <td>1200$</td>
        
    </tr>
    <tr>
        <td>Due 100$</td>
    </tr>
    <tr>
        <td>Shohan</td>
        <td>1100$</td>
    </tr>
</table>
```

## Colspan Attribute in Table
Colspan is an HTML attribute that allows you to span a row or column across multiple cells. This means that instead of having multiple columns, the cells will merge and the content will span multiple columns.

```html
<table border="1">
    <tr>
        <td colspan="2">Name</td>
    </tr>
    <tr>
        <td colspan="2">Rohan</td>
    </tr>
    <tr>
        <td>Due 100$</td>
        <td>1200$</td>
    </tr>
</table>
```

**Note: rowspan and colspan should be inserted in `<td>` tag**


## Cellspacing in Table

The cellspacing attribute in HTML is used to set the space between the edges of the cells in a table. It's specified in pixels. 
If the cellspacing attribute is not explicitly set, most browsers will apply a default spacing of 1 pixel. The cellspacing attribute is deprecated, and if you want to add space between table cells you can do so with CSS.

```html
<table border="1" cellspacing="10">
    <tr>
        <td colspan="2">Name</td>
    </tr>
    <tr>
        <td colspan="2">Rohan</td>
    </tr>
    <tr>
        <td>Due 100$</td>
        <td>1200$</td>
    </tr>
</table>
```

**Note: Cellspacing should be inserted in `<table>` tag**

## Cellpadding in Table
Cellpadding is an HTML attribute that defines the space between a table cell's edges and its content. It's used in conjunction with the table element.

* Cellpadding is an inline attribute used under the table tag. The value is set in pixels and is set to 1 by default.

* Cellpadding is usually more effective than cellspacing for spreading out the contents of the table. 


```html
<table border="1" cellpadding="10">
    <tr>
        <td colspan="2">Name</td>
    </tr>
    <tr>
        <td colspan="2">Rohan</td>
    </tr>
    <tr>
        <td>Due 100$</td>
        <td>1200$</td>
    </tr>
</table>
```

**Note: Cellpadding should be inserted in `<table>` tag**
