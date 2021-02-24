import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { apiRequest } from './api'

// Temporary placeholder for id
let lastId = 0

// Reducer => pure function
// When the app runs redux calls reducer for setup the store

// Redux toolkit under the hood uses immer
const slice = createSlice({
  name: 'tasks',
  initialState: {
    list: [],
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    // actions: functions     (event => event handler)
    taskAdded: (tasks, action) => {
      tasks.list.push({
        id: ++lastId,
        description: action.payload.description,
        completed: false,
      })
    },
    tasksReceived: (tasks, action) => {
      tasks.list = action.payload
    },
    taskCompleted: (tasks, action) => {
      const index = tasks.list.findIndex(task => task.id === action.payload.id)
      tasks.list[index].completed = true
    },
    taskRemoved: (tasks, action) => {
      return tasks.list.filter(task => task.id !== action.payload.id)
    },
    taskAssignedToProject: (tasks, action) => {
      const index = tasks.list.findIndex(
        task => task.id === action.payload.taskId
      )
      tasks.list[index].projectId = action.payload.projectId
    },
  },
})

// Acion creators
const url = '/tasks'

export const loadTasks = () =>
  apiRequest({
    url,
    onSuccess: tasksReceived.type,
  })

export const {
  taskAdded,
  taskCompleted,
  taskRemoved,
  taskAssignedToProject,
  tasksReceived,
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
