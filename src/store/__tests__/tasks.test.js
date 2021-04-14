import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureStore from '../configureStore'
import { addTask, completeTask, getUncompletedTasks } from '../tasks'

describe('tasksSlice', () => {
  let fakeAxios
  let store
  let task

  beforeEach(() => {
    store = configureStore()
    fakeAxios = new MockAdapter(axios)

    task = { description: 'a' }
  })

  const createState = () => ({
    entities: {
      tasks: {
        list: [],
      },
    },
  })

  const tasksSlice = () => store.getState().entities.tasks

  test("should add the task to the store if it's saved to the server", async () => {
    // Arrange
    const savedTask = { ...task, id: 1 }
    fakeAxios.onPost('/tasks').reply(200, savedTask)

    // Act
    await store.dispatch(addTask(task))

    // Assert
    expect(tasksSlice().list).toContainEqual(savedTask)
  })

  test("should add the task to the store if it's not saved to the server", async () => {
    // Arrange
    const savedTask = { ...task, id: 1 }
    fakeAxios.onPost('/tasks').reply(500, savedTask)

    // Act
    await store.dispatch(addTask(task))

    // Assert
    expect(tasksSlice().list).toHaveLength(0)
  })

  test("should mark the task as completed if it's saved to the server", async () => {
    const patchedTask = { ...task, completed: true }
    fakeAxios.onPost('/tasks').reply(200, task)
    fakeAxios.onPatch('/tasks/1').reply(200, patchedTask)

    await store.dispatch(addTask(task))
    await store.dispatch(completeTask(1))

    expect(tasksSlice().list[0].completed).toBeTruthy()
  })

  test("should not mark the task as completed if it's not saved to the server", async () => {
    fakeAxios.onPost('/tasks').reply(200, task)
    fakeAxios.onPatch('/tasks/1').reply(500)

    await store.dispatch(addTask(task))
    await store.dispatch(completeTask(1))

    expect(tasksSlice().list[0].completed).not.toBeTruthy()
  })

  describe('selectors', () => {
    test('getUncompletedTasks', () => {
      const state = createState()
      state.entities.tasks.list = [
        { id: 1, comleted: false },
        { id: 2, completed: true },
      ]

      const result = getUncompletedTasks(state)

      expect(result).toHaveLength(1)
    })
  })
})
