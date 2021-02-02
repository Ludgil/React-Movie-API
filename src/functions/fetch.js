import { useState, useEffect } from "react";

export const useFetch = (url1, url2, search) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    if (!search) {
      const response = await fetch(url1);
      const moviesResponse = await response.json();
      const movieData = moviesResponse.results;
      setMovies(movieData);
      setLoading(false);
    } else {
      const response = await fetch(url2);
      const moviesResponse = await response.json();
      const movieData = moviesResponse.results;
      if (movieData) {
        setMovies(movieData);
        setLoading(false);
      } else {
        setMovies([]);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getMovies();
  }, [url1, search]);
  return { loading, movies };
};
