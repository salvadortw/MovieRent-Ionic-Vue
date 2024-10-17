export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export interface DetailMovie extends Movie {
  overview: string;
  release_date: string;
  vote_average: number;
  runtime: number;
  backdrop_path: string;
}

export interface Cast {
  id: number;
  name: string;
  profile_path: string | null;
  character: string;
}
