import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { MovieProps } from "../types/ApiTypes";

export interface InitialStateProps {
  MovieList: undefined | MovieProps[];
}

const initialState = {
  MovieList: undefined,
} as InitialStateProps;

export const fetchMovies = createSlice({
  name: "MovieList",
  initialState,

  reducers: {
    getMovies: (
      state: InitialStateProps,

      action: PayloadAction<MovieProps[] | undefined>
    ) => {
      state.MovieList = action.payload || undefined;
    },
  },
});

export const fetchMoviesDetails = createSlice({
  name: "MoviesDetails",
  initialState,

  reducers: {
    getMoviesDetails: (
      state: InitialStateProps,

      action: PayloadAction<MovieProps[] | undefined>
    ) => {
      state.MoviesDetails = action.payload || undefined;
    },
  },
});

export const { getMovies } = fetchMovies.actions;
export default fetchMovies.reducer;

export const { getMoviesDetails } = fetchMoviesDetails.actions;
export default fetchMoviesDetails.reducer;
