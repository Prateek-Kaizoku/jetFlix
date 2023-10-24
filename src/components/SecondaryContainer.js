import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className=" -mt-24 pl-2 z-20  relative bg-black ">
      <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
      <MovieList title={"Popular"} movies={movies.popular} />
      <MovieList title={"Top Rated"} movies={movies.topRated} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcoming} />
      <MovieList title={"Popular on TV"} movies={movies.popularTv} />
      <MovieList title={"Top Rated TV shows"} movies={movies.topRatedTv} />
    </div>
  );
};

export default SecondaryContainer;
