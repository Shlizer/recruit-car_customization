import * as action from './names'

// FETCHER SETS
export function setFetchedLayout(layout) {
  return { type: action.SET_FETCHED_LAYOUT, payload: { layout } }
}
export function setFetchedPartList(partList) {
  return { type: action.SET_FETCHED_PART_LIST, payload: { partList } }
}
export function setFetchedPart(partType, list) {
  return { type: action.SET_FETCHED_PART, payload: { partType, list } }
}
// SELECTIONS
export function select(partId, elementId) {
  return { type: action.SELECT_PART, payload: { partId, elementId } }
}
export function deselect(partId) {
  return { type: action.DESELECT_PART, payload: { partId } }
}
