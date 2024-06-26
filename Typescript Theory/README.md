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

`enum` (viết tắt của "**enumeration**") được sử dụng để định nghĩa một tập hợp các hằng số có tên, giúp mã dễ đọc và bảo trì hơn.

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

