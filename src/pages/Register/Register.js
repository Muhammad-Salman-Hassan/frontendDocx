import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import fuuastLogo from "../../images/fuusat.png";
import styles from "./register.module.css";
import InputMask from "react-input-mask";
import Alert from '@mui/material/Alert';
import { useState } from "react";
const Register = () => {
  const cnics = useRef()
  const [cnic, setcnic] = useState("")
  const getcnic=(e)=>{
    setcnic(e.target.value)
    // console.log(e.current)
  }
  console.log(cnic)
  return (
    <section class="vh-100">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p
                      class={`text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 ${styles.color}`}
                    >
                      Register Now
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            class={`${styles.formcontrol}`}
                            placeholder="Your Name"
                            required
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            class={`${styles.formcontrol}`}
                            placeholder="Email:abc@gmail.com"
                            required
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <InputMask
                          ref={cnics}
                            mask="99999-9999999-9"
                            // mask="-------------"
                            type="text"
                            id="form3Example4cd"
                            class={`${styles.formcontrol}`}
                            placeholder="Your Cnic"
                            onChange={getcnic}
                            value={cnic} 
                            required
                          />
                            
                          
                          
                          
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            class={`${styles.formcontrol}`}
                            placeholder="Your Password"
                            required
                          />
                        </div>
                      </div>

                    

                      <div class=" d-flex justify-content-center mb-5">
                        {/* <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" /> */}
                        <div class="form-check-label" for="form2Example3">
                          <i>
                            <BsArrowLeft />
                          </i>{" "}
                          <Link to="/login" className={`${styles.color}`}>
                           Back To Sign In
                          </Link>
                        </div>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <input
                          type="submit"
                          class={`btn btn-lg ${styles.registerbtn}`}
                        />
                          {/* Register
                        </input> */}
                      </div>
                    </form>
                  </div>

                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex justify-content-center align-items-center order-1 order-lg-2">
                    <img
                      src={fuuastLogo}
                      class="img-fluid w-50"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
