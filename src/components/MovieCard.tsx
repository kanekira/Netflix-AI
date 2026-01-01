import { MOVIE_IMAGE_CDN_URL } from "../utils/constants";

type MovieUrl = {
    posterUrl: string;
};

const MovieCard = ({posterUrl}: MovieUrl) => {
    return (
        <div className="w-44 px-4 py-2">
            <img src={MOVIE_IMAGE_CDN_URL + posterUrl} alt="logo"/>
        </div>
    )
};

export default MovieCard;
