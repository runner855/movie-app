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
  name: "isSignedIn",

  initialState,

  reducers: {
    getUser: (
      state: InitialStateProps,

      action: PayloadAction<responseApiProps | undefined>
    ) => {
      state.isSignedIn = action.payload || false;
    },
  },
});

export const { getMovies } = fetchMovies.actions;
export default fetchMovies.reducer;
