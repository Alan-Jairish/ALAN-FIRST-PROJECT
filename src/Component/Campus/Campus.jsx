import React from 'react'
import './Campus.css'

const Campus = () => {
  return (
    <div className='campus'>
        <diV className='gallery'>
            <img src='./images/gallery-1.png'/>
            <img src='./images/gallery-2.png'/>
            <img src='./images/gallery-3.png'/>
            <img src='./images/gallery-4.png'/>
        </diV>
      <button className='btn dark-btn'>See More Here <img src='./images/white-arrow.png'/></button>
    </div>
  )
}

export default Campus
