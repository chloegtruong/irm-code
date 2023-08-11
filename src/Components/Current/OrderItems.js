import { useEffect, useState } from "react";
import { GetData } from "../../Services/GetData";

/*
----------------------------- Notes -------------------------------------
This page displays the order items in the current dashboard. 
*/

const OrderItems = ({filter}) => {

    //state variables for data points from GetData
    const [openOrders, setOpenOrders] = useState(null);
    const [completedOrders, setCompletedOrders] = useState(null);
    const [cancelledOrders, setCancelledOrders] = useState(null);
    const [oldOrders, setOldOrders] = useState(null);
    const [sameDayOrders, setSameDayOrders] = useState(null);


    //function to access data
    useEffect (() => {

        const fetchData = () =>{
            const timeframe = "current"; // always current time frame in this file
            const data = GetData(timeframe);
            setOpenOrders(data.openOrders);
            setCompletedOrders(data.completedOrders);
            setCancelledOrders(data.cancelledOrders);
            setOldOrders(data.oldOrders);
            setSameDayOrders(data.sameDayOrders);
        };

        fetchData(); // function call
    }, []);


    // style constants
    const openItemTitle = {
        backgroundColor: '#28865E',
        color: '#FFFFFF',
        margin: "5px",

    };

    const openItemContent = {
        color: "#28865E",
        fontSize: '20px',
        fontWeight: 'bold',
    };

    const completedItemTitle = {
        backgroundColor: '#1B75BC',
        color: '#FFFFFF',
        margin: "5px",
    };

    const completedItemContent = {
        color: "#1B75BC",
        fontSize: '20px',
        fontWeight: 'bold',
        
    };

    const cancelledItemTitle = {
        backgroundColor: '#BC2D0D',
        color: '#FFFFFF',
        margin: "5px",
    };

    const cancelledItemContent = {
        color: "#BC2D0D",
        fontSize: '20px',
        fontWeight: 'bold',
    };


    return(
        <div className = "order-items">
        <div className="card-header">
        <h3>Order Items</h3>
        </div>
        {/* <p>Filter applied: {filter}</p> */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <div>
                <p style = {openItemTitle}>Open items</p>
                {openOrders != null ? (
                    <p style={openItemContent}>{openOrders}</p>
                ) : (
                    <p>N/A</p>
                )}
            </div>
            <div>
            <p style = {completedItemTitle}>Completed Today</p>
            {completedOrders != null ? (
                    <p style = {completedItemContent}>{completedOrders}</p>
                ) : (
                    <p>N/A</p>
                )}
            </div>
            <div>
            <p style = {cancelledItemTitle}>Cancelled Today</p>
            {cancelledOrders != null ? (
                    <p style = {cancelledItemContent}>{cancelledOrders}</p>
                ) : (
                    <p>N/A</p>
                )}
            </div>
        </div>
        <p>Prior day orders (4+ hrs old): {oldOrders}</p>
        <hr/>
        <p>Same day orders (4+ hours old): {sameDayOrders}</p>
        </div>
    );
};

export default OrderItems;
