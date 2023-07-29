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

// ---------
// 1. Callback luôn được gọi sau khi component mounter
function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [])

    

    return (
        <div>
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>

                ))}
            </ul>
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