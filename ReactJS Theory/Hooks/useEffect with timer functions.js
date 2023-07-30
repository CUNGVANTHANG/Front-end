import { useEffect, useState } from 'react'

// Side effects

// Events: Add / remove event listener
// Observer pattern: Subscribe / unsubscribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / unmounted
// ===
// Call API

/**
1. Update DOM
    - F8 blog title
2. Call API
3. Listen DOM events
    - Scroll
    - Resize
4. Cleanup
    - Remove listener / Unsubscribe
    - Clear timer
*/

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback. [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])
// - Callback sẽ được gọi lại mỗi khi deps thay đổi

// ---------
// 1. Callback luôn được gọi sau khi component mounter
// 2. Cleanup function luôn được gọi trước khi component unmounted
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

function Content() {
    const [countdown, setCountdown] = useState(180)
    // Cách 1
    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prevState => prevState - 1)
        }, 1000)

        return () => clearInterval(timerId)
    }, [])

    // Cách 2
    // useEffect(() => {
    //     const timerId = setTimeout(() => {
    //         setCountdown(countdown - 1)
    //     }, 1000)
    //     return () => clearTimeout(timerId)
    // }, [countdown])
    
    return (
        <div>
            <h1>{countdown}</h1>
        </div>
        
    )
}

export default Content

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