import { createStore } from 'redux'

import tasksReducer from './reducers/tasksReducer'

const store = createStore(
  tasksReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
