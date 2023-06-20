import { useParams } from "react-router-dom";
import authorsData from "../data/AuthorsData";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import "../Pages/AuthorPage.css";
import { useEffect, useState } from "react";
import authorsInfo from "../data/AuthorsInfo";

export default function AuthorPage() {
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const filteredAuthorsInfo = authorsInfo.filter(
    (info) => info.id === Number(id)
  );

  return (
    <div>
      <Navigation />
      <h2 className="author--book--title">{author.name}</h2>
      <div className="author--intro--card--container">
        <div className="author--intro--card">
          {filteredAuthorsInfo.map((info) => (
            <div key={info.id}>
              <img className="author-image" src={info.img} alt={info.name} />
              <div className="author-info">
                <p className="info-genre">
                  <span className="label">Genre:</span>
                  {info.genre}
                </p>
                <p className="info-born">
                  <span className="label">Born:</span>
                  {info.born}
                </p>
                {info.died && (
                  <p className="info-died">
                    <span className="label">Died:</span>
                    {info.died}
                  </p>
                )}
                <p className="info-about">
                  <span className="label">About:</span>
                  {info.about}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="top">
        <div className="author--book--container">
          {author.books.map((book) => (
            <div key={book.id} className="author--book--card">
              <img src={book.img} alt={book.title} className="book-img" />
              <div className="author--book--intro">
                <p className="book--title">{book.title}</p>
                <p className="book--pages">{book.pages} pages</p>
                <button
                  className="download--button"
                  onClick={() => handleDownload(book.value)}
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
