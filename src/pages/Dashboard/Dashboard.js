import React from "react";
import styles from "./dashboard.module.css";


import "./dashboard.css";
import { Card } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container-fluid h-100 w-100 bg-danger gx-0 d-flex">
      {/* //sidebar */}
     <Sidebar/>      
      {/* //main */}
      <div className={`container-fluid  gx-0 ${styles.main} `}>
          <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
