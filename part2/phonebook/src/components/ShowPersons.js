import React from 'react';
//import Person from './Person.js';

const ShowPersons = ({persons, newFilter, delPerson}) => {
    console.log('showbbpersons ', persons)
    return (
      <div>
        {persons.filter(person => 
            (person.name||'').toLowerCase().includes((newFilter||'').toLowerCase())).map(person =>
              <div>
              {person.name}  {person.number}   
              <button onClick={() => delPerson(person.id)}>Delete</button>
            </div>
            )}     
      </div>  
    )
  }
  export default ShowPersons
  