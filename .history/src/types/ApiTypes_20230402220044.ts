export interface MovieProps {
adult: boolean;
backdrop_path:string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum AppUrls {
  UPCOMING = `/upcoming`,
  TOP_RATED = "/top rated",
  POPULAR = "popular",

}


