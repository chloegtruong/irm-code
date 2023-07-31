import React, {useState, Component} from 'react';

const DropdownMenu = ({dropdownOptions, currentState, setState}) => {
    //const [selectedOption, setSelectedOption] = useState('');
  
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
