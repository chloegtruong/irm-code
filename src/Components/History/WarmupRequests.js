import { useEffect, useState } from "react";
import { GetData } from "../../Services/GetData";

const WarmupRequests = () => {

    const [openWarmupRequests, setOpenWarmupRequests] = useState(null);
    const [oldWarmupRequests, setOldWarmupRequests] = useState(null);

    useEffect (() => {

        const fetchData = () => {

            const timeframe = "historic"; // always current time frame in this file
            const data = GetData(timeframe);
            setOpenWarmupRequests(data.openWarmupRequests);
            setOldWarmupRequests(data.oldWarmupRequests);
        };

        fetchData();
    }, []);

    return(
        <div>
        <h3>Warmup Requests</h3>
        <p>Open Requests: {openWarmupRequests}</p>
        <p>Requests beyond 1 hr: {oldWarmupRequests}</p>
        </div>
    );
};

export default WarmupRequests;