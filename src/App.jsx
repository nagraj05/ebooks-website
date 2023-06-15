import "./App.css";
import Navbar from "./Components/Navbar";
import BookCard from "./Components/BookCard";
import booksdata from "./Components/Booksdata";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
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

  const bookElements = featuredBooks.map((data) => {
    return <BookCard key={data.id} data={data} />;
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="booksbox">{bookElements}</div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
