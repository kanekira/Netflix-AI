import useMovieApi from "../hooks/useMovieApi";
import Header from "./Header";
import VideoTrailer from "./VideoTrailer";
import VideoTitle from "./VideoTitle";

const Browse = () => {
    const res = useMovieApi();
    if(!res.length) return null;
    const videoData = res[0];
    return (
        <div>
            <Header />
            <VideoTitle videoData={videoData}/>
            <VideoTrailer videoId={videoData} />
        </div>
    )
};

export default Browse;