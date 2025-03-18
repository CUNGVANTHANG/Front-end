# HTML, CSS Theory
## Mục lục

<details>
  <summary>A. Website</summary>

- [I. Web hoạt động như thế nào](#i-web-hoạt-động-như-thế-nào)
- [II. HTTP & HTTPS](#ii-http--https)
- [III. Port & Socket](#iii-port--socket)
  
</details>

<details>
  <summary>B. HTML</summary>

- [I. Các thẻ chuẩn trong HTML](#i-các-thẻ-chuẩn-trong-html)
- [II. Các thẻ Semantic trong HTML (SEM)](#ii-các-thẻ-semantic-trong-html-sem)  
</details>

<details>
  <summary>C. CSS</summary>

  - [I. CSS mặc định của các thẻ HTML](#i-css-mặc-định-của-các-thẻ-html)
  - [II. Các cách chèn CSS và đặt tên class](#ii-các-cách-chèn-css-và-đặt-tên-class)
  - [III. CSS Selectors và mức độ ưu tiên](#iii-css-selectors-và-mức-độ-ưu-tiên)
  - [IV. CSS display](#iv-css-display)
  - [V. CSS position](#v-css-position)
  - [VI. CSS pseudo classes, pseudo elements](#vi-css-pseudo-classes-pseudo-elements)
</details>

## A. Website
## I. Web hoạt động như thế nào
[:arrow_up: Mục lục](#mục-lục)

Web là một hệ thống mạng phân tán trên toàn cầu, kết nối một số lượng lớn các thiết bị và cho phép chúng tương tác với nhau.

> Kiến thức: Mạng máy tính

## II. HTTP & HTTPS
[:arrow_up: Mục lục](#mục-lục)

Giao thức cơ bản và chính yếu để **web client** (thường là trình duyệt) và **web server** giao tiếp với nhau là **HTTP**

**HTTP** là viết tắt của **HyperText Transfer Protocol**, tức **Giao thức truyền tải siêu văn bản**. Nó là một giao thức **tầng ứng dụng** trong bộ giao thức TCP/IP

![image](https://github.com/user-attachments/assets/8192d627-6059-45e8-a98c-7978ffd82780)

HTTP hoạt động theo mô hình dựa trên thông điệp (**message-based model**), theo đó máy khách gửi tới máy chủ một **thông điệp truy vấn (request message)** và máy chủ gửi lại cho máy khách một **thông điệp phản hồi (response message)**

HTTP là giao thức không trạng thái (**stateless**), tức là trong giao thức này không có cơ chế ghi nhớ kết quả của các truy vấn trước, khi thực hiện các truy vấn sau.

**HTTPS** là từ viết tắt của **HyperText Transfer Protocol Secure** và về cơ bản nó chỉ là phiên bản có bảo mật của HTTP. Điều này có nghĩa là thông tin liên lạc giữa trình duyệt và máy chủ lưu trữ được mã hóa để không bên thứ ba nào trên mạng có thể truy cập thông tin mà không được phép.

## III. Port & Socket
[:arrow_up: Mục lục](#mục-lục)

Port liên quan đến việc giao tiếp và truyền thông giữa các ứng dụng và thiết bị trên mạng

Socket là một giao diện lập trình ứng dụng (API) cho phép các ứng dụng truy cập và giao tiếp với mạng thông qua giao thức TCP/IP

Có hai loại socket chính:

- Socket Client: Đại diện cho ứng dụng hoặc thiết bị trên mạng gửi yêu cầu và nhận phản hồi từ một socket server.
- Socket Server: Đại diện cho ứng dụng hoặc thiết bị trên mạng lắng nghe và xử lý các yêu cầu từ socket client, sau đó phản hồi lại client.

## B. HTML
## I. Các thẻ chuẩn trong HTML
[:arrow_up: Mục lục](#mục-lục)

```html
<!DOCTYPE html>
<html lang="en"> <!-- Xác định một tài liệu HTML và bao gồm tất cả các phần khác nhau của trang web. -->
<head>  <!-- Chứa thông tin về tài liệu như tiêu đề, liên kết đến các tệp CSS hoặc JavaScript. -->
    <meta charset="UTF-8"> <!-- Xác định bộ mã ký tự được sử dụng trên trang web -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Cung cấp thông tin về cách trình duyệt nên hiển thị nội dung trên các thiết bị di động -->
    <title>Document</title> <!-- Xác định tiêu đề của tài liệu, hiển thị trên thanh tiêu đề của trình duyệt. -->
    <link rel="stylesheet" href="./styles.css"> <!-- Sử dụng để liên kết với các tài nguyên bên ngoài -->
</head>
<body> <!-- Chứa toàn bộ nội dung hiển thị trên trang web. -->
    
    <div></div> <!-- Xác định một khu vực hoặc một nhóm các phần tử trong tài liệu, giúp quản lý bố cục và kiểu dáng. -->

    <span></span> <!-- Được sử dụng để chứa một phần nhỏ của văn bản hoặc các phần tử khác mà bạn muốn tạo kiểu cho chúng mà không làm thay đổi cấu trúc của tài liệu. -->

    <img src="" alt=""> <!-- Được sử dụng để chèn hình ảnh vào trang web. -->

    <!-- Xác định các tiêu đề có kích thước khác nhau từ lớn nhất đến nhỏ nhất. -->
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <h5>Header 5</h5>
    <h6>Header 6</h6>

    <ul> <!-- Thẻ này đại diện cho danh sách không có thứ tự (unordered list) -->
        <li>Item 1</li> <!-- Thẻ này đại diện cho mỗi mục trong danh sách (<ul> hoặc <ol>) -->
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <ol> <!-- Thẻ này đại diện cho danh sách có thứ tự (ordered list). -->
        <li>First item</li> <!-- Thẻ này đại diện cho mỗi mục trong danh sách (<ul> hoặc <ol>) -->
        <li>Second item</li>
        <li>Third item</li>
    </ol>

    <p>Đoạn văn bản</p> <!-- Được sử dụng để định nghĩa đoạn văn bản. -->

    <a href=""></a> <!-- Định nghĩa một liên kết đến một tài nguyên khác -->

    <input type="text" name="username" placeholder="Enter your username"> <!-- Tạo ra một trường nhập liệu trong biểu mẫu (form) -->

    <button type="submit">Submit</button> <!-- Thẻ này được sử dụng để tạo ra một nút trong biểu mẫu hoặc trên trang web để thực hiện một hành động cụ thể khi được nhấn. -->

    <br> <!-- Sử dụng để tạo ra một dòng xuống (line break) -->

    <table border="1"> <!-- Thẻ cha của tất cả các thẻ trong bảng. -->
        <tr> <!-- Thẻ dùng để tạo các hàng trong bảng. -->
            <th>Họ và tên</th> <!-- Thẻ dùng để tạo tiêu đề cho cột hoặc hàng trong bảng. -->
            <th>Tuổi</th>
            <th>Địa chỉ</th>
        </tr>
        <tr>
            <td>Nguyễn Văn A</td> <!-- Thẻ dùng để tạo các ô dữ liệu trong bảng. -->
            <td>25</td>
            <td>Hà Nội</td>
        </tr>
    </table>

    <script></script>  <!-- Sử dụng để nhúng mã JavaScript vào trong tài liệu HTML -->
</body>
</html>
```

## II. Các thẻ Semantic trong HTML (SEM)
[:arrow_up: Mục lục](#mục-lục)

![image](https://github.com/CUNGVANTHANG/Front-end/assets/96326479/70eab7fb-157a-4bab-80d8-3372a2571670)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Structure</title>
</head>
<body>

    <header> <!-- Chứa tiêu đề trang web và menu điều hướng. -->
        <h1>Website Header</h1>
        <nav> <!-- Chứa các liên kết điều hướng. -->
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <aside> <!-- Chứa thông tin phụ hoặc liên quan. -->
        <h2>Aside Section</h2>
        <p>This is some additional information or related content.</p>
    </aside>

    <section> <!-- Chứa các phần của trang liên quan nhưng không chứa thông tin tổ chức nội dung lớn hơn. -->
        <h2>Main Section</h2>
        
        <article> <!-- Chứa các phần nội dung độc lập và tự đủ, như bài viết hoặc bài blog. -->
            <h3>Article 1</h3>
            <p>This is the content of article 1.</p>
        </article>

        <article>
            <h3>Article 2</h3>
            <p>This is the content of article 2.</p>
        </article>
    </section>

    <footer> <!-- Chứa thông tin cuối trang. -->
        <p>&copy; 2024 Website Footer</p>
    </footer>

</body>
</html>

```

## C. CSS
## I. CSS mặc định của các thẻ HTML
[:arrow_up: Mục lục](#mục-lục)
- **Thẻ html**
```css
  display: block;
```

- **Thẻ body**
```css
  display: block;
  margin: 8px;
```

- **Thẻ header, nav, section, article, aside, footer, div**
```css
header, nav, section, article, aside, footer, div {
  display: block;
}
```

- **Thẻ h1, h2, h3, h4, h5, h6**
```css
h1, h2, h3, h4, h5, h6 {
  display: block;
  font-weight: bold;
  margin-left: 0;
  margin-right: 0;
}

h1 {
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
}

h2 {
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
}

h3 {
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
}

h4 {
  margin-top: 1.33em;
  margin-bottom: 1.33em;
}

h5 {
  font-size: .83em;
  margin-top: 1.67em;
  margin-bottom: 1.67em;
}

h6 {
  font-size: .67em;
  margin-top: 2.33em;
  margin-bottom: 2.33em;
}
```

- **Thẻ p**
```css
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
```

- **Thẻ a**
```css
  color: (internal value);
  text-decoration: underline;
  cursor: auto;
```

- **Thẻ ul, li**
```css
ul {
  display: block;
  list-style-type: disc;
  margin-top: 1em;
  margin-bottom: 1 em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
}

li {
  display: list-item;
}
```

- **Thẻ img**
```css
img {
  display: inline-block;
}
```

- **Thẻ input, button, span, br**

~Không có định dạng CSS mặc định~

- **Thẻ label**
```css
label {
  cursor: default;
}
```

- **Thẻ i**
```css
i {
  font-style: italic;
}
```

## II. Các cách chèn CSS và đặt tên class
[:arrow_up: Mục lục](#mục-lục)

### 1. Các cách chèn CSS

3 cách chèn CSS:

- **1. Internal** (Tạo thẻ <style>)

- **2. External** (Sử dụng thẻ link tham chiếu đến file .css)

- **3. Inline** (Tạo thuộc tính style trong thẻ HTML)

### 2. Cách đặt tên class (BEM)

```css
.block {}   /* Block */
.block__element {}  /* Element */
.block--modifier {}  /* Modifier */
```

![image](https://github.com/CUNGVANTHANG/Front-end/assets/96326479/60928c01-26f8-473e-a671-a6846d3b8c42)

- **1. Block:** Là một thành phần của trang web hay ứng dụng đó, các thành phần của DOM cũng có thể là các block. Block ở đây thường là các thành phần header, body, content, footer.

- **2. Elements:** Là một thành phần của một block và sẽ không tồn tại độc lập mà không có block vì được đặt bên trong nó, và chúng phụ thuộc vào parent block của nó.

- **3. Modifers:** Được dùng để thao tác thay đổi cách hiển thị trên block hoặc phần tử.

## III. CSS Selectors và mức độ ưu tiên
[:arrow_up: Mục lục](#mục-lục)

| **Selector** | **Ví dụ** | **Mô tả** |
| :--- | :--- | :--- |
| `.class` | `.intro` |	Chọn tất cả các thẻ có class="intro" |
| `.class1.class2` | `.name1.name2` | Chọn tất cả các thẻ có cả name1 và name2 được đặt trong thuộc tính class của nó |
| `.class1 .class2` |	`.name1 .name2` |	Chọn tất cả các thẻ có class="name2" là con của một phần tử có class="name1" |
| `*` |	`*` |	Chọn tất cả các thẻ |
| `element` |	`h2` | Chọn tất cả các thẻ h2 |
| `element.class` |	`div.box`	| Chọn tất cả thẻ div có class="box"|
| `element, element` | `div, h2` | Chọn tất cả thẻ div và h2 |
| `element element` |	`div p`	| Chọn tất cả thẻ p trong thẻ div |
| `element > element` |	`div > p`	| Chọn tất cả thẻ p là con trực tiếp của thẻ div |
| `element + element` | `div + p`	| Chọn thẻ p đứng liền kề sau thẻ div |
| `element ~ element` |	`div ~ p`	| Chọn tất cả thẻ p đứng sau thẻ div |

## IV. CSS display
| Giá trị | Mô tả |
| :--- | :--- |
| [`block`](#1-display-block) | Hiển thị phần tử dưới dạng phần tử khối (như `<p>`). Nó bắt đầu trên một dòng mới và chiếm toàn bộ chiều rộng |
| [`inline-block`](#2-display-inline-block) | Hiển thị một phần tử dưới dạng bộ chứa khối cấp độ nội tuyến. Bản thân phần tử được định dạng là phần tử nội tuyến, nhưng bạn có thể áp dụng các giá trị chiều cao và chiều rộng |
| [`flex`](#3-display-flex) | Hiển thị một phần tử dưới dạng bộ chứa flex cấp khối |
| [`inline-flex`](#4-display-inline-flex) | Hiển thị một phần tử dưới dạng bộ chứa flex cấp nội tuyến |
| [`grid`](#5-display-grid) | Hiển thị một phần tử dưới dạng bộ chứa lưới cấp khối |
| [`inline-grid`](#6-display-inline-grid) | Hiển thị một phần tử dưới dạng bộ chứa lưới cấp độ nội tuyến |

Trang web tham khảo flexbox: https://codepen.io/enxaneta/full/adLPwv/

### 1. `display: block;`
[:arrow_up: Mục lục](#mục-lục)

`display: block;` là để tạo ra các khối chiếm toàn bộ chiều rộng và **bắt đầu trên một dòng mới.**

_HTML:_

```html
<div class="container">
    <div class="element1"></div>
    <div class="element2"></div>
</div>
```

_CSS:_

```css
.container {
    display: block;
}
```

<img src="https://github.com/CUNGVANTHANG/Front-end/assets/96326479/1f8468c6-f3ed-47eb-93e2-8892721fc08f" style="height: 200px;">

**a. Sử dụng `text-align` để đặt vị trí của văn bản bên trong phần tử (left, right, center).**

_CSS:_

```css
.container {
    display: block;
    text-align: center;
}
```

<img src="https://github.com/CUNGVANTHANG/Front-end/assets/96326479/71289b00-a0d8-4ac3-8162-8356cab78caf" style="height: 200px;">

**b. Sử dụng `float` để thực hiện việc đẩy phần tử sang trái (left) hoặc phải (right) và cho phép các phần tử khác lấp đầy không gian trống.**

_CSS:_

```css
.container {
    display: block;
    float: right;
}
```
<img src="https://github.com/CUNGVANTHANG/Front-end/assets/96326479/7ccadf55-27b8-48ad-8ac6-dfb0452f9f41" style="height: 200px;">

**c. Sử dụng `line-height` để đặt chiều cao của dòng văn bản bên trong phần tử**

_CSS:_

```css
.container {
    display: block;
    line-height: 100px; /* line-height bằng chiều cao thì sẽ căn giữa */
}
```

<img src="https://github.com/CUNGVANTHANG/Front-end/assets/96326479/1529a489-5308-40e2-ac37-c9d316866162" style="height: 200px;">

**d. Sử dụng `overflow` để xác định cách xử lý nội dung vượt quá kích thước của phần tử.**

_CSS:_

```css
html {
    width: 80px; /* Đặt width là 80px */
}

.container {
    display: block;
    overflow: hidden;
}
```

<img src="https://github.com/CUNGVANTHANG/Front-end/assets/96326479/ce585fb8-d92b-4b14-bcb4-7855618b2f1d" style="height: 200px;">

### 2. `display: inline-block;`
[:arrow_up: Mục lục](#mục-lục)

`display: inline-block;` là để tạo ra các phần tử có thể **hiển thị trên cùng một dòng với các phần tử khác** nhưng vẫn giữ được **các thuộc tính của block-level elements**.

_HTML:_

```html
<div class="container">
    <div class="element1"></div>
    <div class="element2"></div>
</div>
```

_CSS:_

```css
.container {
    font-size: 0; /* Loại bỏ khoảng trống dư thừa */
}

.element1, .element2 {
    display: inline-block;
    font-size: 12px; /* Thiết lập lại kích thước font */
}
```

<img src="https://github.com/CUNGVANTHANG/Front-end/assets/96326479/5151e29b-4cf7-4cf4-9a52-cf123ab5e652" style="height: 200px;">

### 3. `display: flex;`
[:arrow_up: Mục lục](#mục-lục)



### 4. `display: inline-flex;`
[:arrow_up: Mục lục](#mục-lục)



### 5. `display: grid;`
[:arrow_up: Mục lục](#mục-lục)

### 6. `display: inline-grid;`
[:arrow_up: Mục lục](#mục-lục)

## V. CSS position
[:arrow_up: Mục lục](#mục-lục)

![image](https://github.com/CUNGVANTHANG/Front-end/assets/96326479/e6d45506-ca6c-43fd-a36d-e131c02e1aa8)

### 1. `position: relative;`
[:arrow_up: Mục lục](#mục-lục)

### 2. `position: absolute;`
[:arrow_up: Mục lục](#mục-lục)

### 3. `postion: fixes;`
[:arrow_up: Mục lục](#mục-lục)

## VI. CSS pseudo classes, pseudo elements 
[:arrow_up: Mục lục](#mục-lục)

## VII. Web responsive 
[:arrow_up: Mục lục](#mục-lục)

Web responsive hay responsive web design là một phương pháp thiết kế website sao cho nội dung trên website có thể tự điều chỉnh phù hợp với kích thước màn hình của người dùng. Dù bạn đang xem trang web trên một máy tính để bàn, máy tính xách tay, máy tính bảng, hoặc điện thoại di động, một trang web responsive sẽ tự động thay đổi cấu trúc layout, kích thước hình ảnh, và các phần tử khác để phù hợp với kích thước màn hình của bạn.

Để tạo một website responsive, có một số kỹ thuật quan trọng mà bạn nên sử dụng:

- **Media Queries**: Media Queries là một phần quan trọng của CSS3, cho phép bạn áp dụng các quy tắc CSS đặc biệt cho các loại thiết bị và kích cỡ màn hình khác nhau.
- **CSS Flexbox**: Flexbox, hay Flexible Box Layout, là một mô hình layout dựa trên CSS cho phép bạn dễ dàng thay đổi chiều cao, chiều rộng, và thứ tự của các phần tử con bên trong một container, không phụ thuộc vào kích thước ban đầu của chúng. Flexbox rất phù hợp cho các layout một chiều (một hàng hoặc một cột).
- **CSS Grid**: Grid Layout là một mô hình layout mạnh mẽ cho phép bạn thiết kế các layout dựa trên lưới, với khả năng điều chỉnh và định vị các phần tử trên hai trục (hàng và cột). CSS Grid cho phép bạn tạo ra các layout phức tạp và linh hoạt mà không cần phải sử dụng các kỹ thuật CSS khác như float hay positioning.
- **Viewport Meta Tag**: Tag này được sử dụng trong HTML để điều khiển cách mà trình duyệt hiển thị trang web trên các thiết bị di động. Nó cho phép trình duyệt biết cách điều chỉnh kích thước và tỷ lệ của nội dung.

**1. Làm cho Typography Responsive**

Có 4 đơn vị đo lường màn hình khác nhau như sau:

- `vw` (chiều rộng của màn): `27vw` biểu diễn `27%` kích thước chiều rộng của màn hình hiển thị.
- `vh` (chiều cao của màn): `8vh` biểu diễn `8%` kích thước chiều cao của màn hình hiển thị.
- `vmin` (kích thước theo chiều nhỏ hơn của màn hình): `82vmin` biểu diễn `82%` kích thước của chiều không gian hiển thị nhỏ hơn của màn hình hiện tại.
- `vmax` (kích theo chiều lớn hơn của màn hình): `92vmax` biểu diễn `92%` kích thước của chiều không gian hiển thị lớn hơn của màn hình hiện tại.
