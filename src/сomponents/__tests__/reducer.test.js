import { initialState, reducer } from '../redux/reducers/reducer';
import { 
    SAVE_USER_ID,
    SAVE_CURRENT_COMMENT_ID,
    SAVE_LOADED_USERS,
    SAVE_LOADED_USER_POSTS,
    CHANGE_CURRENT_COMMENT,
    SAVE_LOADED_COMMENTS } from '../../action';

describe('Our reducer', () => {
  
    it('should save curent user id', () => {
        const modifiedState = {
            ...initialState
        };
        const action = {
            type: SAVE_USER_ID.type,
            id: SAVE_USER_ID.id
        };
        const expectedState = {
            ...modifiedState,
            currentUserId: action.id
        };
    
        expect(reducer(modifiedState, action)).toEqual(expectedState);
    });

    it('should save curent comment id', () => {
        const modifiedState = {
            ...initialState
        };
        const action = {
            type: SAVE_CURRENT_COMMENT_ID.type,
            id: SAVE_CURRENT_COMMENT_ID.id
        };
        const expectedState = {
            ...modifiedState,
            currentCommentId: action.id
        };
    
        expect(reducer(modifiedState, action)).toEqual(expectedState);
    });

    it('should save load users', () => {
        const modifiedState = {
            ...initialState
        };
        const action = {
            type: SAVE_LOADED_USERS.type,
            data: SAVE_CURRENT_COMMENT_ID.data
        };
        const expectedState = {
            ...modifiedState,
            users: action.data
        };
    
        expect(reducer(modifiedState, action)).toEqual(expectedState);
    });
});
