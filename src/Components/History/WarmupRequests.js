import { useEffect, useState } from "react";
import { GetData } from "../../Services/GetData";

const WarmupRequests = ({filter, startDate, endDate}) => {

    const [openWarmupRequests, setOpenWarmupRequests] = useState(null);
    const [oldWarmupRequests, setOldWarmupRequests] = useState(null);

    useEffect (() => {

        const fetchData = () => {

            const timeframe = "historic"; // always hisoric time frame in this file
            const data = GetData(timeframe);
            setOpenWarmupRequests(data.openWarmupRequests);
            setOldWarmupRequests(data.oldWarmupRequests);
        };

        fetchData();
    }, []);

    return(
        <div className="component">
        <h3>Warmup Requests</h3>
        <p>Filter Applied: {filter}</p>
        <p>Date Range: {startDate} - {endDate}</p>
        <p>Open Requests: {openWarmupRequests}</p>
        <p>Requests beyond 1 hr: {oldWarmupRequests}</p>
        </div>
    );
};

export default WarmupRequests;