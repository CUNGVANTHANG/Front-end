import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    // Call API
    console.log({
      name,
      email
    })
  }

  return (
    <div style={{ padding: 32 }}>
      <input 
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input 
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

export default App;