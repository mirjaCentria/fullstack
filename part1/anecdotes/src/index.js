import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(0)
  const anecdotes = props.anecdotes
  const lArray = anecdotes.length
  const newvote = anecdotes[selected].vote +1
 
  console.log(props)
  console.log(newvote)

  const newSelected = () =>{    
    setSelected(randLine())
  } 

  const newVotes = () =>{        
    anecdotes[selected].vote = newvote
    setVotes(anecdotes)
    ReactDOM.render(
      <App anecdotes={anecdotes} />,
      document.getElementById('root')
    )
  } 

  const randLine = () => {
       return ( Math.floor(Math.random() * lArray)
    )
  }

  const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}    
    </button>
  )

  return (
    <div>
      {anecdotes[selected].name}
      <p>has {anecdotes[selected].vote} votes</p>
      <p> 
      <Button handleClick={newVotes} text= 'vote' />
      <Button handleClick={newSelected} text= 'next anecdote' />
     </p>
    
    
    </div>
  )
}



const anecdotes = [
  { name: 'If it hurts, do it more often', vote: 0 },
  { name: 'Adding manpower to a late software project makes it later!', vote: 0 },
  { name: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', vote: 0 },
  { name: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', vote: 0 },
  { name: 'Premature optimization is the root of all evil.', vote: 0 },
  { name: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', vote: 0 }
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)