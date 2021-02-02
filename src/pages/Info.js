import React from "react";
import { useParams } from "react-router-dom";
import { useFetchSingleMovie } from "../functions/fetchSingleMovie";
import { BrowserRouter as Route, Link } from "react-router-dom";
import { api_key } from "../functions/key";

const url = "https://api.themoviedb.org/3/movie/";
const backdropLink = "https://image.tmdb.org/t/p/w1280/";
const posterLink = "https://image.tmdb.org/t/p/w300/";

function Info() {
  const { id } = useParams();

  const { loading, singleMovie } = useFetchSingleMovie(
    `${url}${id}?api_key=${api_key}`,
    `${url}${id}/videos?api_key=${api_key}`
  );

  if (loading) {
    return "loading...";
  }

  const {
    title,
    backdrop_path,
    poster_path,
    genres,
    overview,
    release_date,
    vote_average,
    runtime,
    key,
  } = singleMovie;

  let videoKey = "";

  if (key) {
    videoKey = `https://www.youtube.com/embed/${key}`;
  }

  console.log(singleMovie);

  return (
    <div className='container'>
      <div
        className='movie-header'
        style={{
          background: `linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(103,103,103,0.8) 100%), url(
               "${backdropLink}${backdrop_path}"
              )`,
        }}
      >
        <h2 className='info-title'>{title}</h2>
        <div className='content-movie-header'>
          <div className='poster-container'>
            <img src={`${posterLink}${poster_path}`} alt={title} />
            <span
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
          <div className='info-film'>
            <p>
              <span>Genres : </span>
              {genres.map((genre, i) => {
                if (genres.length === i + 1) {
                  return genre.name;
                }
                return genre.name + ", ";
              })}
            </p>
            <p>
              <span>Release date :</span> {release_date}
            </p>
            <p>
              <span>Time : </span> {runtime} min
            </p>
          </div>
        </div>
      </div>
      <section className='description'>
        <h3>Description :</h3>
        <p>{overview}</p>
      </section>
      <section className='trailer'>
        {key ? (
          <>
            <h3>Trailer : </h3>
            <div className='video-container'>
              <div>
                <iframe
                  className='video'
                  src={videoKey}
                  frameborder='0'
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </>
        ) : (
          <h3 className='not-found'>No trailer found</h3>
        )}
        <div className='btn-center'>
          <Link className='btn-back' to='/'>
            Back
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Info;
