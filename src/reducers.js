import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './reducers/auth'
import home from './reducers/home'
import editor from './reducers/editor'
import profile from './reducers/profile'

const createRootReducer = (history) => combineReducers({
  auth,
  home,
  editor,
  profile,
  router: connectRouter(history)
})
export default createRootReducer