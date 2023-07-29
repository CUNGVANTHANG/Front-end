useState (trạng thái của dữ liệu)

### Dùng khi nào?
Khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhập (render lại theo dữ liệu)

### Cách dùng

``` jsx
import { useState } from 'react'

function Component() {
    const [state, setState] = useState(initState)

    ...
}
```

### Lưu ý
- Component được re-render sau khi `setState`
- Initial state chỉ dùng cho lần đầu
- Set state với callback?
- Initial state với callback?
- Set state là thay thế state bằng giá trị mới

``` jsx
import { useState } from 'react'

const orders = [100, 200, 300]

function App() {
  // const [counter, setCounter] = useState(() => {
  //   const total = orders.reduce((total, cur) => total + cur)

  //   console.log(total);
  //   return total
  // })

  // const handleIncrease = () => {
  //   // setCounter(counter + 1)

  //   setCounter(prevState => prevState + 1)
  //   // setCounter(prevState => prevState + 1)
  //   // setCounter(prevState => prevState + 1)
  // }

  // // console.log('re-render')

  // return (
  //   <div className="App" style={{padding: 20}}>
  //     <h1>{counter}</h1>
  //     <button onClick={handleIncrease}>Increase</button>
  //   </div>
  // );
  
  const [info, setInfo] = useState({
    name: 'Nguyen Van A',
    age: 18,
    address: 'Ha Noi, VN'
  })

  const handleUpdate = () => {
    // setInfo({
    //   bio: 'Yeu mau hong'
    // })

    setInfo(prevState => {
        return ({
            ...prevState,
            bio: 'Yeu mau hong'
        })
           
    })
  }

  return (
      <div className="App" style={{padding: 20}}>
        <h1>{JSON.stringify(info)}</h1>
        <button onClick={handleUpdate}>Update</button>
      </div>
  );
}

export default App;
```
