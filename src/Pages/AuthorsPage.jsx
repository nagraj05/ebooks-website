import { useParams } from 'react-router-dom';
import authorsData from './AuthorsData';
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer' 
import '../Pages/AuthorPage.css'
import { useState } from 'react';
import authorsInfo from '../Pages/AuthorsInfo'

export default function AuthorPage() {

  const [selectedBook, setSelectedBook] = useState(null);

  function handleDownload(bookValue) {
    const ebookPath = `/books/${bookValue}.epub`;
    window.open(ebookPath, "_blank");
    setSelectedBook(bookValue);
  }

  const { id } = useParams();


  const author = authorsData.find((author) => author.id === Number(id));

  if (!author) {
    return <div>Author not found</div>;
  }

  return (
    <div>
        <Navigation />
        <h2 className='author--book--title'>{author.name}</h2>
        <div className='author--intro--card--container'>
        <div className="author--intro--card">
          {authorsInfo.map((author)=>(
            <div key={author.id}>
            <img className="author-image" src={author.img} alt={author.name}/>
            <div className="author-info">
            <h2>{author.name}</h2>
            <p><span className="label">Genre:</span>{author.genre}</p>
            <p><span className="label">Born:</span>{author.born}</p>
            <p><span className="label">Died:</span>{author.died}</p>
            <p><span className="label">About:</span>{author.about}</p>
            </div>
          </div>
          ))}
            
        </div>
        </div>


        <div className='author--book--container'>
            {author.books.map((book) => (
            <div key={book.id} className='author--book--card'>
              <img src={book.img} alt={book.title} className='book-img' />
              <div className="author--book--intro">
                <p className='book--title'>{book.title}</p>
                <p className='book--pages'>{book.pages} pages</p>
                <button className='download--button' onClick={() => handleDownload(book.value)}>Download</button>
              </div>
            </div>
            ))}
        </div>
        <Footer />
    </div>
  );
}
