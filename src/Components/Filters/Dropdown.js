import React from 'react';

/*
----------------------------- Notes -------------------------------------
This page gives a reusable dropdown for filters. It sets filter based on the dropdown selected
 and inherits dropdownOptions, currentState, setState from Filters.js
*/

const DropdownMenu = ({dropdownOptions, currentState, setState}) => {
  
    const handleSelect = (event) => {
      setState(event.target.value);
    };
  
    //use map function to render all of the options 
    //define options in Filters.js
   
    return (
      <div>
        <select value={currentState} onChange={handleSelect}>
          {dropdownOptions.map((option) => 
          (<option value = {option.value}> {option.label}</option>))}
        </select>
        {/* {selectedOption && <p>You selected: {selectedOption}</p>} */}
      </div>
    );
  };
  
  export default DropdownMenu;
