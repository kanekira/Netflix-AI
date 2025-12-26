import { createSlice } from "@reduxjs/toolkit";
import { type User } from "firebase/auth";

const userInfo: User | null = null;

const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: userInfo
    },
    reducers: {
        storeUser: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUser: () => {
            return {userInfo: null};
        }
    }
});

export default userSlice.reducer;

export const { storeUser, removeUser } = userSlice.actions;