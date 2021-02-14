import { combineReducers } from 'redux'
import tasksReducer from './tasks'
import projectsReducer from './projects'

export default combineReducers({
  tasks: tasksReducer,
  projects: projectsReducer,
})
