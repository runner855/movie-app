import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { MovieProps } from "../types/ApiTypes";

export interface InitialStateProps {
  areMoviesPresents: null | false | MovieProps;
}

const initialState = {
  areMoviesPresents: null,
} as InitialStateProps;

export const fetchMovies = createSlice({
  name: "areMoviesPresents",

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
