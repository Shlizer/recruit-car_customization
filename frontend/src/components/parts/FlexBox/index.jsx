import React from 'react'
import componentGetter from '../componentHoc'
import styles from './style.module.scss'

class FlexBox extends React.Component {
  get classes() {
    return [this.props.attributes.className || '', styles.flexBox, styles[this.props.direction]].join(' ')
  }
  render() {
    return (
      <div {...(this.props.attributes || {})} className={this.classes}>
        {this.props.children}
      </div>
    )
  }
}

export default componentGetter(FlexBox)
