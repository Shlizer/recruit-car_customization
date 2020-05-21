import React from 'react'
import store from '../../store'
import styles from './style.module.scss'

class Price extends React.Component {
  constructor(props) {
    super(props)
    this.state = { price: 0, parts: { car: 0, engine: 0, gearbox: 0, colorInterior: 0, colorExterior: 0 } }

    store.subscribe(() => {
      const newState = {
        price: 0,
        parts: this.getPrices(),
      }
      Object.keys(newState.parts).forEach((partName) => (newState.price += newState.parts[partName]))
      this.setState(newState)
    })
  }

  getPrices() {
    const prices = {}
    const parts = store.getState()?.fetched?.partList || []

    if (parts.length) {
      parts.forEach(({ id, type }) => {
        const selected = store.getState()?.selected?.[id]
        const list = store.getState()?.fetched?.parts?.[type] || []

        if (list.length && selected) {
          prices[id] = list.find((data) => data.id === selected)?.price || 0
        } else {
          prices[IDBCursor] = 0
        }
      })
    }

    return prices
  }

  get priceList() {
    return (
      <div className={styles.priceList}>
        {Object.fromEntries(
          Object.entries(this.state.parts).map(([name, price]) => (
            <>
              <span>{name}</span>
              {price}
            </>
          ))
        )}
      </div>
    )
  }

  render() {
    return (
      <div className={styles.price}>
        <b>Price: </b>${this.state.price.toFixed(2)}
        {this.priceList}
      </div>
    )
  }
}

export default Price
