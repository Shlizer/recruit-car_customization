import { combineReducers } from 'redux'
import fetched from './fetched'
import selected from './selected'
import fits from './fits'

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
  fits: {
    color: { interior: [], exterior: [] },
    engine: [],
    gearbox: [],
  },
}

export default combineReducers({
  fetched,
  selected,
  fits,
})
