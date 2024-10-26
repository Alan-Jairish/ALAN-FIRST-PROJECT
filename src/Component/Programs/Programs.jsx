import React from 'react'
import './Programs.css'

const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src='./images/program-1.png'/>
        <div className='caption'>
          <img src='./images/program-icon-1.png'/>
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src='./images/program-2.png'/>
        <div className='caption'>
          <img src='./images/program-icon-2.png'/>
          <p>Master Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src='./images/program-3.png'/>
        <div className='caption'>
          <img src='./images/program-icon-3.png'/>
          <p>Post Graduation</p>
        </div>
      </div>
      
    </div>
  )
}

export default Programs
