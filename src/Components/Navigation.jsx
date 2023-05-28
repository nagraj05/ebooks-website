
import { Link as Link } from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll';

export default function Navigation(){
 

    return(
        <nav className='navigation'>
          <h2 className="title">Free  <span>E-Books</span></h2>
            <ul>
              <li><Link to='/'>HOME</Link></li>
              <li><LinkScroll to="books" spy={true} smooth={true} duration={500} className='nav--link'  > BOOKS </LinkScroll></li>
              <li><Link to='/authors'>AUTHORS</Link></li>
              <li><Link to=''>GENRE</Link></li>
              <li><Link to=''>CATEGORIES</Link></li>
            </ul>
      </nav>


    )
}