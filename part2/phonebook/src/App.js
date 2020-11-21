import React, { useState, useEffect } from 'react'
import ShowPersons from './components/ShowPersons.js';
import PersonForm from './components/PersonForm.js';
import Filter from './components/Filter.js';
import Notification from './components/Notification.js';
import personService from './services/persons'
import './App.css'

const App = () => {
 
  const [persons, setPersons] = useState([])  
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ newMessage, setNewMessage] = useState(null)

  const newPerson = { 
    name: newName, 
    number: newNumber,
    id: persons.length +1,
  }

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
    },[])

  const addPerson = (event) => {
    event.preventDefault()  

    if(persons.some(person => person.name === newName)) 
    {
        window.alert('$newName is already added to phonebook') 
        console.log('button clicked alert', event.target)
        setNewName('')
        setNewNumber('')
    }else
    {
        console.log('Add', newName)
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
        personService
        .create(newPerson)

        setNewMessage(
          `Person '${newPerson.name}' was added to phonebook`
        )
        setTimeout(() => {
          setNewMessage(null)
        }, 5000)
    }
  }

  const delPerson = (person) => {
    console.log('delete ', person)
    const del = window.confirm(`Do you really want to delete ${person.name}?`); 
    if(del === true){         
      personService
      .remove(person.id)
      setPersons(persons.filter(newp => newp.id !== person.id))
      setNewMessage(
        `Person '${person.name}' was removed from phonebook`
      )
      setTimeout(() => {
        setNewMessage(null)
      }, 5000)
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
    event.preventDefault()  
    console.log('filter ',event.target.value)
    setNewFilter(event.target.value)    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Notification 
        message = {newMessage}
      />

      <Filter 
        value={newFilter} 
        handleFilterChange={handleFilterChange} />

      <h3>Add new person</h3>

      <PersonForm 
        addPerson = {addPerson}
        handleNameChange = {handleNameChange}
        handleNumberChange = {handleNumberChange}
        name = {newName}
        number = {newNumber}
      />

      <h3>Numbers</h3>  
      <ShowPersons 
        persons = {persons} 
        newFilter ={newFilter}
        delPerson = {delPerson}

      />   
    </div>  
  )
}

export default App
