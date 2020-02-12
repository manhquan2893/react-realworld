import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './reducers/auth'
const createRootReducer = (history) => combineReducers({
  auth,
  router: connectRouter(history)
})
export default createRootReducer