import React, { useState, useEffect } from 'react';
import './Body.css';
import { Link } from 'react-router-dom';

const Body = () => {

  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchTrendingList = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=bfefc419eaa3500835b8aea9c9b37315`)
        const data = await response.json();
        setCardData(data.results);
      }
      catch (error) {
        console.log('error fetching Data ');
      }
    }
    fetchTrendingList();
  });

  const [cardData2, setCardData2] = useState([]);

  useEffect(() => {
    const fetchTrendingList = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bfefc419eaa3500835b8aea9c9b37315`)
        const data = await response.json();
        setCardData2(data.results);
      }
      catch (error) {
        console.log('error fetching Data ');
      }
    }
    fetchTrendingList();
  })

  const handleCardClick = (index) => {
    console.log(`Navigating to movie ${index + 1}`);
  };

  return (
    <div>
      <div style={{ paddingTop: '10px', margin: "40px" }}>
        <h1 style={{ fontSize: "50px", animationDelay: '0.2s' }} className="fade-in">Welcome....</h1>
        <h2 className="fade-in" style={{ animationDelay: '0.4s' }}>Millions of movies, TV shows and people to discover. Explore now.</h2>
      </div>

      {/* /////////////// treinding screen */}
      <h4 className='Topcardname'>Trending Movie</h4>
      <div className="scrolling-wrapper">
        {cardData.map((movie, index) => (
          <div className="col-xs-12 col-sm-6 col-md-2" key={index} onClick={() => handleCardClick(index)}>
            <div className="card">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} style={{ height: "300px" }} />
              <div className="card-body">
                <h6 style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between' }}>
                  <span>
                    <span className="bi bi-star-fill" style={{ color: 'gold' }}></span> {movie.vote_average}
                  </span>
                  <span>
                    <i className={'bi bi-heart'} style={{ cursor: 'pointer' }}></i>
                    <i className={'bi bi-bookmark'} style={{ marginLeft: '10px', cursor: 'pointer' }}></i>
                  </span>
                </h6>
                <h5 style={{ textAlign: 'left', fontFamily: 'Roboto', fontSize: "18px" }}>{movie.original_title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className='Topcardname'>All Movies</h4>
      <div className="scrolling-wrapper">
        {cardData2.map((movie, index) => (
          <div className="col-xs-12 col-sm-6 col-md-2" key={index} onClick={() => handleCardClick(index)}>
            <div className="card">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} style={{ height: "300px" }} />
              <div className="card-body">
                <h6 style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between' }}>
                  <span>
                    <span className="bi bi-star-fill" style={{ color: 'gold' }}></span> {movie.vote_average}
                  </span>
                  <span>
                    <i className={'bi bi-heart'} style={{ cursor: 'pointer' }}></i>
                    <i className={'bi bi-bookmark'} style={{ marginLeft: '10px', cursor: 'pointer' }}></i>
                  </span>
                </h6>
                <h5 style={{ textAlign: 'left', fontFamily: 'Roboto', fontSize: "18px" }}>{movie.original_title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
