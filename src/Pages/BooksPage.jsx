import Navigation from "../Components/Navigation";
import BooksCard from "../Components/BookCard";
import Footer from "../Components/Footer";
import booksdata from "../data/Booksdata";
import "../App.css";

export default function BooksPage() {
  return (
    <div>
      <Navigation />
      <h2 className="bookspage--title">
        From Page to Page: Unveiling a Kaleidoscope of Literary Delights
      </h2>
      <div className="booksbox">
        {booksdata.map((books) => (
          <BooksCard key={books.id} data={books} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
