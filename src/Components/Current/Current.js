import Filters from "../Filters/Filters";
import Accessions from "../Shared Components/Accessions";
import Complaints from "../Shared Components/Complaints";
import OrderItems from "../Current/OrderItems";
import Requisitions from "../Shared Components/Requisitions";
import Scans from "../Shared Components/Scans";
import WarmupRequests from "../Current/WarmupRequests";

const Current = () => {

  const timeframe = "current";

  return (
    <div>
      <Filters />
      <h3>Current dashboard goes here</h3>
      <OrderItems/>
      <Scans timeframe = {timeframe}/>
      <WarmupRequests/>
      <Accessions timeframe = {timeframe}/>
      <Requisitions timeframe = {timeframe}/>
      <Complaints timeframe = {timeframe}/>
    </div>
  );
};

export default Current;
