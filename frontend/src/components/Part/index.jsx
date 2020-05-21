import React from 'react'
import Fetcher from '../../managers/fetch'
import store from '../../store'
import { select, setFetchedPart } from '../../actions'
import styles from './style.module.scss'

class Part extends React.Component {
  constructor(props) {
    super(props)
    this.state = { list: [], selected: false }

    store.subscribe(() => {
      const list = store.getState()?.fetched?.parts?.[this.props.type] || []
      const selected = store.getState()?.selected?.[this.props.id] || false

      if (list !== this.state.list) this.setState({ list })
      if (selected !== this.state.selected) this.setState({ selected })
    })
  }

  componentDidMount() {
    this.getData()
  }

  getData(retry = false) {
    Fetcher.fetch('/' + this.props.type, retry)
      .then((result) => store.dispatch(setFetchedPart(this.props.type, result)))
      .catch((e) => {
        console.error(`Parts of type ${this.props.type} weren't fetched. Trying again.`, e)
        setTimeout(() => this.getData(true), 2000)
      })
  }

  select = (id) => {
    store.dispatch(select(this.props.id, id))
  }

  get partList() {
    return this.state.list.map((data) => {
      const classes = [
        styles.choose,
        data.className || '',
        data.id === this.state.selected ? styles.selected : '',
        data.disabled ? styles.disabled : '',
      ].join(' ')

      return (
        <div key={data.id} style={data.style || {}} className={classes} onClick={() => this.select(data.id)}>
          {data.name}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <div className={styles.title}>{this.props.label}</div>
        {this.partList}
      </div>
    )
  }
}

export default Part
