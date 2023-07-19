import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Current from "./Components/Current/Current";
import History from "./Components/History/History";
import NavMenu from "./Components/NavMenu/NavMenu";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route path="/" element={<Navigate to="/current" replace />} />
        <Route path="/current" element={<Current />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
