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
  const [ newMessage, setNewMessage] = useState('')
  
  const mAdd = ' was added to phonebook '
  const mDelete = ' was removed from phonebook ' 
 // const mChange = ' was changed '
  //let msg = ''

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })     
    }, [])
    

    const addPerson = (event) => {
      event.preventDefault()  
      const newPerson = { 
        name: newName, 
        number: newNumber,
        id: persons.length +1,
    }
    if(persons.some(person => person.name === newName)) 
    {
        window.alert('$newName is already added to phonebook') 
        console.log('button clicked alert', event.target)
    }else
    {
        console.log('Add', newName, mAdd)
        personService
        .create(newPerson)
        .then(result =>            
          {
            setPersons(persons.concat(result))
            console.log('result ',result)
            const rname = result.name + mAdd
            console.log('rname ',rname)
            setNewMessage(rname)
            console.log('newMsg ',newMessage)
            setTimeout(() => {
              setNewMessage(null)
            }, 5000)
          } )        
          setNewName('')
          setNewNumber('')
 
    }
  }

  const delPerson = (id) => {
    const person = persons.find(x => x.id === id)
    console.log('delete ', id, person)
    if( window.confirm(`Do you really want to delete ${person.name}?`)) {         

      personService
      .deleete(id)
      .then(() => 
        {
          //window.alert('$person.name is removed from phonebook') 
          const rname = person.name + mDelete
          console.log('rname ',rname)
          setNewMessage(rname)
          console.log('newMsg ',newMessage)
          setTimeout(() => {
            setNewMessage(null)
          }, 5000)
          setPersons(persons.filter(x => id !== x.id))
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
        //value={newFilter} 
        handleFilterChange={handleFilterChange} />

      <h3>Add new person</h3>

      <PersonForm 
        addPerson = {addPerson}
        handleNameChange = {handleNameChange}
        handeNumberChange = {handleNumberChange}
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
