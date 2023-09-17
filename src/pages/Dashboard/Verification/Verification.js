import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FileInputs } from "../../../components/uploadfile/UploadFile";
import { SubmitApplication } from "./SubmitSlice";
import VouchersUploader from "./Documents/Vouchers";
import MarkSheetsUploader from "./Documents/Marksheets";
import { ToastContainer } from "react-toastify";
import { setResponseImage } from "../../../components/uploadfile/UploadSlice";




const Verification = () => {
  const [step, setStep] = useState(0)
  const Reducer = useSelector((auth) => auth)


  let inputRef = useRef({});
  const dispatch = useDispatch()
  let post_obj = {
    "cnic": Reducer.auth.user?.cnic,
    "rollno": Reducer.auth.user?.UserProfile?.rollno,
    "fathername": Reducer.auth.user?.UserProfile?.fathername,
    "fullname": Reducer.auth?.user?.name,
    "department": Reducer.auth.user?.UserProfile?.department,
    "passingyear": Reducer.auth.user?.UserProfile?.passingyear,
    "enrolmentno": Reducer.auth.user?.UserProfile?.enrolmentno
  }
  const GoForward = () => {

    setStep(step + 1)
    dispatch(setResponseImage(false))
  }
  const submit = () => {
    dispatch(SubmitApplication(post_obj))
  }
  console.log(Reducer, "Salman")

  return (

    <div className="w-100  d-flex justify-content-center align-items-center  flex-column" >
      <div className="w-100">
        {(Reducer?.UploadImageSlice?.imageresponse) && (
          <h1 className="text-center" style={{ fontSize: "1rem" }}>Image Upload Success Fully Please Contine for further Submission</h1>
        )}
      </div>
      {step == 2 && (
        <div className="w-75 h-100 p-4 card">

          <div className="row">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Personal Information</h3>
              <img src={Reducer.auth.user?.UserProfile?.imgurl} alt="" width="80px" height="80px" className="rounded-circle" />
            </div>

            <div className="col">
              <div className="form-outline">
                <label className="form-label" for="form8Example1">
                  Full Name
                </label>
                <input type="text" id="form8Example1" className="form-control" disabled value={Reducer.auth?.user?.name} />
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <label className="form-label" for="form8Example2">
                  Phone Number
                </label>
                <input type="email" id="form8Example2" className="form-control" disabled value={Reducer.auth.user?.UserProfile?.phone} />
              </div>
            </div>
          </div>

          <hr />

          <div className="row">
            <div className="col">
              <div className="form-outline">
                <label className="form-label" for="form8Example3">
                  Father name
                </label>
                <input type="text" id="form8Example3" className="form-control" disabled value={Reducer.auth.user?.UserProfile?.fathername} />
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <label className="form-label" for="form8Example4">
                  CNIC Number
                </label>
                <input type="text" id="form8Example4" className="form-control" disabled value={Reducer.auth.user?.cnic} />
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <label className="form-label" for="form8Example5">
                  Roll Number
                </label>
                <input type="email" id="form8Example5" className="form-control" disabled value={Reducer.auth.user?.UserProfile?.rollno} />
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <label className="form-label" for="form8Example5">
                  Roll Number
                </label>
                <input type="email" id="form8Example5" className="form-control" disabled value={Reducer.auth.user?.UserProfile?.passingyear} />
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-center align-items-center">

            <button onClick={submit} className="button-10 w-50">Submit</button>

          </div>

        </div>
      )}

      {step == 0 && (
        <>


          <MarkSheetsUploader />

          <button onClick={GoForward} className="button-10 mt-5" disabled={Reducer?.UploadImageSlice?.images.length <= 0}>Continue</button>
        </>
      )}

      {step === 1 && (
        <>
          <VouchersUploader />
          <button onClick={GoForward} className="button-10 mt-5">Continue</button>
        </>

      )}

    </div>
  );
};

export default Verification;
