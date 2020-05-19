import React from 'react'
import styles from './style.module.scss'

class Summary extends React.Component {
  render() {
    return (
      <div {...(this.props.attributes || {})}>
        <div className={styles.title}>Summary</div>
        {this.props.children}
      </div>
    )
  }
}

export default Summary
