import "../App.css";
import Navbar from "../Components/Navbar";
import BookCard from "../Components/BookCard";
import booksdata from "../data/Booksdata";
import Footer from "../Components/Footer";

function Home() {
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
      <Navbar />
      <div className="booksbox">{bookElements}</div>
      <Footer />
    </>
  );
}

export default Home;
