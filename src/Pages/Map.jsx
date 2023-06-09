import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import "../App.css";
import bookstack from "../../public/icons/bookstack.png";
import authoricon from "../../public/icons/group.png";
import homeicon from "../../public/icons/house.png";
import abouticon from "../../public/icons/man.png";
import contact from "../../public/icons/contact.png";

export default function Map() {
  return (
    <div>
      <Navigation />
      <div className="overview--container">
        <h1 className="overviewpage--title">Overview</h1>
        <div className="overview--card">
          <div className="section">
            <img src={homeicon} alt="Home" className="section--icon" />
            <h2 className="section-heading">
              <a href="/">Home</a>
            </h2>
            <p className="map--para">
              The books you see on home page are randomly generated. Every time
              you refresh the page, you get a random suggestion.
            </p>
          </div>
          <div className="section">
            <img src={bookstack} alt="Books" className="section--icon" />
            <h2 className="section-heading">
              <a href="/books">Books</a>
            </h2>
            <p className="map--para">
              Obviously, it has books. Feel free to download (No Pressure).
              Genre & Pages are mentioned.
            </p>
          </div>
          <div className="section">
            <img src={authoricon} alt="Authors" className="section--icon" />
            <h2 className="section-heading">
              <a href="/authors">Authors</a>
            </h2>
            <p className="map--para">
              Umm... Authors info and their works i guess. Click to explore more
              (on the authors).{" "}
            </p>
          </div>
          <div className="section">
            <img src={abouticon} alt="About" className="section--icon" />
            <h2 className="section-heading">
              <a href="/aboutme">About</a>
            </h2>
            <p className="map--para">It has info about me. Duh...</p>
          </div>
          <div className="section">
            <img src={contact} alt="Contact" className="section--icon" />
            <h2 className="section-heading">
              <a href="/contact">Contact</a>
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
