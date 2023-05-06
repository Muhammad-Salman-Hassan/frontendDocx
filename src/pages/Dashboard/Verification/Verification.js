import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import uploadImg from "../../../images/upload.png"
import { FileInputs } from "../../../components/uploadfile/UploadFile";
const Verification = () => {
  // const [file, setfile] = useState([]);
  // const [profilepic, setprofilepic] = useState(null);
  const Reducer=useSelector((auth)=>auth) 
  const UploadImageSlice=useSelector((reducer)=>reducer) 
  let inputRef = useRef({});
console.log("salman",UploadImageSlice)

  const [file, setFile] = useState({
    file1: null,
    file2: null,
    file3: null,
  });
  // const selectfile = (event, name) => {
  //   console.log(name); // Make sure that name is not undefined
  //   if (event.target.files && event.target.files[0]) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const newFile = { name: name, file: e.target.result };
  //       setFile((prevFile) => ({ ...prevFile, ...newFile }));
  //     };
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // };
  // const  selectfile= (event) => {
    
  //   const name = event.target.name;
  //   const file = event.target.files[0];

  //   setFile((prevFiles) => ({
  //     ...prevFiles,
  //     [name]: URL.createObjectURL(file),
  //   }));
  // };
  const selectfile = (event) => {
    const file = event.target.files[0];
    setFile((prevFiles) => ({
      ...prevFiles,
      [event.target.name]: URL.createObjectURL(file),
    }));
  }
  console.log(inputRef)
  console.log(file)

  return (
    <div className="w-100  d-flex justify-content-center align-items-center h-100 flex-column">
      <div className="w-100 h-100 p-4">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <h3>Personal Information</h3>
          <img src={Reducer.auth.user?.UserProfile?.imgurl} alt=""  width="80px" height="80px" className="rounded-circle"/>
          </div>
          
          <div className="col">
            <div className="form-outline">
              <label className="form-label" for="form8Example1">
                Full Name
              </label>
              <input type="text" id="form8Example1" className="form-control" disabled value={Reducer.auth?.user?.name}/>
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
              <input type="text" id="form8Example3" className="form-control" disabled value={Reducer.auth.user?.UserProfile?.fathername}/>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label" for="form8Example4">
              CNIC Number
              </label>
              <input type="text" id="form8Example4" className="form-control" disabled value={Reducer.auth.user?.cnic}/>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label" for="form8Example5">
                Roll Number
              </label>
              <input type="email" id="form8Example5" className="form-control" disabled value={Reducer.auth.user?.UserProfile?.rollno}/>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label" for="form8Example5">
                Roll Number
              </label>
              <input type="email" id="form8Example5" className="form-control" disabled value={Reducer.auth.user?.UserProfile?.passingyear}/>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex  justify-content-between align-items-center">
        {/* <div className="row ">
          <div className="mb-4 d-flex justify-content-center align-items-center p-3" style={{borderStyle: "dotted",borderRadius:"20px"}}>
            <img
              src={file[0]?.file||uploadImg}
              alt="example placeholder"
              style={{ width: "300px",height:"300px" }}
            />
          </div>
          <div className="d-flex justify-content-center ">
            <div className="btn btn-primary btn-rounded">
              <label className="form-label text-white m-1" for="customFile1">
                PaySlip
              </label>
              <input type="file" name="payslip" className="form-control d-none" id="customFile1" onChange={selectfile} accept="image/jpeg, image/png" required/>
            </div>
          </div>
          
        </div>

        <div className="row ">
          <div className="mb-4 d-flex justify-content-center p-3" style={{borderStyle: "dotted",borderRadius:"20px"}}>
            <img
              src={file}
              alt="example placeholder"
              style={{ width: "300px",height:"300px" }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <div className="btn btn-primary btn-rounded">
              <label className="form-label text-white m-1" for="customFile1">
                NewPAY
              </label>
              <input type="file" className="form-control d-none" id="customFile1" onChange={selectfile} name="image2"/>
            </div>
          </div>
          
        </div>
        <div className="row ">
          <div className="mb-4 d-flex justify-content-center p-3" style={{borderStyle: "dotted",borderRadius:"20px"}}>
            <img
              src={file}
              alt="example placeholder"
              style={{ width: "300px",height:"300px" }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <div className="btn btn-primary btn-rounded">
              <label className="form-label text-white m-1" for="customFile1">
                NewPAY
              </label>
              <input type="file" className="form-control d-none" id="image3" onChange={(event)=>selectfile(event, 'image3')} />
            </div>
          </div>
          
        </div> */}
        <FileInputs/>
        </div>
        
      </div>
    </div>
  );
};

export default Verification;
