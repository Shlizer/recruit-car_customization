import React from 'react'
import store from '../../../store'
import Price from './price'
import styles from './style.module.scss'

class Summary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: null }

    store.subscribe(() => {
      this.setState({
        selected: store.getState()?.selected,
      })
    })
  }

  get selectedItems() {
    return (
      <>
        <div>
          <b>Car: </b>
          {this.state.selected?.car || '-'}
        </div>
        <div>
          <b>Engine: </b>
          {this.state.selected?.engine || '-'}
        </div>
        <div>
          <b>Gearbox: </b>
          {this.state.selected?.gearbox || '-'}
        </div>
        <div>
          <b>Color (interior): </b>
          {this.state.selected?.color?.interior || '-'}
        </div>
        <div>
          <b>Color (exterior): </b>
          {this.state.selected?.color?.exterior || '-'}
        </div>
      </>
    )
  }

  render() {
    return (
      <div {...(this.props.attributes || {})}>
        <div className={styles.title}>Summary</div>
        {this.selectedItems}
        <Price />
      </div>
    )
  }
}

export default Summary
