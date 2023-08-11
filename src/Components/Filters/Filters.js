import { useState } from 'react';
import Dropdown from './Dropdown';
import DateRange from '../History/DateRange';

 // deinfe state variable for each of the options 
  // get options for each dropdown inside filyter s
  // import component
  
/*
----------------------------- Notes -------------------------------------
This is a reuable page that displays/selects the filters for eitehr of the dashboards. 
Its inherits filter and setFilter from each respective dashboard.
*/

const Filters = ({filter, setFilter}) => {

  //data for dropdown1
  const customerOptions = [
    {label: 'Customer 1', value: 'Customer 1'},
    {label: 'Customer 2', value: 'Customer 2'},
    {label: 'Customer 3', value: 'Customer 3'},
  ];

  //data for dropdown2
  const coeOptions = [
    {label: 'Boston, MA', value: 'Boston, MA'},
    {label: 'New York, NY', value: 'New York, NY'},
    {label: 'Chicago, IL', value: 'Chicago, IL'},
  ];

  //handler for overall button
  function buttonClick(){
    setFilter("Overall");
  }

  return (
    <div className = 'filters'>
    <div className='all-filters'>
      <button onClick = {buttonClick}>Overall</button>
      <Dropdown dropdownOptions={customerOptions} currentState = {filter} setState = {setFilter}/>
      <Dropdown dropdownOptions={coeOptions} currentState = {filter} setState = {setFilter}/>
      
    </div>
    </div>
  );
};



export default Filters;
