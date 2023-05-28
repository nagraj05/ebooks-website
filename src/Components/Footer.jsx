import Twitter from '/icons/tweet.png'
import Linkedin from '/icons/linkedin.png'
import Instagram from '/icons/instagram.png'
import Github from '/icons/github.png'

export default function Footer(){
    return(
        <footer className="footer">
            <div className="social--icons">
                <a href=""><img src={Twitter} alt="" className='social-link twitter-link'/></a>
                <div className="footer-divider"></div>
                <a href=""><img src={Github} alt="" className='social-link github-link'/></a>
                <div className="footer-divider"></div>
                <a href="https://www.instagram.com/thatguywithabook"><img src={Instagram} alt="Instagram" className='social-link instagram-link'/></a>
                <div className="footer-divider"></div>
                <a href=""><img src={Linkedin} alt="" className='social-link linkedin-link'/></a>
            </div>
            <div className="footer-para">
                <p>This website is completely designed by Nagraj Tadingi</p>
                </div>
        </footer>
    )
}