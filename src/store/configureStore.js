import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'
import { logger } from './middleware/logger'
import { actionFunc } from './middleware/actionFunc'
import { toast } from './middleware/toast'

export default function () {
  return configureStore({
    reducer,
    middleware: [logger('Middleware function argument'), actionFunc, toast],
  })
}
