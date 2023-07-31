import { useState } from 'react';
import Dropdown from './Dropdown';


 // deinfe state variable for each of the options 
  // get options for each dropdown inside filyter s
  // import component 

const Filters = ({filterApplied, setFilterApplied}) => {


  const options = [
    {label: 'option1', value: 'option1'},
    {label: 'option2', value: 'option2'},
    {label: 'option3', value: 'option3'},
  ];

  const [dropdown1, setDropdown1] = useState(null);
  filterApplied = dropdown1;

  return (
    <div>
    {/* <div>
      <h1>Filters go here</h1>
    </div> */}
    <div>
      <table>
        <tr>
      <td><button>Overall</button></td>
      <td><Dropdown dropdownOptions={options} currentState = {dropdown1} setState = {setDropdown1}/></td>
      {/* <td><Dropdown/></td> */}
      </tr>
    </table>
    </div>
    </div>
  );
};



export default Filters;
