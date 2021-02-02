import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const image_url = "https://image.tmdb.org/t/p/w500/";

export default function Movie({
  id,
  title,
  overview,
  vote_average,
  backdrop_path,
}) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className='movie-card'>
      <div className='img-card'>
        <img
          className='img-movie'
          src={image_url + backdrop_path}
          alt={title}
        />
        <span
          className='rating'
          style={
            vote_average <= 5
              ? { border: "2px solid red" }
              : vote_average <= 7
              ? { border: "2px solid orange" }
              : { border: "2px solid green" }
          }
        >
          {vote_average.toString().length > 1
            ? vote_average
            : `${vote_average}.0`}
        </span>
      </div>
      <div className='content-card'>
        <h2>{title}</h2>
        <p>
          {readMore ? overview : `${overview.substring(0, 200)}...`}
          {overview.length < 200 ? (
            ""
          ) : (
            <button
              className='btn-read-more'
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "show less" : "read more"}
            </button>
          )}
        </p>
        <Link className='btn-info' to={`/Info/${id}`}>
          More Info
        </Link>
      </div>
    </div>
  );
}
