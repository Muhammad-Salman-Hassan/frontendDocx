import React from 'react'
import styles from "./Home.module.css"
import fuuastLogo from "../../images/fuusat.png"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className={styles.container}>
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
          <div>
            <Link to='./login' className={styles.link}>Get Started</Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home