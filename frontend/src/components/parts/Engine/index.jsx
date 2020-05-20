import React from 'react'
import Choose from '../../Choose'
import store from '../../../store'
import { setFetchedEngine, selectEngine } from '../../../actions'

class Engine extends React.Component {
  constructor(props) {
    super(props)
    this.state = { list: [], selected: null }

    store.subscribe(() => {
      this.setState({
        list: store.getState()?.fetched?.engine || [],
        selected: store.getState()?.selected?.engine || null,
      })
    })
  }

  componentDidMount() {
    fetch('/engine')
      .then((result) => result.json())
      .then((result) => store.dispatch(setFetchedEngine(result)))
  }

  selectEngine = (id) => {
    store.dispatch(selectEngine(id))
  }

  render() {
    return (
      <Choose label={'Engine'} list={this.state.list} onChoose={this.selectEngine} selected={this.state.selected} />
    )
  }
}

export default Engine
