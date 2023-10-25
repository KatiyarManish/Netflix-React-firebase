import React from "react";
import Header from "./Header";

import { api_options } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowplaying } from "../utils/movieSlice";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";

const Browse = () => {
  const movies = useSelector((store) => {
    return store.movies;
  });
  const dispatch = useDispatch();
  const api_nowplaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      api_options
    );
    const json = await data.json();
    dispatch(addnowplaying(json.results));
  };

  useEffect(() => {
    api_nowplaying();
  }, []);

  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
