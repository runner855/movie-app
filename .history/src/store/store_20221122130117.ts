import { configureStore } from "@reduxjs/toolkit";
import { fetchMovies} from "../actions";
export const store = configureStore({

  reducer: {
        MovieList: fetchMovies,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;