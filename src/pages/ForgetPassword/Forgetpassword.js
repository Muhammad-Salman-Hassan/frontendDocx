
import React, { useState } from "react";
import axios from "axios";
import "./Forgetpassword.css";
import { toast, ToastContainer } from "react-toastify";
const Forgetpassword = () => {
  const [email, setemail] = useState("");
  
  const submit = async(e) => {
   e.preventDefault()

    try {
      let res=await axios.post("http://localhost:3001/forgetpassword",{email},{headers:{"Content-Type": 'application/json'}})
      if(res.status===200){
        if (res.data.code===200) {
          toast.success(res.data.msg,{
            position: toast.POSITION.TOP_CENTER,
            // transition: bounce
          })
        }
        if (res.data.code===401) {
          toast.error(res.data.error,{
            position: toast.POSITION.TOP_CENTER,
            // transition: bounce
          })
        }
       
      }

     
    } catch (error) {
      console.log(error)
    }


   console.log("submit")
   setemail(' ')
  };


  
  return (
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <ToastContainer/>
      <div class="bg-white text-center p-5 mt-3 center">
        <h3 class="heading">Forgot Password </h3>
        <p>Please Input Your Email ! We will Send you Reset link to your Gmail !</p>
        <form class="pb-3" onSubmit={submit}>
          <div class="form-group">
            <input
              type="email"
              class="form-control user-input"
              placeholder="Enter your Email"
              required
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
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

export default Forgetpassword;
