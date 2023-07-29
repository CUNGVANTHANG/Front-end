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
  const [checked, setChecked] = useState([])

  // console.log(checked);

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        // Uncheck
        return checked.filter(item => item !== id)

      } else {
        return [...prev, id]
      }
    })
  }
  
  const handleSubmit = () => {
    // Call API
    console.log({ ids: checked });
  }

  return (
    <div style={{ padding: 32 }}>
      {courses.map(course => (
        <div key={course.id}>
          <input 
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

export default App;