import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
//import { Text, TextInput, View } from 'react-native';



const App = () => {

    const [ persons, setPersons ] = useState([
      { name: 'Arto Hellas' }
    ]) 
  const [ newName, setNewName ] = useState('')
  const lArray = persons.length


  const addPerson = (event) => {
    event.preventDefault()
    console.log('blaa')
    const newPerson = { 
      name: newName, 
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} >
        <div>
          name:        
           <input              
              onChange={handlePersonChange}
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
        <div>
        <ul>
          {persons.map(person => 
          <li key={person.name}>
            {person.name}
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default App
