import {Action} from 'redux'

export function action(...args): Action {
  return {
    type: `${args[0] || action} dispatched`
  }
}
export function thunk(...args): Thunk {
  return async (dispatch, getState) => {
    dispatch({type: `${args[0] || action} dispatched`})
    return true
  }
}
