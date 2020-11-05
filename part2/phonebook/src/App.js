import React, { useState } from 'react'
import ShowPersons from './components/ShowPersons.js';
import PersonForm from './components/PersonForm.js';
import Filter from './components/Filter.js';



const App = () => {
    const [persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '040-123456' },
      { name: 'Ada Lovelace', number: '39-44-5323523' },
      { name: 'Dan Abramov', number: '12-43-234345' },
      { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
  
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')


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
