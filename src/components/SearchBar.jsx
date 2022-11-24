import React from 'react';

// THE SEARCH BAR COMPONENT contains the eventListener onChange & the search icon

function SearchBar(props) {

  // the handleChange function 
  const handleSearchChange = (event) => {
    props.setSearchText(event.target.value);
  };

  return (
    <div className="search-box">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="search-icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        type="text"
        placeholder="type to search..."
        className="search-input"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
