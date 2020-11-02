import React, { useState } from 'react'

const persons = [
  { key: 0,
     name: '', },
  ]

const App = () => {
  const [ persons, setPersons ] = useState([
    { key: 1, name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = () => {

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit" onClick={addName} >add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map(item => 
          <div key={item.content}> 
            {item.content}
          </div>
        )}
      
    </div>
  )
}

export default App
