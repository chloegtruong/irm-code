import { GetData } from "../../Services/GetData";
import {useState, useEffect} from "react";


const Scans = () => {

    //use state variables to access GetData
    const [openScans, setOpenScans] = useState(null);
    const [orphanedScans, setOrphanedScans] = useState(null);
    const [totalScans, setTotalScans] = useState(null);

    //function to get data
    useEffect (() => {
        const fetchData = () => {
            const timeframe = "current"; // always current time frame in this file
            const data = GetData(timeframe);
            setOpenScans(data.openScans);
            setOrphanedScans(data.orphanedScans);
            setTotalScans(data.totalScans);
        };

        fetchData(); //function call
    }, []);

    return(
        <div>
        <h3>Scans</h3>
        <p>Total Scans: {totalScans}</p>
        <p>Open Scans (4+ hours old): {openScans}</p>
        <p>Unattached Scans (4+ hours old): {orphanedScans}</p>
        </div>
    );
};

export default Scans;