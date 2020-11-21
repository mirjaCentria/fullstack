import React from 'react';

const Filter = ({newFilter, handleFilterChange}) => {
       return(
        <div>
            filter shown with 
            <input 
                filter = {newFilter} 
                onChange={handleFilterChange}
            />
        </div>
   )
}
export default Filter