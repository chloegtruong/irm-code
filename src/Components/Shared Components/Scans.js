import { GetData } from "../../Services/GetData";
import {useState, useEffect} from "react";


const Scans = ({timeframe, filter, startDate, endDate}) => {

    //use state variables to access GetData
    const [openScans, setOpenScans] = useState(null);
    const [orphanedScans, setOrphanedScans] = useState(null);
    const [totalScans, setTotalScans] = useState(null);

    //function to get data
    useEffect (() => {
        const fetchData = () => {
            const data = GetData(timeframe);
            setOpenScans(data.openScans);
            setOrphanedScans(data.orphanedScans);
            setTotalScans(data.totalScans);
        };

        fetchData(); //function call
    }, [timeframe]);

    return(
        <div className="component">
        <h3>Scans</h3>
        <p>Filter Applied: {filter}</p>
        {startDate && endDate &&(
            <p>Date Range: {startDate} - {endDate}</p>
        )}
        <p>Total Scans: {totalScans}</p>
        <p>Open Scans (4+ hours old): {openScans}</p>
        <p>Unattached Scans (4+ hours old): {orphanedScans}</p>
        </div>
    );
};

export default Scans;