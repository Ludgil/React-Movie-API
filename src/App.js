import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useFetch } from "./functions/fetch";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Error from "./pages/Error";
import { key } from "./functions/key";

const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}&page=1`;
const url2 = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=`;

function App() {
  const [searchMovie, setSearchMovie] = useState("");
  const { movies, loading } = useFetch(
    url,
    `${url2}${searchMovie}`,
    searchMovie
  );

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home
              movies={movies}
              loading={loading}
              searchMovie={searchMovie}
              setSearchMovie={setSearchMovie}
            />
          </Route>
          <Route path='/info/:id'>
            <Info />
          </Route>
          <Route path='/*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
