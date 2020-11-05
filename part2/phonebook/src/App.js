import React, { useState, useEffect } from 'react'
import ShowPersons from './components/ShowPersons.js';
import PersonForm from './components/PersonForm.js';
import Filter from './components/Filter.js';
import axios from 'axios'

const App = () => {
 
  const [persons, setPersons] = useState([])
  
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
    }, [])


  const addPerson = (event) => {
    event.preventDefault()  
    const newPerson = { 
      name: newName, 
      nmber: newNumber,
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

        axios
        .post('http://localhost:3001/persons', newPerson)
        .then(response => {
          console.log(response)
        })
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

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter 
        value={newFilter} 
        handleFilterChange={handleFilterChange} />

      <h3>Add new person</h3>

      <PersonForm 
        addPerson = {addPerson}
        handleNameChange = {handleNameChange}
        handeNumberChange = {handleNumberChange}
        name = {newName}
        nmber = {newNumber}
      />

      <h3>Numbers</h3>  
      <ShowPersons 
        persons = {persons} 
        newFilter ={newFilter}
      />   
    </div>  
  )
}

export default App
