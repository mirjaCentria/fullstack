import React, { useState, useEffect } from 'react'
import ShowPersons from './components/ShowPersons.js';
import PersonForm from './components/PersonForm.js';
import Filter from './components/Filter.js';
import personService from './services/persons'

const App = () => {
 
  const [persons, setPersons] = useState([])  
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

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
      nmber: newNumber,
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
      const result = 
      personService
      .deleete(person.id)
      .then(response => 
        {
          window.alert('$person.name is removed from phonebook') 
          setPersons(persons.filter(newp => newp.id !== person.id))

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
