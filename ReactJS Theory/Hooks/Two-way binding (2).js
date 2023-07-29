import { useState } from 'react'

const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
]

function App() {
  const [checked, setChecked] = useState()
  
  const handleSubmit = () => {
    // Call API
    console.log({ id: checked });
  }

  return (
    <div style={{ padding: 32 }}>
      {courses.map(course => (
        <div key={course.id}>
          <input 
            type="radio"
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

export default App;