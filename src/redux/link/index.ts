import {createActions, FAIL, REQUEST, SUCCESS} from '../common'
import {Reducer} from 'redux'
import * as fetch from 'isomorphic-fetch'
import * as R from 'ramda'

const defaultState = {
  links: null,
  layout: []
} as LinkState

export const reducer: Reducer<LinkState> = (state = defaultState, action) => {
  const {type, payload} = action

  switch (type) {
    case Link[SUCCESS]:
      return {
        ...state,
        links: payload
      }
    case ActionTypes.LayoutLink:
      return {
        ...state,
        layout: payload
      }
    default:
      return state
  }
}

enum ActionTypes {
  Link = 'link',
  LayoutLink = 'layout link'
}

const Link = createActions(ActionTypes.Link)
function async(action: string[]) {
  return function (type: REQUEST|SUCCESS|FAIL, payload?) {
    return {
      type: action[type],
      payload
    }
  }
}

export function getLinks(): Thunk {
  const action = async(Link)

  return async (dispatch, getState) => {
    dispatch(action(REQUEST))
    try {
      const response = await fetch('https://api.dev.googit.co/clerk/links')
      const payload = await response.json()

      dispatch(action(SUCCESS, payload))
      // dispatch(layout(payload))
    } catch(ex) {
      dispatch(action(FAIL))
    }
    return true
  }
}

function layout(links: Link[]): TypeAction<LayoutLink[]> {
  const linksWithCount = R.countBy(R.prop('url'))(links)
  const payload: LayoutLink[] = links.map((link, index) => {
    return {
      i: link.url,
      x: index,
      y: 0,
      w: 1,
      h: linksWithCount[link.url],
      raw: link,
      meta: null,
    }
  })

  return layoutLinks(payload)
}

function layoutLinks(payload: LayoutLink[]): TypeAction<LayoutLink[]> {
  return {
    type: ActionTypes.LayoutLink,
    payload
  }
}

export interface LinkState {
  links: Link[]
  layout: LayoutLink[]
}
interface Link {
  user: string
  url: string
  team: string
  channel: string
  timestamp: number
}
interface LayoutLink {/*extends ReactGridLayout.Layout {*/
  raw: Link
  meta: Meta
}
interface Meta {

}
