
export default (data) => {
  return {
    type: 'SAVE_LOADED_COMMENTS',
    currentPostComments: data
  }
}
