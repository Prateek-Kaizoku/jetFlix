import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieData } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const movieSearchTMDB = async (movieName) => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movieName +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error:", error);
      return null; // You can return an error value or handle the error as needed.
    }
  };

  const handlegptSearchClick = async () => {
    const searchQuery = searchText.current.value;
    const gptQuery =
      "Act as a movie recommender system and suggest movies based on the user's input: " +
      searchQuery +
      " only provide 5 movies name (nothing else) comma separated like the example ahead: gaddar, sholay, 3 idiots, Don, DDLJ,";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices[0]?.message?.content) return;

    console.log(gptResults.choices[0]?.message?.content);
    console.log(searchQuery);
    const movieList = gptResults?.choices[0]?.message?.content.split(",");

    const promiseArray = movieList?.map((movie) => movieSearchTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieData({ movieNames: tmdbResults, movieResults: movieList })
    );
  };
  const langSelector = useSelector((store) => store.config.lang);
  return (
    <div>
      <div className="flex">
        <form
          className=" items-center justify-center w-full h-full border-2 border-black"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            placeholder={lang[langSelector].gptSearchPlaceHolder}
            className=" w-3/12 border-b-4 text-left p-2 border-black mt-[30%] ml-[40%]"
          />
          <button
            className="bg-red-700 text-white p-2 m-20 shadow-lg cursor-pointer rounded-lg"
            onClick={handlegptSearchClick}
          >
            {lang[langSelector].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
