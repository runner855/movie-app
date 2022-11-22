import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { MovieProps } from "../types/ApiTypes";

export interface InitialStateProps {
  MovieList: undefined | MovieProps[];
  MoviesDetails: undefined | MovieProps[];
}

const initialState = {
  MovieList: undefined,
  MoviesDetails: undefined,
} as InitialStateProps;

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

export const { getMoviesDetails } = fetchMoviesDetails.actions;
export default fetchMoviesDetails.reducer;
