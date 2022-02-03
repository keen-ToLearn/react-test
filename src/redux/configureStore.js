//createStore is a function used to create a REDUX STORE
import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

export const ConfigureStore = () => {
    //REDUX STORE has state, reducer and dispatcher,
    //hence createStore takes 'Reducer' reducer function and 'initialState' state as parameters
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}