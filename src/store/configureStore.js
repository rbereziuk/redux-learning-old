import { configureStore } from '@reduxjs/toolkit'
import reducer from './tasks'

export default function () {
  return configureStore({ reducer })
}
