import { useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
    const [toggleGptState, setToggleGptState] = useState(false);
    const toggleGpt = () => {
        setToggleGptState((prev) => !prev);
    }
    return (
        <div>
            <Header />
            <button
                className="text-black h-auto z-10 absolute md:left-[50%] md:right-auto right-1 top-8 px-2 rounded-lg bg-red-700 hover:bg-opacity-50"
                onClick={toggleGpt}>
                    {toggleGptState ? "Search GPT" : "HomePage" }
            </button>
            {
                toggleGptState ?
                <>
                <MainContainer />
                <SecondaryContainer />
                </>
                :
                <GptSearch />
            }
        </div>
    )
};

export default Browse;