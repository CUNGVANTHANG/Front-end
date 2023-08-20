# HTML, CSS Theory
## Mục lục
- [I. HTML](#i-html)
  - [1. Cấu trúc trang web](#1-cấu-trúc-trang-web)
  - [2. Thẻ heading](#2-thẻ-heading)
  - [3. Thẻ p](#3-thẻ-p)
  - [4. Thẻ a](#4-thẻ-a)
  - [5. Thẻ div](#5-thẻ-div)
- [II. CSS](#ii-css)

## I. HTML
### 1. Cấu trúc trang web
#### 1. Cấu trúc HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
</body>
</html>
```
*Cú pháp gõ nhanh cấu trúc trang HTML trong Visual Studio Code:* 
```! Tab```

- `<!DOCTYPE html>` khai báo xác định rằng tài liệu này là tài liệu HTML5

- Thẻ `<html lang="en"></html>` phần tử là phần tử gốc của trang HTML

```css
html {
    display: block;
}
```

- Thẻ `<head></head>` phần tử chứa thông tin meta về trang HTML

```css
head {
    display: none;
}
```

- Thẻ `<title></title>` phần tử chỉ định tiêu đề cho trang HTML (được hiển thị trên thanh tiêu đề của trình duyệt hoặc trong tab của trang)

- Thẻ `<body></body>` phần tử xác định nội dung của tài liệu và là nơi chứa tất cả nội dung hiển thị, chẳng hạn như tiêu đề, đoạn văn, hình ảnh, siêu liên kết, bảng, danh sách, v.v.

*CSS mặc định:*
```css
body {
    display: block;
    margin: 8px;
}
```

- Thẻ `<h1></h1>` phần tử xác định một tiêu đề lớn

- Thẻ `<p></p>` phần tử xác định một đoạn văn

- Thẻ `<br>` xuống dòng văn bản

<img src="https://github.com/CUNGVANTHANG/Front-end/assets/96326479/fdf0ab45-e553-4444-a09a-e14131e2b4a6" height=250px>

#### 2. Cấu trúc thẻ body
<img src="https://github.com/CUNGVANTHANG/Front-end/assets/96326479/4ae52d80-ac07-49f0-b916-b9d82e303e3d" height=200px>

- Thẻ `<header></header>` đại diện cho một vùng chứa nội dung giới thiệu hoặc một tập hợp các liên kết điều hướng.

*CSS mặc đinh:*

```css
header {
    display: block;
}
```

- Thẻ `<nav></nav>` xác định một tập hợp các liên kết điều hướng

*CSS mặc đinh:*

```css
nav {
    display: block;
}
```

- Thẻ <footer></footer> xác định chân trang cho tài liệu hoặc phần.

*CSS mặc đinh:*

```css
footer {
    display: block;
}
```

### 2. Thẻ heading
*Cú pháp:*
```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

*CSS mặc định:*
```css
h1, h2, h3, h4, h5, h6 {
  display: block;
  font-weight: bold;
}
```

<img src="https://github.com/CUNGVANTHANG/Front-end/assets/96326479/b445958b-80dd-441e-961a-17c6300ebea4" height=250px>

### 3. Thẻ p
*Cú pháp:*

```html
<p>Đoạn văn bản</p>
```

*CSS mặc định:**
```css
p {
  display: block;
}
```

![image](https://github.com/CUNGVANTHANG/Front-end/assets/96326479/08288c2d-cc46-4324-aaad-52cbed5cc04b)

### 4. Thẻ a
*Cú pháp:*

```html
<a href="url">Click vào đây!</a>
```

*CSS mặc định:**

```css
a {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
```

![image](https://github.com/CUNGVANTHANG/Front-end/assets/96326479/bfff29c3-621a-446f-ab95-d50b65ee9672)

