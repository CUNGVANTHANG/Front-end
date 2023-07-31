import { useEffect, useRef } from 'react'
import Video from './Video'

function App() {
  const videoRef = useRef()

  useEffect(() => {
    console.log(videoRef.current)
  })
  
  const handlePlay = () => {
    videoRef.current.play()
  }

  const handlePause = () => {
    videoRef.current.pause()
  }
  
  return (
      <div style={{ padding: 20 }}>
          <Video ref={videoRef}/>
          <button onClick={handlePlay}>Play</button>
          <button onClick={handlePause}>Pause</button>
      </div>
  )
}
export default App