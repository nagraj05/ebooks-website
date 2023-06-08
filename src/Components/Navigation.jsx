import { Link as Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <h2 className="title">
        BETTER <span>READS</span>
      </h2>
      <ul>
        <li>
          <Link to="/" >HOME</Link>
        </li>
        <li>
          <Link to="/overview" >MAP</Link>
        </li>
        <li>
          <Link to="/books" >BOOKS</Link>
        </li>
        <li>
          <Link to="/authors" >AUTHORS</Link>
        </li>
        <li>
          <Link to="/aboutme" >ABOUT</Link>
        </li>
        <li>
          <Link to="/contact" >CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}
