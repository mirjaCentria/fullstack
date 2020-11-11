import React from 'react';

const PersonForm = ({addPerson,handleNameChange, handleNumberChange, name, number}) => {
    console.log('personform ', name, number)
    return (
      <form onSubmit={addPerson} >
        <div>
          name:        
          <input   
              name = 'pname'
              value = {name}          
              onChange={handleNameChange}
          />
        </div>
        <div>
          number: 
          <input 
              name = 'pnumber'
              value = {number} 
              onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
    )
  }
  export default PersonForm