import Navigation from '../Components/Navigation'
import authorsdata from './AuthorsData'
import Footer from '../Components/Footer'



export default function Authors(){


    
    return(
        <div>
      <Navigation />
      <h2 className="authors--title">A Diverse Tapestry of Literary Titans</h2>
      <div className="container">
        {authorsdata.map((author) => (
            <div key={author.id} className="card1">
              <img src={author.img} alt={author.name} className="author--img" />
            <div className="intro">
            <h3 className='authorname'>{author.name}</h3>
            <p className='authordescription'>{author.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}