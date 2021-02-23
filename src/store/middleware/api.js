import axios from 'axios'
import * as actions from '../api'

export const api = ({ dispatch }) => next => async action => {
  if (action.type !== actions.apiRequest.type) {
    return next(action)
  }

  next(action)

  const { url, method, onSuccess, onError } = action.payload

  try {
    const response = await axios.request({
      baseURL: 'http://localhost:3000',
      url, // url of endpoint
      method,
    })

    dispatch(actions.apiRequestSuccess(response.data))
    if (onSuccess)
      dispatch({
        type: onSuccess,
        payload: response.data,
      })
  } catch (error) {
    // General error
    dispatch(actions.apiRequestFailed(error))
    // Specific error
    if (onError)
      dispatch({
        type: onError,
        payload: error,
      })
  }
}
