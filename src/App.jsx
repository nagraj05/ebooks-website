import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Authors from "./Pages/Authors.jsx";
import AuthorPage from "./Pages/AuthorsPage.jsx";
import AboutMe from "./Pages/Aboutme.jsx";
import BooksPage from "./Pages/BooksPage.jsx";
import Map from "./Pages/Map.jsx";
import Contact from "./Pages/Contact.jsx";
import Loader from "./Components/Loader.jsx";
import Home from "../src/Pages/Home"
import Quotes from "./Pages/Quotes";

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        {isLoading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Map />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/author/:id" element={<AuthorPage />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        )}
      </BrowserRouter>
    </React.StrictMode>
  );
}
export default App;
