import React from 'react';
import Person from './Person.js';

const ShowPersons = ({persons, newFilter}) => {
    console.log('persons ', persons, newFilter)
    return (
      <div>
        {persons.filter(person => 
            (person.name||'').toLowerCase().includes((newFilter||'').toLowerCase())).map(person =>
              <Person key={person.name} 
                name = {person.name} 
                nmber = {person.number}  
              /> 
            )}     
      </div>  
    )
  }
  export default ShowPersons
  