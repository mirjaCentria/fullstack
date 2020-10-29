import React from 'react';
import Part from './Part.js';


const Content = ({parts}) => {
    console.log('content ', parts)
    return (
      <div>
          {parts.map(part => 
            <Part key={part.id} 
              name = {part.name} 
              exercises = {part.ecercises} />
          )}
      </div>
    )
  }
  
export default Content