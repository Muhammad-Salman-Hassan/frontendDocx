import React from "react";
import styles from "./dashboard.module.css";

import "./dashboard.css";
import { Card } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  
  // ====================>>>>>>>>>>>>>>>User Greeting=======================>
  const [time, settime] = useState(new Date().getHours())
  // ====================>>>>>>>>>>>>>>>User Greeting=======================>

  // ====================>>>>>>>>>>>>>>>Routing Based Content Serving=======================>
  const location = useLocation();
  let path = location.pathname;

  // ====================>>>>>>>>>>>>>>>Routing Based Content Serving=======================>
 


  
 
  return (
    <div className="container-fluid gx-0 d-flex h-100">
      {/* //sidebar */}
      <Sidebar />
      {/* //main */}
      <div className={`container-fluid  gx-0 ${styles.main} pt-4`}>
        {path === "/userdashboard" ? (
          <div className="container ">
            <div className="container-fluid rounded  greeting_card">
              <div className="row">
                <div className="col-md-12 py-3">
                  <h1 className="greeting">Good {time<10?"Morning":"Evening"} Name</h1>
                  <p className="instruction_para">You Can Now Upload Documents For Verification</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
