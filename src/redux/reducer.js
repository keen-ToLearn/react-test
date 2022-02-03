import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';

export const initialState = {
    dishes : DISHES,
    comments : COMMENTS,
    leaders : LEADERS,
    promotions : PROMOTIONS
};

//below function is a reducer function
//state = initialState; written to set a default value of state before any changes or actions have happened in the react application
export const Reducer = (state = initialState, action) => {
    return state;
};