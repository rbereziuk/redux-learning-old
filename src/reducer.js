// Initial state => []

// Temporary placeholder for id
let lastId = 0

// Reducer => pure function
// When the app runs redux calls reducer for setup the store
function reducer(state = [], action) {
  switch (action.type) {
    case 'taskAdded':
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          complete: false,
        },
      ]
    case 'taskRemoved':
      return state.filter(task => task.id !== action.payload.id)
    default:
      return state
  }
}
