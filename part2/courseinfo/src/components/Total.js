
import React from 'react';

const Total  = ({parts}) => {
    const totalE = parts.reduce((totalE, part) => totalE + part.exercises, 0);
  console.log('Total ', totalE, parts)
  return (
    <div>
     <p>Total of {totalE} exercises</p>
    </div>
  )
}
  
export default Total