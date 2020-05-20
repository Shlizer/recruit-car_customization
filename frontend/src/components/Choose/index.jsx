import React from 'react'
import { chooser as chooserProps } from '../propTypes'
import styles from './style.module.scss'

class Choose extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.title}>{this.props.label}</div>
        {this.props.list.map((data) => {
          const classes = [
            styles.choose,
            data.id === this.props.selected ? styles.selected : '',
            data.disabled ? styles.disabled : '',
          ].join(' ')

          return (
            <div key={data.id} className={classes} onClick={() => this.props.onChoose(data.id)}>
              {data.name}
            </div>
          )
        })}
      </div>
    )
  }
}

Choose.propTypes = chooserProps
export default Choose
