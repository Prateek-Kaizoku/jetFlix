import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className=" pt-[15%] w-screen aspect-video py-6 absolute bg-gradient-to-r text-white from-black bg-opacity-50">
      <h1 className="text-6xl font-bold pb-12 px-16">{title}</h1>
      <p className=" p-10 text-xl w-1/2 "> {description}</p>
      <div className="  ">
        <button className=" w-20 bg-grey-500 m-8 p-2 border-solid bg-white rounded-md text-black hover:bg-opacity-70">
          {" "}
          ▶️ Play
        </button>
        <button className=" w-30 bg-grey-500  p-2 border-solid bg-gray-500  text-black rounded-md hover:bg-opacity-70">
          {" "}
          ➨ My List
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
