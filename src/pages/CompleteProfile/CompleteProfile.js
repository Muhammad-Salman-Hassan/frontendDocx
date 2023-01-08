import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./completeprofile.css";
import InputMask from "react-input-mask";
import { AiOutlineArrowLeft } from "react-icons/ai";
import avatar from "../../images/avatar.png"

const CompleteProfile = () => {
  const [father, setfather] = useState("")
  const [fullname, setfullname] = useState("")
  const [rollno, setrollno] = useState("")
  const [enrollment, setenrollment] = useState("")
  const [phone, setphone] = useState("")
  const [file, setfile] = useState(avatar)
  const [departmen, setdepartmen] = useState("")
  const [year, setyear] = useState("")
  const [libid, setlibid] = useState("")

  const selectfile=(event)=>{
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setfile({image: e.target.result});
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  console.log(father,file.image)
  return (
    <div className="continer-fluid h-100 d-flex justify-content-center align-items-center profile_main_wrapper">
      <div class="container rounded p-5 form_card">
        <div class="alert alert-warning" role="alert">
          Please Complete Your Profile for Verfication Process !
        </div>
        <form class="row">
          <div class="col-md-4 border-right">
            <div class="d-flex flex-column align-items-center  justify-content-center  p-3 py-5">
              <img
                class="mt-5 mb-5 rounded-circle"
                src={file.image||file}
                width="90"
              />

              <span class="file-input btn  btn-file">
                Browse Image&hellip; <input type="file"  onChange={selectfile}/>
              </span>
              <div class="alert alert-info mt-3" role="alert">
                Please Upload Your Profile with size 240 X 240 px !
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="d-flex flex-row align-items-center back">
                  <Link to="/userdashboard" className="link">
                    {" "}
                    <span>
                      <AiOutlineArrowLeft />
                    </span>{" "}
                    Back to home
                  </Link>
                </div>
              </div>
              <div class="row mt-2">
                <h2>Profile</h2>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control inputform"
                    placeholder="Full Name"
                    required
                    onChange={(e)=>{setfullname(e.target.value)}}
                    value={fullname}
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control inputform"
                    placeholder="Father Name"
                    required
                    onChange={(e)=>{setfather(e.target.value)}}
                    value={father}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <input
                    type="number"
                    class="form-control inputform"
                    placeholder="Roll Number"
                    required
                    onChange={(e)=>{setrollno(e.target.value)}}
                    value={rollno}
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control inputform"
                    required
                    placeholder="Department Name"
                    maxlength="15"
                    onChange={(e)=>{setdepartmen(e.target.value)}}
                    value={departmen}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <input
                    type="number"
                    min="2000"
                    max="2022"
                    step="1"
                    class="form-control inputform"
                    placeholder="Passing Year Eg.(2015)"
                    required
                    onChange={(e)=>{setyear(e.target.value)}}
                    value={year}
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control inputform"
                    placeholder="Enrollment Number"
                    required
                    onChange={(e)=>{setenrollment(e.target.value)}}
                    value={enrollment}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <InputMask
                    mask="999-999999-99"
                    type="text"
                    class="form-control inputform"
                    placeholder="Phone Number"
                    required
                    onChange={(e)=>{setphone(e.target.value)}}
                    value={phone}
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control inputform"
                    placeholder="Library Id"
                    onChange={(e)=>{setlibid(e.target.value)}}
                    value={libid}
                  />
                </div>
              </div>
              <div class="mt-5 text-center">
                <button class="btn registerbtn profile-button" type="submit">
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfile;
