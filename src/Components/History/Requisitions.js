import { GetData } from "../../Services/GetData";
import {useState, useEffect} from "react";

const Requisitions = () => {

    const [unsubmittedRequisitions, setUnsubmittedRequisitions] = useState(null);

    useEffect (() => {
        const fetchData = () => {
            const timeframe = "historic";
            const data = GetData(timeframe);
            setUnsubmittedRequisitions(data.unsubmittedRequisitions);
        }

        fetchData();
    }, []);

    return(
        <div>
        <h3>Requisitions</h3>
        <p>Unsubmitted Requisitions: {unsubmittedRequisitions}</p>
        </div>
    );
};

export default Requisitions;