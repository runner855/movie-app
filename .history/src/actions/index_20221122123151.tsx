import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { MovieProps } from "../types/ApiTypes";

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
    getUser: (
      state: InitialStateProps,

      action: PayloadAction<responseApiProps | undefined>
    ) => {
      state.isSignedIn = action.payload || false;
    },
  },
});

export const { getUser } = fetchUser.actions;
export default fetchUser.reducer;
