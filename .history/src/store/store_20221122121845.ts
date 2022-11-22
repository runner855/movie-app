import { configureStore } from "@reduxjs/toolkit";
import fetchMovies from "../actions";
export const store = configureStore({

  reducer: {

    movies: fetchMovies,
movieDetails:fetchMovieDetails,

  },


});

 export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;