import axios from "axios";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useParams } from "react-router-dom";
import "./resetPassword.css";

const ResetPassword = () => {
  let params = useParams();
  const [eyeToggle, seteyeToggle] = useState(false);
  const [user, setuser] = useState(null)

  let toggleEye = () => {
    seteyeToggle(!eyeToggle);
  };

  let get_user = async () => {
    try {
      let res = await axios.get(
        `http://localhost:3001/reset-password/${params.id}/${params.token}`
      );
      setuser(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_user();
  }, []);

  return (
    <div class="container d-flex justify-content-center align-items-center vh-100 flex-column">
      <img src="https://res.cloudinary.com/dfwjln6a6/image/upload/v1673422245/fuusat_vfzq2t.png" width="90" height="90" alt="fuuast Logo" className="img-fluid" />
      <div class="bg-white text-center p-5 mt-1 center">
        <h3 class="heading">Reset Password </h3>
        <p>
          Hey <span><strong>{user.name}</strong></span> Please Provide Your New Password!
        </p>
        <form class="pb-3">
          <div class="form-group d-flex justify-content-center align-items-center px-3 form_wrapper">
            <input
              type={eyeToggle ? "text" : "password"}
              class="form-control user_input"
              placeholder="Enter Your Password"
              required

              // value={email}
              // onChange={(e) => {
              //   setemail(e.target.value);
              // }}
            />
            <span className="eye" onClick={toggleEye}>
              {eyeToggle?<AiOutlineEyeInvisible/>:<AiFillEye />}
            </span>
          </div>
          <div class="form-group d-flex justify-content-center align-items-center px-3 form_wrapper">
            <input
              type="password"
              class="form-control user_input"
              placeholder="Confirm Your Password"
              required

              // value={email}
              // onChange={(e) => {
              //   setemail(e.target.value);
              // }}
            />
            
          </div>
          <button type="submit" class="btn reset">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
