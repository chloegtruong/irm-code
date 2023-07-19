import { useState } from 'react';
import Dropdown from './Dropdown';

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
  return (
    <div>
    {/* <div>
      <h1>Filters go here</h1>
    </div> */}
    <div>
      <table>
        <tr>
      <td><button>Overall</button></td>
      <td><Dropdown/></td>
      <td><Dropdown/></td>
      </tr>
    </table>
    </div>
    </div>
  );
};

export default Filters;
