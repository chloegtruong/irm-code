import { useEffect, useState } from "react";
import { GetData } from "../../Services/GetData";

const Complaints = ({timeframe}) => {

    const [openComplaints, setOpenComplaints] = useState(null);
    const [unansweredComplaints, setUnansweredComplaints] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            //const timeframe = "historic";
            const data = GetData(timeframe);
            setOpenComplaints(data.openComplaints);
            setUnansweredComplaints(data.unansweredComplaints);
        };

        fetchData();
    }, [timeframe]);

    return(
        <div>
        <h3>Complaints</h3>
        <p>Open Complaints: {openComplaints}</p>
        <p>Unanswered Complaints: {unansweredComplaints}</p>
        </div>
    );
};

export default Complaints;