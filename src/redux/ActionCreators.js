import * as ActionTypes from './ActionTypes';
//import {DISHES} from '../shared/dishes';
//fetch update:
//above import not required, being fetched from server
//below import for server address details
import { baseURL } from '../shared/baseURL';

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
    // setTimeout(() => {
    //     dispatch(addDishes(DISHES));
    // }, 2000);
    //fetch update: replacing setTimeout() with actual call to server using fetch

    return fetch(baseURL + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));   //response.json() is available as dishes in then() method
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

export const fetchComments = () => (dispatch) => {
    return fetch(baseURL + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
}

export const commentsFailed = (errmes) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmes
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseURL + 'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmes) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmes
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});