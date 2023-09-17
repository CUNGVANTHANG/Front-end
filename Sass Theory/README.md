# Sass Theory
## Mục lục
- [1. Tổng quan về ngôn ngữ Sass](#1-tổng-quan-về-ngôn-ngữ-sass)
- [2. Nested rules và Variables](#2-nested-rules-và-variables)
- [3. Extend và Placeholder](#3-extend-và-placeholder)
- [4. Mixins](#4-mixins)
- [5. Import](#5-import)
- [6. Use, forward](#6-use-forward)
- [7. Cấu trúc 7-1 pattern](#7-cấu-trúc-7-1-pattern)
- [8. Các loại giá trị](#8-các-loại-giá-trị)

## 1. Tổng quan về ngôn ngữ Sass
[:arrow_up: Mục lục](#mục-lục)

Sass (Syntactically Awesome StyleSheets) là ngôn ngữ tiền xử lý của CSS

**Tên file sass:**

`style.scss` hoặc `styles.sass`

**Cài đặt sass:**

```
npm i sass -g
```

**Cách compile Sass sang CSS:**

```
sass <input.scss> [output.css]
sass <input.scss>:<output.css> <input/>:<output/> <dir/>
```

*Ví dụ 1: Cách compile 1 file Sass sang 1 file CSS*

```
sass demoSass.scss assets/css/demoSass.css
```

*Ví dụ 2: Cách compile thư mục chứa nhiều file Sass sang CSS*

```
sass scss:assets/css 
```

**Cách lắng nghe file Sass compile sang file CSS:**

```
sass <input.scss> [output.css] -w
sass <input.scss>:<output.css> <input/>:<output/> <dir/> -w
```

*Ví dụ 1: Cách lắng nghe 1 file Sass compile sang 1 file CSS*

```
sass demoSass.scss assets/css/demoSass.css -w
```

*Ví dụ 2: Cách lắng nghe thư mục chứa nhiều file Sass compile sang file CSS*

```
sass scss:assets/css -w
```

![image](https://github.com/CUNGVANTHANG/Front-end/assets/96326479/6c9782cc-f063-4047-8a35-69a47956bec8)

**Mẹo:**

Tạo file `package.json` bằng câu lệnh `npm init`

```
npm init
```

Thêm nội dung sau vào phần "scripts"

```
"start": "sass scss:assets/css -w"
```

![image](https://github.com/CUNGVANTHANG/Front-end/assets/96326479/17ce0be7-3131-4d4c-b25d-1920598c7e10)

Để bắt đầu lắng nghe và compile tất cả file Sass sang CSS ta dùng lệnh `npm start`

```
npm start
```

## 2. Nested rules và Variables
[:arrow_up: Mục lục](#mục-lục)

**1. Nested rules**

```scss
// SCSS
.card {
    width: 300px;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 8px;

    &-thumb {
        width: 100%;
    }

    .title {
        font-size: 22px;
    }
}
```

```css
/* CSS */
.card {
    width: 300px;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 8px;
}

.card-thumb {
  width: 100%;
}

.card .title {
  font-size: 22px;
}
```

`&` ở đây chính là `.card`

**2. Variables**

```scss
// SCSS
$primary-color: orange; // Global

.btn {
  color: $primary-color;

  &--primary {
    color: #000;
    background: $primary-color;
  }
}
```

```css
/* CSS */
.btn {
  color: orange;
}

.btn--primary {
  color: #000;
  background: orange;
}
```

Tạo biến hoặc gọi biến bằng cách sử dụng dấu `$` đằng trước tên biến

Nếu là thuộc tính của CSS có thể truyền trực tiếp biến vào, nếu không phải ta truyền #{biến}. Ví dụ:

```scss  
--column: #{$column};
--spacing: #{$spacing};
```

## 3. Extend và Placeholder
[:arrow_up: Mục lục](#mục-lục)

**1. Extend (Kế thừa)**

```scss
// SCSS
.box-1 {
  font-size: 20px;
}

.box-2 {
  // kế thừa .box-1
  @extend .box-1;
  font-weight: 600;
}
```

```css
/* CSS */
.box-1, .box-2 {
  font-size: 20px;
}

.box-2 {
  font-weight: 600;
}
```

**2. Placeholder**

Sử dụng `%` để tạo placeholder

```scss
// SCSS
%toast-share {
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.toast-success {
  // Kế thừa từ placeholder
  @extend %toast-share;
	background: green;
}

.toast-error {
  @extend %toast-share;
	background: red;
}
```

```css
/* CSS */
.toast-error, .toast-success {
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.toast-success {
  background: green;
}

.toast-error {
  background: red;
}
```

Lúc này ta thấy không xuất hiện `.toast-share` trong kết quả sau biên dịch nữa. Điều này giúp ta cải thiện được lượng code không cần thiết trong file CSS

## 4. Mixins
[:arrow_up: Mục lục](#mục-lục)

**1. Mixins không truyền tham số**

```scss
// SCSS
@mixin flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.center {
  @include flexCenter;
}
```

```CSS
/* CSS */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

**2. Mixins truyền tham số**

```scss
// SCSS
@mixin size($width, $height: null) {
  width: $width;
  height: $height;
}

.center {
  @include size(30px, 20px);
}
```

```css
/* CSS */
.center {
  width: 30px;
  height: 20px;
}
```

**3. Ví dụ về mixins tạo grid**

```scss
@mixin grid($column, $spacing){
// Nếu là thuộc tính của CSS có thể truyền trực tiếp biến vào, nếu không phải ta truyền #{biến} 
  --column: #{$column};
  --spacing: #{$spacing};

  display: flex;
  flex-wrap: wrap;
  row-gap: var(--spacing);
  margin-left: calc(-1 * var(--spacing);

  > * {
    width: calc(100% / var(--column) - var(--spacing));
    margin-left: var(--spacing);
  {
}
```

## 5. Import
[:arrow_up: Mục lục](#mục-lục)

**Đặt tên file base, components:**

> _Tên.scss

<img src="https://github.com/CUNGVANTHANG/Front-end/assets/96326479/49139d0d-77a0-4d44-bdbc-5e6163e1a86e" alt="" height=300px>

**Cú pháp:**

```scss
@import "base/variables";
```

Ưu điểm: Khai báo 1 lần có thể sử dụng toàn cục

Nhược điểm: Dễ bị ghi đè

Thường được sử dụng trong các dự án nhỏ, nên sử dụng use, forward

## 6. Use, forward
[:arrow_up: Mục lục](#mục-lục)

**Đặt tên file base, components:**

> _Tên.scss

<img src="https://github.com/CUNGVANTHANG/Front-end/assets/96326479/559b36a7-8908-4452-95cc-a0ce0dbccd6b" alt="" height=300px>

**Cú pháp `use`:**

```scss
@use "base/variables as var"; // Đổi tên namespace là var
@use "base/mixins";

h1 {
    color: var.$primary-color; // namespace.variables
    @include mixins.flexCenter; // namespace.mixins
}
```

**Cú pháp `forward`:**

```scss
// Tạo file `_index.scss` với chức năng chuyển tiếp variables, mixins ra ngoài 

@forward "variables";
@forward "mixins";
```

![image](https://github.com/CUNGVANTHANG/Front-end/assets/96326479/440517bf-9e25-48ef-a649-04c189b12283)

![image](https://github.com/CUNGVANTHANG/Front-end/assets/96326479/2a8e78c2-bc32-4e2b-98b2-667dc5cfa7dd)

Trong file `_header.scss` ở thư mục components ta chỉ cần sử dụng `@use "../base";`. `base` sẽ đóng vai trò là namespace

## 7. Cấu trúc 7-1 pattern
[:arrow_up: Mục lục](#mục-lục)

![image](https://github.com/CUNGVANTHANG/Front-end/assets/96326479/5e55f2f8-f357-49a3-bde4-d25ea69b3766)

![image](https://github.com/CUNGVANTHANG/Front-end/assets/96326479/e060ee13-81e7-4e85-a166-945a1f28ee63)

![image](https://github.com/CUNGVANTHANG/Front-end/assets/96326479/24d8514a-aacb-466e-9cff-9890128d83bb)


## 8. Các loại giá trị
[:arrow_up: Mục lục](#mục-lục)

Các loại giá trị trong Sass: Numbers, Strings, Colors, List, Maps, Boolean, Null

```scss
// 1. Numbers
$font-size: 20px;
$padding: 2rem;
$border: 2;
$z-index: 99;

// 2. Strings
$device: "mobile";
$font-code: "monospace";
$my-name: "Nguyen Van A";

// 3. Colors
$color1: green;
$color2: #ff0000;

$primary: orange;
$secondary: rgba(
    $color: $primary,
    $alpha: 0.5,
);

@debug $secondary;

// 4. Lists - Nên đặt sau tên có 's'
$colors: red green blue orange;
$break-points: 575px 768px 991px;
$font-weights: 400 500 600;

// 5. Maps (key: value)
$break-points: (
    "mobile": 575px,
    "tablet": 768px,
    "desktop": 991px,
);

$font-weights: (
    "regular": 400,
    "medium": 500,
    "bold": 700,
);

// 6. Boolean (true or false)
$success: true;
$error: false;

@mixin avatar($w, $h, $circle: false) {
    width: $w;
    height: $h;

    @if $circle == true {
        border-radius: 50%;
    }
}

img.avatar {
    @include avatar(100px, 100px, $circle: true);
}

// CSS
// img.avatar {
//     width: 100px;
//     height: 100px;
//     border-radius: 50%;
// }

// 7. Null
$color: null;

@mixin flexCenter($horizontal: center, $vertical: center) {
    display: flex;
    align-items: $vertical;
    justify-content: $horizontal;
}

.box {
    @include flexCenter($vertical: null)
}

// CSS
// .box {
//     display: flex;
//     justify-content: center;
// }
```
