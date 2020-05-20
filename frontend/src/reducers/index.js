import { combineReducers } from 'redux'
import fetched from './fetched'
import selected from './selected'

export const initialState = {
  fetched: {
    car: [],
    color: [],
    engine: [],
    gearbox: [],
    layout: [],
  },
  selected: {
    car: null,
    color: { interior: null, exterior: null },
    engine: null,
    gearbox: null,
  },
}

export default combineReducers({
  fetched,
  selected,
})
