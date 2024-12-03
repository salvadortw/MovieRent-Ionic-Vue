export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  genre_ids: number[];
}

export interface DetailMovie extends Movie {
  overview: string;
  release_date: string;
  vote_average: number;
  runtime: number;
  genres: Genres[];
}

export interface Cast {
  id: number;
  name: string;
  profile_path: string | null;
  character: string;
}

export interface Genres {
  id: number;
  name: string;
}
