import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './reducers/auth'
import home from './reducers/home'
const createRootReducer = (history) => combineReducers({
  auth,
  home,
  router: connectRouter(history)
})
export default createRootReducer