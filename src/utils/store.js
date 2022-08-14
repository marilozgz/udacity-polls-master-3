import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from "redux";
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';


import userReducer from "../features/users";
import authedUserReducer from "../features/authUser";
import questionReducer from "../features/questions";

const reducers = combineReducers({
  users: userReducer,
  authedUser: authedUserReducer,
  questions: questionReducer});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);
  

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export default store;