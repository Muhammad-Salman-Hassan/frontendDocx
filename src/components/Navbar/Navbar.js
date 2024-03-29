import React from 'react'
import "./nav.css"
import axios from 'axios'
import Cookies from 'universal-cookie'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()

  let user = JSON.parse(localStorage.getItem("user"))
  console.log("USER", user)
  const signout = async () => {
    try {
      const res = await axios.get("http://localhost:3001/logout", { withCredentials: true });
      if (res.status === 200) {
        cookies.set("isAuth", res.data.isAuth)
        localStorage.setItem("isAuth", res.data.isAuth)

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
      <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#32E0C4" }}>
        <div class="container-fluid my-container-fluid ">
          <a class="navbar-brand fw-bold d-lg-none" href="#">{user.user.name}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav d-flex justify-content-between align-items-center w-25">
              <a class="navbar-brand fw-bold d-none d-lg-block" href="#">{user.user.name}</a>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>

              {user.role === "superadmin" && (
                <li class="nav-item">
                  <Link class="nav-link" to="/admin/addAdmins">Add Admin</Link>
                </li>
              )}

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