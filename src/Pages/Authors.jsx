import Navigation from "../Components/Navigation";
import authorsData from "../data/AuthorsData";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Authors() {
  return (
    <div>
      <Navigation />
      <h2 className="authors--title">A Diverse Tapestry of Literary Titans</h2>
      <div className="container">
        {authorsData.map((author) => (
          <Link key={author.id} to={`/author/${author.id}`}>
            <div className="authors--card">
              <img src={author.img} alt="" className="author--img" />
              <div className="intro">
                <h3 className="author--name">{author.name}</h3>
                <p className="author--description">{author.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
