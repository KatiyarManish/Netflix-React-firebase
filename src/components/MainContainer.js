import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowplayinglist);
  if (!movies) return;

  const firstMovie = movies[0];
  const { title, overview, id } = firstMovie;

  // below api will need movieid which will come from nowplaying store and
  // then this api will return a key which we can use in youtube

  return (
    <div>
      <div className="pt-64 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="px-14 text-[40px]">{title}</h1>
        <p className="px-14 pt-8 w-1/2">{overview}</p>

        <div className="px-14 py-14 flex gap-8">
          <button className="bg-red-500 px-4 py-2 rounded-sm text-white hover:scale-105 ease-in-out">
            ▶️ Play
          </button>
          <button className="bg-red-500 px-4 py-2 rounded-sm text-white hover:scale-105 ease-in-out">
            More Info
          </button>
        </div>
      </div>
      <VideoBackground movieid={id} />
    </div>
  );
};

export default MainContainer;
