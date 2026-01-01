import { useEffect } from "react"
import { options } from "../auth/movieAuth";
import { NOW_PLAYING_MOVIE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";

const useNowPlayingMovieApi = () => {
    const dispatch = useDispatch();
    const fetchMoviePlayingData = async () => {
        try {
            const response = await fetch(NOW_PLAYING_MOVIE_URL, options);
            const data = await response.json();
            dispatch(addNowPlaying(data.results));
        } catch(error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        fetchMoviePlayingData();
    }, []);
};

export default useNowPlayingMovieApi;
