import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { responseApiProps } from "../types/apiTypes";

export interface InitialStateProps {
  isSignedIn: null | false | responseApiProps;
}

const initialState = {
  isSignedIn: null,
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
