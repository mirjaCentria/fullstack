import React from 'react';
import Person from './Person.js';
import PersonForm from './PersonForm.js';

const ShowPersons = ({persons, newFilter, delPerson}) => {
    console.log('persons ', persons, newFilter)
    return (
      <div>
        {persons.filter(person => 
            (person.name||'').toLowerCase().includes((newFilter||'').toLowerCase())).map(person =>
              <div key={person.name}>
              {person.name}  {person.number}   
              <button onClick={() => delPerson(person)}>Delete</button>
            </div>
            )}     
      </div>  
    )
  }
  export default ShowPersons
  