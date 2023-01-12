import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./completeprofile.css";
import InputMask from "react-input-mask";
import { AiOutlineArrowLeft } from "react-icons/ai";
import avatar from "../../images/avatar.png";
import axios from "axios";
import { toast, ToastContainer, cssTransition } from "react-toastify";
import Cookies from "universal-cookie";

const CompleteProfile = () => {
  const [fathername, setfathername] = useState("");
  const [fullname, setfullname] = useState("");
  const [rollno, setrollno] = useState("");
  const [enrolmentno, setenrolmentno] = useState("");
  const [phone, setphone] = useState("");
  const [file, setfile] = useState(avatar);
  const [department, setdepartment] = useState("");
  const [passingyear, setpassingyear] = useState("");
  const [libraryid, setlibraryid] = useState("");
  const [profilepic, setprofilepic] = useState(null);
  const [user, setuser] = useState("");
  const navigate = useNavigate();
  const cookies = new Cookies();

  // toast css============================================>
  const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut",
  });

  const selectfile = (event) => {
    if (event.target.files && event.target.files[0]) {
      setprofilepic(event.target.files[0]);
      let reader = new FileReader();
      reader.onload = (e) => {
        setfile({ image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("rollno", rollno);
    data.append("fathername", fathername);
    data.append("enrolmentno", enrolmentno);
    data.append("phone", phone);
    data.append("department", department);
    data.append("passingyear", passingyear);
    data.append("libraryid", libraryid);
    data.append("fullname", fullname);
    data.append("profilepic", profilepic);

    try {
      const token = cookies.get("accessToken");
      const res = await axios.post("http://localhost:3001/profile", data, {
        headers: {
          "Content-Type": " multipart/form-data",
          Authorization: `Bearer ${token}`,

          credentials: "include",
        },
      });
      if (res.status === 200) {
        toast.dark(
          "Profile Created SuccesFully ! You Will be Redirected to Dashboard Soon",
          {
            position: toast.POSITION.TOP_CENTER,
            transition: bounce,
          }
        );
        setTimeout(() => {
          navigate("/userdashboard");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const get_user = async () => {
    const token = cookies.get("accessToken");
    const res = await axios.get("http://localhost:3001/userprofile", {
      headers: {
        Authorization: `Bearer ${token}`,

        // credentials: "include",
      },
    });
    setuser(res.data);
  };

  useEffect(() => {
    get_user();
  }, []);

  if (user.UserProfile) {
    
    setTimeout(() => {
      navigate("/userdashboard");
    }, 0);

   
  }
  console.log(user);

  

  return (
    <div className="continer-fluid h-100 d-flex justify-content-center align-items-center profile_main_wrapper">
      <ToastContainer draggable/>
      <div class="container rounded p-5 form_card">
        <div class="alert alert-warning" role="alert">
          Please Complete Your Profile for Verfication Process !
        </div>
        <form class="row" onSubmit={submit}>
          <div class="col-md-4 border-right">
            <div class="d-flex flex-column align-items-center  justify-content-center  p-3 py-5">
              <div className="profile_image_wrapper">
                <img class="" src={file.image || file} />
              </div>

              <span class="file-input btn  btn-file">
                Browse Image&hellip;{" "}
                <input type="file" name="file" onChange={selectfile} required />
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
                    onChange={(e) => {
                      setfullname(e.target.value);
                    }}
                    value={fullname}
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control inputform"
                    placeholder="fathername Name"
                    required
                    onChange={(e) => {
                      setfathername(e.target.value);
                    }}
                    value={fathername}
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
                    onChange={(e) => {
                      setrollno(e.target.value);
                    }}
                    value={rollno}
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control inputform"
                    required
                    placeholder="departmentt Name"
                    maxlength="15"
                    onChange={(e) => {
                      setdepartment(e.target.value);
                    }}
                    value={department}
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
                    placeholder="Passing passingyear Eg.(2015)"
                    required
                    onChange={(e) => {
                      setpassingyear(e.target.value);
                    }}
                    value={passingyear}
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control inputform"
                    placeholder=" enrolmentno Number"
                    required
                    onChange={(e) => {
                      setenrolmentno(e.target.value);
                    }}
                    value={enrolmentno}
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
                    onChange={(e) => {
                      setphone(e.target.value);
                    }}
                    value={phone}
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control inputform"
                    placeholder="Library Id"
                    onChange={(e) => {
                      setlibraryid(e.target.value);
                    }}
                    value={libraryid}
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
