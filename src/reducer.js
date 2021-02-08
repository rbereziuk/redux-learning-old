import * as actions from './actionTypes'
// Initial state => []

// Temporary placeholder for id
let lastId = 0

// Reducer => pure function
// When the app runs redux calls reducer for setup the store
export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.TASK_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          complete: false,
        },
      ]

    case actions.TASK_REMOVED:
      return state.filter(task => task.id !== action.payload.id)

    case actions.TASK_COMPLETED:
      return state.map(task =>
        task.id === action.payload.id ? { ...task, complete: true } : task
      )

    default:
      return state
  }
}
