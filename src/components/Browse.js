import React from "react";
import Header from "./Header";
import { api_options } from "../utils/constants";
import { useEffect } from "react";

const Browse = () => {
  const api_nowplaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      api_options
    );
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    api_nowplaying();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
