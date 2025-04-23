import React, { useState, useEffect } from "react";
import Data from '../../data.json'


const SearchComponent = () => {
  const [query, setQuery] = useState(""); // Search input state
  const [selectedItem, setSelectedItem] = useState(null); // Stores selected heading
  const [searchItems, setSearchItems] = useState([]); // Store JSON data

  // Fetch JSON dynamically
  useEffect(() => {
    fetch("../../data.json") // Corrected path
      .then((response) => response.json())
      .then((data) => setSearchItems(data.searchItems || []))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter data based on query (case insensitive)
  const filteredData = searchItems.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setSelectedItem(null);
        }}
        className="search-input"
      />

      {/* Show filtered results */}
      <ul className="search-results">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <li key={index} onClick={() => setSelectedItem(item)}>
              {item.title}
            </li>
          ))
        ) : (
          query.length >= 2 ? <li>No results found</li> : null
        )}
      </ul>

      {/* Show description when a heading is clicked */}
      {selectedItem && (
        <div className="description">
          <h3>{selectedItem.title}</h3>
          <p>{selectedItem.description}</p>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
