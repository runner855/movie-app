import { configureStore } from "@reduxjs/toolkit"; 
import fetchMovies  from "../actions/MoviesList";
import fetchMoviesDetails from '../actions/MoviesDetails';

export const store = configureStore({ 

  reducer: { 

    movies: fetchMovies,
    moviesDetails: fetchMoviesDetails


  }, 

});


export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;


