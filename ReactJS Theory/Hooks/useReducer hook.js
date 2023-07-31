// App.js
import { useState, useReducer } from 'react'

// useState
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)

// useReducer - Cung cấp cho người dùng có thêm một sự lựa chọn để sử dụng state cho function component
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

// Init state
const initState = 0

// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// Reducer
const reducer = (state, action) => {
  console.log('reducer running...')
  switch(action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error('Invalid action')
  }
}

// Dispatch

function App() {
  // const [count, setCount] = useState(0)
  const [count, dispatch] = useReducer(reducer, initState)

  return (
    <div style={{ padding: '0 20px' }}>
      <h1>{count}</h1>   
      <button
        onClick={() => dispatch(DOWN_ACTION)}
      >
        Down
      </button>  
      <button
        onClick={() => dispatch(UP_ACTION)}
      >
        Up
      </button> 
    </div>
  )
}

export default App;