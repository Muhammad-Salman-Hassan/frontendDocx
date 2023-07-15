import React, { useEffect, useRef } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import fuuastLogo from "../../images/fuusat.png";
import styles from "./register.module.css";
import InputMask from "react-input-mask";
import "animate.css/animate.min.css";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer ,cssTransition} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut"
});

const Register = () => {
  
  const [cnic, setcnic] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();


  const register = async (e) => {
    e.preventDefault();
    const obj = { name, cnic, email, password };
    try {
      const res = await axios.post("http://localhost:3001/register", obj);
      if (res.status === 200) {
        toast.dark("Form Submitted SuccesFully ! You Will be Redirected to Login Page", {
          position: toast.POSITION.TOP_CENTER,
          transition: bounce

        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }

      if(res.status===1062){
        toast.error("User Already Exist !",{
          position: toast.POSITION.TOP_CENTER,
          // transition: bounce
        })
      }
    } catch (e) {
      alert(e);
      
    }

    ///Empty input fields
    setcnic(" ")
    setemail(" ")
    setname(" ")
    setpassword(" ")
  };

  return (
    <section class="h-100">
      <ToastContainer />
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

                    <form class="mx-1 mx-md-4" onSubmit={register}>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            class={`${styles.formcontrol}`}
                            placeholder="Your Name"
                            required
                            maxlength="20"
                            onChange={(e) => {
                              setname(e.target.value);
                            }}
                            value={name}
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
                            onChange={(e) => {
                              setemail(e.target.value);
                            }}
                            value={email}
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <InputMask
                            mask="99999-9999999-9"
                            // mask="-------------"
                            type="text"
                            id="form3Example4cd"
                            class={`${styles.formcontrol}`}
                            placeholder="Your Cnic"
                            onChange={(e) => {
                              setcnic(e.target.value);
                            }}
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
                            value={password}
                            class={`${styles.formcontrol}`}
                            placeholder="Your Password"
                            required
                            minlength="8"
                            onChange={(e) => {
                              setpassword(e.target.value);
                            }}
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
