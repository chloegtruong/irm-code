//import GetData from "../Services/GetData";

import { useEffect, useState } from "react";
import { GetData } from "../../Services/GetData";

const OrderItems = () => {

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

    return(
        <div className = "component">
        <h3>Order Items</h3>
        {/* using table to organize for now */}
        <table>
            <tr>
            <td>Open items</td>
            <td>Completed Today</td>
            <td>Cancelled Today</td>
            </tr>
            <tr>
                {openOrders != null ? (
                    <td>{openOrders}</td>
                ) : (
                    <td>N/A</td>
                )}

                {completedOrders != null ? (
                    <td>{completedOrders}</td>
                ) : (
                    <td>N/A</td>
                )}
                
                {cancelledOrders != null ? (
                    <td>{cancelledOrders}</td>
                ) : (
                    <td>N/A</td>
                )}

            </tr>
        </table>
        <p>Prior day orders (4+ hrs old): {oldOrders}</p>
        <p>Same day orders (4+ hours old): {sameDayOrders}</p>
        </div>
    );
};

export default OrderItems;