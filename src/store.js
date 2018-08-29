import { createStore } from 'redux';

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_USERS': 
            return Object.assign({}, state, {
                    users: action.date
                }
            );
        case 'LOAD_USER_COMMENTS': 
            return Object.assign({}, state, {
                    userComments: action.date
                    // curentUserData: action
                }
            );
        case 'SAVE_USER_ID': 
            return Object.assign({}, state, {
                    currentUserId: action.id
                }
            );

        case 'SAVE_CURRENT_COMMENT_ID': 
            return Object.assign({}, state, {
                    currentCommentId: action.id
                }
            );
        case 'CHANGE_CURRENT_COMMENT': 
            return Object.assign({}, state, {
                    currentComment: action.comment
                }
            );
        default:
         return state;
    }
}

export const store = createStore( reducer );