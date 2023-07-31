import { useEffect, useState } from "react";
import { GetData } from "../../Services/GetData";

const OrderItems = () => {

    const [orders, setOrders] = useState(null);
    const [completedOrders, setCompletedOrders] = useState(null);
    const [cancelledOrders, setCancelledOrders] = useState(null);
    const [slaCompliantOrders, setSlaCompliantOrders] = useState(null);
    const [slaViolativeOrders, setSlaViolativeOrders] = useState(null);

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

    return(
        <div className="component">
            <h3>Order Items</h3>
            <p>Total Items: {orders}</p>
            <p>Completed: {completedOrders}</p>
            <p>Cancelled: {cancelledOrders}</p>
            <p>Order items within SLA: {slaCompliantOrders}</p>
            <p>Order items outside SLA: {slaViolativeOrders}</p>
        </div>
    );
}; 

export default OrderItems;