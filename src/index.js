import configureStore from './store/configureStore'
import * as actions from './store/tasks'
import { projectAdded } from './store/projects'
const store = configureStore()

store.dispatch(actions.taskAdded({ description: 'Clean the room' }))
store.dispatch(actions.taskCompleted({ id: 1 }))
store.dispatch(actions.taskAdded({ description: 'Make a breakfast' }))
store.dispatch(actions.taskRemoved({ id: 1 }))

store.dispatch(projectAdded({ name: 'My cool project' }))
