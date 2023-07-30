// App.js
import { useState, memo } from 'react'
import Content from './Content'

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()

// Hooks
// HOC
// Render props

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const increase2 = () => {
    setCount2(count2 + 1)
  }

  return (
    <div style={{ padding: '10px 32px' }}>
      <Content count={count} />
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <button onClick={increase}>Click me!</button>
      <button onClick={increase2}>Click me!</button>
    </div>
  )
}

export default App;

// import { memo } from 'react'

// // === 

// function Content({ count }) {
    
//     console.log('re-render')
//     return (
//         <div>
//             <h2>Hello World {count}</h2>
//         </div>
//     )
// }

// export default memo(Content)