import { useEffect, useState } from "react";
import { GetData } from "../../Services/GetData";

/*
----------------------------- Notes -------------------------------------
This page displays the order items in the historic dashboard.
It inherits filters and date ranges from the history dashboard. 
*/

const OrderItems = ({filter, startDate, endDate}) => {

    //state variables to get/store data
    const [openOrders, setOrders] = useState(null);
    const [completedOrders, setCompletedOrders] = useState(null);
    const [cancelledOrders, setCancelledOrders] = useState(null);
    const [slaCompliantOrders, setSlaCompliantOrders] = useState(null);
    const [slaViolativeOrders, setSlaViolativeOrders] = useState(null);

    //function to get data
    useEffect (() => {
        const fetchData = () => {
            const timeframe = "historic";
            const data = GetData(timeframe);
            setOrders(data.orders);
            setCompletedOrders(data.completedOrders);
            setCancelledOrders(data.cancelledOrders);
            setSlaCompliantOrders(data.slaCompliantOrders);
            setSlaViolativeOrders(data.slaViolativeOrders);
        }

        fetchData();
    }, []);

    //styling constants
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
        <div className="order-items">
            <div className="card-header">
            <h3>Order Items</h3>
            </div>
            {/* <p>Filter Applied: {filter}</p> */}
            {/* <p>Date Range: {startDate} - {endDate}</p> */}
            {/* divs to format */}
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
            <p>Order items within SLA: {slaCompliantOrders}</p>
            <hr/>
            <p>Order items outside SLA: {slaViolativeOrders}</p>
        </div>
    );
}; 

export default OrderItems;
