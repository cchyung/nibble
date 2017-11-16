import { combineReducers } from 'redux'
import {
  REQUEST_TRUCK,
  RECEIVE_TRUCK
} from 'actions.js'

function truckReducer(
  state = {
    isFetching: false,
    didInvalidate: false,
    item: []
  },
  action
) {
  switch(action.type) {
    case REQUEST_TRUCK:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_TRUCK:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        item: action.truck,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}


// IF WE NEED MULTIPLE REDUCERS, DO THIS:
/* const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducer */

export default truckReducer
