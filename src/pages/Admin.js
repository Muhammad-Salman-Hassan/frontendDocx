import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Table from '../components/Table/DefaultTable'
import Heading from '../components/Heading/Heading'
import { GetAllApplications } from './AdminSlice'
import { useDispatch, useSelector } from 'react-redux'

const Admin = () => {
  const dispatch=useDispatch()
  const {Applications} = useSelector((Reducer) => Reducer);
  console.log("Reducer",Applications)
  useEffect(() => {
    dispatch(GetAllApplications())
        
  },[]);
  return (
    <div>
      <Navbar/>
     <Heading heading="Applications For Verification" margin={20}/>
   <Table data={Applications.AllApplications}/>

     
    </div>
  )
}

export default Admin