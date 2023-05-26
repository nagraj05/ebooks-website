import Twitter from '/icons/twitter.png'
import Facebook from '/icons/fb.png'
import Instagram from '/icons/insta.png'
export default function Footer(){
    return(
        <footer className="footer">
            <div className="social--icons">
                <a href=""><img src={Twitter} alt="" className='social-link'/></a>
                <div className="footer-divider"></div>
                <a href=""><img src={Facebook} alt="" className='social-link'/></a>
                <div className="footer-divider"></div>
                <a href=""><img src={Instagram} alt="" className='social-link'/></a>
            </div>
            <div className="footer--">
                <p>This website is completely designed by Nagraj Tadingi</p>
                </div>
        </footer>
    )
}