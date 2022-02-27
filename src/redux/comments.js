//fetch update: below import not required, to be fetched from server & supplied from Action Creator
//import {COMMENTS} from '../shared/comments';
import * as ActionTypes from './ActionTypes';

//Comments is a reducer function
//fetch update: changing state = COMMENTS to state = { errMes: null, comments: []}
export const Comments = (state = {
        errMes: null,
        comments: []
    }, action) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMes: null, comments: action.payload}
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMes: action.payload, comments: []}
        case ActionTypes.ADD_COMMENT:
            //creating comment based on structure of comment object in shared/comments
            var comment = action.payload;
            comment.id = state.comments.length; //fetch update: due to state modification, state.length -> state.comments.length
            comment.date = new Date().toISOString();
            //achieved immutability of state using concat function that returns a new object, new object contains the new comment
            //return state.concat(comment);
            return {...state, comments: state.comments.concat(comment)}
            //fetch update: due to state modification, state.concat() -> state.comments.concat()
        default:
            return state;
    }
}