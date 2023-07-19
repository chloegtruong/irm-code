import Filters from "../Filters/Filters";
import Accessions from "../Current/Accessions";
import Complaints from "../Current/Complaints";
import OrderItems from "../Current/OrderItems";
import Requisitions from "../Current/Requisitions";
import Scans from "../Current/Scans";
import WarmupRequests from "../Current/WarmupRequests";

const Current = () => {
  return (
    <div>
      <Filters />
      <h3>Current dashboard goes here</h3>
      <OrderItems/>
      <Scans />
      <WarmupRequests/>
      <Accessions/>
      <Requisitions/>
      <Complaints/>
    </div>
  );
};

export default Current;
