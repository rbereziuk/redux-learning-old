import configureStore from './store/configureStore'

const store = configureStore()

store.dispatch((dispatch, getState) => {
  console.log(getState())

  dispatch({ type: 'tasksReceived', payload: [1, 2, 3] })
})
