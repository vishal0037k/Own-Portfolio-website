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
            Hello my name is Vishal. I am from Palampur, Himachal Pradesh.
            Recently i have done my Full Stack Development course in (MERN-stack) from  <span><a href='https://www.netcoder.in/' target='_blank'>Netcoder Technology Institute, Dari, Dharamshala.</a></span> Here i learned about forntend & Backend Development. In which i learn about HTML, CSS, JAVASCRIPT, REACT, Node, Express, MongoDb, GitHub, etc. By using these skills i make interactive & user-friendly web pages.
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