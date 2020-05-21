import React from 'react'
import PropTypes from 'prop-types'
import store from '../../store'
import { select, deselect } from '../../actions'
import styles from './style.module.scss'

class Part extends React.Component {
  get classes() {
    return [
      styles.choose,
      this.props.className,
      this.props.selected ? styles.selected : '',
      this.props.disabled ? styles.disabled : '',
    ].join(' ')
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected && nextProps.disabled) store.dispatch(deselect(this.props.type))
  }

  toggle = () => {
    if (this.props.disabled) return
    if (!this.props.selected) store.dispatch(select(this.props.type, this.props.id))
    else store.dispatch(deselect(this.props.type))
  }

  render() {
    return (
      <div style={this.props.style} className={this.classes} onClick={this.toggle}>
        {this.props.name}
      </div>
    )
  }
}

Part.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
}

Part.defaultProps = {
  className: '',
  style: {},
}

export default Part
