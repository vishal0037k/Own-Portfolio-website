import React, { useState } from 'react';
import './Nav.css';
import logoImage from '../../Assets/images/logo.png'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">VISHAL<span className='circle'>
                    <img className='logo-img-first' src={logoImage} alt='.'></img>
                    </span></div>
                <button className="mobile-menu-icon" onClick={toggleMenu}>
                    {isOpen ? '✖' : '☰'}
                </button>
                <ul className={`navbar-list ${isOpen ? 'active' : ''}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;