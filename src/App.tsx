import React, { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const cloudFlareFetch = async () => {
    fetch(`https://cloud-flare-1.tungchic.workers.dev/todos?user=data`).then(
      (response) => {
        console.log(response)
      }
    )
  }

  const [numbers, setNumbers] = useState<string[]>([])
  const [input, setInput] = useState('')

  useEffect(() => {
    cloudFlareFetch()
  }, [])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  const handleSubmit = () => {
    const newArray = numbers
    newArray.push(input)
    setNumbers(newArray)
    setInput('')
  }
  return (
    <div className="App">
      <div>
        numbers:
        {numbers.length > 0 &&
          numbers.map((number, index) => {
            if (index < numbers.length - 1) {
              return <React.Fragment key={index}>{number}, </React.Fragment>
            } else {
              return <React.Fragment key={index}>{number}</React.Fragment>
            }
          })}
      </div>
      <br />
      <div>
        <label htmlFor="insert">Insert: </label>
        <input id="insert" type="number" value={input} onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default App
