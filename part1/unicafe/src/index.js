import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const sumAll = () => {    
    return good + neutral + bad
  }

  const average = () => {
    if(sumAll() === 0) return 0
    else return (good - bad) /sumAll()
  }

  const percent = () => {
    if(sumAll() === 0) return 0
    else return 100*good/sumAll()
  }

  return (
    <div>
      <h1>give feedback</h1> 
      <p>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>  
      <button onClick={() => setBad(bad + 1)}>bad</button>
      </p>
      
      <h1>statistics</h1>  
      
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {sumAll()}</p>
      <p>average {average()}</p>
      <p>positive {percent()} %</p>


    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
