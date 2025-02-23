// Projects.js
import React from 'react';
import './Project.css';
import p1Image from '../../Assets/images/p1.jpg';
import p2Image from '../../Assets/images/p2.jpg';
import p3Image from '../../Assets/images/p3.jpg';
import p4Image from '../../Assets/images/p4.jpg';
const Projects = () => {
    return (
        <>
        <div className="projects-main">
            <h2>My Recents Works</h2>
            <div className="project-card1">
   <div className="project-content">
 <p className='p-name'>Institute UI</p>
 <p className='p-para'>
   In this web page, I created a website for my institute with react, css, js and other libraries like swipper.
   I also do it's routing with react & add animation to make this website more interactive & dynamic.
   This is institute project given by my teachers to build & enhance my skills.
 </p>
 <div className="used-items">
    <div className="three"><span>REACT</span></div>
    <div className="three"><span>CSS</span></div>
    <div className="three"><span>JS</span></div>
    <div className="three"><span>Swipper</span></div>
    
 </div>
 <div className="button-git">
<a href="https://676bc940943771118d51ab48--tranquil-halva-1e3ec9.netlify.app" target='_blank'><button className='view-git'>View Live</button></a>
 </div>
   </div>

   <div className="project-img">
   <img className='p1-img fb-img' src={p2Image} alt='Project1'></img>
   </div>
</div> 
{/* //  SECOND PROJECT // */}
<div className="project-card1 bg-part">
                <div className="project-img">
               <img className='p1-img' src={p1Image} alt='Project1'></img>
               </div>
               <div className="project-content">
             <p className='p-name'>Task Management App</p>
             <p className='p-para'>This Task Management App is a user-friendly tool designed to help you organize and track your daily tasks efficiently. It allows users to add tasks with a title, description, due date, and priority level. Tasks can be marked as complete, edited, or deleted, and a filtering option helps you view tasks by their status. With a clean and responsive design, it’s perfect for managing your workload on any device, whether on desktop or mobile. Stay productive and never miss a deadline with this app!
             </p>
             <div className="used-items">
                <div className="three"><span>HTML</span></div>
                <div className="three"><span>CSS</span></div>
                <div className="three"> <span>JAVASCRIPT</span></div>
             </div>
<div className="button-git">
<a href="https://676c33e686569d8806ada96b--comforting-dusk-19af5f.netlify.app/" target='_blank'><button className='view-git'>View Live</button></a>
 </div>
               </div>
            </div>
        
 {/* //  THIRD  PROJECT // */}  
 <div className="project-card1">
               <div className="project-content">
             <p className='p-name'>Weather App</p>
             <p className='p-para'>A responsive weather application built using React and OpenWeatherMap API. It allows users to search for real-time weather updates for any city, including current temperature, minimum and maximum temperatures, and location details. The app features a clean and modern design with smooth animations and responsive styling optimized for devices.
             </p>
             <div className="used-items">
                <div className="three"><span>HTML</span></div>
                <div className="three"><span>CSS</span></div>
                <div className="three"> <span>JAVASCRIPT</span></div>
                <div className="three"> <span>REACT</span></div>
                <div className="three"> <span>OPEN WEATHER API</span></div>
             </div>
<div className="button-git">
<a href="https://current-weather-pr.netlify.app/" target='_blank'><button className='view-git'>View Live</button></a>
 </div>
               </div>
               <div className="project-img">
               <img className='p1-img dig-clok' src={p3Image} alt='Project1'></img>
               </div>
            </div>

{/* //  Fourth  PROJECT // */} 
<div className="project-card1 bg-part">
                <div className="project-img">
               <img className='p1-img' src={p4Image} alt='Project1'></img>
               </div>
               <div className="project-content">
             <p className='p-name'>Cafe Website</p>
             <p className='p-para'>Built a responsive and visually appealing website for a café and restaurant using React Vite. The site includes sections like Home, Location, Photos, Menu, Contact, and About, providing an intuitive user experience. Designed for easy navigation and showcasing the café’s ambiance and offerings, without an online ordering feature.
             </p>
             <div className="used-items">
                <div className="three"><span>HTML</span></div>
                <div className="three"><span>CSS</span></div>
                <div className="three"> <span>JAVASCRIPT</span></div>
                <div className="three"> <span>REACT</span></div>
                <div className="three"> <span>EMAIL.JS</span></div>
             </div>
<div className="button-git">
<a href="https://little-break.netlify.app/" target='_blank'><button className='view-git'>View Live</button></a>
 </div>
               </div>
            </div>


</div> 
</>   
    );
};

export default Projects;