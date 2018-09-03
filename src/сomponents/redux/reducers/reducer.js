
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
      }
      )
    case 'SAVE_USER_ID':
      return Object.assign({}, state, {
        currentUserId: action.id - 1
      }
      )

    case 'SAVE_CURRENT_COMMENT_ID':
      return Object.assign({}, state, {
        currentCommentId: action.id
      }
      )
    case 'CHANGE_CURRENT_COMMENT':
      return Object.assign({}, state, {
        currentComment: action.comment,
        currentCommentTitle: action.commentBody
      }
      )
    case 'SAVE_LOADED_COMMENTS':
      return Object.assign({}, state, {
        currentPostComments: action.data
      }
      )
    default:
      return state
  }
}
