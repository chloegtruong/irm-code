import { useEffect, useState } from "react";
import { GetData } from "../../Services/GetData";
import LineGraph from "./LineGraph";

/*
----------------------------- Notes -------------------------------------
This component displays the complaints on both dashboards.
*/

const Complaints = ({timeframe, filter, startDate, endDate}) => {

    // state variables to store getData values
    const [openComplaints, setOpenComplaints] = useState(null);
    const [unansweredComplaints, setUnansweredComplaints] = useState(null);

    // function to get data
    useEffect(() => {
        const fetchData = () => {
            //const timeframe = "historic";
            const data = GetData(timeframe);
            setOpenComplaints(data.openComplaints);
            setUnansweredComplaints(data.unansweredComplaints);
        };

        fetchData();
    }, [timeframe]);

    //styling constants
    const openBullet = {
        color: '#BC2D0D',
        fontSize: '75px',
        marginRight: '8px',
        lineHeight: '0.5',
    };

    const unansweredBullet = {
        color: '#FFA840',
        fontSize: '75px',
        marginRight: '8px',
        lineHeight: '0.5',
    };

    // Dummy data for line graph
    const openData = [0, 2, 5, 10, 3, 1, 17];
    const unansweredData = [0, 10, 5, 0, 19, 9, 4];

    //set sizing
    const graphWidth = 300;
    const graphHeight = 150;

    return(
        <div className="complaints">
        <div className="card-header">
        <h3>Complaints</h3>
        </div>
        {/* <p>Filter Applied: {filter}</p> */}
        {/* {startDate && endDate &&(
            <p>Date Range: {startDate} - {endDate}</p>
        )} */}
        <LineGraph data1 = {openData} data2 = {unansweredData} width = {graphWidth} height = {graphHeight}/>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <p style={openBullet}>•</p>
            <p>Open Complaints: {openComplaints}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <p style={unansweredBullet}>•</p>
            <p>Unanswered Complaints: {unansweredComplaints}</p>
        </div>
        </div>
    );
};

export default Complaints;