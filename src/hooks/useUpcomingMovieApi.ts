import { useEffect } from "react"
import { options } from "../auth/movieAuth";
import { UPCOMING_MOVIES_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../utils/movieSlice";

const useUpcomingMovieApi = () => {
    const dispatch = useDispatch();
    const fetchMovieData = async () => {
        try {
            const response = await fetch(UPCOMING_MOVIES_URL, options);
            const data = await response.json();
            dispatch(addUpcoming(data.results));
        } catch(error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        fetchMovieData();
    }, []);
};

export default useUpcomingMovieApi;
