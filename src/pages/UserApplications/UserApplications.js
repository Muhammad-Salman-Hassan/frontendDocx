import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { GetSingleApplication } from '../AdminSlice'
import Navbar from '../../components/Navbar/Navbar';

const UserApplications = () => {
  const Reducer = useSelector((Reducer) => Reducer);

  const params = useParams()
  const dispatch = useDispatch()
  console.log(Reducer, params)
  useEffect(() => {
    dispatch(GetSingleApplication(params.applicationId))

  }, []);
  return (
    <>
    <Navbar/>
    <div className="w-100  d-flex justify-content-center align-items-center h-100 flex-column">
      <div className="w-100 h-100 p-4">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <h3>Personal Information</h3>
          {/* <img alt=""  width="80px" height="80px" className="rounded-circle"/> */}
          </div>
          
          <div className="col">
            <div className="form-outline">
              <label className="form-label" for="form8Example1">
                Full Name
              </label>
              <div>Salman</div>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label" for="form8Example2">
                Phone Number
              </label>
              <input type="email" id="form8Example2" className="form-control" disabled  />
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
              <input type="text" id="form8Example3" className="form-control" disabled />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label" for="form8Example4">
              CNIC Number
              </label>
              <input type="text" id="form8Example4" className="form-control" disabled />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label" for="form8Example5">
                Roll Number
              </label>
              <input type="email" id="form8Example5" className="form-control" disabled />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label" for="form8Example5">
                Roll Number
              </label>
              <input type="email" id="form8Example5" className="form-control" disabled />
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex  justify-content-between align-items-center">
       
        
        </div>
        
      </div>
    </div>
    </>
  )
}

export default UserApplications