import { MovieObj } from "../types/movieParams";
import MovieCard from "./MovieCard";

const MoviesList = ({movies, title}: {movies: MovieObj[] | undefined, title: string}) => {
    return (
        <div className="h-auto relative z-10 overflow-x-scroll overflow-y-hidden md:p-8 p-4">
            <h2 className=" text-white px-4 md:text-xl text-lg font-mono">{title}</h2>
            <div className="flex w-max">
                {movies?.map((movie) => <MovieCard key={movie.id} posterUrl={movie.poster_path}/>)}
            </div>
        </div>
    )
};

export default MoviesList;
