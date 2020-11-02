import React, { useState } from 'react'
//import ReactDOM from 'react-dom';
//import reportWebVitals from './reportWebVitals';
//import { Text, TextInput, View } from 'react-native';



const App = () => {

    const [ persons, setPersons ] = useState([
      { 
        name: 'Arto Hellas',
        number: '123456'  
      }
    ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  //const lArray = persons.length


  const addPerson = (event) => {
    event.preventDefault()  
    const newPerson = { 
      name: newName, 
      number: newNumber
    }

    if(persons.some(person => person.name === newName)) 
    {
        window.alert('$newName is already added to phonebook') 
        console.log('button clicked alert', event.target)
    }else
    {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
        console.log('button clicked', event.target)
    }

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} >
        <div>
          name:        
           <input              
              onChange={handleNameChange}
        />
        </div>
        <div>
          number: 
          <input  
            onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
          <div key={person.name}>
            {person.name}   {person.number}
        </div>
      )}      
    </div>
  )
}

export default App
