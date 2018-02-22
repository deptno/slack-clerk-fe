import {combineReducers} from 'redux'
import {reducer as persist, PersistState} from './persist'
import {reducer as system, SystemState} from './system'
import {reducer as link, LinkState} from './link'

export const reducer = combineReducers<RootState>({
  persist,
  system,
  link
})

export interface RootState {
  persist: PersistState,
  system: SystemState,
  link: LinkState,
}
