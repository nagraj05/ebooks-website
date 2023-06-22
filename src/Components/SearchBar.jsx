import { useState } from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ data, onSelectBook, onClearInput }) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
      onClearInput();
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleBookClick = (book) => {
    onSelectBook(book);
    setFilteredData([]);
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search books..."
          className="inputbox"
          onChange={handleFilter}
        />
        <div className="searchIcon">
          <SearchIcon /> 
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 5).map((value) => (
            <div
              key={value.id}
              className="dataItem"
              onClick={() => handleBookClick(value)}
            >
              {value.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

SearchBar.propTypes = {
  data: PropTypes.array.isRequired,
  onSelectBook: PropTypes.func.isRequired,
  onClearInput: PropTypes.func.isRequired,
};
