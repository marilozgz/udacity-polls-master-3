import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from "redux";
import thunk from 'redux-thunk';


import userReducer from "../features/users";
import authedUserReducer from "../features/authUser";
import questionReducer from "../features/questions";

const reducers = combineReducers({
  users: userReducer,
  authedUser: authedUserReducer,
  questions: questionReducer});


  

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export default store;