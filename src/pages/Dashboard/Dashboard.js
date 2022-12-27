import React from "react";
import styles from "./dashboard.module.css";

import "./dashboard.css";
import { Card } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { GiSparkles } from 'react-icons/gi';

import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useEffect } from "react";

const Dashboard = () => {
  // ====================>>>>>>>>>>>>>>>User Greeting=======================>
  const [time] = useState(new Date().getHours());
  const [date] = useState(new Date());
  const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = days[date.getDay()];
  const n = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const cookies = new Cookies();
  // ====================>>>>>>>>>>>>>>>User Greeting=======================>

  // ====================>>>>>>>>>>>>>>>Routing Based Content Serving=======================>
  const location = useLocation();
  let path = location.pathname;

  // ====================>>>>>>>>>>>>>>>Routing Based Content Serving=======================>
  // http://localhost:3001/login
  const fetchuser=async()=>{
    const authToken = cookies.get("TOKEN");
    const res = await axios.get("http://localhost:3001/dashboard",{
      headers: {
        Authorization: `Bearer ${authToken}`,
        withCredentials: true,
      }
    })
    return res
  }

  useEffect(() => {
    fetchuser()
  }, [])
  
  
  return (
    <div className="container-fluid gx-0 d-flex h-100">
      {/* //sidebar */}
      <Sidebar />
      {/* //main */}
      <div className={`container-fluid  gx-0 ${styles.main} pt-4`}>
        {path === "/userdashboard" ? (
          <div className="container py-3">
            <div className="container-fluid rounded  greeting_card ">
              <div className="row">
                <div className="col-md-12 py-3">
                  <h5 className="text-white">
                    {day} , {month}{" "}
                    {n +
                      (n > 0
                        ? ["th", "st", "nd", "rd"][
                            (n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10
                          ]
                        : "")}{" "}
                    {year}
                  </h5>
                  <h2 className="greeting">
                    Good {time < 12 ? "Evening": "Morning"}  Name <GiSparkles/>
                  </h2>
                  <p className="instruction_para">
                    You Can Now Upload Documents For Verification
                  </p>
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
