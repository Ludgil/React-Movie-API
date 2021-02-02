import { useState, useEffect } from "react";

export const useFetchSingleMovie = (url1, url2) => {
  const [loading, setLoading] = useState(true);
  const [singleMovie, setSingleMovie] = useState([]);
  let key = "";

  const getSingleMovie = async () => {
    try {
      const responseMovie = await fetch(url1);
      const dataMovie = await responseMovie.json();
      const responseVideo = await fetch(url2);
      const dataVideo = await responseVideo.json();

      if (dataMovie) {
        const {
          title,
          backdrop_path,
          poster_path,
          genres,
          overview,
          release_date,
          vote_average,
          runtime,
        } = dataMovie;
        if (dataVideo.results.length > 0) {
          key = dataVideo.results[0].key;
        }
        const newMovie = {
          title,
          backdrop_path,
          poster_path,
          genres,
          overview,
          release_date,
          vote_average,
          runtime,
          key,
        };
        setSingleMovie(newMovie);
        setLoading(false);
      } else {
        setSingleMovie(null);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleMovie();
  }, [url1, url2]);
  return { loading, singleMovie };
};
