import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { AnimeData, animeSpecficData } from "./Reducers";

const combinedReducer = combineReducers({
  animeData: AnimeData,
  specificAnimeData: animeSpecficData,
});

const store = createStore(combinedReducer, applyMiddleware(thunk, logger));

export default store;
