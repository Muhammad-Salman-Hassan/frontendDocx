import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Table from '../components/Table/DefaultTable'
import Heading from '../components/Heading/Heading'
import { GetAllApplications } from './AdminSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation } from 'react-router-dom'

const Admin = () => {
  const { Applications } = useSelector((Reducer) => Reducer);
  const dispatch = useDispatch()
  const location = useLocation();
  const path = location.pathname

  console.log("Reducer", Applications)
  useEffect(() => {
    dispatch(GetAllApplications())

  }, []);
  return (
    <div>
      <Navbar />
      {path === "/admin" ? (
        <>
          <Heading heading="Applications For Verification" margin={20} />
          <Table data={Applications.AllApplications} />
        </>
      ) : <Outlet />}



    </div>
  )
}

export default Admin