import PropTypes, { string } from 'prop-types'

export const chooserProps = {
  label: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChoose: PropTypes.func.isRequired,
  selected: PropTypes.string,
  disabled: PropTypes.bool,
}

export const partsProps = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  fits: PropTypes.arrayOf(
    PropTypes.shape({
      car: PropTypes.arrayOf(PropTypes.string),
      engine: PropTypes.arrayOf(PropTypes.string),
      gearbox: PropTypes.arrayOf(PropTypes.string),
      color: PropTypes.shape({
        interior: PropTypes.arrayOf(PropTypes.string),
        exterior: PropTypes.arrayOf(PropTypes.string),
      }),
    })
  ),
}
