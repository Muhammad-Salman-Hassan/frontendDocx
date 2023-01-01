import React, { useState } from "react";
import "./Forgetpassword.css";

const Forgetpassword = () => {
  const [email, setemail] = useState("");
  const submit = (e) => {
   e.preventDefault()
   console.log("submit")
   setemail(' ')
  };
  console.log(email);
  return (
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="bg-white text-center p-5 mt-3 center">
        <h3 class="heading">Forgot Password </h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
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
