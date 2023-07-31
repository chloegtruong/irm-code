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
  const [filterApplied, setFilterApplied] = useState(1);

  //const [coe, setCOE] = useState(null);

  // useEffect (() => {
  //   const getFilter = () => {
  //     const allFilters = dropdowns();
  //     setCOE(allFilters.dropdown1);
  //   }

  //   getFilter();
  // }, []);

  return (
    <div>
      <Filters 
      filterApplied={filterApplied}
      setFilterApplied={setFilterApplied}
      />
      <p>{filterApplied}</p>
      <h3>History dashboard goes here</h3>
      <div className = "row">
        <OrderItems/>
        <Scans timeframe = {timeframe}/>
        <WarmupRequests/>
      </div>
      <div className = "row">
        <Accessions timeframe = {timeframe}/>
        <Requisitions timeframe = {timeframe}/>
        <Complaints timeframe = {timeframe}/>
      </div>
    </div>
  );
};

export default History;
