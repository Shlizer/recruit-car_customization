import * as actions from '../actions/names'
import { initialState } from '../reducers'

export default (state = initialState.fetched, action) => {
  const { type, payload } = action

  switch (type) {
    case actions.SET_FETCHED_LAYOUT:
      return { ...state, layout: payload.layout }
    case actions.SET_FETCHED_PART_LIST:
      return { ...state, partList: payload.partList }
    case actions.SET_FETCHED_PART:
      if (payload.partType && Array.isArray(payload.list))
        return { ...state, parts: { ...state.parts, [payload.partType]: payload.list } }
    default:
      return state
  }
}
