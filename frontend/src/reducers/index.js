import { combineReducers } from 'redux'
import fetched from './fetched'
import selected from './selected'

export const initialState = {
  fetched: {
    layout: [],
    partList: [],
    parts: {},
  },
  selected: {},
}

export default combineReducers({
  fetched,
  selected,
})
