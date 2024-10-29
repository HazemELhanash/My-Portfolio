import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt=''></img>
        <h1><span>I&apos;m Hazem Elhanash,</span> Fullstack developer based in Egypt</h1>
        <p>I&apos;m a fullstack developer from Alexandria, Egypt with 2 years of experience in multiple companies like Buzz X, RTL and PerfectChem</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
            <div className="resume"><a href='https://drive.google.com/file/d/1D5tzCklf_GStEF6nbdwhJ2C95_WluzqZ/view?usp=drive_link' className='anchor-link'>My resume</a></div>
        </div>
    </div>
  )
}

export default Hero