import configureStore from '../configureStore'
import { addTask } from '../tasks'

describe('tasksSlice', () => {
  test('shoud handle the addTask action', async () => {
    // dispatch(addTask) => store
    const store = configureStore()
    const task = { description: 'a' }
    await store.dispatch(addTask(task))
    expect(store.getState().entities.tasks.list).toHaveLength(1)
  })
})
