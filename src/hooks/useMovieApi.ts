import { useEffect, useState } from "react"
import { options } from "../auth/movieAuth";
import { NOW_PLAYING_MOVIE_URL } from "../utils/constants";

const useMovieApi = () => {
    const [movieData, setMovieData] = useState([]);
    const fetchMoviePlayingData = async () => {
        try {
            const response = await fetch(NOW_PLAYING_MOVIE_URL, options);
            const data = await response.json();
            setMovieData(data.results);
        } catch(error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        fetchMoviePlayingData();
    }, []);
    return movieData;
};

export default useMovieApi;
