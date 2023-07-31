import { GetData } from "../../Services/GetData";
import {useState, useEffect} from "react";

const Requisitions = ({timeframe, filter, startDate, endDate}) => {

    const [unsubmittedRequisitions, setUnsubmittedRequisitions] = useState(null);

    useEffect (() => {
        const fetchData = () => {
            const data = GetData(timeframe);
            setUnsubmittedRequisitions(data.unsubmittedRequisitions);
        }

        fetchData();
    }, [timeframe]);

    return(
        <div className="component">
        <h3>Requisitions</h3>
        <p>Filter Applied: {filter}</p>
        {startDate && endDate &&(
            <p>Date Range: {startDate} - {endDate}</p>
        )}
        <p>Unsubmitted Requisitions: {unsubmittedRequisitions}</p>
        </div>
    );
};

export default Requisitions;