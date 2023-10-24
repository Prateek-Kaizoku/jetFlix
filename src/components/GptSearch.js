import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { PHOTO_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <img
        className="fixed -z-10 w-full h-full object-cover"
        src={PHOTO_URL}
        alt="netflix"
      />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
