import Twitter from "/icons/tweet.png";
import Linkedin from "/icons/linkedin.png";
import Instagram from "/icons/instagram.png";
import Github from "/icons/github.png";
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
        <a href="">
          <img src={Github} alt="" className="social-link github-link" />
        </a>
        <div className="footer-divider"></div>
        <a href="">
          <img src={Linkedin} alt="" className="social-link linkedin-link" />
        </a>
        <div className="footer-divider"></div>
        <a href="">
          <img src={Twitter} alt="" className="social-link twitter-link" />
        </a>
      </div>
      <div className="footer-para">
        This website is completely designed by{" "}
        <Link to="/aboutme">Nagraj Tadingi</Link>
      </div>
    </footer>
  );
}
