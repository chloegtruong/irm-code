import { GetData } from "../../Services/GetData";
import {useState, useEffect} from "react";
import PieChart from "../Shared Components/PieChart";

/*
----------------------------- Notes -------------------------------------
This page displays the scans in the current dashboard
*/

const Scans = ({timeframe, filter}) => {

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


    // style for bullet points
    const pieData = [
        {value: openScans, color: '#BC2D0D'},
        {value: orphanedScans, color: '#1B75BC'},
    ];

    const openBullet = {
        color: '#BC2D0D',
        fontSize: '75px',
        marginRight: '8px',
        lineHeight: '0.5',
    };

    const orphanedBullet = {
        color: '#1B75BC',
        fontSize: '75px',
        marginRight: '8px',
        lineHeight: '0.5',
    };

    return(
        <div className="scans">
        <div className="card-header">
        <h3>Scans</h3>
        </div>
        {/* <p>Filter Applied: {filter}</p> */}
        <p>Total Scans: {totalScans}</p>
        {/* all divs are formatting */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr' }}>
            <PieChart data = {pieData}/>
            <div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <p style={openBullet}>•</p>
                <p>Open Scans (4+ hours old): {openScans}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <p style = {orphanedBullet}>•</p>
                <p>Unattached Scans (4+ hours old): {orphanedScans}</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Scans;
