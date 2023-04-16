import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dateReducer from "./slices/dateSlice";
import audioReducer from "./slices/audioSlice";
import postReducer from "./slices/postSlice";
import regionReducer from "./slices/regionSlice";
import photoReducer from "./slices/photoSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  date: dateReducer,
  audio: audioReducer,
  post: postReducer,
  region: regionReducer,
  photo: photoReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
