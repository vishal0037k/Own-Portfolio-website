// import './Skills.css';
// import htmlImage from '../../Assets/images/html.png'; 
// import cssImage from '../../Assets/images/css.png'; 
// import jsImage from '../../Assets/images/js.png'; 
// import reactImage from '../../Assets/images/react.png'; 
// import viteImage from '../../Assets/images/vite.png'; 
// import githubImage from '../../Assets/images/git.png'; 
// import nodeImage from '../../Assets/images/node.png'; 
// import expressImage from '../../Assets/images/express.png'; 
// import mongoImage from '../../Assets/images/mongo.png';
// import figmaImage from '../../Assets/images/figma.png'; 
// import bootstrapImage from '../../Assets/images/bootstrap.png'; 
// import mySqlImage from '../../Assets/images/mysql.png'; 
// import phpImage from '../../Assets/images/php.png'; 
// const Skills = () => {
//     return(
//         <>
//     <h1 className='skw'>My Skills</h1>
//     <div className="skills-container">
//         <div className="skbox">
//                <div className="skill-card">
//                   <img className='img-size' src={htmlImage} alt="HTML" />
//                   <div className="card__content">
//                     <p className="card__title">HTML</p>
//                   </div>
//                 </div>
//         </div>   

//         <div className="skbox"> 
//             <div className="skill-card">
//             <img className='img-size' src={cssImage} alt="CSS" />
//                   <div className="card__content">
//                     <p className="card__title">CSS</p>
//                   </div>
//             </div>
           
//         </div>
//         <div className="skbox">
//             <div className="skill-card">
//             <img className='img-size' src={jsImage} alt="JS" />
//                   <div className="card__content">
//                     <p className="card__title">JAVASCRIPT</p>
//                   </div>
//             </div>
           
//         </div>
//         <div className="skbox">
//             <div className="skill-card">
//                 <img className='img-size' src={reactImage} alt="React" />
//                 <div className="card__content">
//                     <p className="card__title">REACT</p>
//                   </div>
//             </div>
            
//         </div>


//            <div className="skbox">
//             <div className="skill-card">
//                 <img className='img-size' src={viteImage} alt="VITE" />
//                 <div className="card__content">
//                     <p className="card__title">VITE</p>
//                   </div>
//             </div>
            
//         </div>
    
//         <div className="skbox">
//             <div className="skill-card">
//                 <img className='img-size' src={githubImage} alt="Git" />
//                 <div className="card__content">
//                     <p className="card__title">GITHUB</p>
//                   </div>
//             </div>
           
//         </div>
//         <div className="skbox">
//             <div className="skill-card">
//                 <img className='img-size' src={nodeImage} alt="Node" />
//                 <div className="card__content">
//                     <p className="card__title">NODE</p>
//                   </div>
//             </div>
            
//         </div>
//         <div className="skbox">
//             <div className="skill-card">
//                 <img className='img-size' src={expressImage} alt="Express" />
//                 <div className="card__content">
//                     <p className="card__title">EXPRESS</p>
//                   </div>
//             </div>
            
//         </div>
//         <div className="skbox">
//             <div className="skill-card">
//                 <img className='img-size' src={mongoImage} alt="Mongo" />
//                 <div className="card__content">
//                     <p className="card__title">MONGO DB</p>
//                   </div>
//             </div>
            
//         </div>

//         <div className="skbox">
//             <div className="skill-card">
//                 <img className='img-size' src={figmaImage} alt="Figma" />
//                 <div className="card__content">
//                     <p className="card__title">FIGMA</p>
//                   </div>
//             </div>
            
//         </div>

//         <div className="skbox">
//             <div className="skill-card">
//                 <img className='img-size' src={bootstrapImage} alt="BOOTSTRAP" />
//                 <div className="card__content">
//                     <p className="card__title">BOOTSTRAP</p>
//                   </div>
//             </div>
            
//         </div>

//           <div className="skbox">
//             <div className="skill-card">
//                 <img className='img-size' src={mySqlImage} alt="MY SQL" />
//                 <div className="card__content">
//                     <p className="card__title">MY SQL</p>
//                   </div>
//             </div>
            
//         </div>


//  <div className="skbox">
//             <div className="skill-card">
//                 <img className='img-size' src={phpImage} alt="PHP" />
//                 <div className="card__content">
//                     <p className="card__title">PHP</p>
//                   </div>
//             </div>
            
//         </div>

//         </div>
//         </>
//     )
// }
// export default Skills;

import './Skills.css';
import { useRef } from 'react';

// Image imports...
import htmlImage from '../../Assets/images/html.png'; 
import cssImage from '../../Assets/images/css.png'; 
import jsImage from '../../Assets/images/js.png'; 
import reactImage from '../../Assets/images/react.png'; 
import viteImage from '../../Assets/images/vite.png'; 
import githubImage from '../../Assets/images/git.png'; 
import nodeImage from '../../Assets/images/node.png'; 
import expressImage from '../../Assets/images/express.png'; 
import mongoImage from '../../Assets/images/mongo.png';
import figmaImage from '../../Assets/images/figma.png'; 
import bootstrapImage from '../../Assets/images/bootstrap.png'; 
import mySqlImage from '../../Assets/images/mysql.png'; 
import phpImage from '../../Assets/images/php.png'; 

const skills = [
  { img: htmlImage, title: 'HTML' },
  { img: cssImage, title: 'CSS' },
  { img: jsImage, title: 'JAVASCRIPT' },
  { img: reactImage, title: 'REACT' },
  { img: viteImage, title: 'VITE' },
  { img: githubImage, title: 'GITHUB' },
  { img: nodeImage, title: 'NODE' },
  { img: expressImage, title: 'EXPRESS' },
  { img: mongoImage, title: 'MONGO DB' },
  { img: figmaImage, title: 'FIGMA' },
  { img: bootstrapImage, title: 'BOOTSTRAP' },
  { img: mySqlImage, title: 'MY SQL' },
  { img: phpImage, title: 'PHP' },
];

const Skills = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <>
      <h1 className='skw'>My Skills</h1>
      <div className="slider-wrapper">
        <button className="slide-button left" onClick={scrollLeft}>‹</button>
        <div className="skills-slider" ref={sliderRef}>
          {skills.map((skill, index) => (
            <div className="skbox" key={index}>
              <div className="skill-card">
                <img className='img-size' src={skill.img} alt={skill.title} />
                <div className="card__content">
                  <p className="card__title">{skill.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="slide-button right" onClick={scrollRight}>›</button>
      </div>
    </>
  );
};

export default Skills;

