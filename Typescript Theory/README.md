# Typescript Theory
## Mục lục

<details>
  <summary>I. Các kiến thức cơ bản về biến</summary>

 - [1. Type Annotations](#1-type-annotations)
 - [2. Type Inference](#2-type-inference)
 - [3. Khai báo biến trong mã lệnh không được định kiểu](#3-khai-báo-biến-trong-mã-lệnh-không-được-định-kiểu)
 - [4. Kiểu dữ liệu số](#4-kiểu-dữ-liệu-số)
 - [5. any](#5-any)
 - [6. Mảng thay đổi và Mảng bất biến](#6-mảng-thay-đổi-và-mảng-bất-biến)
 - [7. Giá trị undefined vs Giá trị null](#7-giá-trị-undefined-vs-giá-trị-null)
 - [8. Kiểu never](#8-kiểu-never)
 - [9. Ép kiểu](#9-ép-kiểu)
 - [10. Kiểu unknown](#10-kiểu-unknown)
 - [11. Sử dụng kiểu hằng để thu hẹp kiểu nguyên thủy](#11-sử-dụng-kiểu-hằng-để-thu-hẹp-kiểu-nguyên-thủy)
 - [12. Non-Null Assertion Operator](#12-non-null-assertion-operator)
 - [13. Kiểu Symbol và Unique Symbol](#13-kiểu-symbol-và-unique-symbol)
</details>

<details>
  <summary>II. Enum</summary>

- [1. Enum có giá trị và Enum không có giá trị](#1-enum-có-giá-trị-và-enum-không-có-giá-trị)
- [2. Truy cập giá trị Enum](#2-truy-cập-giá-trị-enum)
</details>

<details>
  <summary>III. Kiểu Generic</summary>

- [1. Kiểu Generic](#1-kiểu-generic)
- [2. Ràng buộc kiểu Generic](#2-ràng-buộc-kiểu-generic)

</details>

<details>
  <summary>IV. Kiểu dẫn xuất</summary>

- [1. Kiểu Readonly](#1-kiểu-readonly)
- [2. Kiểu Partial](#2-kiểu-partial)
- [3. Kiểu Nullable](#3-kiểu-nullable)
- [4. Kiểu Pick](#4-kiểu-pick)
- [5. Kiểu Omit](#5-kiểu-omit)
- [6. Kiểu Record](#6-kiểu-record)
- [7. Kiểu Extract](#7-kiểu-extract)
- [8. Kiểu Exclude](#8-kiểu-exclude)
- [9. Kiểu ReturnType](#9-kiểu-returntype)
- [10. Kiểu dẫn xuất tùy chỉnh](#10-kiểu-dẫn-xuất-tùy-chỉnh)
</details>

<details>
  <summary>V. Đối tượng</summary>

- [1. object và Object](#1-object-và-object)

</details>

<details>
  <summary>VI. Ký hiệu chỉ số</summary>

- [1. Định nghĩa và sử dụng](#1-định-nghĩa-và-sử-dụng)
</details>

<details>
  <summary>VII. Sử dụng biến nâng cao</summary>

- [1. Kết hợp các Kiểu dữ liệu, Interface và Kiểu Generic](#1-kết-hợp-các-kiểu-dữ-liệu-interface-và-kiểu-generic)
- [2. Kiểu literal](#2-kiểu-literal)
- [3. Kiểu union và Tagged union](#3-kiểu-union-và-tagged-union)
- [4. Kiểu as const](#4-kiểu-as-const)
- [5. Kiểu Tuple](#5-kiểu-tuple)
- [6. Toán tử keyof](#6-toán-tử-keyof)
</details>

<details>
  <summary>VIII. Ngoại lệ</summary>

</details>

<details>
  <summary>IX. Bí danh</summary>

</details>

<details>
  <summary>X. Kiểm tra kiểu</summary>

</details>

<details>
  <summary>XI. Thao tác đối tượng và mảng</summary>

</details>

<details>
  <summary>XII. Chia sẻ mã nguồn</summary>

</details>

## I. Các kiến thức cơ bản về biến
[:arrow_up: Mục lục](#mục-lục)

### 1. Type Annotations
**Typescript sử dụng cú pháp:**

**`:type`** sau khi định nghĩa biến. Một khi đã khai báo type, chúng ta sẽ không thế thay đổi nó (static type)

**Ví dụ:**

```ts
// Kiểu any
let variables: any = "hello"
variables = 1132

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

// Kiểu hàm void: trả về undefined
function speak(food: string, energy: number): void {
  console.log("Our " + food + " has " + energy + " calories.");
}

// undefined
let obj: number | undefined = 8;
obj = undefined

// null
let names: null | string = "Thang";
names = null

// Gán 2 kiểu
let number: number | string = 1;
number = "2"
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
// union
function functionWithUndefinedParameter(a:number|undefined, b:number){ }
functionWithUndefinedParameter(1 , 2);
functionWithUndefinedParameter(undefined, 2);
functionWithUndefinedParameter(, 2); // Does not compile
```

Điểm khác biệt là với `|undefined`, tham số phải được truyền với **giá trị hoặc undefined**. Tuy nhiên, với `?`, bạn **có thể truyền undefined hoặc không truyền gì cả**.

```ts
// optional
function functionWithQuestionMarkParameter1(a:number, b?:number){}
functionWithQuestionMarkParameter1(1, 2);
functionWithQuestionMarkParameter1(1, undefined);
functionWithQuestionMarkParameter1(1);
```

### 8. Kiểu never
[:arrow_up: Mục lục](#mục-lục)

Kiểu `never` trong TypeScript được **sử dụng để chỉ những giá trị mà không bao giờ xảy ra**.

- Sử dụng never cho các hàm không bao giờ trả về giá trị, như các **hàm ném ra ngoại lệ hoặc chạy mãi mãi**.

- Sử dụng never trong các kiểm tra sự đầy đủ của union types để đảm bảo tất cả các trường hợp đã được xử lý

**Ví dụ với hàm ném ngoại lệ:**

```ts
function throwError(message: string): never {
    throw new Error(message);
}

// Sử dụng hàm
try {
    throwError("Something went wrong!");
} catch (error) {
    console.error(error);
}
```

**Ví dụ với hàm chạy mãi mãi:**

```ts
function infiniteLoop(): never {
    while (true) {
        console.log("This loop runs forever!");
    }
}

// Gọi hàm
// infiniteLoop(); // Cẩn thận với hàm này vì nó sẽ làm treo chương trình
```

**Ví dụ kiểm tra sự đầy đủ trong union types:**

```ts
type Animal = "cat" | "dog" | "fish";

function handleAnimal(animal: Animal): string {
    switch (animal) {
        case "cat":
            return "Meow!";
        case "dog":
            return "Woof!";
        case "fish":
            return "Blub!";
        default:
            // Nếu chúng ta thêm một loại động vật mới vào kiểu Animal mà không cập nhật hàm này,
            // TypeScript sẽ báo lỗi ở đây, vì kiểu `never` không bao giờ nên xảy ra.
            const exhaustiveCheck: never = animal;
            throw new Error(`Unhandled animal type: ${exhaustiveCheck}`);
    }
}

// Sử dụng hàm
console.log(handleAnimal("cat")); // Output: "Meow!"
console.log(handleAnimal("dog")); // Output: "Woof!"
console.log(handleAnimal("fish")); // Output: "Blub!"
```

Cuối cùng, `never` được **sử dụng để biểu thị các trạng thái hoặc tình huống không mong đợi hoặc không nên xảy ra**. 

Ví dụ: Ngoại lệ không phải là một hành vi nên xảy ra. Vòng lặp vô hạn trong hàm không nên được thiết kế đề tồn tại lâu dài trong hệ thống. Một điều kiện không bao giờ được thực thi cũng không nên tồn tại trong chương trình.

### 9. Ép kiểu
[:arrow_up: Mục lục](#mục-lục)

Có hai cách phổ biến để ép kiểu trong TypeScript: sử dụng cú pháp `angle-bracket` (`<>`) và cú pháp `as`.

**1. Sử dụng cú pháp angle-bracket (`<>`)**

Cú pháp này thường được sử dụng với JSX trong React, vì vậy nếu bạn đang làm việc với JSX, hãy sử dụng cú pháp `as`.

Ví dụ:

```ts
let someValue: any = "this is a string";

// Ép kiểu từ any sang string
let strLength: number = (<string>someValue).length;

console.log(strLength); // Output: 16
```

**2. Sử dụng cú pháp `as`**

Cú pháp này được ưa chuộng hơn trong các dự án TypeScript hiện đại và đặc biệt hữu ích khi bạn đang làm việc với JSX trong React.

Ví dụ:

```ts
let someValue: any = "this is a string";

// Ép kiểu từ any sang string
let strLength: number = (someValue as string).length;

console.log(strLength); // Output: 16
```

**3. Rủi ro của việc chuyển kiểu**

Nếu bạn trực tiếp chuyển kiểu thành `string` mà không sử dụng kiểu `unknown`, TypeScript sẽ **cảnh báo rằng không có điểm chung giữa hai kiểu dữ liệu**. Trình biên dịch TypeScript đưa ra giải pháp cho vấn đề này là chuyển đối sang kiểu `unknown`.

```ts
const str: string = "123";
const bool: boolean = true;
const castFromString:number = str as number;
const castFromBoolean:number = bool as number;
console.log(castFromString)
console.log(castFromBoolean)
```

Trong trường hợp đó, **ta cần chuyển đổi hai lần**. Trước tiên, bạn **chuyển kiểu thành `unknown` và sau đó chuyển thành kiểu mong muốn**.

```ts
const str: string = "123";
const bool: boolean = true;
const castFromString:number= (str as unknown) as number;
const castFromBoolean:boolean = (bool as unknown) as boolean;
console.log(castFromString)
console.log(castFromBoolean)
```

**4. Khẳng định kiểu**

Việc chuyển đổi kiểu cần được cẩn trọng xem xét vì bạn có thể chuyển đổi kiểu của mọi biến sang bất kỳ kiểu nào, dẫn đến giá trị có thể không đồng nhất với hành vi của kiểu dữ liệu mới. Một trường hợp cụ thể là **type assertion (khẳng định kiểu)**. Khẳng định kiểu được sử dụng để thông báo cho TypeScript biết kiểu dữ liệu của một đối tượng.

```ts
interface YourType {
  m1: string;
}

let v1 = {m1: "ValueOfM1"} as YourType;
console.log(v1);
```

Ví dụ: nếu bạn có một interface yêu cầu nhiều trường và bạn chuyển kiểu của một đối tượng rỗng thành interface đó, code sẽ biên dịch ngay cả khi đối tượng không có thành viên.

```ts
interface IMyType {
  m1: string;
  m2: number;
}

let myVariable = {} as IMyType; //
```

### 10. Kiểu unknown
[:arrow_up: Mục lục](#mục-lục)

Kiểu `unknown` có một phần giống một kiểu dữ liệu cụ thể và một phần giống kiểu `any` cho phép **biểu diễn mọi kiểu dữ liệu**. Khai báo một biến với kiểu `unknown` cho phép ta **thiết lập nhiều kiểu dữ liệu** đồng thời **ngăn chặn việc truy cập không mong muốn** vào các trường thuộc tính hoặc giá trị của kiểu đó.

Hiểu đơn giản: Nó tương tự như kiểu `any`, nhưng an toàn hơn vì bạn không thể trực tiếp thực hiện các thao tác trên một giá trị có kiểu `unknown` **mà không kiểm tra kiểu của nó trước**.

Đoạn code sau đây cho thấy một biến với kiểu `any` có thể được gán một chuỗi và sau đó được sử dụng với một hàm kiểu `string`. Sau đó, biến được gán cho một giá trị là `number` mà không có hàm `substr`. Tuy nhiên, TypeScript không phát hiện được việc gọi một hàm không tồn tại.

```ts
let variable1: any;
variable1 = "It is a string";
console.log(variable1.substr(0,2)) // Output "it"
variable1 = 1;
console.log(variable1.substr(0,2)) // Crash
```

Việc thay đổi kiểu từ `any` thành `unknown` thông báo cho TypeScript biết rằng kiểu đó có thể nhận bất kỳ giá trị nào nhưng phải sử dụng cẩn thận vì nó không cho phép gọi hàm.

```ts
let variable2: unknown;
variable2 = "It is a string";
console.log(variable2.substr(0,2)) // Does not compile here
variable2 = 1;
console.log(variable2.substr(0,2)) // Does not compile here
```

- **Sử dụng `unknown` với kiểm tra kiểu**

Trước khi thực hiện bất kỳ thao tác nào trên giá trị có kiểu `unknown`, bạn phải kiểm tra kiểu của nó

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase()); // "HELLO"
}

value = 42;

if (typeof value === "number") {
    console.log(value.toFixed(2)); // "42.00"
}
```

- **Sử dụng `unknown` với các hàm**

Khi làm việc với các hàm, bạn có thể sử dụng kiểu `unknown` cho các tham số mà bạn không biết trước kiểu của chúng.

```ts
function printValue(value: unknown): void {
    if (typeof value === "string") {
        console.log(`String value: ${value}`);
    } else if (typeof value === "number") {
        console.log(`Number value: ${value}`);
    } else {
        console.log("Unknown type");
    }
}

printValue("Hello"); // Output: String value: Hello
printValue(42);      // Output: Number value: 42
printValue(true);    // Output: Unknown type
```

### 11. Sử dụng kiểu hằng để thu hẹp kiểu nguyên thủy
[:arrow_up: Mục lục](#mục-lục)

Kiểu hằng (**literal type**) cho phép bạn chỉ định một giá trị cụ thể làm kiểu, giúp TypeScript hiểu rõ hơn về giá trị của biến.

_Ví dụ:_

**1. Kiểu hằng chuỗi**

Bạn có thể khai báo biến chỉ nhận một giá trị chuỗi cụ thể.

```ts
let direction: "left" | "right";

direction = "left"; // Đúng
direction = "right"; // Đúng
// direction = "up"; // Sai, vì không khớp với kiểu hằng đã định nghĩa
```

Hằng ký tự chuỗi có thể được gán mà không cần `type` bằng cách gán một giá trị chuỗi với khai báo `const` hoặc `as const`.

```ts
const stringLit1 = "oneValueOnly";
let stringLit2 = "oneValueOnly" as const
```

**2. Kiểu hằng số**

Tương tự, bạn có thể khai báo biến chỉ nhận một giá trị số cụ thể.

```ts
let count: 0 | 1 | 2;

count = 0; // Đúng
count = 1; // Đúng
count = 2; // Đúng
// count = 3; // Sai, vì không khớp với kiểu hằng đã định nghĩa
```

**3. Kiểu hằng boolean**

Bạn có thể sử dụng kiểu hằng `boolean` để giới hạn biến chỉ nhận giá trị `true` hoặc `false`.

```ts
let isActive: true | false;

isActive = true; // Đúng
isActive = false; // Đúng
// isActive = 1; // Sai, vì không phải là kiểu boolean
```

**4. Sử dụng kiểu hằng để thu hẹp kiểu**

Kiểu hằng rất hữu ích trong việc thu hẹp kiểu của một biến, đặc biệt khi làm việc với **union types**.

```ts
type Status = "success" | "error" | "loading";

function handleStatus(status: Status) {
    if (status === "success") {
        console.log("Operation was successful!");
    } else if (status === "error") {
        console.log("There was an error.");
    } else if (status === "loading") {
        console.log("Loading...");
    }
}

// Sử dụng hàm
handleStatus("success"); // Output: Operation was successful!
handleStatus("error");   // Output: There was an error.
handleStatus("loading"); // Output: Loading...
// handleStatus("completed"); // Sai, vì không khớp với kiểu hằng Status
```

**5. Kết hợp kiểu hằng với kiểu nguyên thủy**

Bạn có thể kết hợp kiểu hằng với các kiểu nguyên thủy khác để tạo các kiểu phức tạp hơn.

```ts
type Response = {
    status: "success" | "error";
    code: 200 | 400 | 500;
    message: string;
};

const response: Response = {
    status: "success",
    code: 200,
    message: "Request succeeded"
};

function handleResponse(response: Response) {
    if (response.status === "success" && response.code === 200) {
        console.log(response.message); // Output: Request succeeded
    } else if (response.status === "error") {
        console.log(`Error: ${response.message}`);
    }
}

handleResponse(response);
```

### 12. Non-Null Assertion Operator
[:arrow_up: Mục lục](#mục-lục)

Non-Null Assertion Operator (`!`) được sử dụng để khẳng định rằng một biểu thức không phải là `null` hoặc `undefined`. Điều này cho phép bạn bỏ qua kiểm tra `null` và `undefined` và báo cho TypeScript rằng **giá trị sẽ luôn tồn tại**.

Cú pháp:

```ts
let value: string | null;
value!.toUpperCase();
```

_Ví dụ:_

```ts
function processString(input: string | null) {
    // Khẳng định rằng input không phải là null
    let nonNullInput = input!;
    console.log(nonNullInput.toUpperCase());
}

processString("Hello"); // Output: "HELLO"
processString(null);    // Lỗi runtime: Cannot read property 'toUpperCase' of null
```

Trong ví dụ này, `input!` khẳng định rằng `input` không phải là `null`. Điều này giúp tránh lỗi biên dịch, nhưng bạn cần chắc chắn rằng giá trị thực sự không phải là `null` tại thời điểm chạy, nếu không sẽ gây ra lỗi runtime

### 13. Kiểu Symbol và Unique Symbol
[:arrow_up: Mục lục](#mục-lục)

`symbol` là một kiểu nguyên thủy cho phép bạn tạo ra các giá trị độc nhất, điều này rất hữu ích khi bạn cần các khóa độc nhất cho các thuộc tính của đối tượng hoặc khi bạn cần các hằng số duy nhất.

```ts
let sym1 = Symbol();
let sym2 = Symbol("description");

console.log(typeof sym1); // Output: "symbol"
console.log(sym1 === sym2); // Output: false, mỗi symbol là duy nhất

// Sử dụng symbol làm khóa của đối tượng
const obj = {
    [sym1]: "value1",
    [sym2]: "value2"
};

console.log(obj[sym1]); // Output: "value1"
console.log(obj[sym2]); // Output: "value2"
```

**Hằng số khác symbol ở chỗ symbol là duy nhất**. Khi sử dụng hằng số chuỗi, **ai đó có thể truyền một chuỗi có giá trị giống với hằng số và chuỗi đó sẽ được chấp nhận như là một giá trị hợp lệ.** Tuy nhiên, khi sử dụng symbol hằng số, chỉ có cùng một symbol hằng số mới có giá trị bằng nhau. **Với symbol, ta không thể ép kiểu nó thành chuỗi**. Điều này có nghĩa là bạn không thể thêm một chuỗi vào symbol và mong đợi nó trở thành chuỗi.

```ts
let v1 = "value1";
let v2 = "value1";
if (v1 === v2) {
    console.log("Equal when string"); // This will print
}

let s1 = Symbol("value1");
let s2 = Symbol("value1");
if (s1 === s2) {
    console.log("Equal when symbol"); // This will not print, they are not equal
}
```

`unique symbol` là một phần mở rộng của `symbol` trong TypeScript, được sử dụng để đảm bảo rằng một giá trị `symbol` là duy nhất và có thể được dùng như một kiểu hằng số.

```ts
const sym3: unique symbol = Symbol();
const sym4: unique symbol = Symbol();

// sym3 và sym4 là hai giá trị duy nhất và không thể gán cho nhau
// let sym5: unique symbol = sym3; // Error: Type 'unique symbol' is not assignable to type 'unique symbol'

interface Foo {
    [sym3]: string;
}

// Tạo một đối tượng tuân theo giao diện Foo
const foo: Foo = {
    [sym3]: "Hello"
};

console.log(foo[sym3]); // Output: "Hello"
```

- **Ứng dụng của symbol và unique symbol**

**Khóa thuộc tính độc nhất:** Sử dụng `symbol` để tránh xung đột tên thuộc tính trong các đối tượng lớn hoặc khi làm việc với các thư viện.

**Định nghĩa hằng số duy nhất:** Sử dụng `unique symbol` để định nghĩa các hằng số duy nhất và đảm bảo tính toàn vẹn kiểu.

_Ví dụ ứng dụng thực tế:_

Sử dụng `symbol` làm khóa thuộc tính trong đối tượng:

```ts
const uniqueKey = Symbol("uniqueKey");

const myObject = {
    [uniqueKey]: "This is a unique value"
};

console.log(myObject[uniqueKey]); // Output: "This is a unique value"
```

Sử dụng `unique symbol` trong giao diện:

```ts
const UNIQUE_ID: unique symbol = Symbol("uniqueId");

interface Person {
    name: string;
    [UNIQUE_ID]: number;
}

const person: Person = {
    name: "Alice",
    [UNIQUE_ID]: 123
};

console.log(person[UNIQUE_ID]); // Output: 123
```

## II. Enum
[:arrow_up: Mục lục](#mục-lục)

`enum` (viết tắt của "**enumeration**") được sử dụng để định nghĩa một **tập hợp các hằng số có tên**, giúp mã dễ đọc và bảo trì hơn.

### 1. Enum có giá trị và Enum không có giá trị
[:arrow_up: Mục lục](#mục-lục)

- **Enum có giá trị:**

`enum` có thể có kiểu string. Trong trường hợp này, bạn phải cung cấp giá trị cho mỗi thành viên mà không có ngoại lệ nào.

```ts
enum MyStringEnum {
    ChoiceA = "A",
    ChoiceB = "B",
}
```

Nếu mỗi thành viên của `enum` đã được định nghĩa thì bạn có thể sử dụng kiểu enum hỗn hợp (các thành viên có kiểu dữ liệu khác nhau). 

Ví dụ: enum có một thành viên là số nguyên và một thành viên là chuỗi. Tuy nhiên, bạn không nên kết hợp các kiểu khác nhau trong enum vì nó có thể gây nhầm lẫn.

```ts
enum MyStringAndNumberEnum {    
    ChoiceA, // 0    
    ChoiceB = "B",    
    ChoiceC = 100
}
```

- **Enum không có giá trị:**

`enum` là một kiểu dữ liệu dùng để giới hạn và định nghĩa một nhóm hằng số. 

**Khi khai báo enum**, ta phải cung cấp tên cho nó và chỉ định các giá trị được chấp nhận trong `enum`. Sau đó, bạn có thể sử dụng `enum` như một kiểu dữ liệu. 

Để sử dụng `enum`, ta sẽ gọi tên của nó, theo sau là dấu chấm `.` và một giá trị tiềm năng từ danh sách các giá trị đã được định nghĩa.

```ts
enum MyEnum {
    ChoiceA,
    ChoiceB,
    ChoiceC,
}
let x: MyEnum = MyEnum.ChoiceA;
console.log(x);
```

Các giá trị được xác định là các hằng số **bắt đầu từ 0** cho thành viên đầu tiên và **tăng lên một đơn vị cho mỗi thành viên tiếp theo cho đến khi kết thúc danh sách**. Các giá trị enum trong trường hợp này được **xác định một cách ngầm định**. Ngoài ra, ta có thể chỉ định một giá trị cụ thể cho mỗi thành viên bằng cách gán một số nguyên. Trong trường hợp đó, giá trị enum được xác định một cách tường minh.

```ts
enum MyEnum {
    ChoiceA,
    ChoiceB,
    ChoiceC,
}
enum MyEnum2 {
    ChoiceA, // 0
    ChoiceB = 100, // 100
    ChoiceC, // 101
    ChoiceD = MyEnum.ChoiceC, // 2
}
console.log(MyEnum2.ChoiceA);
console.log(MyEnum2.ChoiceB);
console.log(MyEnum2.ChoiceC);
console.log(MyEnum2.ChoiceD);
```

Giá trị của các thành viên `enum` có thể **được thiết lập trực tiếp hoặc thông qua tính toán**. Có hai loại tính toán:

1. Giá trị hằng số: Các giá trị được cung cấp bởi `enum` khác hoặc giá trị được tính toán bằng phép cộng, trừ, nhân, chia, toán tử bitwise, chia lấy phần dư, toán tử "or," "and," "xor" hoặc toán tử đảo ngược (~). 

2. Giá trị thuần tính toán: Các giá trị được tính toán hoàn toàn bằng hàm.

### 2. Truy cập giá trị Enum
[:arrow_up: Mục lục](#mục-lục)

**TypeScript ánh xạ đối tượng để cho phép truy cập giá trị**

Một biến được gán với `enum` có giá trị number cho phép bạn truy cập tên của `enum` từ số nguyên đó. Tuy nhiên, với `enum` có giá trị chuỗi, bạn không thể làm như vậy. Điều này có nghĩa bạn có thể sử dụng tên `enum` theo sau là tên của hằng số để lấy giá trị. Ngoài ra, với một số, bạn cũng có thể sử dụng giá trị để trả về tên.

Ví dụ: một enum có tên là `Orientation` với các giá trị `East`, `West`, `North`, `South` có thể sử dụng `Orientation.East` để nhận giá trị `0` hoặc sử dụng `Orientation[0]` để nhận giá trị `East`. Nó hoạt động bởi vì TypeScript tạo ra một đối tượng `map` cho phép bạn truy cập bằng cách sử dụng tên của hằng số hoặc giá trị của nó.

Dưới đây là code được tạo ra từ `enum` orientation:

```ts
enum Orientation {
    East,
    West,
    North,
    South,
}
let directionInNumber = Orientation.East; // Access with the Enum
let directionInString = Orientation[0];  // Access the Enum string from number
console.log(directionInNumber);
console.log(directionInString);
```

Như đã đề cập, với `enum` có giá trị là chuỗi, ta không thể sử dụng cách truy cập giống như với enum có giá trị là số. Đoạn code sau không biên dịch được vì các dòng **8** và **9** cố gắng truy cập `enum` theo cách không chính xác.

```ts
enum OrientationString {
    East = "E",
    West = "W",
    North = "N",
    South = "S",
}
let directionInNumber = OrientationString.East; // Access with the Enum
let directionInString = OrientationString[0];  // Access the Enum string from number
let directionInString2 = OrientationString["E"];  // Access the Enum string from number
console.log(directionInNumber);
console.log(directionInString);
console.log(directionInString2);
```

**Thiết lập enum là const để tăng tốc độ xử lý**

`enum` có thể được **thiết lập là hằng số** để tăng tốc độ thực thi. Điều này có nghĩa là trong quá trình thực thi, thay vì tham chiếu đến các hàm được TypeScript tạo ra khi chuyển đổi code sang JavaScript, chương trình sẽ sử dụng giá trị trực tiếp.

Ví dụ: khi sử dụng `enum` không phải là hằng số, giá trị được gán cho một biến `direction` với `Orientation.East` sẽ bằng một hàm tìm kiếm giá trị trong `map` để lấy giá trị tương ứng. Tuy nhiên, khi sử dụng `enum` là hằng số, giá trị trong mã nguồn đã chuyển đổi sẽ được gán trực tiếp là `0` - không cần thêm hàm hoặc `map` nữa.

**Hợp nhất các giá trị**

Giống như `interface`, `enum` có thể được định nghĩa ở nhiều nơi. Bạn có thể bắt đầu định nghĩa enum và sau đó định nghĩa lại nó một lần nữa. Cuối cùng, tất cả các giá trị sẽ được hợp nhất thành một `enum` duy nhất. 

Tuy nhiên, việc định nghĩa một `enum` nhiều lần có một điều kiện là: giá trị đầu tiên của `enum` phải được định nghĩa rõ ràng. Nếu một giá trị rõ ràng được định nghĩa hai lần, chỉ giá trị cuối cùng sẽ được liên kết với `enum` khi sử dụng giá trị đảo ngược để tìm kiếm một `enum`. Liệt kê cùng một giá trị hai lần không phải lúc nào cũng là kết quả của việc định nghĩa `enum` nhiều lần; thay vào đó, một định nghĩa `enum` đơn lẻ cũng có thể có nhiều mục có cùng giá trị.

```ts
enum EnumA {
    ChoiceA,
}
enum EnumA {
    ChoiceB = 1,
}

let variable1: EnumA = EnumA.ChoiceA;
console.log(variable1);
variable1 = EnumA.ChoiceB;
console.log(variable1);
```

**Thêm hàm**

Một tính năng khác của `enum` là gắn các hàm có thể được truy cập tĩnh thông qua `enum`. Sử dụng `enum` kết hợp với hàm cho phép bạn sử dụng `Orientation.East` cũng như `Orientation.yourFunction`. Để định nghĩa một hàm trong `enum`, bạn cần sử dụng một **không gian tên cùng với một hàm được xuất**.

```ts
enum Orientation {
    East,
    West,
    North,
    South,
}
namespace Orientation {
    export function yourFunction() {
        console.log("I am in a Enum");
    }
}
Orientation.yourFunction();
```

## III. Kiểu Generic
[:arrow_up: Mục lục](#mục-lục)

### 1. Kiểu Generic
[:arrow_up: Mục lục](#mục-lục)

Kiểu `generic` giúp tăng **khả năng tái sử dụng của mã nguồn bằng cách tham số hóa một kiểu bằng kiểu khác**.

```ts
// Generic Component that has properties that can change depending of the implementation
interface MyComponent<TProps> {
  name: string;
  id: number;
  props: TProps;
}

// First property that has a string
interface Props1 {
  color: string;
}

// Second property that has a number
interface Props2 {
  size: number;
}

// First component that has color in property because it is generic with Props1
const component1: MyComponent<Props1> = {
  name: "My Component One",
  id: 1,
  props: { color: "red" }
};

// Second component that has size in property because it is generic with Props2
const component2: MyComponent<Props2> = {
  name: "My Component Two",
  id: 2,
  props: { size: 100 }
};

console.log(component1);
console.log(component2);
```

- **Generic và danh sách**

Một trong những trường hợp **sử dụng generic phổ biến là tạo danh sách**. Với kiểu generic, bạn có thể định nghĩa một biến là một **danh sách chứa các phần tử có cùng kiểu dữ liệu**, ví dụ: danh sách số

Trong JavaScript và trước khi TypeScript triển khai khái niệm Generic, bạn có thể sử dụng kiểu lỏng lẻo `any` để thực hiện các tác vụ tương tự như Generic:

```ts
let list1: number[] = [1, 2, 3];
list1.push(4); // Can only push number
console.log(list1);

let list2: any[] = [1, 2, 3];
list2.push("Here_is_a_string");
console.log(list2); // You can push any type of value
```

Nhược điểm của `any` là bạn **không thể ràng buộc kiểu được truyền vào lớp** để có một định nghĩa tối thiểu và bạn **sẽ phải chuyển đổi lại kiểu sau khi dữ liệu được trích xuất từ lớp**.

- **Generic khác gì `any`**

Generic cho phép bạn **làm việc với nhiều kiểu dữ liệu** một cách an toàn và linh hoạt trong thời gian biên dịch.

`any` **loại bỏ sự kiểm tra kiểu dữ liệu** và **cho phép biến chứa bất kỳ giá trị nào**, không quan tâm đến kiểu dữ liệu của nó, nhưng đồng thời không đảm bảo tính đúng đắn và an toàn trong mã.

| | Generic | any |
| :--: | :--: | :--: |
| Kiểm tra kiểu dữ liệu | Generic cho phép bạn xác định và sử dụng các kiểu dữ liệu cụ thể một cách an toàn và linh hoạt trong thời gian biên dịch | `any` loại bỏ sự kiểm tra kiểu dữ liệu tại thời điểm biên dịch, không đảm bảo tính đúng đắn và an toàn trong mã. |
| Tính tái sử dụng | Generic cho phép bạn viết mã một lần và tái sử dụng với nhiều kiểu dữ liệu khác nhau một cách an toàn | `any` không đảm bảo tính tái sử dụng vì nó loại bỏ sự kiểm tra kiểu dữ liệu và có thể dẫn đến lỗi runtime nếu sử dụng không đúng cách. |

### 2. Ràng buộc kiểu Generic
[:arrow_up: Mục lục](#mục-lục)

_Ví dụ:_

```ts
interface MyType { // Type that has a single field
    id: number;
}
interface AnotherType extends MyType {} // Another type that has all the field from MyType
function genericFunction<T extends MyType>(p1: T) {} // A function that take a generic type that must at least have the fields of MyType

const arg: AnotherType = { id: 1 }; // Create an object that is not "MyType"
genericFunction(arg); // This is legit  because AnotherType extend MyType, thus has all the required fields

genericFunction({ id: 123 }); // This is legit as well since id is the only required field from MyType

// genericFunction("doesn't compile") // Doest not compile, not legit.
```

**Dòng 12** đã được chuyển thành comment. Đối số được truyền vào không có thành viên id: nó là một chuỗi. Do đó, TypeScript nhận ra rằng kiểu của đối số này không hợp lệ và gây ra **lỗi** trong quá trình biên dịch.

Kiểu generic **giúp tránh gặp lỗi khi chuyển đổi kiểu và tránh việc truy cập vào các thành viên không tồn tại**. Nó cũng cho phép truy cập vào các thành viên đã được định nghĩa bên trong hàm generic.

```ts
interface MyType {
    id: number; // id is available
    id2: number;
}
interface AnotherType {
    id: number; // id is available
}
function genericFunction<T extends AnotherType>(p1: T) {  // Any type that has all fields from AnotherType
    console.log("Inside generic:" + p1.id);
}

genericFunction({ id: 123, id2: 99999 }); // This is legit because we have id (and more)
```

_Kết quả_: `Inside generic:123`


## IV. Kiểu dẫn xuất
[:arrow_up: Mục lục](#mục-lục)

- **Kiểu dẫn xuất là gì?**

Kiểu dẫn xuất (mapped type) cho phép **tạo một kiểu dữ liệu mới từ kiểu hiện có**. Thuật ngữ map (ánh xạ) có nghĩa là trỏ các thành viên hiện có của một kiểu tới một kiểu mới thông qua một logic tùy chỉnh dành riêng cho triển khai của đối tượng ánh xạ.

Một ví dụ điển hình là tạo một interface lưu trữ tất cả các thành viên cùng tên, nhưng các thành viên là tùy chọn hoặc chỉ đọc.

### 1. Kiểu Readonly
[:arrow_up: Mục lục](#mục-lục)

Kiểu `Readonly` bảo vệ dữ liệu **bằng cách ngăn không cho phép thay đổi các thuộc tính** của một đối tượng sau khi nó được khởi tạo

_Ví dụ:_

Khi ta chưa sử dụng kiểu `Readonly`

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
```

```ts
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};
```

Với đối tượng này, bạn có thể dễ dàng thay đổi các thuộc tính của nó:

```ts
user.name = "Bob"; // Điều này hợp lệ và sẽ thay đổi name thành "Bob"
user.email = "bob@example.com"; // Điều này cũng hợp lệ và sẽ thay đổi email
```

Bây giờ, nếu bạn muốn đảm bảo rằng đối tượng `user` không bị thay đổi sau khi được khởi tạo, bạn có thể sử dụng kiểu `Readonly`:

```ts
const readonlyUser: Readonly<User> = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};
```

```ts
readonlyUser.name = "Bob"; // Lỗi: Cannot assign to 'name' because it is a read-only property.
readonlyUser.email = "bob@example.com"; // Lỗi: Cannot assign to 'email' because it is a read-only property.
```

### 2. Kiểu Partial
[:arrow_up: Mục lục](#mục-lục)

Kiểu `Partial` giúp **tạo ra các kiểu mới từ các kiểu hiện có**, nhưng với tất cả các thuộc tính là tùy chọn (optional).

_Ví dụ:_

Giả sử bạn có một interface `User` như sau:

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
```

Thông thường, khi tạo một đối tượng kiểu `User`, bạn phải cung cấp giá trị cho tất cả các thuộc tính:

```ts
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};
```

Tuy nhiên, nếu bạn muốn tạo một đối tượng với chỉ một số thuộc tính của `User`, bạn có thể sử dụng kiểu `Partial`:

```ts
const partialUser: Partial<User> = {
  name: "Bob"
};
```

Trong ví dụ này, `partialUser` chỉ có thuộc tính `name` và bỏ qua các thuộc tính khác (`id` và `email`). Điều này hợp lệ vì tất cả các thuộc tính của kiểu `Partial<User>` đều là **tùy chọn**.

### 3. Kiểu Nullable
[:arrow_up: Mục lục](#mục-lục)

Kiểu `Nullable` dùng để tạo kiểu mà các thuộc tính có thể nhận giá trị `null` hoặc `undefined` (muốn một số thuộc tính của đối tượng có thể không có giá trị).

Tạo kiểu `Nullable` bằng cách sử dụng Union Types (`|`) để kết hợp kiểu gốc với `null` và/hoặc `undefined`

_Ví dụ 1:_

Bạn có thể tạo một kiểu mà các thuộc tính có thể là giá trị **gốc** hoặc `null`:

```ts
interface User {
  id: number;
  name: string | null;
  email: string | null;
}
```

Trong ví dụ này, cả `name` và `email` có thể nhận giá trị `null`:

```ts
const user: User = {
  id: 1,
  name: null,
  email: null
};
```

_Ví dụ 2:_ **Tạo kiểu Nullable cho toàn bộ đối tượng**

Nếu bạn muốn tạo kiểu `Nullable` cho toàn bộ đối tượng, bạn có thể viết một utility type để làm điều này:

```ts
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

// Sử dụng kiểu Nullable
interface User {
  id: number;
  name: string;
  email: string;
}

type NullableUser = Nullable<User>;

const user: NullableUser = {
  id: 1,
  name: null,
  email: null
};
```

### 4. Kiểu Pick
[:arrow_up: Mục lục](#mục-lục)

Kiểu `Pick` cho phép bạn chọn một số trường thuộc tính cụ thể từ kiểu để tạo một kiểu động.

_Ví dụ:_

Giả sử bạn có một interface `User` như sau:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}
```

Nếu bạn chỉ muốn làm việc với các thuộc tính `id` và `name` của `User`, bạn có thể sử dụng `Pick` để tạo ra một kiểu mới:

```ts
type UserIdAndName = Pick<User, 'id' | 'name'>;

const user: UserIdAndName = {
  id: 1,
  name: "Alice"
};
```

Trong ví dụ này, kiểu `UserIdAndName` chỉ bao gồm hai thuộc tính `id` và `name` từ kiểu `User`.

_Ví dụ 2:_

```ts
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserContactInfo = Pick<User, 'email' | 'name'>;

function printContactInfo(user: UserContactInfo): void {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
}

const user: UserContactInfo = {
  name: "Bob",
  email: "bob@example.com"
};

printContactInfo(user);
```

Trong ví dụ này, hàm `printContactInfo` chỉ quan tâm đến các thuộc tính `name` và `email` của đối tượng `User`. Việc sử dụng `Pick` giúp đảm bảo rằng chỉ những thuộc tính cần thiết được truyền vào hàm.

### 5. Kiểu Omit
[:arrow_up: Mục lục](#mục-lục)

Kiểu `Omit` là phiên bản đảo ngược của `Pick`. `Pick` chọn một thành viên của kiểu, còn `Omit` lấy tất cả các thành viên của kiểu trừ thành viên được chọn.

_Ví dụ:_

Giả sử bạn có một interface `User` như sau:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}
```

Nếu bạn muốn làm việc với tất cả các thuộc tính của `User` ngoại trừ `email` và `age`, bạn có thể sử dụng `Omit` để tạo ra một kiểu mới:

```ts
type UserWithoutEmailAndAge = Omit<User, 'email' | 'age'>;

const user: UserWithoutEmailAndAge = {
  id: 1,
  name: "Alice"
};
```

Trong ví dụ này, kiểu `UserWithoutEmailAndAge` bao gồm tất cả các thuộc tính của `User` **ngoại trừ** `email` và `age`.

### 6. Kiểu Record
[:arrow_up: Mục lục](#mục-lục)

Kiểu `Record` cho phép tạo ra một **đối tượng** có các cặp **key-value** mà các **key đều có cùng một kiểu** và các **value đều có cùng một kiểu**

_Ví dụ:_

Giả sử bạn muốn tạo một đối tượng để lưu trữ các thông tin về một nhóm người dùng, với mỗi người dùng được xác định bằng một ID duy nhất, và thông tin của họ bao gồm tên và email. Bạn có thể sử dụng `Record` để định nghĩa kiểu này.

```ts
type User = {
  name: string;
  email: string;
};

type UserRecord = Record<number, User>;

const users: UserRecord = {
  1: { name: "Alice", email: "alice@example.com" },
  2: { name: "Bob", email: "bob@example.com" },
  3: { name: "Charlie", email: "charlie@example.com" }
};
```

Trong ví dụ này, `UserRecord` là một `Record` có `key` là kiểu `number` và `value` là kiểu `User`. Điều này cho phép bạn tạo ra một đối tượng `users` mà các `key` là các **số nguyên** và các `value` là các **đối tượng** `User`.

### 7. Kiểu Extract
[:arrow_up: Mục lục](#mục-lục)

Kiểu `Extract` là một utility type dùng để lấy ra các kiểu con từ một union type. Cụ thể, `Extract<T, U>` sẽ **tạo ra một kiểu mới** **bao gồm tất cả** các thành viên của `T` mà cũng **tồn tại** trong `U`. Điều này rất hữu ích khi bạn muốn **lọc một union type** để chỉ **giữ lại các kiểu nhất định.**

_Ví dụ 1:_

Giả sử bạn có một union type `Animal` như sau:

```ts
type Animal = 'dog' | 'cat' | 'bird' | 'fish';
```

Nếu bạn muốn tạo một kiểu chỉ bao gồm `dog` và `cat`, bạn có thể sử dụng `Extract`:

```ts
type Mammal = Extract<Animal, 'dog' | 'cat'>;
```

Trong ví dụ này, kiểu `Mammal` sẽ chỉ bao gồm `'dog' | 'cat'`.

_Ví dụ 2:_

```ts
interface Dog {
  type: 'dog';
  breed: string;
}

interface Cat {
  type: 'cat';
  color: string;
}

interface Bird {
  type: 'bird';
  canFly: boolean;
}

type Pet = Dog | Cat | Bird;
```

Nếu bạn muốn tạo một kiểu chỉ bao gồm `Dog` và `Cat`, bạn có thể sử dụng `Extract` dựa trên thuộc tính `type`:

```ts
type Mammal = Extract<Pet, { type: 'dog' | 'cat' }>;

const pet1: Mammal = { type: 'dog', breed: 'Labrador' }; // Hợp lệ
const pet2: Mammal = { type: 'cat', color: 'black' };    // Hợp lệ
const pet3: Mammal = { type: 'bird', canFly: true };     // Lỗi: 'bird' không thuộc 'dog' | 'cat'
```

Trong ví dụ này, kiểu `Mammal` chỉ bao gồm các đối tượng `Dog` và `Cat`.

_Ví dụ 3:_

```ts
type User = {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
};

type AdminOrEditor = Extract<User['role'], 'admin' | 'editor'>;

const role1: AdminOrEditor = 'admin';  // Hợp lệ
const role2: AdminOrEditor = 'editor'; // Hợp lệ
const role3: AdminOrEditor = 'viewer'; // Lỗi: 'viewer' không thuộc 'admin' | 'editor'
```

Trong ví dụ này, kiểu `AdminOrEditor` chỉ bao gồm `'admin' và 'editor'`, dựa trên thuộc tính `role` của kiểu `User`.

### 8. Kiểu Exclude
[:arrow_up: Mục lục](#mục-lục)

Kiểu `Exclude` là một utility type dùng để **tạo ra một kiểu mới** bằng cách **loại bỏ** các thành viên của một union type mà **tồn tại** trong một kiểu khác. Cụ thể, `Exclude<T, U>` sẽ **tạo ra một kiểu mới** bao gồm **tất cả** các thành viên của `T` mà **không tồn tại** trong `U`

_Ví dụ 1:_

```ts
type Animal = 'dog' | 'cat' | 'bird' | 'fish';
```

Nếu bạn muốn tạo một kiểu loại bỏ `bird` và `fish`, bạn có thể sử dụng `Exclude`:

```ts
type LandAnimal = Exclude<Animal, 'bird' | 'fish'>;
```

Trong ví dụ này, kiểu `LandAnimal` sẽ bao gồm `'dog' | 'cat'`.

_Ví dụ 2:_

```ts
interface Dog {
  type: 'dog';
  breed: string;
}

interface Cat {
  type: 'cat';
  color: string;
}

interface Bird {
  type: 'bird';
  canFly: boolean;
}

type Pet = Dog | Cat | Bird;
```

Nếu bạn muốn tạo một kiểu loại bỏ `Bird`, bạn có thể sử dụng `Exclude`:

```ts
type Mammal = Exclude<Pet, { type: 'bird' }>;

const pet1: Mammal = { type: 'dog', breed: 'Labrador' }; // Hợp lệ
const pet2: Mammal = { type: 'cat', color: 'black' };    // Hợp lệ
const pet3: Mammal = { type: 'bird', canFly: true };     // Lỗi: 'bird' đã bị loại bỏ
```

Trong ví dụ này, kiểu `Mammal` sẽ bao gồm các đối tượng `Dog` và `Cat`, nhưng không bao gồm `Bird`.

_Ví dụ 3:_

```ts
type UserRole = 'admin' | 'editor' | 'viewer' | 'guest';

type NonGuestRole = Exclude<UserRole, 'guest'>;

const role1: NonGuestRole = 'admin';  // Hợp lệ
const role2: NonGuestRole = 'editor'; // Hợp lệ
const role3: NonGuestRole = 'viewer'; // Hợp lệ
const role4: NonGuestRole = 'guest';  // Lỗi: 'guest' đã bị loại bỏ
```

Trong ví dụ này, kiểu `NonGuestRole` sẽ bao gồm tất cả các thành viên của `UserRole` **ngoại trừ** `'guest'`

### 9. Kiểu ReturnType
[:arrow_up: Mục lục](#mục-lục)

Kiểu `ReturnType` là một utility type được sử dụng để **trích xuất kiểu** của **giá trị trả về từ một hàm**. Điều này có nghĩa là `ReturnType<T>` sẽ lấy kiểu của giá trị mà **hàm** `T` trả về.

_Ví dụ 1:_

```ts
function greet(): string {
  return "Hello, TypeScript!";
}

type GreetReturnType = ReturnType<typeof greet>;

// GreetReturnType sẽ là kiểu string, vì hàm greet trả về một chuỗi (string)
```

Trong ví dụ này:

- Hàm `greet` trả về một chuỗi (`string`).
- `ReturnType<typeof greet>` sử dụng `typeof greet` để **lấy kiểu** của hàm `greet`.
- `GreetReturnType` sẽ là `string`, vì vậy nó tương đương với `type GreetReturnType = string;`

_Ví dụ 2:_

```ts
function processNumber(num: number): { original: number; squared: number } {
  return {
    original: num,
    squared: num * num
  };
}

type ProcessNumberReturnType = ReturnType<typeof processNumber>;

// ProcessNumberReturnType sẽ là kiểu { original: number; squared: number; }
```

Trong ví dụ này:

- Hàm `processNumber` nhận vào một số nguyên (`num`) và trả về một đối tượng với hai thuộc tính `original` (số nguyên ban đầu) và `squared` (bình phương của số nguyên đó).
- `ReturnType<typeof processNumber>` trả về kiểu `{ original: number; squared: number; }`.
- `ProcessNumberReturnType` sẽ là kiểu `{ original: number; squared: number; }`, do đó tương đương với `type ProcessNumberReturnType = { original: number; squared: number; };`.

### 10. Kiểu dẫn xuất tùy chỉnh
[:arrow_up: Mục lục](#mục-lục)

_Ví dụ 1:_ **Dẫn xuất tùy chỉnh từ một Union Type**

Giả sử bạn có một Union Type đại diện cho các loại hình học đơn giản như sau:

```ts
type Shape = "circle" | "square" | "rectangle";
```

Bạn muốn tạo ra các kiểu dữ liệu phức tạp hơn dựa trên loại hình học này, bạn có thể sử dụng Union Type để định nghĩa các kiểu dữ liệu mới:

```ts
type Circle = { type: "circle"; radius: number };
type Square = { type: "square"; sideLength: number };
type Rectangle = { type: "rectangle"; width: number; height: number };

type ComplexShape = Circle | Square | Rectangle;
```

Trong ví dụ này:

- `Circle`, `Square`, và `Rectangle` là các kiểu dữ liệu được định nghĩa tùy chỉnh dựa trên `Shape`.
- `ComplexShape` là một Union Type mới chứa các kiểu dữ liệu phức tạp hơn từ các loại hình học đơn giản.

_Ví dụ 2:_ **Dẫn xuất tùy chỉnh từ một kiểu dữ liệu hiện có**

Nếu bạn có một kiểu dữ liệu như sau:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}
```

Bạn có thể tạo ra các kiểu dữ liệu dẫn xuất tùy chỉnh bằng cách sử dụng Intersection Types hoặc các kỹ thuật khác:

**Tạo ra một kiểu User có quyền quản trị (Admin)**

```ts
type AdminUser = User & { isAdmin: true };
```

**Tạo ra một kiểu User không có quyền quản trị (Non-admin)**

```ts
type NonAdminUser = Omit<User, 'isAdmin'> & { isAdmin: false };
```

Trong ví dụ này:

- `AdminUser` là một Intersection Type của `User` và `{ isAdmin: true }`.
- `NonAdminUser` sử dụng `Omit` để loại bỏ thuộc tính `isAdmin` từ `User`, sau đó thêm `{ isAdmin: false }`.

_Ví dụ 3:_ **Sử dụng Conditional Types để dẫn xuất tùy chỉnh**

Bạn có thể sử dụng Conditional Types để tạo ra các kiểu dữ liệu dẫn xuất dựa trên điều kiện:

```ts
type IsString<T> = T extends string ? true : false;

type StringTypeCheck = IsString<string>; // true
type NumberTypeCheck = IsString<number>; // false
```

Trong ví dụ này:

- `IsString<T>` kiểm tra xem kiểu `T` có phải là `string` hay không và trả về `true` nếu đúng, ngược lại trả về `false`.

## V. Đối tượng
[:arrow_up: Mục lục](#mục-lục)

### 1. object và Object
[:arrow_up: Mục lục](#mục-lục)

| object | Object |
| :--: | :--: |
| Nó đại diện cho các đối tượng không phải là nguyên thủy như `arrays`, `functions`, `objects`, và `classes`. | Đại diện cho mọi đối tượng |

_Ví dụ:_ Với object

```ts
let obj: object;

obj = {}; // Hợp lệ
obj = [] // Hợp lệ
obj = new Date(); // Hợp lệ
obj = "Hello"; // Lỗi: không phải là đối tượng
```

_Ví dụ:_ Với Object

```
let obj: Object;

obj = {}; // Hợp lệ
obj = []; // Hợp lệ
obj = new Date(); // Hợp lệ
obj = "Hello"; // Hợp lệ: vì mọi đối tượng đều là một thể hiện của Object
```

## VI. Ký hiệu chỉ số
[:arrow_up: Mục lục](#mục-lục)

### 1. Định nghĩa và sử dụng
[:arrow_up: Mục lục](#mục-lục)

"index signature" (ký hiệu chỉ số) là cách để định nghĩa kiểu dữ liệu của các thành phần trong một đối tượng khi chúng có thể được **truy cập** bằng các chỉ mục (**index**) là các **chuỗi** hoặc **số**.

- **Cú pháp của index signature**

Index signature được định nghĩa bằng cách sử dụng `[]` trong khai báo kiểu của một đối tượng. Cú pháp chung như sau:

```ts
{
  [index: type]: returnType;
}
```

Trong đó:

- `index`: Là tên của chỉ mục (`index`), có thể là kiểu `string` hoặc `number`.
- `type`: Là kiểu dữ liệu của chỉ mục (`index`).
- `returnType`: Là kiểu dữ liệu của giá trị được trả về khi truy cập vào đối tượng bằng chỉ mục (`index`).

_Ví dụ 1:_ **Index signature với chỉ mục là số**

```ts
interface NumberDictionary {
  [index: number]: string;
}

let numDict: NumberDictionary = {
  1: 'One',
  2: 'Two',
  3: 'Three',
};

console.log(numDict[2]); // Output: 'Two'
```

Trong ví dụ này:

- `NumberDictionary` là một interface có index signature.
- Chỉ mục (`index`) là số (`number`), và giá trị tương ứng với mỗi chỉ mục là một chuỗi (`string`).
- Biến `numDict` có thể chứa các cặp `key-value` trong đó `key` là số và `value` là chuỗi.

_Ví dụ 2:_ **Index signature với chỉ mục là chuỗi**

```ts
interface StringDictionary {
  [index: string]: number;
}

let strDict: StringDictionary = {
  'one': 1,
  'two': 2,
  'three': 3,
};

console.log(strDict['three']); // Output: 3
```

Trong ví dụ này:

- `StringDictionary` là một interface khác có index signature.
- Chỉ mục (`index`) là chuỗi (`string`), và giá trị tương ứng với mỗi chỉ mục là một số (`number`).
- Biến `strDict` có thể chứa các cặp `key-value` trong đó `key` là chuỗi và `value` là số.

## VII. Sử dụng biến nâng cao
[:arrow_up: Mục lục](#mục-lục)

### 1. Kết hợp các Kiểu dữ liệu, Interface và Kiểu Generic
[:arrow_up: Mục lục](#mục-lục)

Trong TypeScript, bạn có thể **thao tác với các kiểu dữ liệu** bằng cách **kết hợp chúng lại** với nhau theo một số cách khác nhau. 

Cách đầu tiên là chỉ định một kiểu là **intersection** sử dụng toán tử `&`

```ts
type T1 = { x: string };
type T2 = { y: number };
type T3 = { z: boolean };
type IntersectType1 = T1 & T2 & T3;
type IntersectType2 = T1 & T2;
type IntersectType3 = T3 & T1;
const inter1: T1 = { x: "x1", y: 2 }; // Won't compile: y does not exist in T1
const inter2: T1 & T2 = { x: "x1", y: 2 }; // Compile
const inter3: IntersectType2 = { x: "x1", y: 2 }; // Compile
```

Các interface cũng có thể được kết hợp bằng cách sử dụng kiểu **intersection**.

```ts
interface I1 {
    x: string;
}
interface I2 {
    y: number;
}
interface I3 {
    z: boolean;
}
type IntersectWithInterface = I1 & I2 & I3;
const with3Interfaces: IntersectWithInterface = { x: "1", y: 1, z: true };
```

Kiểu intersection và kiểu generic có thể kết hợp để tạo ra sự linh hoạt. Trong ví dụ sau, hàm là kiểu generic và kết hợp hai kiểu generic trong kiểu trả về.

```ts
function intersectGeneric<TT1, TT2>(t1: TT1, t2: TT2): TT1 & TT2 {
    const returnValue = <TT1 & TT2>{};
    for (let index in t1) {
        (returnValue as TT1)[index] = t1[index];
    }
    for (let index in t2) {
        (returnValue as TT2)[index] = t2[index];
    }
    return returnValue;
}
```

### 2. Kiểu literal
[:arrow_up: Mục lục](#mục-lục)

Kiểu hằng thiết lập một giá trị duy nhất cho kiểu của biến. Ban đầu, kiểu hằng chỉ hỗ trợ chuỗi. Hiện nay, kiểu hằng có thể là **Boolean, số hoặc enum**.

```ts
let x : "test";
let y : 123;
let z : true;
```

Kiểu literal trong TypeScript được sử dụng để chỉ định chính xác một giá trị cụ thể mà biến hoặc thuộc tính có thể có. Điều này giúp bạn **hạn chế các giá trị có thể gán cho biến** chỉ vào các giá trị cụ thể đã được xác định từ trước, thay vì là một loạt các giá trị có thể có.

_Ví dụ 1:_ **Literal strings (Chuỗi literal)**: Đây là chuỗi với một giá trị cụ thể. 

```ts
let direction: 'left' | 'right' | 'up' | 'down';

direction = 'left'; // Hợp lệ
direction = 'right'; // Hợp lệ
direction = 'up'; // Hợp lệ
direction = 'down'; // Hợp lệ
direction = 'diagonal'; // Lỗi: 'diagonal' không phù hợp với kiểu literal được chỉ định
```

Trong ví dụ này, biến `direction` chỉ có thể nhận một trong các giá trị chuỗi cụ thể là `'left'`, `'right'`, `'up'`, hoặc `'down'`. Bất kỳ giá trị nào khác sẽ không được chấp nhận.

_Ví dụ 2:_ **Literal numbers (Số literal)**: Tương tự như chuỗi literal, đây là một số với giá trị cụ thể.

```ts
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;

diceRoll = 4; // Hợp lệ
diceRoll = 1; // Hợp lệ
diceRoll = 7; // Lỗi: 7 không phù hợp với kiểu literal được chỉ định
```

Biến `diceRoll` chỉ có thể nhận một trong các giá trị số cụ thể là `1`, `2`, `3`, `4`, `5`, hoặc `6`.

- **Kiểu literal và Kiểu const**

| | Kiểu literal | Kiểu const |
| :--: | :--: | :--: |
| Khái niệm | là một kiểu dữ liệu cụ thể đại diện cho một giá trị cụ thể | là từ khóa để khai báo biến không thể gán lại (hằng số) |
| Áp dụng | Kiểu literal áp dụng cho việc xác định các giá trị có thể của biến | Áp dụng cho việc bảo vệ sự không thay đổi của biến sau khi được gán. | 

- **Sử dụng kết hợp**

Bạn có thể kết hợp kiểu literal và `const` để tạo ra các hằng số với giá trị cụ thể và đảm bảo rằng giá trị của chúng không thay đổi:

```ts
const color: 'red' | 'green' | 'blue' = 'blue';
```

Trong ví dụ này, `color` là một hằng số và chỉ có thể nhận một trong ba giá trị là `'red'`, `'green'`, hoặc `'blue'`

### 3. Kiểu union và Tagged union
[:arrow_up: Mục lục](#mục-lục)

- **Kiểu union**

Kiểu union dùng để **định nghĩa** một **biến** có thể **thuộc một kiểu** hoặc **kiểu khác**.

```ts
let u1: string | boolean = true;
type UStringBoolean = string | boolean;
let u2: UStringBoolean = true;
```

- **Tagged union**

Kiểu tagged union, còn được gọi là _discriminated union_ hoặc _algebraic data type_. Dùng để định nghĩa một kiểu có thể có nhiều dạng khác nhau. Mỗi dạng được phân biệt bởi một thuộc tính literal, được gọi là `"tag"` hoặc `"discriminator"`

_Ví dụ:_

```ts
type Circle = {
    kind: "circle";
    radius: number;
};

type Square = {
    kind: "square";
    sideLength: number;
};

type Rectangle = {
    kind: "rectangle";
    width: number;
    height: number;
};

type Shape = Circle | Square | Rectangle;

function area(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "square":
            return shape.sideLength * shape.sideLength;
        case "rectangle":
            return shape.width * shape.height;
        default:
            // Kiểm tra toàn diện để đảm bảo tất cả các trường hợp đều được xử lý
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
```

Trong ví dụ này:

1. Chúng ta định nghĩa ba kiểu: `Circle`, `Square` và `Rectangle`. Mỗi kiểu có một thuộc tính `kind` với một giá trị literal.
2. Chúng ta tạo một kiểu liên hợp `Shape` có thể là `Circle`, `Square` hoặc `Rectangle`.
3. Trong hàm `area`, chúng ta sử dụng câu lệnh `switch` để kiểm tra thuộc tính `kind` và tính toán diện tích tương ứng.
4. Trường hợp `default` với `never` đảm bảo rằng tất cả các trường hợp có thể xảy ra đều được xử lý, cung cấp một cách an toàn để đảm bảo kiểm tra toàn diện.

### 4. Kiểu as const
[:arrow_up: Mục lục](#mục-lục)

Ban đầu, `as const` trông có vẻ dư thừa vì ta vốn có thể khai báo biến với `const` và làm cho giá trị không thể thay đổi (**dòng 1**).

Tuy nhiên, `const` và `as const` là hai khái niệm khác nhau. Với `as const` (**dòng 3**), khai báo được thực hiện bằng `let`, cho phép giá trị có thể thay đổi. Tuy nhiên, sự thay đổi này chỉ được áp dụng cho kiểu hằng. Dưới đây là một ví dụ:

```ts
const v1 = 10;
// v1 = 10; // Does not compile
let v2 = 10 as const;
v2 = 10;
```

- **Khai báo mảng là const thì sao?**

Mảng chỉ đọc có thể hữu ích trong một số trường hợp. Mảng được khai báo bằng const không thể được gán lại, tuy nhiên bạn vẫn có thể thay đổi các giá trị bên trong nó.

```ts
// Const
const myArr1 = [1, 2, 3];
myArr1.push(4);
console.log(myArr1);

// myArr1 = []; // Doest not compile because const
```

Ngược lại, một mảng được khai báo bằng `as const` sẽ chứa các giá trị không thể thay đổi. 

```ts
let myArr2 = [1, 2, 3] as const;
// myArr2.push(4); // Does not provide the auto-complete, neither compile.
```

- **Khai báo đối tượng bằng as const**

Tương tự như mảng, ta có thể sử dụng `as const` để tạo một đối tượng bất biến. Thay đổi kiểu của đối tượng hoặc thêm thành viên mới bằng chữ ký chỉ số đều dẫn đến lỗi biên dịch.

```ts
let immutable1 = { id: "1" } as const;
// immutable1.id = 2; // Does not compile
// immutable1["newprop"] = 2; // Does not compile
console.log(immutable1);
```

### 5. Kiểu Tuple
[:arrow_up: Mục lục](#mục-lục)

Kiểu Tuple là một **mảng** chứa các **phần tử đã được định nghĩa**. Để khai báo tuple, bạn sử dụng dấu **ngoặc vuông** như được thể hiện ở **dòng 1**, tuy nhiên thay vì chỉ định giá trị, bạn chỉ định kiểu.

```ts
let numberTuple: [number, number, number];

let myTuple: [number, string] = [0, "1"];
myTuple = [1, "test"];
const numberVariable: number = myTuple[0];
const stringVariable: string = myTuple[1];
```

```ts
// Khai báo một tuple với kiểu cố định
let person: [string, number];

// Gán giá trị cho tuple
person = ["Alice", 30]; // Hợp lệ

// Gán giá trị sai kiểu
// person = [30, "Alice"]; // Lỗi, vì thứ tự các kiểu không khớp
```

- **Truy Cập và Thao Tác Tuples**

Bạn có thể truy cập các phần tử của tuple giống như một mảng và có thể sử dụng các phương thức mảng trên tuples.

```ts
let person: [string, number] = ["Alice", 30];

// Truy cập phần tử
console.log(person[0]); // "Alice"
console.log(person[1]); // 30

// Sử dụng các phương thức mảng
person.push("Engineer"); // Hợp lệ, nhưng thêm kiểu không được định nghĩa ban đầu
console.log(person); // ["Alice", 30, "Engineer"]

// Gán giá trị mới cho một phần tử
person[1] = 31; // Hợp lệ
console.log(person); // ["Alice", 31, "Engineer"]
```

- **Tuple chỉ đọc**

Tương tự, ta cũng có thể sử dụng từ khóa readonly để khai báo một tuple chỉ đọc.

```ts
let firstTuple: [number, number] = [1, 2];
let secondTuple: readonly [number, number,] = [3, 4];

firstTuple[0] = 100;
// secondTuple[0] = 1000; //Error! Read-only Tuple

console.log(firstTuple);
console.log(secondTuple);
```

Ta vẫn có thể sử dụng `Readonly<T>` trên một tập hợp được định kiểu. Đoạn code sau không biên dịch vì tuple là chỉ đọc.

```ts
let firstTuple: Readonly<[number, number]> = [1, 2];
firstTuple[0] = 100;

console.log(firstTuple);
```

Ta có thể dùng tuple chỉ đọc có thể được tạo bằng cách sử dụng từ khóa `as const`

```ts
let firstTuple: readonly [number, number] = [1, 2];
let secondTuple: Readonly<[number, number]> = [1, 2];
let thirdTuple = [1, 2] as const;

// firstTuple[0] = 0;
// secondTuple[0] = 0;
// thirdTuple[0] = 0;
```

### 6. Toán tử keyof
[:arrow_up: Mục lục](#mục-lục)

Toán tử `keyof` giúp bạn **lấy** ra các tên **khóa (key)** của một **đối tượng** dưới dạng một kiểu

_Ví dụ 1:_

```ts
interface Person {
    name: string;
    age: number;
    address: string;
}

type PersonKeys = keyof Person; // "name" | "age" | "address"
```

Trong ví dụ này, `PersonKeys` là một union type của các khóa trong đối tượng `Person`, cụ thể là `"name" | "age" | "address"`.

_Ví dụ 2:_

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person: Person = {
    name: "Alice",
    age: 30,
    address: "123 Main St"
};

const name = getProperty(person, "name"); // "Alice"
const age = getProperty(person, "age");   // 30
```

Hàm `getProperty` lấy một đối tượng `obj` và một khóa `key`, và trả về giá trị tương ứng với khóa đó. Toán tử `keyof` đảm bảo rằng `key` là một khóa hợp lệ của `obj`.

_Ví dụ 3:_

```ts
interface Car {
    make: string;
    model: string;
    year: number;
}

type CarKeys = keyof Car; // "make" | "model" | "year"

const car: Car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

const make = getProperty(car, "make"); // "Toyota"
const model = getProperty(car, "model"); // "Corolla"
```

_Ví dụ 4:_ Khi sử dụng `keyof` với mảng, kết quả sẽ là các khóa thông thường của đối tượng mảng, như `length`, `push`, `pop`, v.v.

```ts
type ArrayKeys = keyof number[]; // "length" | "push" | "pop" | ...
```

### 7. Toán tử in
[:arrow_up: Mục lục](#mục-lục)

