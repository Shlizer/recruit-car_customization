import React from 'react'
import store from '../../store'
import Price from './price'
import styles from './style.module.scss'

class Summary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { partList: [], selected: null }

    store.subscribe(() => {
      const partList = store.getState()?.fetched?.partList || []
      const selected = store.getState()?.selected || null

      if (partList !== this.state.partList) this.setState({ partList })
      if (selected !== this.state.selected) this.setState({ selected })
    })
  }

  get selectedItems() {
    return this.state.partList.map((partData) => (
      <React.Fragment key={partData.id}>
        <dt>{partData.label}</dt>
        <dd>{this.state.selected?.[partData.id] || '-'}</dd>
      </React.Fragment>
    ))
  }

  render() {
    return (
      <div {...(this.props.attributes || {})}>
        <div className={styles.title}>Summary</div>
        <dl className={styles.partList}>{this.selectedItems}</dl>
        <Price />
      </div>
    )
  }
}

export default Summary
