import "./App.css";
import Navbar from "./Components/Navbar";
import BookCard from "./Components/BookCard";
import booksdata from "./Components/Booksdata";
import Footer from "./Components/Footer";

function App() {
  const generateRandomIndices = (length, count) => {
    const indices = [];
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * length);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  };

  const randomIndices = generateRandomIndices(booksdata.length, 8);
  const featuredBooks = randomIndices.map((index) => booksdata[index]);

  const bookelements = featuredBooks.map((data) => {
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
