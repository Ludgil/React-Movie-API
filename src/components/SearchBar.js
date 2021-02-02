import React, { useState, useRef } from "react";
import logo from "../images/logo-tmdb.svg";

function SearchBar({ setSearchMovie }) {
  const searchTerm = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchMovie = () => {
    setSearchMovie(searchTerm.current.value);
  };
  return (
    <div className='search-container'>
      <form onSubmit={handleSubmit}>
        <input
          className='search'
          type='text'
          ref={searchTerm}
          onChange={searchMovie}
        />
      </form>
      <div className='credit'>
        <h3>API from : </h3>
        <a href='https://www.themoviedb.org/' target='_blank'>
          <img className='logo' src={logo} alt='logo imdb' />
        </a>
      </div>
    </div>
  );
}

export default SearchBar;
