import { useSelector } from "react-redux";
import useMovieApi from "../hooks/useNowPlayingMovieApi";
import VideoTitle from "./VideoTitle"
import VideoTrailer from "./VideoTrailer"
import { MovieStore } from "../types/movieParams";

const MainContainer = () => {
    useMovieApi();
    const selector = useSelector((store: MovieStore) => store?.movies?.nowPlayingMovies);
    if(!selector) return null;
    const movie = selector?.[0];
    return (
        <div>
            <VideoTitle videoData={movie}/>
            <VideoTrailer videoId={movie} />
        </div>
    )
};

export default MainContainer;
