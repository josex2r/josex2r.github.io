import { combineReducers } from 'redux'
import {
  REQUEST_USER, RECEIVE_USER
} from './actions'

function user(state = { isFetching: false }, action) {
  switch (action.type) {
    case REQUEST_USER:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_USER:
      return Object.assign({}, state, {
        isFetching: false
      }, action);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user
})

export default rootReducer;
