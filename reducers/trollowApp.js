import { combineReducers } from 'redux'

// function trollowApp(state, action) {
//   // if (typeof state === 'undefined') {
//   //   return initialState
//   // }
//
//   // For now, don't handle any actions
//   // and just return the state given to us.
//   switch(action.type) {
//     default:
//       return state;
//   }
// }

function trucks(state = [], action) {
  switch (action.type) {
    default:
      return state
  }
}

function filter(state = [], action) {
  switch (action.type) {
    default:
      return state
  }
}


const trollowApp = combineReducers({
  trucks,
  filter
})

export default trollowApp
