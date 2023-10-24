import React from "react";

import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";
import { useState } from "react";

const MainContainer = () => {
  const movie = useSelector((state) => state.movies?.nowPlaying);

  //random number between 0 and 19

  if (!movie) return;

  const mainMovie = movie[8];

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} description={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
};

export default MainContainer;
