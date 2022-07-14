import { createStore } from "redux"
import startReducer from './isStart/startReducer'

const store = createStore(startReducer)

export default store