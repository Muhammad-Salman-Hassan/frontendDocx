import React from "react";
import { Link } from "react-router-dom";
import "./completeprofile.css"

const CompleteProfile = () => {
  return (
    <div class="container rounded bg-white mt-5">
      <div class="alert alert-success" role="alert">
 Please Complete Your Profile for Verfication Process !
</div>
      <div class="row">
        
        <div class="col-md-4 border-right">
          <div class="d-flex flex-column align-items-center  justify-content-center  p-3 py-5">
            <img
              class="mt-5 mb-5"
              src="https://i.imgur.com/0eg0aG0.jpg"
              width="90"
            />
            
            <span class="file-input btn  btn-file">
                Browse&hellip; <input type="file" multiple/>
            </span>
            
          </div>
        </div>
        <div class="col-md-8">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="d-flex flex-row align-items-center back">
                <i class="fa fa-long-arrow-left mr-1 mb-1"></i>
                <Link to="/userdashboard">Back to home</Link>
              </div>
              
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="first name"
                  value="John"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  value="Doe"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  value="john_doe12@bbb.com"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  value="+19685969668"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="address"
                  value="D-113, right avenue block, CA,USA"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  value="USA"
                  placeholder="Country"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Bank Name"
                  value="Bank of America"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  value="043958409584095"
                  placeholder="Account Number"
                />
              </div>
            </div>
            <div class="mt-5 text-right">
              <button class="btn btn-primary profile-button" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;