//fetch update: below import not required, to be fetched from server & supplied from Action Creator
//import {PROMOTIONS} from '../shared/promotions';
import * as ActionTypes from './ActionTypes';

//fetch update: changing state = PROMOTIONS to state = { isLoading: true, errMes: null, promotions: []}
export const Promotions = (state = {
        isLoading: true,
        errMes: null,
        promotions: []
    }, action) => {
    switch(action.type){
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading: false, errMes: null, promotions: action.payload}
        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, errMes: null, promotions: []}
        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, errMes: action.payload, promotions: []}
        default:
            return state;
    }
}