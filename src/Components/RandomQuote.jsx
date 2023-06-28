import { useEffect, useState } from "react";
import quotes from "../data/QuotesData";
import "../App.css";

export default function RandomQuote() {
  const [quote, setQuote] = useState({ quote: "", author: "" });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <blockquote className="nav--para">{quote.quote}</blockquote>
      <p className="nav--subpara">- {quote.author}</p>
    </div>
  );
}
