import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Table from '../components/Table/DefaultTable'
import Heading from '../components/Heading/Heading'

const Admin = () => {
  return (
    <div>
      <Navbar/>
     <Heading heading="Applications For Verification" margin={20}/>
   <Table/>

     
    </div>
  )
}

export default Admin