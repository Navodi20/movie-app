'use client';

import React, { useState } from 'react';
import useSWR from 'swr';
import SearchBar from '../components/page'; 
import styles from './page.module.css';

const fetcher = (url) => fetch(url).then((res) => res.json());


const MoviesTable = ({ data }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th className={styles.th}>Title</th>
        <th className={styles.th}>Year</th>
        <th className={styles.th}>Genre</th>
        <th className={styles.th}>Rating</th>
        <th className={styles.th}>Director</th>
        <th className={styles.th}>Actors</th>
        <th className={styles.th}>Plot</th>
        <th className={styles.th}>Runtime</th>
        <th className={styles.th}>Awards</th>
        <th className={styles.th}>Box Office</th>
        <th className={styles.th}>Production</th>
      </tr>
    </thead>
    <tbody>
      {data.map((movie) => (
        <tr key={movie.id} className={styles.tr}>
          <td className={styles.td}>{movie.title}</td>
          <td className={styles.td}>{movie.year}</td>
          <td className={styles.td}>{movie.genre.join(', ')}</td>
          <td className={styles.td}>{movie.rating}</td>
          <td className={styles.td}>{movie.director}</td>
          <td className={styles.td}>{movie.actors.join(', ')}</td>
          <td className={styles.td}>{movie.plot}</td>
          <td className={styles.td}>{movie.runtime}</td>
          <td className={styles.td}>{movie.awards}</td>
          <td className={styles.td}>{movie.box_office}</td>
          <td className={styles.td}>{movie.production}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data } = useSWR(
    searchTerm ? `https://freetestapi.com/api/v1/movies?search=${searchTerm}` : null,
    fetcher
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search Movies</h1>
      <SearchBar setSearchTerm={setSearchTerm} />

      {data && <MoviesTable data={data} />}
    </div>
  );
};

export default SearchPage;
