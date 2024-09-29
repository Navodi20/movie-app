
import React from 'react';
import styles from './page.module.css'; 

const SearchBar = ({ setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input} 
        placeholder="Explore Movies by Title"
        onChange={handleChange}
      />
      <button className={styles.button} onClick={() => setSearchTerm}>Search</button>
    </div>
  );
};

export default SearchBar;
