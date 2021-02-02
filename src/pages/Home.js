import React from "react";
import SearchBar from "../components/SearchBar";
import Movies from "../components/Movies";
import Loading from "../components/Loading";

function Home({ movies, loading, setSearchMovie }) {
  return (
    <>
      <header>
        <SearchBar setSearchMovie={setSearchMovie} />
      </header>
      <div className='container'>
        {loading ? <Loading /> : <Movies movies={movies} />}
      </div>
    </>
  );
}

export default Home;
