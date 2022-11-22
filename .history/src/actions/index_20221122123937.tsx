import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { MovieProps } from "../types/ApiTypes";

export interface InitialStateProps {
  MovieList: null | undefined | MovieProps;
}

const initialState = {
  MovieList: null,
} as InitialStateProps;

export const fetchMovies = createSlice({
  name: "MovieList",

  initialState,

  reducers: {
    getMovies: (
      state: InitialStateProps,

      action: PayloadAction<MovieProps | undefined>
    ) => {
      state.areMoviesPresents = action.payload || false;
    },
  },
});

export const { getMovies } = fetchMovies.actions;
export default fetchMovies.reducer;
