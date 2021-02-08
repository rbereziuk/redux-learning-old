import store from './store'
import { taskAdded, taskRemoved, taskCompleted } from './actions'

const unsubscribe = store.subscribe(() => {
  console.log('🧪 Store changed!', store.getState())
})

// state = reducer(state, action)
// notify the subscribers

store.dispatch(taskAdded('Clean the room'))
store.dispatch(taskCompleted(1))
store.dispatch(taskAdded('Make a dinner'))
store.dispatch(taskRemoved(1))

unsubscribe()
