import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null
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
        }
    }
});

export const {addNowPlaying, addPopular, addTopRated, addUpcoming} = movieSlice.actions;
export default movieSlice.reducer;
