import "./App.css";
import Navbar from "./Components/Navbar";
import BookCard from "./Components/BookCard";
import booksdata from "./Components/Booksdata";
import Footer from './Components/Footer'

function App() {
  const bookelements = booksdata.map((data) => {
    return <BookCard key={data.id} data={data} />;
  });

  return (
    <>
      <Navbar />
      <div className="booksbox">{bookelements}</div>
      <Footer />
    </>
  );
}

export default App;
