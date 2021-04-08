import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureStore from '../configureStore'
import { addTask } from '../tasks'

describe('tasksSlice', () => {
  test('shoud handle the addTask action', async () => {
    const task = { description: 'a' }
    const savedTask = { ...task, id: 1 }
    const fakeAxios = new MockAdapter(axios)
    fakeAxios.onPost('/tasks').reply(200, savedTask)
    const store = configureStore()
    await store.dispatch(addTask(task))
    expect(store.getState().entities.tasks.list).toContainEqual(savedTask)
  })
})
