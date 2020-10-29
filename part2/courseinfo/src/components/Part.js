import React from 'react';

const Part = ({name, exercises}) => {
    console.log('part ne ', name, exercises)
    return (
      <div>
        <p>
          {name} {exercises}
        </p>
      </div>
    )
  }
  
  
export default Part