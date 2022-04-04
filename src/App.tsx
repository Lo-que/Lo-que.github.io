import React, { useState, useCallback, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [num, setNum] = useState('0')

  useEffect(() => {
    fetch(`https://cloud-flare-1.tungchic.workers.dev/todos?user=data`).then(
      (response) => {
        console.log(response)
        setNum(response.statusText)
      }
    )
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>{`num: ${num}`}</div>
    </div>
  )
}

export default App
