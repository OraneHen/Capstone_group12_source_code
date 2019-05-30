import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import combineReducers from "../reducers";

const store = createStore(
    combineReducers,
    compose(
        applyMiddleware(thunk)
    )
);

export default store;