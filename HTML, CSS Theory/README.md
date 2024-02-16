# HTML, CSS Theory
## Mục lục

<details>
  <summary>A. HTML</summary>
  
</details>

<details>
  <summary>B. CSS</summary>

  - [I. CSS mặc định của các thẻ HTML](#i-css-mặc-định-của-các-thẻ-html)
  - [II. Các cách chèn CSS](#ii-các-cách-chèn-css)
  - [III. 
</details>

## B. CSS
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

## II. Các cách chèn CSS
[:arrow_up: Mục lục](#mục-lục)

3 cách chèn CSS:
1. Internal (Tạo thẻ <style>)
2. External (Sử dụng thẻ link tham chiếu đến file .css)
3. Inline (Tạo thuộc tính style trong thẻ HTML)

## III. CSS Selectors
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
| `inline-block` | Hiển thị một phần tử dưới dạng bộ chứa khối cấp độ nội tuyến. Bản thân phần tử được định dạng là phần tử nội tuyến, nhưng bạn có thể áp dụng các giá trị chiều cao và chiều rộng |
| `flex` | Hiển thị một phần tử dưới dạng bộ chứa flex cấp khối |
| `inline-flex` | Hiển thị một phần tử dưới dạng bộ chứa flex cấp nội tuyến |
| `grid` | Hiển thị một phần tử dưới dạng bộ chứa lưới cấp khối |
| `inline-grid` | Hiển thị một phần tử dưới dạng bộ chứa lưới cấp độ nội tuyến |

Trang web tham khảo flexbox: https://codepen.io/enxaneta/full/adLPwv/

### 1. `display: block;`
[:arrow_up: Mục lục](#mục-lục)

### 2. `display: inline-block;`
[:arrow_up: Mục lục](#mục-lục)

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


## VI. 
