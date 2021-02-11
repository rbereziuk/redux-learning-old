import reducer from './reducer'

function createStore(reducer) {
  let state
  let listeners = []

  // Method to implement private property
  function getState() {
    return state
  }

  function dispatch(action) {
    state = reducer(state, action)

    for (let i = 0; i < listeners.length; i++) {
      listeners[i]()
    }
  }

  // Notify UI components when the store gets changed
  function subscribe(listener) {
    listeners.push(listener)
  }

  return {
    getState,
    dispatch,
    subscribe,
  }
}

export default createStore(reducer)
