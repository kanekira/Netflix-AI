import { useEffect } from "react"
import { options } from "../auth/movieAuth";
import { POPULAR_MOVIE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../utils/movieSlice";
import { type MovieStore } from "../types/movieParams";

const usePopularMovieApi = () => {
    const popularMovies = useSelector((store: MovieStore) => store.movies.popularMovies);
    const dispatch = useDispatch();
    const fetchMovieData = async () => {
        try {
            const response = await fetch(POPULAR_MOVIE_URL, options);
            const data = await response.json();
            dispatch(addPopular(data.results));
        } catch(error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        !popularMovies && fetchMovieData();
    }, []);
};

export default usePopularMovieApi;
