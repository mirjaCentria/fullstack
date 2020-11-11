import React from 'react';
import Person from './Person.js';

const ShowPersons = ({persons, newFilter, delPerson}) => {
    console.log('showbbpersons ', persons)
    return (
      <div>
        {persons.filter(prson => 
            (prson.name||'').toLowerCase().includes((newFilter||'').toLowerCase())).map(prson =>
              <Person key={prson.name} 
              name = {prson.name} 
              nmber = {prson.number}  
              delPerson = {delPerson}
            />
            )}     
      </div>  
    )
  }
  export default ShowPersons
  