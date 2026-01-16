export type MovieObj = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
};

type GptMoviesResult = {
    title: string;
    results: MovieObj[];
}

type MoviesType = {
    nowPlayingMovies: MovieObj[];
    popularMovies: MovieObj[];
    topRatedMovies: MovieObj[];
    upcomingMovies: MovieObj[];
    searchedGptMovies: GptMoviesResult[];
}

export type MovieStore = {
    movies: Partial<MoviesType>;
};
