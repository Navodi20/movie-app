
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
      <h1 className="title">Welcome to the World of Movies</h1>
      <p className="description">Explore an extensive collection of movies and discover all the details you need to make informed viewing choices. Whether you're looking for classic films, the latest blockbusters, or hidden gems, our movie explorer provides comprehensive information on your favorite titles. Dive deep into movie plots, find out who's starring, check ratings, and explore genres. Our platform makes it easy to search for the perfect movie, whether you're in the mood for a drama, comedy, thriller, or something new. Get started now and unlock a world of cinematic knowledge at your fingertips</p>
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
