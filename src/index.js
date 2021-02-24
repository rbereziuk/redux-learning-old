import configureStore from './store/configureStore'
import { loadTasks } from './store/tasks'

const store = configureStore()

store.dispatch(loadTasks())
