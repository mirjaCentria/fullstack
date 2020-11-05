mport React from 'react'

const PersonForm = ({addPerson,handleNameChange, handleNumberChange, name, nmber}) => {
    console.log('personform ', name, nmber)
    return (
      <form onSubmit={addPerson} >
        <div>
          name:        
          <input   
              value = {name}          
              onChange={handleNameChange}
          />
        </div>
        <div>
          number: 
          <input 
              value = {nmber} 
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