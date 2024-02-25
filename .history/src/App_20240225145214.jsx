import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ExampleA from './components/ExampleA'
import ExampleC from './components/ExampleC'
import ExampleB from './components/ExampleB'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
        <He
        <Routes>
          <Route index element={<ExampleA />} />
          <Route path="/new" element={<ExampleB />} />
          <Route path="/done" element={<ExampleC  />} />
        </Routes> 
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
