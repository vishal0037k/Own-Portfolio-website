import React from 'react';
import './Arrow.css';
import arrowImage from '../../Assets/images/arrow.png'; 

const Arrow = () => {
  return (
    <div className="arrow-section">
        <a href="#home">
    <div className='arrow'>
         <img className='arrow-img' src={arrowImage} alt="Description of the image"></img>
    </div>
    </a>
    </div>
  )
}

export default Arrow;

