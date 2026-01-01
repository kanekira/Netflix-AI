import { useEffect, useState } from "react"
import { options } from "../auth/movieAuth";

type MovieResultObj = {
    type: string;
    site: string;
    key: string;
    official?: boolean;
    name?: string;
}

const useVideoApi = (videoId: number) => {
    const [videoDetails, setVideoDetails] = useState<MovieResultObj[]>([]);
    const fetchVideoDetails = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`, options);
        const data = await res.json();
        const filterTrailer = data.results.filter((item: MovieResultObj) => item.type === "Trailer" && item.site === "YouTube");
        setVideoDetails(filterTrailer);
    };
    useEffect(() => {
        fetchVideoDetails();
    }, []);
    return videoDetails;
};

export default useVideoApi;
