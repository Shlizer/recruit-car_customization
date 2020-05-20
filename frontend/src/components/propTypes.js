import PropTypes from 'prop-types'

export const chooser = {
  label: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChoose: PropTypes.func.isRequired,
  selected: PropTypes.string,
  disabled: PropTypes.bool,
}
