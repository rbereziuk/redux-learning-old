import configureStore from '../configureStore'
import { projectAdded } from '../projects'

describe('projectsSlice', () => {
  let store

  beforeEach(() => {
    store = configureStore()
  })

  test('should add project to the store', () => {
    store.dispatch(projectAdded({ id: 1, name: 'Homework' }))

    expect(store.getState().entities.projects).toHaveLength(1)
  })
})
