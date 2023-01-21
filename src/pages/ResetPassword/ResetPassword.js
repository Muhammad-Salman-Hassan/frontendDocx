import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ResetPassword = () => {

    let params=useParams()
    console.log(params.id,params.token)

let get_user=async()=>{
    try {
        let res=await axios.get(`http://localhost:3001/reset-password/${params.id}/${params.token}`)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    get_user()
}, [])

  return (
    <div class="container d-flex justify-content-center align-items-center vh-100">
   
    <div class="bg-white text-center p-5 mt-3 center">
      <h3 class="heading">Forgot Password </h3>
      <p>Please Input Your Email ! We will Send you Reset link to your Gmail !</p>
      <form class="pb-3" >
        <div class="form-group">
          <input
            type="email"
            class="form-control user-input"
            placeholder="Enter your Email"
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
  )
}

export default ResetPassword