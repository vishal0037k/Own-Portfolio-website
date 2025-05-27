import './About.css';
import aboutImage from '../../Assets/images/about.png';
const About = () => {
    return(
        <>
        <div className="about-main">
           
            <div className="about-img">
                <img className='about-png' src={aboutImage} alt='about'></img>
            </div>
        <div className='about-content'>
         <h1>About Me</h1>
         <p>
           Hello! My name is Vishal. I am from Palampur, Himachal Pradesh. I recently completed a Full Stack Development course (MERN stack) from <a href="https://www.netcoder.in/" target='_blank'>Netcoder Technology Institute, Dari, Dharamshala.</a> During this course, I gained hands-on experience in both frontend and backend technologies, including HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, GitHub, and more. Using these skills, I create interactive and user-friendly web pages.
<br></br>
Currently, I am working as an intern at InnoJS Infotech, where I design websites and mobile app interfaces using Figma. Alongside, I’m also learning basic PHP CRUD operations and MySQL, expanding my knowledge beyond the MERN stack.
            <br></br>
            <h3 className='bold'>My Hobbies</h3>
            Listening to music, Travelling & Love to live in peace.
            </p>
            <a href="https://www.instagram.com/dev_vishal_37?igsh=MTUyOGR0bnJkOGc3Zg==" target='_blank'>
            <button className='download'>Visit instagram Profile</button>
            </a>
            </div>
            </div>
            
        </>
    )
}
export default About;