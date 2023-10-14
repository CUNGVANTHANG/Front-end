# Typescript Theory
## Mục lục

## 1. Type Annotations
**Typescript sử dụng cú pháp:**

**`:type`** sau khi định nghĩa biến. Một khi đã khai báo type, chúng ta sẽ không thế thay đổi nó (static type)

**Ví dụ:**

```ts
// Kiểu string
let name: string = "Hello World"

// Kiểu number
let num: number = 123

// Kiểu array string
let arr1: string[] = ["Hello", "Hi", "Xin chao"]

// Kiểu array number
let arr2: number[] = [1, 2, 3, 4, 5]

// Kiểu boolean
let tasty: boolean = true

// Kiểu hàm void
function speak(food: string, energy: number): void {
  console.log("Our " + food + " has " + energy + " calories.");
}
```

## 2. Type Inference
Type Inference - Tự động gán type

**Ví dụ 1:**

```ts
let test = ['Cung', 'Van', 'Thang']

test.push(2003) // Lỗi vì test đang có type là string
```

**Ví dụ 2:**

```ts
let test = ['Cung', 'Van', 'Thang', 21, 6]

test.push(2003) // Không xảy ra lỗi vì test đã tự động gán type là string | number
```

