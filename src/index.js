import store from './store'

store.dispatch({
  type: 'taskAdded',
  payload: {
    description: 'Clean the room',
  },
})

store.dispatch({
  type: 'taskAdded',
  payload: {
    description: 'Make dinner',
  },
})

store.dispatch({
  type: 'taskRemoved',
  payload: {
    id: 1,
  },
})

console.log(store.getState())
