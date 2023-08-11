import Filters from "../Filters/Filters";
import OrderItems from "../History/OrderItems";
import Scans from "../History/Scans";
import WarmupRequests  from "../History/WarmupRequests";
import Accessions from "../Shared Components/Accessions";
import Requisitions from "../Shared Components/Requisitions";
import Complaints from "../Shared Components/Complaints";
//import {dropdowns} from "../Filters/Filters";
import { useState } from "react";
import DateRange from "./DateRange";

/*
----------------------------- Notes -------------------------------------
This page displays historic dashboard
*/

const History = () => {

  const timeframe = "historic";
  //state variables track filter/date range
  const [filter, setFilter] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Filters 
      filter={filter}
      setFilter={setFilter}
      />
      <DateRange startDate = {startDate} endDate = {endDate} setStartDate = {setStartDate} setEndDate = {setEndDate}/>
      </div>
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
