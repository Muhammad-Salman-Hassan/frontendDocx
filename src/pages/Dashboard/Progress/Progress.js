import React from 'react'
import ProgressChart from '../../../components/Charts/ProgressChart'
import './progress.css'

const Progress = () => {
  return (
    <div class="container mt-5 mb-5">
      <div className="row rounded progress_card py-3">
        <div className="col-md-12">
          <h1 className="mx-3 progress_heading">Your Progress</h1>
          <p className="mx-3 text-white">Your Documents Are in Progress</p>
        </div>
      </div>

      <div className="row rounded progress_card  mt-4 justify-content-center py-5">
        <div className="w-25 h25">
        <ProgressChart/>
        </div>
      
      </div>
    </div>
  )
}

export default Progress