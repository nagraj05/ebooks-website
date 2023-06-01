import { Link as Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <h2 className="title">
        Free <span>E-Books</span>
      </h2>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/overview">MAP</Link>
        </li>
        <li>
          <Link to="/books">BOOKS</Link>
        </li>
        <li>
          <Link to="/authors">AUTHORS</Link>
        </li>
        <li>
          <Link to="/aboutme">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
}
