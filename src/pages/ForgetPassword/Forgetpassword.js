import React from 'react'
import "./Forgetpassword.css"

const Forgetpassword = () => {
  return (
    <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="bg-white text-center p-5 mt-3 center">
       <h3 class='heading'>Forgot Password </h3>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
       <form class="pb-3" action="#">
          <div class="form-group">
             <input  type="email" class="form-control user-input" placeholder="Enter your Email" required />
          </div>
       </form>
       <button type="button" class="btn reset">Reset Password</button>
    </div>
 </div>
  )
}

export default Forgetpassword