import Filters from "../Filters/Filters";
import OrderItems from "../History/OrderItems";
import Scans from "../Shared Components/Scans";
import WarmupRequests  from "../History/WarmupRequests";
import Accessions from "../Shared Components/Accessions";
import Requisitions from "../Shared Components/Requisitions";
import Complaints from "../Shared Components/Complaints";
//import {dropdowns} from "../Filters/Filters";
import { useState, useEffect } from "react";


const History = () => {

  const timeframe = "historic";
  const [filter, setFilter] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <div>
      <Filters 
      filter={filter}
      setFilter={setFilter}
      />
      <h3>History dashboard goes here</h3>
      <h4>Enter desired date range</h4> 
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
      <div className = "row">
        <OrderItems filter = {filter} startDate = {startDate} endDate = {endDate}/>
        <Scans timeframe = {timeframe} filter = {filter} startDate = {startDate} endDate = {endDate}/>
        <WarmupRequests filter = {filter} startDate = {startDate} endDate = {endDate}/>
      </div>
      <div className = "row">
        <Accessions timeframe = {timeframe} filter = {filter} startDate = {startDate} endDate = {endDate}/>
        <Requisitions timeframe = {timeframe} filter = {filter} startDate = {startDate} endDate = {endDate}/>
        <Complaints timeframe = {timeframe} filter = {filter} startDate = {startDate} endDate = {endDate}/>
      </div>
    </div>
  );
};

export default History;
