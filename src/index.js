import store from './store'
import * as actions from './actionTypes'

const unsubscribe = store.subscribe(() => {
  console.log('🧪 Store changed!', store.getState())
})

// state = reducer(state, action)
// notify the subscribers

store.dispatch({
  type: 'taskAdded',
  payload: {
    description: 'Clean the room',
  },
})

store.dispatch({
  type: actions.TASK_ADDED,
  payload: {
    description: 'Make dinner',
  },
})

store.dispatch({
  type: actions.TASK_REMOVED,
  payload: {
    id: 1,
  },
})
