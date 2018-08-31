
export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_LOADED_USERS':
      return Object.assign({}, state, {
        users: action.data
      }
      )
    case 'SAVE_LOADED_USER_POSTS': // It's a test action
      return Object.assign({}, state, {
        userComments: action.data
        // curentUserData: action
      }
      )
    case 'SAVE_USER_ID':
      return Object.assign({}, state, {
        currentUserId: action.id
      }
      )

    case 'SAVE_CURRENT_COMMENT_ID':
      return Object.assign({}, state, {
        currentCommentId: action.id
      }
      )
    case 'CHANGE_CURRENT_COMMENT':
      return Object.assign({}, state, {
        currentComment: action.comment
      }
      )
    default:
      return state
  }
}
