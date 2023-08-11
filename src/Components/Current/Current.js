import Filters from "../Filters/Filters";
import Accessions from "../Shared Components/Accessions";
import Complaints from "../Shared Components/Complaints";
import OrderItems from "../Current/OrderItems";
import Requisitions from "../Shared Components/Requisitions";
import Scans from "./Scans";
import WarmupRequests from "../Current/WarmupRequests";
import { useState } from 'react';

/*
----------------------------- Notes -------------------------------------
This page holds the current dashboard.
*/

const Current = () => {

  const timeframe = "current"; //set timeframe
  const [filter, setFilter] = useState(null); //state variable to get/get filters
  
  return (
    <div>
      <Filters 
      filter = {filter}
      setFilter = {setFilter}/>
      <div className = "row">
        <OrderItems filter = {filter}/>
        <Scans timeframe = {timeframe} filter = {filter}/>
        <WarmupRequests filter = {filter}/>
      </div>
      <div className = "row">
        <Accessions timeframe = {timeframe} filter = {filter}/>
        <Requisitions timeframe = {timeframe} filter = {filter}/>
        <Complaints timeframe = {timeframe} filter = {filter}/>
      </div>
    </div>
  );
};

export default Current;
