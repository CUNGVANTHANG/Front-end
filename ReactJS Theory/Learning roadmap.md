## 1. Create react app

Create react app gọi là tool chain

- **Cài đặt**

```
npx create-react-app my-app
```

- **Để chạy chương trình**

```
npm start
```

## [2. JSX](https://github.com/CUNGVANTHANG/Front-end/blob/master/ReactJS%20Theory/README.md#1-jsx)

## [3. Component](https://github.com/CUNGVANTHANG/Front-end/blob/master/ReactJS%20Theory/README.md#2-component)

## [4. Props](https://github.com/CUNGVANTHANG/Front-end/blob/master/ReactJS%20Theory/README.md#3-props)

## [5. CSS Styles](https://github.com/CUNGVANTHANG/Front-end/tree/master/HTML%2C%20CSS%20Theory#b-css)

**Sử dụng bằng cách:**

```
import "./App.css"
```

## 6. Rendering list

### [Tính bất biến trong ReactJS](https://github.com/CUNGVANTHANG/Front-end/tree/master/HTML%2C%20CSS%20Theory#b-css)

> Nếu ta trực tiếp thay đổi đối tượng thì React sẽ nghĩ rằng chúng ta **CHƯA thay đổi trạng thái** và do đó sẽ **KHÔNG hiển thị lại Component**. Vì vậy chúng ta phải làm việc gián tiếp bằng cách tạo đối tượng mới sao chép và thực hiện thay đổi dựa trên đối tượng cũ (gọi là bất biến). **Đối tượng bất biến** là một **đối tượng không thể thay đổi**. Mỗi lần cập nhật tạo ra một giá trị mới, không làm thay đổi giá trị cũ

### [Trạng thái của mảng](https://github.com/CUNGVANTHANG/Front-end/tree/master/HTML%2C%20CSS%20Theory#b-css)

| Chức năng | Sử dụng |
| :--: | :--: |
| Lấy phần tử | [.map](https://github.com/CUNGVANTHANG/Front-end/tree/master/Javascript%20Theory#6-l%C3%A0m-vi%E1%BB%87c-v%E1%BB%9Bi-m%E1%BA%A3ng) |
| Thêm phần tử | [Spread](https://github.com/CUNGVANTHANG/Front-end/tree/master/ReactJS%20Theory#4-spread-operator) |
| Sửa phần tử | [.map](https://github.com/CUNGVANTHANG/Front-end/tree/master/Javascript%20Theory#6-l%C3%A0m-vi%E1%BB%87c-v%E1%BB%9Bi-m%E1%BA%A3ng) |
| Xóa phần tử | [.slice](https://github.com/CUNGVANTHANG/Front-end/tree/master/Javascript%20Theory#6-l%C3%A0m-vi%E1%BB%87c-v%E1%BB%9Bi-m%E1%BA%A3ng) [.filter](https://github.com/CUNGVANTHANG/Front-end/tree/master/Javascript%20Theory#6-l%C3%A0m-vi%E1%BB%87c-v%E1%BB%9Bi-m%E1%BA%A3ng) |

### [Trạng thái của đổi tượng](https://github.com/CUNGVANTHANG/Front-end/tree/master/HTML%2C%20CSS%20Theory#b-css)

| Chức năng | Sử dụng |
| :--: | :--: |
| Lấy phần tử | [.map](https://github.com/CUNGVANTHANG/Front-end/tree/master/Javascript%20Theory#6-l%C3%A0m-vi%E1%BB%87c-v%E1%BB%9Bi-m%E1%BA%A3ng) |
| Thêm phần tử | [Spread](https://github.com/CUNGVANTHANG/Front-end/tree/master/ReactJS%20Theory#4-spread-operator) |
| Sửa phần tử | [Spread](https://github.com/CUNGVANTHANG/Front-end/tree/master/ReactJS%20Theory#4-spread-operator) |
| Xóa phần tử | [Spread](https://github.com/CUNGVANTHANG/Front-end/tree/master/ReactJS%20Theory#4-spread-operator) [Destructuring](https://github.com/CUNGVANTHANG/Front-end/tree/master/ReactJS%20Theory#3-destructuring-rest) |
