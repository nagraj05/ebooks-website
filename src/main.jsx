import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Authors from "./Pages/Authors";
import AuthorPage from "../src/Pages/AuthorsPage.jsx";
import AboutMe from "../src/Pages/Aboutme.jsx";
import BooksPage from "./Pages/BooksPage.jsx";
import Map from "./Pages/Map.jsx";
import Contact from "../src/Pages/Contact.jsx"
import Loader from "../src/Components/Loader.jsx"

const Root = () => {
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
            <Route path="/" element={<App />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/author/:id" element={<AuthorPage />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/overview" element={<Map />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        )}
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);