import { Link as Link } from "react-router-dom";

export default function Navigation() {
  
  return (
    <div>
    <header className='header'>
      <div className="logo">
       <h2 className="website--title">
        📚BETTER<span className="span"> READS</span>
       </h2>
      </div>
      <div className="navigation">
        <input type="checkbox" className="toggle-menu"  />
        <div className="hamburger"></div>
        <ul className="menu">
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
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          </ul>
      </div>
    </header>
  </div>
  );
}
