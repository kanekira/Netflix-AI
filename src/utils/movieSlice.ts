import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        searchedGptMovies: null
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopular: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRated: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcoming: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addSearchGpt: (state, action) => {
            return {...state, searchedGptMovies: action.payload}
        }
    }
});

export const {addNowPlaying, addPopular, addTopRated, addUpcoming, addSearchGpt} = movieSlice.actions;
export default movieSlice.reducer;
