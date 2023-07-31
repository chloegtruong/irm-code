import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';


 // deinfe state variable for each of the options 
  // get options for each dropdown inside filyter s
  // import component 

const Filters = ({filter, setFilter}) => {
  
  const customerOptions = [
    {label: 'Customer 1', value: 'Customer 1'},
    {label: 'Customer 2', value: 'Customer 2'},
    {label: 'Customer 3', value: 'Customer 3'},
  ];

  const coeOptions = [
    {label: 'COE 1', value: 'COE 2'},
    {label: 'COE 2', value: 'COE 2'},
    {label: 'COE 3', value: 'COE 3'},
  ];

  function buttonClick(){
    setFilter("Overall");
  }

  //const [dropdown1, setDropdown1] = useState(null);

  return (
    <div>
    {/* <div>
      <h1>Filters go here</h1>
    </div> */}
    <div>
      <table>
        <tr>
      <td><button onClick = {buttonClick}>Overall</button></td>
      <td><Dropdown dropdownOptions={customerOptions} currentState = {filter} setState = {setFilter}/></td>
      <td><Dropdown dropdownOptions={coeOptions} currentState = {filter} setState = {setFilter}/></td>
      {/* <td><Dropdown/></td> */}
      </tr>
    </table>
    </div>
    </div>
  );
};



export default Filters;
