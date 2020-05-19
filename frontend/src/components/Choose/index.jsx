import React from 'react'
import styles from './style.module.scss'

class Choose extends React.Component {
  render() {
    return (
      <div {...(this.props.attributes || {})}>
        <div className={styles.title}>{this.props.label}</div>
        {this.props.list.map((data) => (
          <div key={data.id} className={styles.choose}>
            {data.name}
          </div>
        ))}
      </div>
    )
  }
}

export default Choose
