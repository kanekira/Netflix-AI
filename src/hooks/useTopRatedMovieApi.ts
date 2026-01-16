import { useEffect } from "react"
import { options } from "../auth/movieAuth";
import { TOP_RATED_MOVIE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../utils/movieSlice";
import { type MovieStore } from "../types/movieParams";

const useTopRatedMovieApi = () => {
    const topRatedMovies = useSelector((store: MovieStore) => store.movies.topRatedMovies);
    const dispatch = useDispatch();
    const fetchMovieData = async () => {
        try {
            const response = await fetch(TOP_RATED_MOVIE_URL, options);
            const data = await response.json();
            dispatch(addTopRated(data.results));
        } catch(error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        !topRatedMovies && fetchMovieData();
    }, []);
};

export default useTopRatedMovieApi;
