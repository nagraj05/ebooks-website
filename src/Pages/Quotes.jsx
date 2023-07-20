import QuotesData from "../data/QuotesData";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import "./Quotes.css";
import { useEffect, useState } from "react";
import ButtonScrollToTop from "../Components/ButtonToTop";

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function Quotes() {
  const [shuffledQuotes, setShuffledQuotes] = useState([]);

  useEffect(() => {
    setShuffledQuotes(shuffleArray(QuotesData));
  }, []);

  return (
    <div>
      <Navigation />
      <div className="quotespage--container">
        <h1 className="quotes--heading">
          Quill&apos;s Symphony: Inspiring Quotes from the Ink of Authors
        </h1>
        <div className="quotes--home">
          {shuffledQuotes.map((lines) => (
            <div key={lines} className="quotes--container">
              <div className="quotes--card">
                <div className="author-container">
                  <img
                    src={lines.img}
                    alt={lines.author}
                    className="author-image"
                  />
                  <p className="quotes--author">{lines.author}</p>
                </div>
                <blockquote className="quotes--para">{lines.quote}</blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ButtonScrollToTop />
      <Footer />
    </div>
  );
}
