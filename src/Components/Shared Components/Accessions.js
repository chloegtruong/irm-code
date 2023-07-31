import { GetData } from "../../Services/GetData";
import {useState, useEffect} from "react";


const Accessions = () => {

    const [numViewsYesterday, setNumViewsYesterday] = useState(null);
    const [numViewsToday, setNumViewsToday] = useState(null);
    const [numViewsByPathologistYesterday, setNumViewsByPathologistYesterday] = useState(null);// i cant think of better var names
    const [numViewsByPathologistToday, setNumViewsByPathologistToday] = useState(null);

    useEffect (() => {
        const fetchData = () => {
            const timeframe = "historic"; // always historic time frame in this file
            const data = GetData(timeframe);
            setNumViewsYesterday(data.numViewsYesterday);
            setNumViewsToday(data.numViewsToday);
            setNumViewsByPathologistYesterday(data.numViewsByPathologistYesterday);
            setNumViewsByPathologistToday(data.numViewsByPathologistToday);
        };

        fetchData();
    }, []);

    return(
        <div className = "component">
        <h3>Accessions</h3>
        <h6>Viewed Accessions over last xx days</h6>
        <p>Yesterday: {numViewsYesterday}</p>
        <p>Today: {numViewsToday}</p>
        <h6>Viewed by Pathologist</h6>
        <p>Yesterday: {numViewsByPathologistYesterday}</p>
        <p>Today: {numViewsByPathologistToday}</p>
        </div>
    );
};

export default Accessions;