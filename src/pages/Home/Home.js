import React from 'react'
import styles from "./Home.module.css"
import fuuastLogo from "../../images/fuusat.png"
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { toast, ToastContainer ,cssTransition} from "react-toastify";
const Home = () => {
  const cookies = new Cookies();
  const token = cookies.get("accessToken");
  const navigate=useNavigate()
  const onclickev=()=>{
    if(!token){
      toast.error("You Must Login First !",{
        position: toast.POSITION.TOP_CENTER,
        // transition: bounce
      })
    }else{
      navigate("/userdashboard")
    }
  }
  return (
    <div className={styles.container}>
      <ToastContainer/>
      <div className={styles.wrapper}>
        <div className={styles.logowrapper}>
          <div className={styles.logoContainer}>
                <img src={fuuastLogo} alt="" className={styles.logo}/>
          </div>
          
        </div>
        <div className={styles.welcomeWrapper}>
          <h3 className={`${styles.welcomeHeading}`}>Welcome to Doc Verification Portal</h3>
        </div>
        <div className={styles.btnWrapper}>
          <div className='d-flex flex-column'>
            <Link to='./login' className={`${styles.link} `}>Get Started</Link>
            
            <button className={`${styles.link} mt-4 text-center`} onClick={onclickev}>DashBoard</button>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default Home