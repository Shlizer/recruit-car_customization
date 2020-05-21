import * as actions from '../actions/names'
import { initialState } from '../reducers'

export default (state = initialState.selected, action) => {
  const { type, payload } = action

  switch (type) {
    case actions.SELECT_PART:
      if (payload.partId && payload.elementId) return { ...state, [payload.partId]: payload.elementId }
    case actions.DESELECT_PART:
      if (payload.partId) return { ...state, [payload.partId]: null }
    default:
      return state
  }
}
