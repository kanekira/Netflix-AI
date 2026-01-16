import { useSelector } from "react-redux";
import { MovieStore } from "../types/movieParams";
import MoviesList from "./MoviesList";

const GptSearchBody = () => {
    const movieSelector = useSelector((store: MovieStore) => store.movies.searchedGptMovies);
    console.log("Movie selector", movieSelector);
    return (
        <div className="bg-black bg-opacity-40 flex-1 overflow-y-auto">
            {movieSelector?.map(({title, results}) => <MoviesList key={title} movies={results} title={title}/>)}
        </div>
    )
};

export default GptSearchBody;
