import React, { useState } from 'react'; 
import styles from './page.module.css'; 

const SearchBar = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState(''); 

  const handleChange = (event) => {
    setInputValue(event.target.value); 
  };

  const handleSearch = () => {
    setSearchTerm(inputValue); 
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input} 
        placeholder="Explore Movies by Title"
        value={inputValue} 
        onChange={handleChange}
      />
      <button className={styles.button} onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
