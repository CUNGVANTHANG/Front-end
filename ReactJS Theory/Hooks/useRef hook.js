// App.js

import { useEffect, useRef, useState } from 'react'

// useRef
// Lưu các giá trị qua một tham chiếu bên ngoài
// function component

function App() {
  const [count, setCount] = useState(60)
  const [isStop, setIsstop] = useState()

  const timerId = useRef()
  const prevCount = useRef()
  const h1Ref = useRef()

  useEffect(() => {
    console.log(h1Ref.current)
  })

  useEffect(() => {
    prevCount.current = count
  }, [count])

  const handleStart = () => {
    setIsstop(true)
    timerId.current = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000)
  }

  const handleStop = () => {
    setIsstop(false)
    clearInterval(timerId.current)
  }

  console.log(count, prevCount.current)

  return (
    <div style={{ padding: 20 }}>
      <h1 ref={h1Ref}>{count}</h1>
      <button disabled={isStop} onClick={handleStart}>Start</button>
      <button disabled={!isStop} onClick={handleStop}>Stop</button>
    </div>
  )
}

export default App;