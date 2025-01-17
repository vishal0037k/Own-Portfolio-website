import React from 'react';
import './Footer.css';
import linkedinImage from '../../Assets/images/linkedin.png'; 
import gitImage from '../../Assets/images/git.png'; 
import mailImage from '../../Assets/images/mail.png'; 

const Footer = () => {
  return (
    <>
     <div className='footer-section'>
      <div className="f-flex">
      <a href="https://github.com/vishal0037k" target='_blank'>
      <img className='git-img' src={gitImage} alt='Github'></img>
      </a>
      <a href="https://www.linkedin.com/in/vishal-choudhary-4b079427a/" target='_blank'>
      <img className='same-size' src={linkedinImage} alt='Linkdein'></img>
      </a>
      <a href="#contact">
      <img className='same-size' src={mailImage} alt='Mail'></img>
      </a>
      </div>
      <div className="f1flex">
      <p>GitHub</p>
      <p>Linkedin</p>
      <p>Gmail</p>
      
    </div>
    </div>
    </>
  )
}

export default Footer;
