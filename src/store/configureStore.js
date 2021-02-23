import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducer from './reducer'
import { logger } from './middleware/logger'
import { toast } from './middleware/toast'
import { api } from './middleware/api'

export default function () {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger('Middleware function argument'),
      toast,
      api,
    ],
  })
}
