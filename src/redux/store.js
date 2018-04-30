import { createStore, combineReducers, applyMiddleware } from 'redux'
import tasks from './reducers/tasksReducer'
import auth from './reducers/authReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  tasks,
  auth,
})

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)
