import {createSlice} from '@reduxjs/toolkit';
import { UserState } from '../utils/_DATA';
import { addQuestion, answerQuestion } from "../features/questions";

export const initialState = {
    users:UserState,
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload;
        }
    },
    extraReducers: {
        [addQuestion]: (state, {payload: {id, author}}) => {
          state.users[author].questions.push(id)
        },
        [answerQuestion]: (state, {payload: {id, user, optionType}}) => {
          state.users[user].answers[id] = optionType
        }
      },
});

export const {getUsers} = userSlice.actions;
export default userSlice.reducer;