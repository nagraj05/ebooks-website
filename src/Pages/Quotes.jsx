import QuotesData from "../data/QuotesData";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import html2canvas from "html2canvas";
import "./Quotes.css";
import { useEffect, useState } from "react";
import ButtonScrollToTop from "../Components/ButtonToTop";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const handleDownload = (cardId, authorName) => {
  const cardContainer = document.getElementById(`card-container-${cardId}`);

  html2canvas(cardContainer).then((canvas) => {
    const image = canvas
      .toDataURL("image/jpeg")
      .replace("image/jpeg", "image/octet-stream");
    const link = document.createElement("a");
    link.download = `${authorName}_quote_card.jpg`;
    link.href = image;
    link.click();
  });
};

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
            <div key={lines.id} className="quotes--container">
              <div className="quotes--card" id={`card-container-${lines.id}`}>
                <div className="author-container">
                  <img
                    src={lines.img}
                    alt={lines.author}
                    className="authorquote-image"
                  />
                  <p className="quotes--author">{lines.author}</p>
                </div>
                <blockquote className="quotes--para">{lines.quote}</blockquote>
                <FileDownloadIcon
                  className="quotes--download--button"
                  onClick={() => handleDownload(lines.id, lines.author)}
                />
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
