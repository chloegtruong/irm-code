import { useEffect, useState } from "react";
import { GetData } from "../../Services/GetData";

const Scans = () => {

    const [totalScans, setTotalScans] = useState(null);
    const [automatchedScans, setAutomatchedScans] = useState(null);
    const [manualMatchedScans, setManualMatchedScans] = useState(null);
    const [deletedScans, setDeletedScans] = useState(null);

    useEffect (() => {
        const fetchData = () => {
            const timeframe = "historic";
            const data = GetData(timeframe);
            setTotalScans(data.totalScans);
            setAutomatchedScans(data.automatchedScans);
            setManualMatchedScans(data.manualMatchedScans);
            setDeletedScans(data.deletedScans);
        }

        fetchData();
    }, []);

    return(
        <div>
            <h3>Scans</h3>
            <p>Total: {totalScans}</p>
            <p>Auto-Matched: {automatchedScans}</p>
            <p>Manually Matched: {manualMatchedScans}</p>
            <p>Deleted: {deletedScans}</p>
        </div>
    );
}; 

export default Scans;