import { NETFLIX_LOGO } from "../utils/constants";
import GptSearchBody from "./GptSearchBody";
import GptSearchHeader from "./GptSearchHeader";

const GptSearch = () => {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <img className="-z-10 absolute" src={NETFLIX_LOGO} alt=""/>
            <GptSearchHeader />
            <GptSearchBody />
        </div>
    )
};

export default GptSearch;
