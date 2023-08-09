import Twitter from "../assets/icons/tweet.png";
import Linkedin from "../assets/icons/linkedin.png";
import Instagram from "../assets/icons/instagram.png";
import Github from "../assets/icons/github.png";
import { Link as Link } from "react-router-dom";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer className="footer">
      <div className="social--icons">
        <a
          href="https://www.instagram.com/thatguywithabook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Instagram}
            alt="Instagram"
            className="social-link instagram-link"
          />
        </a>
        <div className="footer-divider"></div>
        <a 
          href="https://www.github.com/nagraj05"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={Github} alt="Github" className="social-link github-link" />
        </a>
        <div className="footer-divider"></div>
        <a 
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={Linkedin} alt="Linkedin" className="social-link linkedin-link" />
        </a>
        <div className="footer-divider"></div>
        <a 
          href="https://www.twitter.com/StudyingQuakes"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={Twitter} alt="Twitter" className="social-link twitter-link" />
        </a>
      </div>
      <div className="footer-para">
      Coded & developed completely                                                        by{" "}
        <Link to="/aboutme" className="footer--name--link">Nagraj Tadingi</Link>
      </div>
    </footer>
  );
}
