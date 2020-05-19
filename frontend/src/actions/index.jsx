import * as action from './actions'

// FETCHER SETS
export function setFetchedCar(list) {
  return { type: action.SELECT_PART_CAR, payload: list }
}
export function setFetchedColor(list) {
  return { type: action.SET_FETCHED_COLOR, payload: list }
}
export function setFetchedEngine(list) {
  return { type: action.SET_FETCHED_ENGINE, payload: list }
}
export function setFetchedGearbox(list) {
  return { type: action.SET_FETCHED_GEARBOX, payload: list }
}
export function setFetchedLayout(list) {
  return { type: action.SET_FETCHED_LAYOUT, payload: list }
}
export function setFittingParts(list) {
  return { type: action.SET_FITTING_PARTS, payload: list }
}

// SELECTIONS
export function selectCar(id) {
  return { type: action.SELECT_PART_CAR, payload: id }
}
export function selectColorInternal(id) {
  return { type: action.SELECT_PART_COLOR_INTERNAL, payload: id }
}
export function selectColorExternal(id) {
  return { type: action.SELECT_PART_COLOR_EXTERNAL, payload: id }
}
export function selectEngine(id) {
  return { type: action.SELECT_PART_ENGINE, payload: id }
}
export function selectGearbox(id) {
  return { type: action.SELECT_PART_GEARBOX, payload: id }
}
