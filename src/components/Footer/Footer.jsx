import './Footer.css'
import footer_logo from '../../assets/footer_logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I&apos;m a fullstack developer from Alexandria, Egypt with 2 years of experience in multiple companies like Buzz X, RTL and PerfectChem</p>
            </div>
            <div className="footer-top-right">
                <div className="email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <div className="footer-bottom-left">© 2024 Hazem Elhanash. All rights reserved.</div>
            <div className="footer-bottom-right">
                <p>Terms of services</p>
                <p>Privacy policy</p>
                <p>Connect with me </p>
            </div>
        </div>
    </div>
  )
}

export default Footer