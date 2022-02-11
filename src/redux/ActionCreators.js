import * as ActionTypes from './ActionTypes';

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