import configureStore from './store/configureStore'
import { loadTasks, addTask } from './store/tasks'

const store = configureStore()

store.dispatch(loadTasks())

store.dispatch(
  addTask({
    id: 13,
    discription: 'Read the book',
  })
)
