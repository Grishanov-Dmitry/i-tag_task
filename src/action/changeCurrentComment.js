
export default (comment, title, body) => {
  return {
    type: 'CHANGE_CURRENT_COMMENT',
    comment: title,
    commentBody: body
  }
}
