import React, { useState } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
// import LoginForm from "../../components/forms/LoginForm";
import styles from "./Login.module.css";
import InputMask from "react-input-mask";
import axios from "axios";
import Cookies from "universal-cookie";
import { toast, ToastContainer ,cssTransition} from "react-toastify";
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from "../../features/user/authSlice";


const Login = () => {
  const [cnic, setcnic] = useState("");
  const [password, setpassword] = useState("");
  const [token, settoken] = useState(null)
  // const{isAuth}=useSelector((state)=>state.auth)
  
  const navigate = useNavigate();
  const cookies = new Cookies();
  // const {phone,hash}=useSelector((state)=>state.auth.otp)
  
        
  const dispatch=useDispatch()
  const onsubmit = async (e) => {
    const obj={password,cnic}
    e.preventDefault();
    
    
    try {
      const res = await axios.post("http://localhost:3001/login", obj,{headers: { 'Content-Type': 'application/json' },withCredentials: true});
     
        console.log(res.data)
        cookies.set("isAuth",res.data.isAuth)
        localStorage.setItem("isAuth",res.data.isAuth)
       if(res.data.error){
        toast.error(res.data.error,{
          position: toast.POSITION.TOP_CENTER,
        })
       }else{
        toast.success("Access Granted",{
          position: toast.POSITION.TOP_CENTER,
        })
        if(token){
          dispatch(setAuth(true))
        }
      
        setTimeout(() => {
          navigate("/userprofile");
        }, 3000);
       }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer/>
      <Card>
        <h2 className={styles.loginHeading}>Login</h2>

        <div className="tab-content w-75">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form onSubmit={onsubmit}>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <InputMask
                  mask="99999-9999999-9"
                  // mask="-------------"
                  type="text"
                  id="form3Example4cd"
                  className="form-control"
                  placeholder="Your Cnic"
                  onChange={(e) => {
                    setcnic(e.target.value);
                  }}
                  value={cnic}
                  required
                />
                {/* <label className="form-label" for="cnic">
                  Enter Your CNIC
                </label> */}
              </div>
              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
                {/* <label className="form-label" for="loginPassword">
                  Password
                </label> */}
              </div>
              {/* <!-- 2 column grid layout --> */}
              <div className="row mb-4">
                {/* <div className="col-md-6 d-flex justify-content-center"> <div className="form-check mb-3 mb-md-0"> <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked /> <label className="form-check-label" for="loginCheck"> Remember me </label> </div> </div> */}
                <div className="col-md-12 d-flex justify-content-center">
                  {/* <!-- Simple link --> */} <Link to="/forgetpassword">Forgot password?</Link>
                </div>
              </div>
              {/* <!-- Submit button --> */}
              <div className="row d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4 w-75"
                >
                  Sign in
                </button>
              </div>
              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>
                  Not a member? <Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* <!-- Pills content --> */}
        {/* <form className={styles.formWrapper}>
          <div className="row flex-row">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
            </div>
          </div>
        </form> */}
      </Card>
    </div>
  );
};

export default Login;
