import './Home.css';
import profileImage from '../../Assets/images/home2.png'
import logoImage from '../../Assets/images/logo.png'; 
import linkedinImage from '../../Assets/images/linkedin.png'; 
import gitImage from '../../Assets/images/git.png'; 
import mailImage from '../../Assets/images/mail.png'; 
const Home = () =>{
    return(
        <>
        <div className="main-home">
        <div className="home-content">
                        <p className='dev'><span><img className='logo-img' src={logoImage} alt='.'></img></span>Full stack Developer (MERN)</p>
                        <h1 className='greet'>Hello! i'm</h1>
                         <marquee><h1 className='name'>Vishal Choudhary</h1></marquee>
                           <p>   
                          I love turning ideas into reality through code.
                        </p>
                        <div className="buttons">
                        <a href="/resume.pdf" download>
            <button className='download'>Download my resume</button>
            </a>
                        <a href="#projects" className="btn">
                            View My Projects
                            </a>
                        </div>
                        <div className="checkout">
    <div className="check-content">Check out my</div>
    <hr className='line'></hr>
    <div className="box1">
    <a href="https://github.com/vishal0037k" target='_blank'>
      <img className='git-img' src={gitImage} alt='Github'></img>
      </a>
    </div>
    <div className="box2">
    <a href="https://www.linkedin.com/in/vishal-4b079427a/" target='_blank'>
      <img className='li-img' src={linkedinImage} alt='Linkdein'></img>
      </a>
    </div>
    <div className="box3">
    <a href="#contact">
      <img className='same-size' src={mailImage} alt='Mail'></img>
      </a>
    </div>  
 </div>
</div>

 <div className="profile">
  <img className='profile' src={profileImage} alt='profile'></img>
 </div>
</div>
        </>
    )
}
export default Home;