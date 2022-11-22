import { configureStore } from "@reduxjs/toolkit"; 
import fetchMovies from "../actions";

export const store = configureStore({ 

  reducer: { 

    user: fetchUser, 

  }, 

}); 

 export type RootState = ReturnType<typeof store.getState>; 

export type AppDispatch = typeof store.dispatch;