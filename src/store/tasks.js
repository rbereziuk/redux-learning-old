import { createAction } from '@reduxjs/toolkit'

export const taskAdded = createAction('taskAdded')
export const taskRemoved = createAction('taskRemoved')
export const taskCompleted = createAction('taskCompleted')

// Reducer
// Initial state => []

// Temporary placeholder for id
let lastId = 0

// Reducer => pure function
// When the app runs redux calls reducer for setup the store
export default function reducer(state = [], action) {
  switch (action.type) {
    case taskAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          complete: false,
        },
      ]

    case taskRemoved.type:
      return state.filter(task => task.id !== action.payload.id)

    case taskCompleted.type:
      return state.map(task =>
        task.id === action.payload.id ? { ...task, complete: true } : task
      )

    default:
      return state
  }
}
