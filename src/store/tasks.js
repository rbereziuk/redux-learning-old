import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

// Temporary placeholder for id
let lastId = 0

// Reducer => pure function
// When the app runs redux calls reducer for setup the store

// Redux toolkit under the hood uses immer
const slice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    // actions: functions     (event => event handler)
    taskAdded: (tasks, action) => {
      tasks.push({
        id: ++lastId,
        description: action.payload.description,
        completed: false,
      })
    },
    taskCompleted: (tasks, action) => {
      const index = tasks.findIndex(task => task.id === action.payload.id)
      tasks[index].completed = true
    },
    taskRemoved: (tasks, action) => {
      return tasks.filter(task => task.id !== action.payload.id)
    },
    taskAssignedToProject: (tasks, action) => {
      const index = tasks.findIndex(task => task.id === action.payload.taskId)
      tasks[index].projectId = action.payload.projectId
    },
  },
})

export const {
  taskAdded,
  taskCompleted,
  taskRemoved,
  taskAssignedToProject,
} = slice.actions
export default slice.reducer

// Memoization
// Create cache from inputs and outputs
// If input don't change return previous output
export const getUncompletedTasks = createSelector(
  state => state.entities.tasks,
  tasks => tasks.filter(task => !task.completed)
)

export const getTasksByProject = projectId =>
  createSelector(
    state => state.entities.tasks,
    tasks => tasks.filter(task => task.projectId === projectId)
  )
