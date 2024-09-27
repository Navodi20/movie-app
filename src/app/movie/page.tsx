import React from 'react';
import styles from './page.module.css'; // Import the CSS module

async function getMoviesData() {
  const res = await fetch('https://freetestapi.com/api/v1/movies');
  
  if (!res.ok) {
    throw new Error('Failed to fetch movie data');
  }

  const data = await res.json(); 
  console.log(data); // Check the structure
  return data; 
}

export default async function MoviesPage() {
  const movies = await getMoviesData(); 

  return (
    <table className={styles.table}> {/* Apply the styles */}
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Rating</th>
          <th>Director</th>
          <th>Actors</th>
          <th>Plot</th>
          <th>Runtime</th>
          <th>Awards</th>
          <th>Box Office</th>
          <th>Production</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie: any) => (
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td>{movie.genre.join(', ')}</td>
            <td>{movie.rating}</td>
            <td>{movie.director}</td>
            <td>{movie.actors.join(', ')}</td>
            <td>{movie.plot}</td>
            <td>{movie.runtime}</td>
            <td>{movie.awards}</td>
            <td>{movie.boxOffice}</td>
            <td>{movie.production}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
