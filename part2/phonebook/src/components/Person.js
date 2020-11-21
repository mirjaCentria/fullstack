import React from 'react';

const Person = ({person, delPerson}) => {
    console.log('person  ', person)
    return (
      <div>
        {person.name}  {person.number}   
        <button onClick={() => this.delPerson(person)}>Delete</button>
      </div>
    )
  }


export default Person