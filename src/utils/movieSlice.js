import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowplayinglist: null,
    movietrailer: null,
  },
  reducers: {
    addnowplaying: (state, action) => {
      state.nowplayinglist = action.payload;
    },

    addmovietrailer: (state, action) => {
      state.movietrailer = action.payload;
    },
  },
});

export const { addnowplaying, addmovietrailer } = moviesSlice.actions;
export default moviesSlice.reducer;
