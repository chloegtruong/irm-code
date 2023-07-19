import Filters from "../Filters/Filters";
import OrderItems from "../History/OrderItems";
import Scans from "../History/Scans";
import WarmupRequests  from "../History/WarmupRequests";
import Accessions from "../History/Accessions";
import Requisitions from "../History/Requisitions";
import Complaints from "../History/Complaints";


const History = () => {
  return (
    <div>
      <Filters />
      <h3>History dashboard goes here</h3>
      <OrderItems/>
      <Scans/>
      <WarmupRequests/>
      <Accessions/>
      <Requisitions/>
      <Complaints/>

    </div>
  );
};

export default History;
