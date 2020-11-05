import React from 'react';

const Person = ({name, nmber}) => {
    console.log('person  ', name, nmber)
    return (
      <div>
        {name}  {nmber}
      </div>
    )
  }


export default Person