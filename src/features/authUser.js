import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    authedUser: null,
};

const userSlice = createSlice({
    name: "authedUser",
    initialState,
    reducers: {
        setauthedUser: (state, action) => {
            state.authedUser = action.payload;
        },
        removeauthedUser: (state,action) => {
            state.authedUser = null;
        }
    }
})

export const { setauthedUser, removeauthedUser } = userSlice.actions;
export default userSlice.reducer;