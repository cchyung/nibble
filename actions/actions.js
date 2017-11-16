import fetch from 'isomorphic-fetch'

export const REQUEST_TRUCK = 'REQUEST_TRUCK'
export const RECEIVE_TRUCK = 'RECEIVE_TRUCK'

function requestTruck(truck) {
  return {
    type: REQUEST_TRUCK,
    truck
  }
}

function receiveTruck(truck, json) {
  return {
    type: RECEIVE_TRUCK,
    truck,
    receivedAt: Date.now()
  }
}

export function fetchTruck(truck) {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(`https://trollow-backend.herokuapp.com/v1/trucks/${truck}`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(truck, json)))
  }
}
