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
  name: "movies",

  initialState,

  reducers: {
    getMovies: (
      state,

      action: PayloadAction<MovieProps[] | undefined>
    ) => {
      state.MovieList = action.payload || undefined;
    },
  },
});

export const { getMovies } = fetchMovies.actions;
export default fetchMovies.reducer;
