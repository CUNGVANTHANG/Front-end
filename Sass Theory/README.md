# Sass Theory
## Mục lục


## 1. Tổng quan về ngôn ngữ Sass
Sass (Syntactically Awesome StyleSheets) là ngôn ngữ tiền xử lý của CSS

**Tên file sass:**

`style.scss`` hoặc `styles.sass``

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
