import React from "react";
import styles from "./dashboard.module.css";
import { AiFillHome } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { IoDocuments } from "react-icons/io5";
import { Link } from "react-router-dom";
import fuuastlogo from "../../images/fuusat.png";

import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="container-fluid h-100 w-100 bg-danger gx-0 d-flex">
      {/* //sidebar */}
      {/* <div className={`container-fluid gx-0 ${styles.sidebar}`}>
        <div className={`${styles.sidebar_wrapper}`}>
          <div className={`${styles.logoWrapper}`}>
            <Link
              to="/"
              className="d-flex justify-content-center align-item-center"
            >
              <img src={fuuastlogo} alt="" className="w-75 h-75 " />
            </Link>
          </div>

          <div className={`${styles.iconwrapper}`}>
            <Link to="/userdashboard">
              <i>
                <AiFillHome
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Home"
                  className={`${styles.navicon}`}
                />
              </i>
            </Link>

            <i>
              <IoDocuments
                data-toggle="tooltip"
                data-placement="right"
                title="Upload Documnets"
                className={`${styles.navicon}`}
              />
            </i>

            <i>
              <GiProgression
                data-toggle="tooltip"
                data-placement="right"
                title="Progress"
                className={`${styles.navicon}`}
              />
            </i>
          </div>
        </div>
      </div> */}
      <div class="d-flex flex-column flex-shrink-0  sidebar">
        {/* style="width: 4.5rem;" */}
        <Link
          to="/"
          class="d-block p-3 link-dark text-decoration-none"
          title="Back To welcome page"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <Link
            to="/"
            className="d-flex justify-content-center align-item-center"
          >
            <img src={fuuastlogo} alt="" className="fuuastlogo" />
          </Link>
        </Link>
        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li class="nav-item">
            <Link
              to="#"
              class="nav-link active py-3 border-bottom rounded-0"
              aria-current="page"
              title="Home"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <i>
                <AiFillHome
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Home"
                  className={`${styles.navicon}`}
                />
              </i>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              class="nav-link py-3 border-bottom rounded-0"
              title="Documents Verification"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <i>
                <IoDocuments className={`${styles.navicon}`} />
              </i>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              class="nav-link py-3 border-bottom rounded-0"
              title="Check Your Progress"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <i>
                <GiProgression className={`${styles.navicon}`} />
              </i>
            </Link>
          </li>
        </ul>
        <div class="dropdown border-top">
          <Link
            to="#"
            class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="24"
              height="24"
              class="rounded-circle"
            />
          </Link>
          <ul class="dropdown-menu text-small shadow">
            <li>
              <Link class="dropdown-item" to="#">
                Profile
              </Link>
            </li>

            <li>
              <Link class="dropdown-item" to="#">
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* //main */}
      <div className={`container-fluid  ${styles.main}`}></div>
    </div>
  );
};

export default Dashboard;
