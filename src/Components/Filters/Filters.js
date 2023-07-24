import { useState } from 'react';
import Dropdown from './Dropdown';


 // deinfe state variable for each of the options 
  // get options for each dropdown inside filyter s
  // import component 

const Filters = () => {

  // function Dropdown(props){

  //   const [display, setDisplay] = useState('none');

  //   function handleClick(){
  //     if (display == 'none'){
  //       setDisplay ('block')
  //     }
  //     else{
  //       setDisplay('none')
  //     }
  //   }
  // }

  // const [option1, setOption1] = useState(null);
  // const [option2, setOption2] = useState(null);
  // const [option3, setOption3] = useState(null);

  const options = [
    {label: 'option1', value: 'option1'},
    {label: 'option2', value: 'option2'},
    {label: 'option3', value: 'option3'},
  ];

  const [dropdown1, setDropdown1] = useState(null);

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
