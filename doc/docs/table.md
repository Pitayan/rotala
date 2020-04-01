---
title: Table
date: 2020-03-19
link: /docs/table/
slug: table
section: Elements
---
Table includes variant sytles for tables. We name a table `table-group` to avoid conflicts with tailwindcss utilities.

## trim.css
1 feature:
- default style without any border

<table class="trim-table-group">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Manufacturer</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Shawshank Redemption</td>
      <td>Crime, Drama</td>
      <td>14 October 1994</td>
    </tr>
    <tr>
      <td>The Godfather</td>
      <td>Crime, Drama</td>
      <td>24 March 1972</td>
    </tr>
    <tr>
      <td>Schindler's List</td>
      <td>Biography, Drama, History</td>
      <td>4 February 1994</td>
    </tr>
    <tr>
      <td>Se7en</td>
      <td>Crime, Drama, Mystery</td>
      <td>22 September 1995</td>
    </tr>
  </tbody>
</table>

```html {}
<table class="table-group">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Manufacturer</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Shawshank Redemption</td>
      <td>Crime, Drama</td>
      <td>14 October 1994</td>
    </tr>
    ...
  </tbody>
</table>
```

## theme.css
3 extra features:
- 3 variants: `outline`&nbsp;`border`&nbsp;`stripe`
- active status
- hover effect
- scrollable for horizontally long table
<br>
<br>

#### outline
Only horizontal border

<table class="table-group table-group-outline">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Manufacturer</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Shawshank Redemption</td>
      <td>Crime, Drama</td>
      <td>14 October 1994</td>
    </tr>
    <tr>
      <td>The Godfather</td>
      <td>Crime, Drama</td>
      <td>24 March 1972</td>
    </tr>
    <tr>
      <td>Schindler's List</td>
      <td>Biography, Drama, History</td>
      <td>4 February 1994</td>
    </tr>
    <tr>
      <td>Se7en</td>
      <td>Crime, Drama, Mystery</td>
      <td>22 September 1995</td>
    </tr>
  </tbody>
</table>

```html {}
<table class="table-group table-group-outline">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Manufacturer</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Shawshank Redemption</td>
      <td>Crime, Drama</td>
      <td>14 October 1994</td>
    </tr>
    ...
  </tbody>
</table>
```
<br>
<br>

#### border
Both horizontal and vertical border

<table class="table-group table-group-border">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Manufacturer</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Shawshank Redemption</td>
      <td>Crime, Drama</td>
      <td>14 October 1994</td>
    </tr>
    <tr>
      <td>The Godfather</td>
      <td>Crime, Drama</td>
      <td>24 March 1972</td>
    </tr>
    <tr>
      <td>Schindler's List</td>
      <td>Biography, Drama, History</td>
      <td>4 February 1994</td>
    </tr>
    <tr>
      <td>Se7en</td>
      <td>Crime, Drama, Mystery</td>
      <td>22 September 1995</td>
    </tr>
  </tbody>
</table>

```html {}
<table class="table-group table-group-border">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Manufacturer</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Shawshank Redemption</td>
      <td>Crime, Drama</td>
      <td>14 October 1994</td>
    </tr>
    ...
  </tbody>
</table>
```
<br>
<br>

#### stripe

This feature enables the cell background color light gray by default.
The `stripe` table can also be used together with `outline` and `border`.

<table class="table-group table-group-outline table-group-stripe">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Manufacturer</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Shawshank Redemption</td>
      <td>Crime, Drama</td>
      <td>14 October 1994</td>
    </tr>
    <tr>
      <td>The Godfather</td>
      <td>Crime, Drama</td>
      <td>24 March 1972</td>
    </tr>
    <tr>
      <td>Schindler's List</td>
      <td>Biography, Drama, History</td>
      <td>4 February 1994</td>
    </tr>
    <tr>
      <td>Se7en</td>
      <td>Crime, Drama, Mystery</td>
      <td>22 September 1995</td>
    </tr>
  </tbody>
</table>

```html {}
<table class="table-group table-group-outline table-group-stripe">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Manufacturer</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Shawshank Redemption</td>
      <td>Crime, Drama</td>
      <td>14 October 1994</td>
    </tr>
    ...
  </tbody>
</table>
```
<br>
<br>


#### hover

