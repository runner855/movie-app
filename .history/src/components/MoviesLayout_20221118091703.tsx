import * as React from "react";
import { MovieProps } from "../types/ApiTypes";

export const MoviesLayout = ({ movies }: any) => {
  return (
    <div className="container" onClick={() => console.log("button")}>
      {movies &&
        movies.map(
          (
            item: {
              title:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              poster_path: any;
            },
            index: any
          ) => {
            return (
              <div className={`rendered-movies`} key={`${item.title}-${index}`}>
                <img
                  alt="poster"
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                />
                <h1>{item.title}</h1>
              </div>
            );
          }
        )}
    </div>
  );
};
