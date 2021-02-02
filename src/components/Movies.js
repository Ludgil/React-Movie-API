import React from "react";
import Movie from "./Movie";

export default function Movies({ movies }) {
  return (
    <div className='movie-container'>
      <div className='title-container'>
        {movies.length > 0 ? "" : <h3>No Results</h3>}
      </div>
      {movies.map((movie) => {
        return <Movie key={movie.id} {...movie} />;
      })}
    </div>
  );
}
