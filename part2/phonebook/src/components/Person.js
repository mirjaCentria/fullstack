import React from 'react';

const Person = ({person, delPerson}) => {
    console.log('person  ', person)
    return (
      <div>
        {person.name}  {person.nmber}   
        <button onClick={delPerson}>Delete</button>
      </div>
    )
  }


export default Person