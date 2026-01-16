import { ChangeEvent, useState } from "react";
import genAI from "../utils/googleGenAI";
import { options } from "../auth/movieAuth";
import { useDispatch } from "react-redux";
import { addSearchGpt } from "../utils/movieSlice";

const GptSearchHeader = () => {
    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {    
        setInputText(e.target.value);
    };

    const fetchMovieData = async (movieName: string) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, options);
        const movieData = await response.json();
        return {title: movieName, results: movieData.results};
    }

    const handleSearchClick = async  () => {
        const query = "Act as a Movie Recommendation System and suggest movies for the query" 
        + inputText +
        ". Only give me 5 movie names in a comma seperated fashion like for eg: Golmaal, Chup Chup Ke, Dhamaal, Hera Pheri, Krish";
        const movieList = await genAI(query);
        const movieListArray = movieList?.split(", ");
        const promiseArray = movieListArray?.map((movie) => fetchMovieData(movie));
        const movieResults = promiseArray && await Promise.all(promiseArray);
        dispatch(addSearchGpt(movieResults));
        setInputText("")
    }
    return (
        <div className="flex p-[10%] justify-center">
            <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-12">
                <input
                    type="text" 
                    className="border border-black col-span-10 p-2 bg-black rounded-lg text-gray-400" 
                    placeholder="What is your watch mood today?"
                    value={inputText}
                    onChange={handleChange}
                />
                <button className="col-span-2 mx-3 bg-red-700 px-2 rounded-lg" onClick={handleSearchClick}> Search </button>
            </form>
        </div>
    )
};

export default GptSearchHeader;
