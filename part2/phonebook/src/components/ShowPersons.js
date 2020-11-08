import React from 'react';
import Person from './Person.js';

const ShowPersons = ({persons, newFilter, delPerson}) => {
    console.log('persons ', persons, newFilter)
    return (
      <div>
        {persons.filter(person => 
            (person.name||'').toLowerCase().includes((newFilter||'').toLowerCase())).map(person =>
              <div>
              {person.name}  {person.nmber}   
              <button onClick={() => delPerson(person)}>Delete</button>
            </div>
            )}     
      </div>  
    )
  }
  export default ShowPersons
  