import { GetData } from "../../Services/GetData";
import {useState, useEffect} from "react";
import BarGraph from "./BarGraph";

/*
----------------------------- Notes -------------------------------------
This page displays the accessions card in both dashboards. It inherits 
filters and timeframe from the current or histpric dashboard.
*/

const Accessions = ({timeframe, filter, startDate, endDate}) => {

    //state variables to get/store data
    const [numViewsYesterday, setNumViewsYesterday] = useState(null);
    const [numViewsToday, setNumViewsToday] = useState(null);
    const [numViewsByPathologistYesterday, setNumViewsByPathologistYesterday] = useState(null);// i cant think of better var names
    const [numViewsByPathologistToday, setNumViewsByPathologistToday] = useState(null);

    //function to get data from GetData.js
    useEffect (() => {
        const fetchData = () => {
            //const timeframe = "historic"; // always historic time frame in this file
            const data = GetData(timeframe);
            setNumViewsYesterday(data.numViewsYesterday);
            setNumViewsToday(data.numViewsToday);
            setNumViewsByPathologistYesterday(data.numViewsByPathologistYesterday);
            setNumViewsByPathologistToday(data.numViewsByPathologistToday);
        };

        fetchData();
    }, [timeframe]);

    //styling constants
    const viewAccessionsData = [
        {label: 'yesterday', value: numViewsYesterday, color: '#C8DEF5'},
        {label: 'today', value: numViewsToday, color: '#1B75BC'},
    ];

    const viewByPathologistData =  [
        {label: 'yesterday', value: numViewsByPathologistYesterday, color: '#BEACD6'},
        {label: 'today', value: numViewsByPathologistToday, color: '#6A26C2'},
    ];

    return(
        <div className = "accessions">
        <div className="card-header">
        <h3>Accessions</h3>
        </div>
        {/* <p>Filter Applied: {filter}</p> */}
        {/* {startDate && endDate &&(
            <p>Date Range: {startDate} - {endDate}</p>
        )} */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <div>
                <h7>Viewed Accessions over last xx days</h7>
                <br/>
                <BarGraph data = {viewAccessionsData}/>
                <p>Yesterday: {numViewsYesterday}</p>
                <p>Today: {numViewsToday}</p>
            </div>
            <div>
                <h7>Viewed by Pathologist over last xx days</h7>
                <br/>
                <BarGraph data = {viewByPathologistData}/>
                <p>Yesterday: {numViewsByPathologistYesterday}</p>
                <p>Today: {numViewsByPathologistToday}</p>
            </div>
        </div>
        </div>
    );
};

export default Accessions;
