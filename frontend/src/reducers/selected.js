import * as actions from '../actions/names'
import { initialState } from '../reducers'

export default (state = initialState.selected, action) => {
  const { type, payload } = action

  switch (type) {
    case actions.SELECT_PART_CAR:
      return { ...state, car: payload }
    case actions.SELECT_PART_COLOR_INTERIOR:
      return { ...state, color: { ...state.color, interior: payload } }
    case actions.SELECT_PART_COLOR_EXTERIOR:
      return { ...state, color: { ...state.color, exterior: payload } }
    case actions.SELECT_PART_ENGINE:
      return { ...state, engine: payload }
    case actions.SELECT_PART_GEARBOX:
      return { ...state, gearbox: payload }
    default:
      return state
  }
}
