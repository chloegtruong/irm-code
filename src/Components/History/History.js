import Filters from "../Filters/Filters";
import OrderItems from "../History/OrderItems";
import Scans from "../Shared Components/Scans";
import WarmupRequests  from "../History/WarmupRequests";
import Accessions from "../Shared Components/Accessions";
import Requisitions from "../Shared Components/Requisitions";
import Complaints from "../Shared Components/Complaints";


const History = () => {

  const timeframe = "historic";

  return (
    <div>
      <Filters />
      <h3>History dashboard goes here</h3>
      <OrderItems/>
      <Scans timeframe = {timeframe}/>
      <WarmupRequests/>
      <Accessions timeframe = {timeframe}/>
      <Requisitions timeframe = {timeframe}/>
      <Complaints timeframe = {timeframe}/>

    </div>
  );
};

export default History;
