export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
}

export interface DetailMovie extends Movie {
  overview: string;
  release_date: string;
  vote_average: number;
  runtime: number;
  genre: Genre[];
}

export interface Cast {
  id: number;
  name: string;
  profile_path: string | null;
  character: string;
}

export interface Genre {
  id: number;
  name: string;
}
