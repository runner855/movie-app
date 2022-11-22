import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { MovieProps } from "../../types/ApiTypes";

export interface InitialStateProps {
  areMoviesPresent: null | false | responseApiProps;
}

const initialState = {
  areMoviesPresent: null,
} as InitialStateProps;

export const fetchUser = createSlice({
  name: "isSignedIn",

  initialState,

  reducers: {
    getMovies: (
      state: InitialStateProps,

      action: PayloadAction<responseApiProps | undefined>
    ) => {
      state.isSignedIn = action.payload || false;
    },
  },
});

export const { getMovies } = fetchMovies.actions;

export default fetchMovies.reducer;
