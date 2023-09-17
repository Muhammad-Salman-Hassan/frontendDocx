import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { GetAllApplications, GetSingleApplication } from '../AdminSlice'
import Navbar from '../../components/Navbar/Navbar';
import LightBoxImage from '../../components/LightBox/LightBox'
import Select from '../../components/Select/Select';

const UserApplications = () => {
  const { Applications } = useSelector((Reducer) => Reducer);

  const params = useParams()
  const dispatch = useDispatch()
  // console.log(Applications.singleApplication.ApplicationImages)
  useEffect(() => {
    dispatch(GetSingleApplication(params.applicationId))
    dispatch(GetAllApplications())

  }, []);
 console.log(params)

  return (
    <>
      <Navbar />
      <div className="w-100  d-flex justify-content-center align-items-center h-100 flex-column">
        <div className="w-100 h-100 p-4">

          <div className="row">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Personal Information</h3>
              <Select status={Applications.singleApplication.applicationStatus} appID={params.applicationId}/>
              {/* <img alt=""  width="80px" height="80px" className="rounded-circle"/> */}
            </div>

            <div className="col">
              <div className="form-outline">
                <label className="form-label" for="form8Example1">
                  Full Name
                </label>
                <div className='w-100  h-100 p-2 rounded' style={{ backgroundColor: "#EFEFF0" }}>{Applications?.singleApplication?.UserProfile?.fullname}</div>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <label className="form-label" for="form8Example2">
                  Phone Number
                </label>
                <div className='w-100  h-100 p-2 rounded' style={{ backgroundColor: "#EFEFF0" }}>{Applications?.singleApplication?.UserProfile?.phone}</div>
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
                <div className='w-100  h-100 p-2 rounded' style={{ backgroundColor: "#EFEFF0" }}>{Applications?.singleApplication?.UserProfile?.fathername}</div>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <label className="form-label" for="form8Example4">
                  CNIC Number
                </label>
                <div className='w-100  h-100 p-2 rounded' style={{ backgroundColor: "#EFEFF0" }}>{Applications?.singleApplication?.cnic}</div>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <label className="form-label" for="form8Example5">
                  Roll Number
                </label>
                <div className='w-100  h-100 p-2 rounded' style={{ backgroundColor: "#EFEFF0" }}>{Applications?.singleApplication?.UserProfile?.rollno}</div>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <label className="form-label" for="form8Example5">
                  Email
                </label>
                <div className='w-100  h-100 p-2 rounded' style={{ backgroundColor: "#EFEFF0" }}>{Applications?.singleApplication?.email}</div>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex  justify-content-between align-items-center w-100 flex-column">
            <h1>Documents</h1>
            {/* <CoolLightbox/> */}
            <LightBoxImage images={Applications?.singleApplication?.ApplicationImages} />
          </div>

        </div>
      </div>
    </>
  )
}

export default UserApplications