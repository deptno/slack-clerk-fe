import {Action} from 'redux'
import {ThunkAction} from 'redux-thunk'
import {RootState} from '../redux'

declare global {
  type Thunk = ThunkAction<Promise<boolean>, RootState, null>
  interface TypeAction<P> extends Action {
    // Allows any extra properties to be defined in an action.
    payload: P
  }

}

