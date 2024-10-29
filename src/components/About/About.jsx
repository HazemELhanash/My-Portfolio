import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt=''></img>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt='' className='profile'></img>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced fullstack developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their sucess and growth</p>
                    <p>My passion for fullstack development is not only reflected in my extensive experience but also in the enthusiasm an dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"35%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"45%"}}/></div>
                    <div className="about-skill"><p>Node Js</p><hr style={{width:"35%"}}/></div>
                    <div className="about-skill"><p>Databases</p><hr style={{width:"45%"}}/></div>
                </div>
            </div>        
        </div>
        <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
    </div>
  )
}

export default About