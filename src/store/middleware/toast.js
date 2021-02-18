export const toast = store => next => action => {
  if (action.type === 'error') console.log('📢 Error:', action.payload.message)
  else next(action)
}
