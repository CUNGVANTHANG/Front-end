# Sass Theory
## Mục lục


## 1. Tổng quan về ngôn ngữ Sass
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
