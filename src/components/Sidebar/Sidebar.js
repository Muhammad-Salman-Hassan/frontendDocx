import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { IoDocuments } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import styles from "./Sidebar.module.css";
import { toast, ToastContainer ,cssTransition} from "react-toastify";

import fuuastlogo from "../../images/fuusat.png";
import axios from 'axios';
import Cookies from 'universal-cookie';
const Sidebar = (props) => {
  console.log(props)
  let user_img=props?.user.map((el)=>el.UserProfile?.imgurl)
  const navigate=useNavigate()
  const cookies= new Cookies()
  const token = cookies.get("accessToken");
  console.log("PROPS",props)
  const signout=async()=>{
    try {
      const res = await axios.get("http://localhost:3001/logout",{withCredentials: true});
      if(res.status===200){
        cookies.set("isAuth",res.data.isAuth)
        localStorage.setItem("isAuth",res.data.isAuth)
        toast.success("You Logout",{
          position: toast.POSITION.BOTTOM_LEFT,
        })
        setTimeout(() => {
          navigate("/login");
        }, 1500);
        
      }
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <div class="d-flex flex-column flex-shrink-0  sidebar">
        <ToastContainer/>
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
          <li>
            <Link
              to="profile"
              class="nav-link py-3 border-bottom rounded-0"
              title="Your Profile"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <i>
                <ImProfile className={`${styles.navicon}`} />
              </i>
            </Link>
          </li>
          
        </ul>
        <div class="dropdown border-top">
          <Link
            to="#"
            class="d-flex align-items-center justify-content-center p-3 link-light text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user_img}
              alt="mdo"
              width="24"
              height="24"
              class="rounded-circle"
            />
          </Link>
          <ul class="dropdown-menu text-small shadow">
            

            <li>
              <button class="dropdown-item" onClick={signout}>
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Sidebar