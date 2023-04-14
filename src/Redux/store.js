import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { DataReducer } from "./Reducers";
const store = createStore(DataReducer, applyMiddleware(thunk, logger));

export default store;
