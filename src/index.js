import configureStore from './store/configureStore'
import { loadTasks, addTask, completeTask } from './store/tasks'

const store = configureStore()

store.dispatch(loadTasks())

store.dispatch(completeTask(2))
