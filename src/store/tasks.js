import { createAction, createReducer } from '@reduxjs/toolkit'

export const taskAdded = createAction('taskAdded')
export const taskRemoved = createAction('taskRemoved')
export const taskCompleted = createAction('taskCompleted')

// Reducer
// Initial state => []

// Temporary placeholder for id
let lastId = 0

// Reducer => pure function
// When the app runs redux calls reducer for setup the store

// Redux toolkit under the hood uses immer
//
export default createReducer([], {
  // key: value
  // actions: functions (event => event handler)
  [taskAdded.type]: (tasks, action) => {
    tasks.push({
      id: ++lastId,
      description: action.payload.description,
      complete: false,
    })
  },
  [taskCompleted.type]: (tasks, action) => {
    const index = tasks.find(task => task.id === action.payload.id)
    tasks[index].complete = true
  },
})
