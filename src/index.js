import configureStore from './store/configureStore'
import { loadTasks, assignTaskToProject } from './store/tasks'

const store = configureStore()

store.dispatch(loadTasks())

store.dispatch(assignTaskToProject(1, 1))
