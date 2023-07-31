// App.js
import { useEffect, useRef } from 'react'
import Video from './Video'

// useImperativeHandle: Tùy chỉnh 'ref' của một function component

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

// Video.js
import { forwardRef, useImperativeHandle, useRef } from 'react'
import video1 from './videos/video-1.mp4'

// useImperativeHandle: Tùy chỉnh 'ref' của một function component

function Video(props, ref) {
    const videoRef = useRef()
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <video 
            ref={videoRef}
            src={video1}
            style={{width: 280}}
        />
    )
}

export default forwardRef(Video)