import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./HomeComponenet/Homepages/Homepage";
import Login from "./HomeComponenet/Homepages/Login";
import Register from "./HomeComponenet/Homepages/Register";
// import Dashboard from "./DashboardComponent/Dashboard";

import DashboardHome from "./DashboardComponent/DashboardHome";
import Upgrade from "./DashboardComponent/Upgrade";
import Statement from "./DashboardComponent/Statement";
import Payment from "./DashboardComponent/Payment";
import Purchase from "./DashboardComponent/Purchase";
import Referrals from "./DashboardComponent/Referrals";
import ApiDocument from "./DashboardComponent/ApiDocumentation";
import Airtime from "./DashboardComponent/Airtime";
import Activity from "./DashboardComponent/Activity";
import Paystack from "./DashboardComponent/PayStack";
import Monify from "./DashboardComponent/Monify";
import DataBundle from "./DashboardComponent/DataBundle";
import AirtimeBundle from "./DashboardComponent/AirtimeBundle";
import DataCard from "./DashboardComponent/DataCard";
import TvSub from "./DashboardComponent/TvSub";
import Electricity from "./DashboardComponent/Electricity";
import Waec from "./DashboardComponent/Waec";
import Neco from "./DashboardComponent/Neco";
import Napteb from "./DashboardComponent/Napteb";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

            <Route path="/DashboardHome" element={<DashboardHome />} />
            <Route path="/Upgrade" element={<Upgrade />} />
            <Route path="/Statement" element={<Statement />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Purchase" element={<Purchase />} />
            <Route path="/Referrals" element={<Referrals />} />
            <Route path="/Activity" element={<Activity />} />
            <Route path="/ApiDocument" element={<ApiDocument />} />
            <Route path="/Airtime" element={<Airtime />} />
            <Route path="/Paystack" element={<Paystack />} />
            <Route path="/Monify" element={<Monify />} />
            <Route path="/DataBundle" element={<DataBundle />} />
            <Route path="/AirtimeBundle" element={<AirtimeBundle />} />
            <Route path="/DataCard" element={<DataCard />} />
            <Route path="/TvSub" element={<TvSub />} />
            <Route path="/Electricity" element={<Electricity />} />
            <Route path="/Waec" element={<Waec />} />
            <Route path="/Neco" element={<Neco />} />
            <Route path="/Napteb" element={<Napteb />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
