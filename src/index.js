import configureStore from './store/configureStore'
import * as actions from './store/tasks'

const store = configureStore()

store.dispatch(actions.taskAdded('Clean the room'))
