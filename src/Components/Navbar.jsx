import Navigation from "./Navigation";
import Lottie from "lottie-react";
import books from "../assets/books.json";

export default function Navbar() {
  return (
    <div className="hero">
      <Navigation />
      <div className="homepage--texts">
      <h1 className="nav--text">A WORLD IN PAGES</h1>
      <p className="nav--para">
        Embark on a literary journey where every click reveals a new chapter,
        and every story awaits its avid reader. Welcome to the world of ebooks,
        where dreams come alive on every page.
      </p>
      <p className="nav--subpara">Coded with hate, love & coffee by Nagraj</p>
      </div>
      <div className="lottie--container">
        <Lottie animationData={books} />
      </div>
    </div>
  );
}
