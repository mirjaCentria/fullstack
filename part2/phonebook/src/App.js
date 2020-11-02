import React, { useState } from 'react'
//import ReactDOM from 'react-dom';
//import reportWebVitals from './reportWebVitals';
//import { Text, TextInput, View } from 'react-native';



const App = () => {

    const [ persons, setPersons ] = useState([
      { name: 'Arto Hellas' }
    ]) 
  const [ newName, setNewName ] = useState('')
  //const lArray = persons.length


  const addPerson = (event) => {
    event.preventDefault()
  
    const newPerson = { 
      name: newName, 
    }

    if(persons.some(person => person.name === newName)) 
    {
        window.alert('${newName} is already added to phonebook') 
        console.log('button clicked alert', event.target)
    }else
    {
        setPersons(persons.concat(newPerson))
        setNewName('')
        console.log('button clicked', event.target)
    }

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
      {persons.map(person => 
          <div key={person.name}>
            {person.name}
        </div>
      )}      
    </div>
  )
}

export default App
