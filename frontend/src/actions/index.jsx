import * as action from './names'

// FETCHER SETS
export function setFetchedCar(list) {
  return { type: action.SET_FETCHED_CAR, payload: list }
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
export function setFittingParts(list) {
  return { type: action.SET_FITTING_PARTS, payload: list }
}

// SELECTIONS
export function selectCar(id) {
  return { type: action.SELECT_PART_CAR, payload: id }
}
export function selectColorInterior(id) {
  return { type: action.SELECT_PART_COLOR_INTERIOR, payload: id }
}
export function selectColorExterior(id) {
  return { type: action.SELECT_PART_COLOR_EXTERIOR, payload: id }
}
export function selectEngine(id) {
  return { type: action.SELECT_PART_ENGINE, payload: id }
}
export function selectGearbox(id) {
  return { type: action.SELECT_PART_GEARBOX, payload: id }
}
