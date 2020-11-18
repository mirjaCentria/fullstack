import React from 'react';

const PersonForm = ({addPerson,handleNameChange, handleNumberChange, pname, pnumber}) => {
    console.log('personform ', pname, pnumber)
    return (
      <form onSubmit={addPerson} >
        <div>
          name:        
          <input   
              name = 'pname'
              value = {pname}          
              onChange={handleNameChange}
          />
        </div>
        <div>
          number: 
          <input 
              name = 'pnumber'
              value = {pnumber} 
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