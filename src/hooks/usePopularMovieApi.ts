import { useEffect } from "react"
import { options } from "../auth/movieAuth";
import { POPULAR_MOVIE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/movieSlice";

const usePopularMovieApi = () => {
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
        fetchMovieData();
    }, []);
};

export default usePopularMovieApi;
