//REDUX THUNK update: below import not required, to be supplied by an Action Creator
//import {DISHES} from '../shared/dishes';
import * as ActionTypes from './ActionTypes';

//REDUX THUNK update: state parameter modified to contain isLoading, errMes, dishes keys
//instead of just DISHES; to handle all Action Creators pertaining to 'Dishes' reducer
export const Dishes = (state = {
        isLoading: true,//if dishes still loading, isLoading: true; once the dishes load, isLoading: false
        errMes: null,
        dishes: []
    }, action) => {
    switch(action.type){
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMes: null, dishes: action.payload}
        case ActionTypes.DISHES_LOADING:
            //...state - take the state as it is, then set the properties following i.e. isLoading to true etc.
            //resets the state to initial form
            return {...state, isLoading: true, errMes: null, dishes: []}
        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMes: action.payload, dishes: []}
        default:
            return state;
    }
}