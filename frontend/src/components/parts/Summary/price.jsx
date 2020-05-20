import React from 'react'
import store from '../../../store'
import styles from './style.module.scss'

class Price extends React.Component {
  constructor(props) {
    super(props)
    this.state = { price: 0 }

    store.subscribe(() => {
      this.setState({
        price:
          this.getPriceCar() +
          this.getPriceEngine() +
          this.getPriceGearbox() +
          this.getPriceColorInternal() +
          this.getPriceColorExternal(),
      })
    })
  }

  getPriceCar() {
    const list = store.getState()?.fetched?.car || []
    const selected = store.getState()?.selected?.car
    if (list.length && selected) {
      return list.find((data) => data.id === selected)?.price || 0
    }
    return 0
  }

  getPriceEngine() {
    const list = store.getState()?.fetched?.engine || []
    const selected = store.getState()?.selected?.engine
    if (list.length && selected) {
      return list.find((data) => data.id === selected)?.price || 0
    }
    return 0
  }

  getPriceGearbox() {
    const list = store.getState()?.fetched?.gearbox || []
    const selected = store.getState()?.selected?.gearbox
    if (list.length && selected) {
      return list.find((data) => data.id === selected)?.price || 0
    }
    return 0
  }

  getPriceColorInternal() {
    const list = store.getState()?.fetched?.color || []
    const selected = store.getState()?.selected?.color?.interior
    if (list.length && selected) {
      return list.find((data) => data.id === selected)?.price || 0
    }
    return 0
  }

  getPriceColorExternal() {
    const list = store.getState()?.fetched?.color || []
    const selected = store.getState()?.selected?.color?.exterior
    if (list.length && selected) {
      return list.find((data) => data.id === selected)?.price || 0
    }
    return 0
  }

  render() {
    return (
      <div>
        <b>Price: </b>${this.state.price.toFixed(2)}
      </div>
    )
  }
}

export default Price
