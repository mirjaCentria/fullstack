import React, { useState, useEffect } from 'react'
import ShowPersons from './components/ShowPersons.js';
import PersonForm from './components/PersonForm.js';
import Filter from './components/Filter.js';
import personService from './services/persons'
import './App.css';

const App = () => {
 
  const [persons, setPersons] = useState([])  
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ message, setMessage] = useState(null)

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
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')        

        personService
        .create(newPerson)

        setMessage(    
            `Person '${newPerson.name}' was added to phonebook`  
            )        
            setTimeout(() => {         
            setMessage(null)        
          }, 5000)
    }
  }


  /* handleDelete = (itemId) => {
    // Whatever you want to do with that item
    axios.delete("url", { params: { id: itemId } }).then(response => {
      console.log(response);
    });
     */

  const delPerson = (person) => {
    console.log('delete ', person)
    const del = window.confirm(`Do you really want to delete ${person.name}?`); 
    if(del === true){         
      personService
      .remove(person.id)
      setPersons(persons.filter(newp => newp.id !== person.id))

      setMessage(    
        `Person '${person.name}' was removed from phonebook`  
        )        
        setTimeout(() => {         
        setMessage(null)        
      }, 5000)
    }     
  }

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="error">
        {message}
      </div>
    )
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
      <Notification 
        message = {message}
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
