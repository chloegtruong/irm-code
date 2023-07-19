import { GetData } from "../../Services/GetData";
import {useState, useEffect} from "react";


const Accessions = () => {

    const [viewedAccessionsY, setViewedAccessionsY] = useState(null);
    const [viewedAccessionsT, setViewedAccessionsT] = useState(null);
    const [viewedAccessionsByPathologistY, setViewedAccessionsByPathologistY] = useState(null);// i cant think of better var names
    const [viewedAccessionsByPathologistT, setViewedAccessionsByPathologistT] = useState(null);

    useEffect (() => {
        const fetchData = () => {
            const timeframe = "current"; // always current time frame in this file
            const data = GetData(timeframe);
            setViewedAccessionsY(data.viewedAccessionsY);
            setViewedAccessionsT(data.viewedAccessionsT);
            setViewedAccessionsByPathologistY(data.viewedAccessionsY);
            setViewedAccessionsByPathologistT(data.viewedAccessionsByPathologistT);
        };

        fetchData();
    }, []);

    return(
        <div>
        <h3>Accessions</h3>
        <h6>Viewed Accessions over last xx days</h6>
        <p>Yesterday: {viewedAccessionsY}</p>
        <p>Today: {viewedAccessionsT}</p>
        <h6>Viewed by Pathologist</h6>
        <p>Yesterday: {viewedAccessionsByPathologistY}</p>
        <p>Today: {viewedAccessionsByPathologistT}</p>
        </div>
    );
};

export default Accessions;