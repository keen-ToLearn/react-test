//createStore is a function used to create a REDUX STORE
//combineReducers is a function used to combine multiple simple reducers
//REDUX THUNK and REDUX MIDDLEWARE to be applied here
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//below import is not required due to implementation of - 'Splitting Reducers, Combining Reducers'
//reducer.js is not going to be used
//import { Reducer, initialState } from "./reducer";

import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";

export const ConfigureStore = () => {
    //REDUX STORE has state, reducer and dispatcher,
    //hence createStore takes 'Reducer' reducer function and 'initialState' state as parameters
    //
    //first method of creating store: using the common reducer for global state
    // const store = createStore(
    //     Reducer,
    //     initialState
    // );

    //second method of creating store: using combineReducers()
    const store = createStore(
        combineReducers({
            dishes : Dishes,
            comments : Comments,
            promotions : Promotions,
            leaders : Leaders
        }),
        applyMiddleware(thunk, logger)
        //applyMiddleware returns store enhancers
    );

    return store;
}