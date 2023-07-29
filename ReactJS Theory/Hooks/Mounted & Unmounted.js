// Mounted (khi sử dụng)/ Unmounted (khi không sử dụng)

// function Content() {
//     return (
//         <h1>Hello world</h1>
//     )
// }

// export default Content
import { useState } from 'react'
import Content from "./Content"


function App() {
  const [show, setShow] = useState(false)

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  )
}

export default App;