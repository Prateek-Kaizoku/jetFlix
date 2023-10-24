import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white opacity-90">
      <div className="text-2xl font-bold">
        {movieResults.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieNames[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
