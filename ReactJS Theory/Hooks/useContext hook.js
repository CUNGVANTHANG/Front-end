// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ThemeProvider>
      <App />
     </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Pragraph.js
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Paragraph() {
    const context = useContext(ThemeContext)

    return (
        <p className={context.theme}>
            Context provides a way to pass data 
                throught the component tree without having to 
                pass props down manually at every level.
        </p>
    )
}

export default Paragraph

// Content.js
import Paragraph from "./Paragraph";

function Content() {
    return (
        <div>
            <Paragraph />
        </div>
    )
}

export default Content

// ThemeContext.js
import { useState, createContext } from 'react'

const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const value = {
        theme, 
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }

// App.js
import Content from "./Content"
import { useContext } from "react"
import { ThemeContext } from './ThemeContext'
import './App.css'

// useContext: Đơn giản hóa việc truyền dữ liệu từ component cha xuống component con mà không cần sử dụng tới props
// CompA => CompB => CompC
// 1. Create context
// 2. Provider
// 3. Consumer

// Theme: Dark / Light

function App() {
  const context = useContext(ThemeContext)
  
  return (
      <div style={{ padding: 20 }}>
          <button onClick={context.toggleTheme}>Toggle theme</button>
          <Content/>
      </div>
  )
}
export default App