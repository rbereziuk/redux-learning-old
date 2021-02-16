export const logger = store => next => action => {
  console.log({ store, next, action })
  console.log('Logger')
  next(action)
}
