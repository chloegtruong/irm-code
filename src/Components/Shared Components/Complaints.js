import { useEffect, useState } from "react";
import { GetData } from "../../Services/GetData";

const Complaints = ({timeframe, filter, startDate, endDate}) => {

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
        <div className="component">
        <h3>Complaints</h3>
        <p>Filter Applied: {filter}</p>
        {startDate && endDate &&(
            <p>Date Range: {startDate} - {endDate}</p>
        )}
        <p>Open Complaints: {openComplaints}</p>
        <p>Unanswered Complaints: {unansweredComplaints}</p>
        </div>
    );
};

export default Complaints;