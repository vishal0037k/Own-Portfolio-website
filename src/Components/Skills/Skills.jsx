import './Skills.css';
import htmlImage from '../../Assets/images/html.png'; 
import cssImage from '../../Assets/images/css.png'; 
import jsImage from '../../Assets/images/js.png'; 
import reactImage from '../../Assets/images/react.png'; 
// import figmaImage from '../../Assets/images/figma.png'; 
import githubImage from '../../Assets/images/git.png'; 
import nodeImage from '../../Assets/images/node.png'; 
import expressImage from '../../Assets/images/express.png'; 
import mongoImage from '../../Assets/images/mongo.png'; 
const Skills = () => {
    return(
        <>
    <h1 className='skw'>My Skills</h1>
    <div className="skills-container">
        <div className="skbox">
            <div className="skill-card">
                <img className='img-size' src={htmlImage} alt="HTML" />
            </div>
            <p>HTML</p>
        </div>   
        <div className="skbox"> 
            <div className="skill-card">
                <img className='img-size' src={cssImage} alt="CSS" />
            </div>
            <p>CSS</p>
        </div>
        <div className="skbox">
            <div className="skill-card">
                <img className='img-size' src={jsImage} alt="JavaScript" />
            </div>
            <p>JS</p>
        </div>
        <div className="skbox">
            <div className="skill-card">
                <img className='img-size' src={reactImage} alt="React" />
            </div>
            <p>REACT</p>
        </div>
        {/* <div className="skbox">
            <div className="skill-card">
                <img className='img-size figma' src={figmaImage} alt="CSS" />
            </div>
            <p>Figma</p>
        </div>     */}
        <div className="skbox">
            <div className="skill-card">
                <img className='img-size' src={githubImage} alt="Git" />
            </div>
            <p>GITHUB</p>
        </div>
        <div className="skbox">
            <div className="skill-card">
                <img className='img-size' src={nodeImage} alt="Node" />
            </div>
            <p>NODE JS</p>
        </div>
        <div className="skbox">
            <div className="skill-card">
                <img className='img-size' src={expressImage} alt="Express" />
            </div>
            <p>EXPRESS JS</p>
        </div>
        <div className="skbox">
            <div className="skill-card">
                <img className='img-size' src={mongoImage} alt="Mongo" />
            </div>
            <p>MONGO DB</p>
        </div>
        </div>
        </>
    )
}
export default Skills;