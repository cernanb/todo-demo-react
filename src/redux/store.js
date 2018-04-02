import { createStore, combineReducers, applyMiddleware } from 'redux'
import tasks from './reducers/tasksReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  tasks,
})

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)
