import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { GetData } from "../../Services/GetData";

/*
----------------------------- Notes -------------------------------------
This page displays the warmup requests in the current dashboard
*/

const WarmupRequests = ({filter}) => {

    const [openWarmupRequests, setOpenWarmupRequests] = useState(null);
    const [oldWarmupRequests, setOldWarmupRequests] = useState(null);

    //function to get data
    useEffect (() => {

        const fetchData = () => {

            const timeframe = "current"; // always current time frame in this file
            const data = GetData(timeframe);
            setOpenWarmupRequests(data.openWarmupRequests);
            setOldWarmupRequests(data.oldWarmupRequests);
        };

        fetchData();
    }, []);


    //styling constants
    const titleStyle = {
        backgroundColor: "white",
        color: '#000000',
    };

    const itemStyle = {
        backgroundColor: "white",
        color: '#000000',
        fontSize: '32px',
        fontWeight: 'bold',
    }

    const boxStyle = {
        backgroundColor: "white",
    }

    const headerStyle = {
        color: 'white',
        justifyContent: 'center',
        display: 'flex',
    }

    return(
        <div className="warmup-requests">
        <div className="card-header">
        <h3 style ={headerStyle}>Warmup Requests</h3>
        </div>
        {/* <p>Filter Applied: {filter}</p> */}
        <div style = {boxStyle}>
            <p style = {titleStyle}>Open Requests:</p>
            <p style = {itemStyle}>{openWarmupRequests}</p> 
        </div>
        <br/>
        <div style = {boxStyle}>
            <p style={titleStyle}>Requests beyond 1 hr:</p>
            <p style = {itemStyle}> {oldWarmupRequests}</p>
        </div>
        </div>
    );
};

export default WarmupRequests;
