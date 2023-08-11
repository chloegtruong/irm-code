import { GetData } from "../../Services/GetData";
import {useState, useEffect} from "react";
import BarGraph from "./BarGraph";

/*
----------------------------- Notes -------------------------------------
This component displays the requisitions on both of the dashboards. 
*/

const Requisitions = ({timeframe, filter, startDate, endDate}) => {

    const [unsubmittedRequisitions, setUnsubmittedRequisitions] = useState(null);

    //function to get data
    useEffect (() => {
        const fetchData = () => {
            const data = GetData(timeframe);
            setUnsubmittedRequisitions(data.unsubmittedRequisitions);
        }

        fetchData();
    }, [timeframe]);

    //styling constants
    const unsubmittedTitle = {
        backgroundColor: '#BC2D0D',
        color: '#FFFFFF',
        margin: "5px",
    };

    const unsubmittedContent = {
        color: "#BC2D0D",
        fontSize: '20px',
        fontWeight: 'bold',
    };

    //Dummy data for bargraph 
    const barData = [
        {label: 'S', value: 8, color: '#1B75BC'},
        {label: 'M', value: 12, color: '#1B75BC'},
        {label: 'T', value: 20, color: '#1B75BC'},
        {label: 'W', value: 18, color: '#1B75BC'},
        {label: 'T', value: 19, color: '#1B75BC'},
        {label: 'F', value: 15, color: '#1B75BC'},
        {label: 'S', value: 10, color: '#1B75BC'},
    ];

    return(
        <div className="requisitions">
        <div className="card-header">
        <h3>Requisitions</h3>
        </div>
        {/* <p>Filter Applied: {filter}</p> */}
        {/* {startDate && endDate &&(
            <p>Date Range: {startDate} - {endDate}</p>
        )} */}
        <p style={unsubmittedTitle}>Unsubmitted Requisitions: </p>
        <p style = {unsubmittedContent}>{unsubmittedRequisitions}</p>
        <BarGraph data = {barData}/>
        </div>
    );
};

export default Requisitions;