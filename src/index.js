import store from './customStore'
import * as actions from './actions'

store.subscribe(() => console.log('Hi from custom store'))
store.dispatch(actions.taskAdded('Clean the room'))
