import React from "react";
import { api_options } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addmovietrailer } from "../utils/movieSlice";
import { useSelector } from "react-redux";

const VideoBackground = (movieid) => {
  const backgroundmovietrailer = useSelector(
    (store) => store.movies?.movietrailer?.key
  );

  const dispatch = useDispatch();
  const fetchTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid.movieid}/videos?language=en-US`,
      api_options
    );
    const json = await data.json();

    const filterData = json.results.filter((item) => item.type === "Trailer");
    const trailer = filterData.length > 0 ? filterData[0] : json.results[0];
    dispatch(addmovietrailer(trailer));
  };

  useEffect(() => {
    fetchTrailer();
  }, []);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          backgroundmovietrailer +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
