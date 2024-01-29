import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },

    addGptMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const showMovieNames = (state) => state.gpt?.movieNames;
export const showMovieResults = (state) => state.gpt?.movieResults;
export const showToggleGPT = (state) => state.gpt?.showGptSearch;
export const { toggleGptSearchView, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
