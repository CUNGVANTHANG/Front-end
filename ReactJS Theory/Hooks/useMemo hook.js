import { useState, useMemo, memo, useRef } from 'react'

// memo tránh component re-render trong tình huống không cần thiết
// useMemo tránh thực hiện 1 logic nào đó không cần thiết

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const nameRef = useRef()

  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: +price // Convert sang số
    }])
    setName('')
    setPrice('')
    nameRef.current.focus()
  }

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log('Tính toán lại...')
      return result + prod.price
    }, 0)

    return result
  }, [products])

  return (
    <div style={{ padding: '10px 32px' }}>
      <input 
        ref={nameRef}
        value={name}
        placeholder="Enter name..."
        onChange={e => setName(e.target.value)}
      />   
      <br />
      <input 
        value={price}
        placeholder="Enter price..."
        onChange={e => setPrice(e.target.value)}
      /> 
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;

// Content.js
// import { memo } from 'react'

// // === 

// function Content({ onIncrease }) {
    
//     console.log('re-render')
//     return (
//         <>
//             <h2>Hello World</h2>
//             <button onClick={onIncrease}>Click me!</button>
//         </>
//     )
// }

// export default memo(Content)