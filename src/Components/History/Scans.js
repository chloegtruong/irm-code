import { GetData } from "../../Services/GetData";
import {useState, useEffect} from "react";
import PieChart from "../Shared Components/PieChart";

/*
----------------------------- Notes -------------------------------------
This page displays the scans in the historic dashboard,
It inherits timeframe, filters, and date ranges from the history dashboard. 
*/

const Scans = ({timeframe, filter, startDate, endDate}) => {

    //use state variables to access GetData
    const [autoMatchedScans, setautoMatchedScans] = useState(null);
    const [manualMatchedScans, setmanualMatchedScans] = useState(null);
    const [deletedScans, setdeletedScans] = useState(null);

    //function to get data
    useEffect (() => {
        const fetchData = () => {
            const data = GetData(timeframe);
            setautoMatchedScans(data.automatchedScans);
            setmanualMatchedScans(data.manualMatchedScans);
            setdeletedScans(data.deletedScans);
        };

        fetchData(); //function call
    }, [timeframe]);

    //styling constants
    const pieData = [
        {value: autoMatchedScans, color: '#28865E'},
        {value: manualMatchedScans, color: '#1B75BC'},
        {value: deletedScans, color: '#BC2D0D'}
    ];

    const autoBullet = {
        color: '#28865E',
        fontSize: '75px',
        marginRight: '8px',
        lineHeight: '0.25',
    };

    const manualBullet = {
        color: '#1B75BC',
        fontSize: '75px',
        marginRight: '8px',
        lineHeight: '0.25',
    };

    const deletedBullet = {
        color: '#BC2D0D',
        fontSize: '75px',
        marginRight: '8px',
        lineHeight: '0.25',
    }; 

    return(
        <div className="scans">
        <div className="card-header">
        <h3>Scans</h3>
        </div>
        {/* <p>Filter Applied: {filter}</p> */}
        {/* {startDate && endDate &&(
            <p>Date Range: {startDate} - {endDate}</p>
        )} */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr' }}>
            <PieChart data = {pieData}/>
            <div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <p style={autoBullet}>•</p>
                    <p>Auto-Matched: {autoMatchedScans}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <p style = {manualBullet}>•</p>
                    <p>Manually Matched: {manualMatchedScans}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <p style = {deletedBullet}>•</p>
                    <p>Deleted: {deletedScans}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Scans;
