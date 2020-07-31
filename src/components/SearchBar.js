import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  const handleInputChange = ({ target }) => {
    setTerm(target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    onTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            name="term"
            value={term}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
