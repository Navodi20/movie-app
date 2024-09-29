// app/movie/components/SearchBar.tsx
import React from 'react';
import styles from './page.module.css'; // Import the CSS module

const SearchBar = ({ setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input} 
        placeholder="Discover Movies"
        onChange={handleChange}
      />
      <button className={styles.button} onClick={() => setSearchTerm}>Search</button>
    </div>
  );
};

export default SearchBar;
