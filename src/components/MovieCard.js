import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className=" w-44 pr-2 ">
      <img
        className=" rounded-lg gap-4 m-2"
        src={POSTER_URL + posterPath}
        alt="MC"
      />
    </div>
  );
};

export default MovieCard;
