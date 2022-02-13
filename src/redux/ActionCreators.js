import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';

//addComment is an 'action creator', it takes parameters to create and return action
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

//fetchDishes is a REDUX THUNK, returns a function
//inner function of REDUX THUNK gets access to dispatch and getState
//demonstrates multiple dispatches
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    //setTimeout function to create delay, to be later replaced by async function call to server
    //dispatch addDishes Action Creator after 2 sec delay
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

//dishesLoading, dishesFailed, addDishes are plain Action Creators like addComment
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmes) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmes
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});