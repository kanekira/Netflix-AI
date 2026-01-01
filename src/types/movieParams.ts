export type MovieObj = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
};

export type MovieStore = {
    movies: {
        nowPlayingMovies?: MovieObj[];
        popularMovies?: MovieObj[];
        topRatedMovies?: MovieObj[];
        upcomingMovies?: MovieObj[];
    }
};
