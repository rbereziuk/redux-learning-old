import configureStore from './store/configureStore'
import {
  taskAdded,
  taskCompleted,
  taskRemoved,
  taskAssignedToProject,
  getUncompletedTasks,
  getTasksByProject,
} from './store/tasks'
import { projectAdded } from './store/projects'

const store = configureStore()

store.dispatch(projectAdded({ name: 'My every day tasks' }))

store.dispatch(taskAdded({ description: 'Make my bed' }))
store.dispatch(taskAdded({ description: 'Clean my teeth' }))
store.dispatch(taskCompleted({ id: 1 }))
store.dispatch(taskAdded({ description: 'Make a breakfast' }))
store.dispatch(taskRemoved({ id: 1 }))

store.dispatch(
  taskAssignedToProject({
    taskId: 2,
    projectId: 1,
  })
)

const uncompletedTasks = getUncompletedTasks(store.getState())
console.log('Uncompleted tasks', uncompletedTasks)

const tasksByProject = getTasksByProject(1)(store.getState())
console.log('Tasks by project', tasksByProject)
