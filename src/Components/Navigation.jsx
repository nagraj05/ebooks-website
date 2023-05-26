import { Link } from 'react-scroll';

export default function Navigation(){
    return(
        <nav>
        <h2 className="title">
          That Guy With a <span>Book</span>
        </h2>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
          <Link
              to="books"
              spy={true}
              smooth={true}
              duration={500}
              className='nav--link'
            //   offset={-50}
            >
              Books
            </Link>
          </li>
          <li>
            <a href=''>Genre</a>
          </li>
          <li>
            <a href=''>Authors</a>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
        </ul>
      </nav>


    )
}