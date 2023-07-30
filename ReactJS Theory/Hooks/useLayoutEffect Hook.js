import { useEffect, useLayoutEffect, useState } from 'react'

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI

function Content() {
    const [count, setCount] = useState(0)

    // Ta sẽ thấy nó render UI ra 4 trước khi render ra 0 (rất nhanh nên ta sẽ thấy nó nhấp nháy)
    // useEffect(() => {
    //     if (count > 3)
    //         setCount(0)
    // }, [count])

    // Sẽ khắc phục được useEffect
    useLayoutEffect(() => {
        if (count > 3)
            setCount(0)
    }, [count])

    const handleRun = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}

export default Content

// App.js
// // Mounted / Unmounted
// import { useState } from 'react'
// import Content from "./Content"


// function App() {
//   const [show, setShow] = useState(false)

//   return (
//     <div style={{ padding: 20 }}>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Content />}
//     </div>
//   )
// }

// export default App;