import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import "../App.css";
import bookstack from "../assets/icons/bookstack.png";
import authoricon from "../assets/icons/group.png";
import homeicon from "../assets/icons/house.png";
import abouticon from "../assets/icons/man.png";
import contact from "../assets/icons/contact.png";
import { Link as Link } from "react-router-dom";

export default function Map() {
  return (
    <div>
      <Navigation />
      <h1 className="overviewpage--title">Overview</h1>
      <div className="overview--container">
        <div className="overview--card">
          <div className="section">
            <img src={homeicon} alt="Home" className="section--icon" />
            <h2 className="section-heading">
              <Link to="/">Home</Link>
            </h2>
            <p className="map--para">
              The books you see on home page are randomly generated. Every time
              you refresh the page, you get a random suggestion.
            </p>
          </div>
          <div className="section">
            <img src={bookstack} alt="Books" className="section--icon" />
            <h2 className="section-heading">
              <Link to="/books">Books</Link>
            </h2>
            <p className="map--para">
              Obviously, it has books. Feel free to download (No Pressure).
              Genre & Pages are mentioned.
            </p>
          </div>
          <div className="section">
            <img src={authoricon} alt="Authors" className="section--icon" />
            <h2 className="section-heading">
              <Link to="/authors">Authors</Link>
            </h2>
            <p className="map--para">
              Umm... Authors info and their works i guess. Click to explore more
              (on the authors).
            </p>
          </div>
          <div className="section">
            <img src={abouticon} alt="About" className="section--icon" />
            <h2 className="section-heading">
              <Link to="/aboutme">About</Link>
            </h2>
            <p className="map--para">It has info about me. Duh...</p>
          </div>
          <div className="section">
            <img src={contact} alt="Contact" className="section--icon" />
            <h2 className="section-heading">
              <Link to="/contact">Contact</Link>
            </h2>
            <p className="map--para">
              It has a contact form and copyright information. If you want any
              books, use contact form. Thanks!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
