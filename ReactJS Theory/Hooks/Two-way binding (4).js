import { useState } from 'react'

function App() {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))

    return storageJobs ?? []
    
  })

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]
      
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)

      return newJobs
    })
    setJob('')
  }

  const handleDelete = (index) => {
    setJobs(prev => {
      const removeJobs = [...prev]
      removeJobs.splice(index, 1)

      const jsonJobs = JSON.stringify(removeJobs)
      localStorage.setItem('jobs', jsonJobs)

      return removeJobs
    })
  }
 
  return (
    <div style={{ padding: 32 }}>
      <input 
        value={job} 
        onChange={e => setJob(e.target.value)} 
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;