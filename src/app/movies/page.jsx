import React from 'react';
import styles from './page.module.css';

const MoviesPage = async () => {
  const res = await fetch('https://freetestapi.com/api/v1/movies');
  
  const movies = await res.json();
  console.log('Fetched Movies:', movies);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search Movies</h1>
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
          {movies.map(movie => (
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
    </div>
  );
};

export default MoviesPage;
