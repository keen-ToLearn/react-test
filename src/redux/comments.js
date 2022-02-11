import {COMMENTS} from '../shared/comments';
import * as ActionTypes from './ActionTypes';

//Comments is a reducer function
export const Comments = (state = COMMENTS, action) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            //creating comment based on structure of comment object in shared/comments
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            //achieved immutability of state using concat function that returns a new object, new object contains the new comment
            return state.concat(comment);
        default:
            return state;
    }
}