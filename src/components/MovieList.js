import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  if (!movies) return;
  return (
    <div className=" px-6 bg-black opacity-80 mx-1 text-3xl rounded-lg text-white">
      <h1>{title}</h1>
      <div className="flex text-2xl font-bold mt-10 overflow-x-scroll">
        <div className=" flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
