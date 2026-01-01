import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import { MovieStore } from "../types/movieParams";
import usePopularMovieApi from "../hooks/usePopularMovieApi";
import useTopRatedMovieApi from "../hooks/useTopRatedMovieApi";
import useUpcomingMovieApi from "../hooks/useUpcomingMovieApi";

const SecondaryContainer = () => {
    usePopularMovieApi();
    useTopRatedMovieApi();
    useUpcomingMovieApi();
    const movieSelector = useSelector((store: MovieStore) => store?.movies);
    if(!movieSelector) return null;
    return (
        <div className="bg-black">
            <div className="-mt-72">
                <MoviesList title="Now Playing" movies={movieSelector.nowPlayingMovies} />
            </div>
            <MoviesList title="Popular Movies" movies={movieSelector.popularMovies} />
            <MoviesList title="Top Rated Movies" movies={movieSelector.topRatedMovies} />
            <MoviesList title="Upcoming Movies" movies={movieSelector.upcomingMovies} />
        </div>
    )
};

export default SecondaryContainer;
