import React from 'react'
import "./nav.css"
import axios from 'axios'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const cookies= new Cookies()
    const navigate=useNavigate()
    const signout=async()=>{
        try {
          const res = await axios.get("http://localhost:3001/logout",{withCredentials: true});
          if(res.status===200){
            cookies.set("isAuth",res.data.isAuth)
            localStorage.setItem("isAuth",res.data.isAuth)
            
            setTimeout(() => {
              navigate("/login");
            }, 1500);
            
          }
        } catch (error) {
          console.log(error)
        }
        
      } 
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#32E0C4"}}>
    <div class="container-fluid my-container-fluid ">
        <a class="navbar-brand fw-bold d-lg-none" href="#">Coding Yaar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav d-flex justify-content-between align-items-center w-25">
                <a class="navbar-brand fw-bold d-none d-lg-block" href="#">Coding Yaar</a>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                <button class="dropdown-item" onClick={signout}>
                Sign out
              </button>
                </li>
            </ul>
        </div>
    </div>
</nav>


    </>
  )
}

export default Navbar