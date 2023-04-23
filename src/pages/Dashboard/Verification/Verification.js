import React from "react";
import { useSelector } from "react-redux";

const Verification = () => {
  const Reducer=useSelector((auth)=>auth) 
  console.log("salman",Reducer.auth)
  return (
    <div className="w-100  d-flex justify-content-center align-items-center h-100 flex-column">
      <div className="w-75 h-100 p-4">
        <div class="row">
          <div class="col">
            <div class="form-outline">
              <label class="form-label" for="form8Example1">
                Name
              </label>
              <input type="text" id="form8Example1" class="form-control" disabled value={Reducer.auth?.user[0]?.name}/>
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <label class="form-label" for="form8Example2">
                Email address
              </label>
              <input type="email" id="form8Example2" class="form-control" disabled value={Reducer.auth.user[0]?.email} />
            </div>
          </div>
        </div>

        <hr />

        <div class="row">
          <div class="col">
            <div class="form-outline">
              <label class="form-label" for="form8Example3">
                Father name
              </label>
              <input type="text" id="form8Example3" class="form-control" disabled value={Reducer.auth.user[0]?.UserProfile?.fathername}/>
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <label class="form-label" for="form8Example4">
                Last name
              </label>
              <input type="text" id="form8Example4" class="form-control" />
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <label class="form-label" for="form8Example5">
                Email address
              </label>
              <input type="email" id="form8Example5" class="form-control" />
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex  justify-content-center align-items-center">
        <div className="row ">
          <div class="mb-4 d-flex justify-content-center">
            <img
              src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
              alt="example placeholder"
              style={{ width: "300px" }}
            />
          </div>
          <div class="d-flex justify-content-center">
            <div class="btn btn-primary btn-rounded">
              <label class="form-label text-white m-1" for="customFile1">
                Choose file
              </label>
              <input type="file" class="form-control d-none" id="customFile1" />
            </div>
          </div>
          
        </div>
        <div className="row ">
          <div class="mb-4 d-flex justify-content-center">
            <img
              src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
              alt="example placeholder"
              style={{ width: "300px" }}
            />
          </div>
          <div class="d-flex justify-content-center">
            <div class="btn btn-primary btn-rounded">
              <label class="form-label text-white m-1" for="customFile1">
                Choose file
              </label>
              <input type="file" class="form-control d-none" id="customFile1" />
            </div>
          </div>
          
        </div>
        <div className="row ">
          <div class="mb-4 d-flex justify-content-center">
            <img
              src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
              alt="example placeholder"
              style={{ width: "300px" }}
            />
          </div>
          <div class="d-flex justify-content-center">
            <div class="btn btn-primary btn-rounded">
              <label class="form-label text-white m-1" for="customFile1">
                Choose file
              </label>
              <input type="file" class="form-control d-none" id="customFile1" />
            </div>
          </div>
          
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Verification;
