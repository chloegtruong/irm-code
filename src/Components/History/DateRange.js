import { useState, useEffect } from "react";
/*
----------------------------- Notes -------------------------------------
This page creates the date range input and sets startDate and endDate. 
*/

const DateRange = ({startDate, endDate, setStartDate, setEndDate}) => {

  const [localStartDate, setLocalStartDate] = useState('');
  const [localEndDate, setLocalEndDate] = useState('')
    
  // this function helps to set the default date to the current month 
    useEffect(() => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed; padStart defeults months to 2 digits
      const firstDayOfMonth = '01';
      
      //setting default date here
      const defaultStartDate = `${currentYear}-${currentMonth}-${firstDayOfMonth}`;
      const defaultEndDate = `${currentYear}-${currentMonth}-${currentDate.getDate()}`;
  
      setLocalStartDate(defaultStartDate);
      setLocalEndDate(defaultEndDate);
      setStartDate(defaultStartDate);
      setEndDate(defaultEndDate);
    }, [setStartDate, setEndDate]);
  
    //handlers for date range changes
    const handleStartDateChange = (event) => {
      const newStartDate = event.target.value;
      setLocalStartDate(newStartDate);
      setStartDate(newStartDate);
    };
  
    const handleEndDateChange = (event) => {
      const newEndDate = event.target.value;
      setLocalEndDate(newEndDate);
      setEndDate(newEndDate);
    };

    return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <label htmlFor="start-date">Start Date:</label>
      <input
        type="date"
        id="start-date"
        value={startDate}
        onChange={handleStartDateChange}
      />
      <label htmlFor="end-date">End Date:</label>
      <input
        type="date"
        id="end-date"
        value={endDate}
        onChange={handleEndDateChange}
        min = {startDate}
      />
      {startDate && endDate && (
        <p className="selected-dates">
          Selected date range: {startDate} - {endDate}
        </p>
      )}
      </div>

    );
};

export default DateRange; 
