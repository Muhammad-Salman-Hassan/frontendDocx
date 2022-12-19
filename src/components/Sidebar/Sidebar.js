import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { IoDocuments } from "react-icons/io5";
import styles from "./Sidebar.module.css";

import fuuastlogo from "../../images/fuusat.png";
const Sidebar = () => {
  return (
    <div class="d-flex flex-column flex-shrink-0  sidebar">
        
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
              to="/userdashboard"
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
              to="verification"
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
              to="progress"
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
              <Link class="dropdown-item" to="profile">
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
  )
}

export default Sidebar