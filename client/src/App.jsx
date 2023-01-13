import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/home/DashBoard";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App()
{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashBoard></DashBoard>}></Route>
            </Routes>
        </Router>
        
    );
}