
import React from 'react';

const HomePage = () => {

  const imageUrls = [
    '/images/image 2 (1).jpg', 
    '/images/image 2 (2).jpg',
    '/images/image 2 (3).jpg',
    '/images/image 2 (4).jpg',
    '/images/image 2 (5).jpg',
    '/images/image 2 (6).jpg',
    '/images/image 2 (7).jpg',
    '/images/image 2 (8).jpg',
    '/images/image 2 (9).jpg',
    '/images/image 2 (10).jpg',
    '/images/image 2 (11).jpg',
    '/images/image 2 (12).jpg',
    '/images/image 2 (13).jpg',
    '/images/image 2 (14).jpg',
    '/images/image 2 (15).jpg',
    '/images/image 2 (16).jpg'
  ];

  return (
    <div className="container">
      <h1 className="title">Welcome to Movie Explorer</h1>
      <p className="description">Search for your favorite movies and get detailed information!</p>
      <a href="/movie/search" className="button">Discover Movies</a>
      <a href="/movies" className="button">Movie Collection</a>
      <div className="imageContainer">
      {imageUrls.map((src, index) => (
          <img key={index} src={src} className="image" />
        ))}
      </div>

    </div>
  );
};

export default HomePage;
