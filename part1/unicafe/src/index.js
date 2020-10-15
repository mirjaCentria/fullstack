import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
     
  return (
  <div>
      {props.text}  {props.value}
  </div>
  )
}


const Statistics = (props) => {
  console.log(props)
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const allfb = good + neutral + bad
  

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

    console.log('nofb ' + sumAll)
    return (
    <div>
      {allfb === 0 ? (
        <span className="nofb">No feedback given</span>
      ) : (
        <span className="allfb">

          <table>
            <thead >
              <tr>
              <td><Statistic text='good'/></td><td> <Statistic value={good}/></td>
              </tr><tr>
              <td><Statistic text="neutral " /></td><td> <Statistic value={neutral} /></td>
              </tr><tr>
              <td><Statistic text="bad " /></td><td> <Statistic value={bad} /></td>
              </tr><tr>
              <td><Statistic text="all " /></td><td> <Statistic value={sumAll()} /></td>
              </tr><tr>
              <td><Statistic text="average " /></td><td> <Statistic value={average()} /></td>
              </tr><tr>
              <td><Statistic text="positive " /></td><td> <Statistic value={percent() + ' %'} /></td>
              </tr>
            </thead>
          </table>            
        </span>
      )}
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}    
  </button>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const increaseGood = () => setGood(good + 1)
  const increaseBad = () => setBad(bad + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
 
  return (
    <div>
      <h1>give feedback</h1> 
      <p>
      <Button handleClick={increaseGood} text= 'good' />
      <Button handleClick={increaseNeutral} text= 'neutral' />  
      <Button handleClick={increaseBad} text= 'bad'/>
      </p>
      
      <h1>statistics</h1>              

      <Statistics good= {good} bad= {bad} neutral= {neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
