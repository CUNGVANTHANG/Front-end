## Tailwind CSS Theory
## Mục lục

### Cài đặt

- Cài đặt extension **Tailwind CSS IntelliSense**

![image](https://github.com/user-attachments/assets/28fecfc1-fd3a-473a-9933-35de215e1342)

- Khởi tạo `package.json`

```
npm init -y
```

- Download Tailwind CSS

```
npm install -D tailwindcss postcss autoprefixer vite
```

- Khởi tạo Tailwind CSS

```
npx tailwindcss init -p
```

- Cấu hình `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Thêm `@tailwind` vào file css chính

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Tạo thư mục build để chỉ dẫn tới 1 file `index.css` duy nhất (hoặc không cần tạo)

```
npx tailwindcss -i ./src/index.css -o ./build/index.css --watch
```

### Chức năng

Tài liệu: https://tailwindcss.com/docs/
