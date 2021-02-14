import configureStore from './store/configureStore'
import {
  taskAdded,
  taskCompleted,
  taskRemoved,
  getUncompletedTasks,
} from './store/tasks'
import { projectAdded } from './store/projects'

const store = configureStore()

store.dispatch(taskAdded({ description: 'Clean the room' }))
store.dispatch(taskCompleted({ id: 1 }))
store.dispatch(taskAdded({ description: 'Make a breakfast' }))
store.dispatch(taskRemoved({ id: 1 }))

store.dispatch(projectAdded({ name: 'My cool project' }))

const uncompletedTasks = getUncompletedTasks(store.getState())
console.log(uncompletedTasks)
