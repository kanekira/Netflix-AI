import { useEffect } from "react"
import { options } from "../auth/movieAuth";
import { TOP_RATED_MOVIE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/movieSlice";

const useTopRatedMovieApi = () => {
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
        fetchMovieData();
    }, []);
};

export default useTopRatedMovieApi;
