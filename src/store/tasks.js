// Action types
const TASK_ADDED = 'taskAdded'
const TASK_REMOVED = 'taskRemoved'
const TASK_COMPLETED = 'taskCompleted'

// Action
export const taskAdded = description => ({
  type: TASK_ADDED,
  payload: {
    description,
  },
})

export const taskRemoved = id => ({
  type: TASK_REMOVED,
  payload: {
    id,
  },
})

export const taskCompleted = id => ({
  type: TASK_COMPLETED,
  payload: {
    id,
  },
})

// Reducer
// Initial state => []

// Temporary placeholder for id
let lastId = 0

// Reducer => pure function
// When the app runs redux calls reducer for setup the store
export default function reducer(state = [], action) {
  switch (action.type) {
    case TASK_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          complete: false,
        },
      ]

    case TASK_REMOVED:
      return state.filter(task => task.id !== action.payload.id)

    case TASK_COMPLETED:
      return state.map(task =>
        task.id === action.payload.id ? { ...task, complete: true } : task
      )

    default:
      return state
  }
}
