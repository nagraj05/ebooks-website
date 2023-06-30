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
    <div className="homepage--container">
      <Navbar />
      <div className="booksbox">{bookElements}</div>
      <div className="challenge">
        <h3 className="challenge--heading">Reading Challenges & Lists</h3>
        <ul className="challenge--list">
          <li><a href="https://app.thestorygraph.com/reading_challenges/75592277-0f6e-438e-ba65-0ce6c43088d8" target="_blank" rel="noopener noreferrer">BBC Top 100 Books (C)</a></li>
          <li><a href="">Must Read Thrillers (L)</a></li>
          <li><a href="">Must Read Classics (L)</a></li>
        </ul>
      </div>
      <div className="wordscloud"></div>
      <Footer />
    </div>
  );
}

export default Home;
