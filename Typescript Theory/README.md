# Typescript Theory
## Mục lục

## I. Các kiến thức cơ bản về biến
[:arrow_up: Mục lục](#mục-lục)

### 1. Type Annotations
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

### 2. Type Inference
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

### 3. Khai báo biến trong mã lệnh không được định kiểu
[:arrow_up: Mục lục](#mục-lục)

Từ khóa `declare` có thể được **sử dụng trước một trong ba từ khóa khai báo** (`var`, `let`, `const`).

Nó thông báo cho TypeScript **biết rằng biến tồn tại ở một nơi nào đó nhưng không nói rõ vị trí**.

```ts
declare let variableDefinedSomewhereElse: number;
let newVariable = variableDefinedSomewhereElse + 1;
```

Thuật ngữ chính thức cho việc sử dụng `declare` như vậy được gọi là `ambient declaration` (**khai báo ambient**)

**Khai báo ambient có thể được định nghĩa ở bất kỳ đâu**. Tuy nhiên, một **thực hành tốt** là tạo một file có phần mở rộng là `d.ts`. File này không tạo ra bất kỳ code JavaScript nào mà chỉ **cho biết rằng các biến hoặc hàm tồn tại**.

_Ví dụ_: Người dùng jQuery thường sẽ sử dụng khai báo ambient để khai báo jQuery trong TypeScript. jQuery sẽ được thêm vào và chạy cùng với code TypeScript. Vì vậy, bạn có thể coi như nó đã tồn tại.

```ts
declare let $: JQuery;
export default $
```

Ta có thể khai báo các thành phần khác ngoài biến, **ví dụ như hàm**. Trên thực tế, bạn có thể khai báo bất cứ thứ gì tồn tại trong JavaScript.

```ts
declare function ambientFunction(i: number):void;

function myFunction(i: number){
    ambientFunction(1);
}
```

### 4. Kiểu dữ liệu số
[:arrow_up: Mục lục](#mục-lục)

**Dấu phân cách số** là một tính năng giúp đơn giản hóa cách chúng ta viết số. Các số lớn thường khá khó đọc và việc sử dụng dấu phân cách có thể giúp ta tránh gặp nhầm lẫn.

Ví dụ: bạn có thể **sử dụng ký hiệu gạch dưới để đánh dấu mỗi hàng nghìn**. TypeScript không đưa ra bất kỳ quy tắc nào về vị trí đặt dấu phân cách số, ngoại trừ việc bạn phải đặt dấu phân cách giữa hai số riêng biệt.

```ts
const numericSeparator1 = 560000067;
const numericSeparator2 = 560_000_067; 
const numericSeparator3 = 5_6_0_000_0_6_7; 
const numericSeparator4 = Number(5_000); 
const numericSeparator5 = Number("5_000"); 
const numericSeparator6 = parseInt("5_000");  
const numericSeparator7 =  0xFAB_F00D;
const numericSeparator8 =  0b1111_11111000_11110000_00001100; 
console.log(numericSeparator1)  // 560000067
console.log(numericSeparator2)  // 560000067
console.log(numericSeparator3)  // 560000067
console.log(numericSeparator4)  // 5000
console.log(numericSeparator5)  // NaN
console.log(numericSeparator6)  // 5
console.log(numericSeparator7)  // 262926349
console.log(numericSeparator8)  // 267972620
```

### 5. any
[:arrow_up: Mục lục](#mục-lục)

`any` chứa bất kỳ giá trị nào và do đó không áp dụng bất kỳ phương pháp bảo vệ kiểu nào. Nếu bạn tích hợp TypeScript vào một dự án JavaScript hiện có, **theo mặc định**, **mọi biến sẽ được thiết lập thành kiểu any** cho đến khi bạn khai báo kiểu cho nó.

```ts
let x: any = "string";
x = true;
x = { title: "Object with a string member" };
x = [1, 2, 3];
x = 1;
```

Mọi biến `any` sẽ cho phép bạn **gán bất kỳ giá trị nào**, nhưng cũng có thể **gọi bất kỳ hàm nào**.

Một đoạn code sử dụng `any` **khó bảo trì hơn vì nó khó hiểu hơn**. Cách mã nguồn được định kiểu chính là tài liệu cho biết thông tin về những gì dự kiến sẽ xảy ra với biến và hàm dựa trên kiểu

### 6. Mảng thay đổi và Mảng bất biến
[:arrow_up: Mục lục](#mục-lục)

- **Mảng thay đổi**

**Chú ý:** **Kiểu dữ liệu của mảng sẽ được xác định cuối cùng sau khi không còn thay đổi nữa**

Gán kiểu cho mảng

```ts
let a: number[];
```

Một cách định nghĩa kiểu cho mảng khác là sử dụng cú pháp `Array<T>`. Cả hai cách đều tương tự nhau.

```ts
let usingArraySyntax: Array<number> = [1, 2, 3];
let myArray = new Array<number>();
```

```ts
let myArray = new Array<number>();
printArray(myArray);

// Is the same as:
let myArray2: Array<number> = [];
printArray(myArray2);

// Is the same as:
let myArray3: number[] = [];
printArray(myArray3);

function printArray(a: number[]): void {
    console.log(`Before: ${a}`);
    a.push(1);
    console.log(`After: ${a}`);
}
```

- **Mảng bất biến**

`ReadonlyArray` là một mảng `generic` **chỉ cho phép đọc dữ liệu** từ mảng sau khi nó được tạo. Giống như mảng thay đổi, có hai cách để viết một mảng bất biến (tập dữ liệu chỉ đọc).

Cách tiếp cận đầu tiên là sử dụng ReadonlyArray<T> thay vì Array<T>.

```ts
// Cách 1:

let list: ReadonlyArray<number> = [1, 2];
list.push(3); // Lỗi
console.log(list);
```

```ts
// Cách 2

let list: readonly number[] = [1, 2];
list.push(3);
console.log(list);
```

Đoạn code trên **không biên dịch** được vì bạn không thể thay đổi mảng bằng `push`. Lỗi này khá thú vị và dẫn đến cách viết mảng bất biến thứ hai.

- **Phân tích luồng điều khiển để xây dựng mảng**

Phân tích luồng điều khiển là quá trình TypeScript suy luận kiểu dữ liệu cho biến. Mảng có thể trở nên phức tạp vì chúng có thể **nhận nhiều giá trị thuộc nhiều kiểu dữ liệu khác nhau**. 

_Ví dụ_: Đoạn code sau đây nhận một danh sách số hoặc chuỗi:

```ts
let myArray: (number | string)[] = [];
```

Nếu chúng ta để TypeScript tự suy luận kiểu, kết quả sẽ là:

```ts
let myArray  = [];
```

### 7. Giá trị undefined vs Giá trị null
[:arrow_up: Mục lục](#mục-lục)

- **Undefined**

`undefined`: Là giá trị mặc định của một biến chưa được khởi tạo.

Khi một biến được khai báo nhưng không được gán giá trị, giá trị của nó là `undefined`.

```ts
let x; // x is undefined
```

`undefined` là một kiểu dữ liệu riêng biệt trong TypeScript.

```ts
console.log(typeof undefined); // "undefined"
```

- **null**

`null`: Là giá trị thể hiện một biến không có giá trị hoặc không trỏ đến đối tượng nào.

`null` thường được gán cho một biến để chỉ rõ rằng biến này hiện không có giá trị.

```ts
let y = null; // y is null
```

`null` là một đối tượng.

```ts
console.log(typeof null); // "object"
```

- **Cách sử dụng trong TypeScript**

**Union Types**: Khi sử dụng trong các kiểu liên hợp, chúng có thể xuất hiện cùng nhau.

```ts
let value: string | undefined | null;
value = "Hello";  // OK
value = undefined; // OK
value = null; // OK
```

**Optional Chaining**: Khi truy cập vào các thuộc tính của một đối tượng một cách an toàn mà không gặp lỗi nếu một phần của chuỗi đó là `null` hoặc `undefined`.

```ts
const person = {
  name: "Alice",
  address: undefined
};

console.log(person.address); // Output: undefined

// Sử dụng Optional Chaining
const street = person.address?.street;
console.log(street); // Output: undefined, vì person.address là undefined
```

**Strict Null Checks**: Khi sử dụng tùy chọn `strictNullChecks` trong TypeScript, bạn phải chỉ rõ kiểu cho phép `undefined` và `null` nếu muốn sử dụng chúng.

```ts
let name: string | undefined;
name = "Alice"; // OK
name = undefined; // OK
name = null; // Error
```

- **Phân biệt sử dụng union và optional trong một số trường hợp**

```ts
function functionWithUndefinedParameter(a:number|undefined, b:number){ }
functionWithUndefinedParameter(1 , 2);
functionWithUndefinedParameter(undefined, 2);
functionWithUndefinedParameter(, 2); // Does not compile
```

Điểm khác biệt là với `|undefined`, tham số phải được truyền với **giá trị hoặc undefined**. Tuy nhiên, với `?`, bạn **có thể truyền undefined hoặc không truyền gì cả**.

```ts
function functionWithQuestionMarkParameter1(a:number, b?:number){}
functionWithQuestionMarkParameter1(1, 2);
functionWithQuestionMarkParameter1(1, undefined);
functionWithQuestionMarkParameter1(1);
```

