import * as actions from '../actions/names'
import { initialState } from '../reducers'

export default (state = initialState.fetched, action) => {
  const { type, payload } = action

  switch (type) {
    case actions.SET_FETCHED_CAR:
      return { ...state, car: payload }
    case actions.SET_FETCHED_COLOR:
      return { ...state, color: payload }
    case actions.SET_FETCHED_ENGINE:
      return { ...state, engine: payload }
    case actions.SET_FETCHED_GEARBOX:
      return { ...state, gearbox: payload }
    default:
      return state
  }
}
