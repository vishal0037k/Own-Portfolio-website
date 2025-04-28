import './Skills.css';
import htmlImage from '../../Assets/images/html.png'; 
import cssImage from '../../Assets/images/css.png'; 
import jsImage from '../../Assets/images/js.png'; 
import reactImage from '../../Assets/images/react.png'; 
import githubImage from '../../Assets/images/git.png'; 
import nodeImage from '../../Assets/images/node.png'; 
import expressImage from '../../Assets/images/express.png'; 
import mongoImage from '../../Assets/images/mongo.png';
import figmaImage from '../../Assets/images/figma.png'; 
import bootstrapImage from '../../Assets/images/bootstrap.png'; 
const Skills = () => {
    return(
        <>
    <h1 className='skw'>My Skills</h1>
    <div className="skills-container">
        <div className="skbox">
               <div className="skill-card">
                  <img className='img-size' src={htmlImage} alt="HTML" />
                  <div className="card__content">
                    <p className="card__title">HTML</p>
                  </div>
                </div>
        </div>   

        <div className="skbox"> 
            <div className="skill-card">
            <img className='img-size' src={cssImage} alt="CSS" />
                  <div className="card__content">
                    <p className="card__title">CSS</p>
                  </div>
            </div>
           
        </div>
        <div className="skbox">
            <div className="skill-card">
            <img className='img-size' src={jsImage} alt="JS" />
                  <div className="card__content">
                    <p className="card__title">JS</p>
                  </div>
            </div>
           
        </div>
        <div className="skbox">
            <div className="skill-card">
                <img className='img-size' src={reactImage} alt="React" />
                <div className="card__content">
                    <p className="card__title">REACT</p>
                  </div>
            </div>
            
        </div>
    
        <div className="skbox">
            <div className="skill-card">
                <img className='img-size' src={githubImage} alt="Git" />
                <div className="card__content">
                    <p className="card__title">GITHUB</p>
                  </div>
            </div>
           
        </div>
        <div className="skbox">
            <div className="skill-card">
                <img className='img-size' src={nodeImage} alt="Node" />
                <div className="card__content">
                    <p className="card__title">NODE</p>
                  </div>
            </div>
            
        </div>
        <div className="skbox">
            <div className="skill-card">
                <img className='img-size' src={expressImage} alt="Express" />
                <div className="card__content">
                    <p className="card__title">EXPRESS</p>
                  </div>
            </div>
            
        </div>
        <div className="skbox">
            <div className="skill-card">
                <img className='img-size' src={mongoImage} alt="Mongo" />
                <div className="card__content">
                    <p className="card__title">MONGO DB</p>
                  </div>
            </div>
            
        </div>

        <div className="skbox">
            <div className="skill-card">
                <img className='img-size' src={figmaImage} alt="Figma" />
                <div className="card__content">
                    <p className="card__title">FIGMA</p>
                  </div>
            </div>
            
        </div>

        <div className="skbox">
            <div className="skill-card">
                <img className='img-size' src={bootstrapImage} alt="Figma" />
                <div className="card__content">
                    <p className="card__title">BOOTSTRAP</p>
                  </div>
            </div>
            
        </div>

        </div>
        </>
    )
}
export default Skills;


