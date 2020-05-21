import React from 'react'
import styles from './style.module.scss'

export default class Loading extends React.Component {
  render() {
    return <div className={styles.loading}>Loading layout. Please wait...</div>
  }
}
