import React from "react";
import styles from "./dashboard.module.css";

import "./dashboard.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { GiSparkles } from "react-icons/gi";

import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../../features/user/authSlice";
import Card from "../../components/Card/Card";
import Clearance from "../../components/ClearenceForm/Clearance";
var lastCookie = document.cookie;
console.log(lastCookie);
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

  // ====================>>>>.Fetching user Information>>>>>>>>>>>>>>>>>>>
  const [user, setuser] = useState([]);
  const dispatch = useDispatch();
  const token = cookies.get("isAuth");
  console.log("token",token)
  let axiostoken = axios.CancelToken.source();
  console.log(user);
  const fetchuser = async () => {
    // console.log(token);
    try {
      const response = await axios.get(
        "http://localhost:3001/dashboard",
        {
          withCredentials: true,
        },
        { axiostoken: axiostoken.token }
      );

      const data = response.data.singleuser;

      setuser([data]);

      
    } catch (error) {
      // if (axios.isCancel(error)) {
        console.log("canceled");
      // }
    }
  };

  // useEffect(() => {
  //   if (token !== undefined) {
      
  //     fetchuser();
  //   } else {
  //     console.log("error");
  //   }

  //   // ============================>>>>>>>>>>>>>>>>>CleanUp Function with axios.CancelToken<<<<<<<<<<<<<<<<<<<<<=====================================
  //   return () => {
  //     axiostoken.cancel();
  //   };
  // }, [token]);

  useEffect(() => {
    fetchuser();
    dispatch(setAuth(user));
  }, []);

  return (
    <div className="container-fluid gx-0 d-flex h-100 dashboardbg">
      {/* //sidebar */}
      <Sidebar user={user} />
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
                    Good {time < 12 ? "Evening" : "Morning"}{" "}
                    {user.map((element) => {
                      return element.name;
                    })}
                    {/* <GiSparkles /> */}
                  </h2>
                  <p className="instruction_para">
                    You Can Now Upload Documents For Verification
                  </p>
                </div>
              </div>
            </div>
            <div className="container-fluid gx-0 mt-4 rounded ">
              <div className="row">
                <div className="application_form col-md-8 col-sm-12 col-lg-8 ">
                  <Clearance user={user}/>
                </div>
                <div className="actions col-md-4 col-sm-12 col-lg-4 ">
                  <button class="btn bg-light w-100" disabled type="button">
                    Apply For Degree
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Outlet user={user} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
