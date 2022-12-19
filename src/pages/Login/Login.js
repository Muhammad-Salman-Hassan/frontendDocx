import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
// import LoginForm from "../../components/forms/LoginForm";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <Card>
        <h2 className={styles.loginHeading}>Login</h2>
        
        
        <div class="tab-content w-75">
          {" "}
          <div
            class="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            {" "}
            <form>
              {" "}
              {/* <!-- Email input --> */}{" "}
              <div class="form-outline mb-4">
                {" "}
                <input type="email" id="loginName" class="form-control" />{" "}
                <label class="form-label" for="loginName">
                  RollNumber
                </label>{" "}
              
              </div>{" "}
              {/* <!-- Password input --> */}{" "}
              <div class="form-outline mb-4">
                {" "}
                <input
                  type="password"
                  id="loginPassword"
                  class="form-control"
                />{" "}
                <label class="form-label" for="loginPassword">
                  Password
                </label>{" "}
              </div>{" "}
              {/* <!-- 2 column grid layout --> */}{" "}
              <div class="row mb-4">
                {" "}
                {/* <div class="col-md-6 d-flex justify-content-center"> <div class="form-check mb-3 mb-md-0"> <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked /> <label class="form-check-label" for="loginCheck"> Remember me </label> </div> </div> */}{" "}
                <div class="col-md-12 d-flex justify-content-center">
                  {" "}
                  {/* <!-- Simple link --> */} <a href="#!">Forgot password?</a>{" "}
                </div>{" "}
              </div>{" "}
              {/* <!-- Submit button --> */}{" "}
              <div class="row d-flex justify-content-center">
                {" "}
                <button
                  type="submit"
                  class="btn btn-primary btn-block mb-4 w-75"
                >
                  Sign in
                </button>{" "}
              </div>{" "}
              {/* <!-- Register buttons --> */}{" "}
              <div class="text-center">
                {" "}
                <p>
                  Not a member? <Link to="/register">Register</Link>
                </p>{" "}
              </div>{" "}
            </form>{" "}
          </div>{" "}
          
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