This feature enables the hover effect while mouse is above the table cells. Can be used together with all other features.

<table class="table-group table-group-hover">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Manufacturer</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Shawshank Redemption</td>
      <td>Crime, Drama</td>
      <td>14 October 1994</td>
    </tr>
    <tr>
      <td>The Godfather</td>
      <td>Crime, Drama</td>
      <td>24 March 1972</td>
    </tr>
    <tr>
      <td>Schindler's List</td>
      <td>Biography, Drama, History</td>
      <td>4 February 1994</td>
    </tr>
    <tr>
      <td>Se7en</td>
      <td>Crime, Drama, Mystery</td>
      <td>22 September 1995</td>
    </tr>
  </tbody>
</table>

```html {}
<table class="table-group table-group-hover">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Manufacturer</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Shawshank Redemption</td>
      <td>Crime, Drama</td>
      <td>14 October 1994</td>
    </tr>
    ...
  </tbody>
</table>
```
<br>
<br>

#### active status

This feature enables active appearance on a table cell with a background color.

<table class="table-group">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Manufacturer</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Shawshank Redemption</td>
      <td>Crime, Drama</td>
      <td>14 October 1994</td>
    </tr>
    <tr class="active">
      <td>The Godfather</td>
      <td>Crime, Drama</td>
      <td>24 March 1972</td>
    </tr>
    <tr>
      <td>Schindler's List</td>
      <td>Biography, Drama, History</td>
      <td>4 February 1994</td>
    </tr>
    <tr>
      <td>Se7en</td>
      <td>Crime, Drama, Mystery</td>
      <td>22 September 1995</td>
    </tr>
  </tbody>
</table>

```html {}
<table class="table-group">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Manufacturer</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Shawshank Redemption</td>
      <td>Crime, Drama</td>
      <td>14 October 1994</td>
    </tr>
    <tr class="active">
      <td>The Godfather</td>
      <td>Crime, Drama</td>
      <td>24 March 1972</td>
    </tr>
    ...
  </tbody>
</table>
```
<br>
<br>

#### scroll

This feature enables a table to be horizontally scrollable when the table content lenghth is longer than the viewport. Better to have a `max-width` property on the table element.

<table class="table-group table-group-scroll">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Manufacturer</th>
      <th>Price</th>
      <th>Other 1</th>
      <th>Other 2</th>
      <th>Other 3</th>
      <th>Other 4</th>
      <th>Other 5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Shawshank Redemption</td>
      <td>Crime, Drama</td>
      <td>14 October 1994</td>
      <td>14 October 1994</td>
      <td>14 October 1994</td>
      <td>14 October 1994</td>
      <td>14 October 1994</td>
      <td>14 October 1994</td>
    </tr>
    <tr>
      <td>The Godfather</td>
      <td>Crime, Drama</td>
      <td>24 March 1972</td>
      <td>24 March 1972</td>
      <td>24 March 1972</td>
      <td>24 March 1972</td>
      <td>24 March 1972</td>
      <td>24 March 1972</td>
    </tr>
    <tr>
      <td>Schindler's List</td>
      <td>Biography, Drama, History</td>
      <td>4 February 1994</td>
      <td>4 February 1994</td>
      <td>4 February 1994</td>
      <td>4 February 1994</td>
      <td>4 February 1994</td>
      <td>4 February 1994</td>
    </tr>
    <tr>
      <td>Se7en</td>
      <td>Crime, Drama, Mystery</td>
      <td>22 September 1995</td>
      <td>22 September 1995</td>
      <td>22 September 1995</td>
      <td>22 September 1995</td>
      <td>22 September 1995</td>
      <td>22 September 1995</td>
    </tr>
  </tbody>
</table>

```html {}
<table class="table-group table-group-scroll">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Manufacturer</th>
      <th>Price</th>
      <th>Other 1</th>
      <th>Other 2</th>
      <th>Other 3</th>
      <th>Other 4</th>
      <th>Other 5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Shawshank Redemption</td>
      <td>Crime, Drama</td>
      <td>14 October 1994</td>
      <td>14 October 1994</td>
      <td>14 October 1994</td>
      <td>14 October 1994</td>
      <td>14 October 1994</td>
      <td>14 October 1994</td>
    </tr>
    ...
  </tbody>
</table>
```