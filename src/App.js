import "./App.css";
import Current from "./Components/Current/Current";
import History from "./Components/History/History";
import NavMenu from "./Components/NavMenu/NavMenu";
import { useState,useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router";

function App() {

  //tracking current or history
  const [timeframe, setTimeFrame] = useState({
    current : false,
    historic: false,
  });

  const location = useLocation();

  useEffect(() => {

    setTimeFrame({ // sets current/history true if it is the active link
      current: location.pathname==='/current',
      historic: location.pathname === '/history',
    })
    //console.log("in setTimeFrame");

  }, [location]);


  return (
    <div className="App">
      {/* <p>{timeframe.current}</p> */}
      <NavMenu timeframe = {timeframe} setTimeFrame = {setTimeFrame}/>
      <Routes>
        <Route path="/" element={<Navigate to="/current" replace />} />
        <Route path="/current" element={<Current />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
