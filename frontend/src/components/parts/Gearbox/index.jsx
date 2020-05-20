import React from 'react'
import Choose from '../../Choose'
import store from '../../../store'
import { setFetchedGearbox, selectGearbox } from '../../../actions'

class Gearbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { list: [], selected: null }

    store.subscribe(() => {
      this.setState({
        list: store.getState()?.fetched?.gearbox || [],
        selected: store.getState()?.selected?.gearbox || null,
      })
    })
  }

  componentDidMount() {
    fetch('/gearbox')
      .then((result) => result.json())
      .then((result) => store.dispatch(setFetchedGearbox(result)))
  }

  selectGearbox = (id) => {
    store.dispatch(selectGearbox(id))
  }

  render() {
    return (
      <Choose label={'Gearbox'} list={this.state.list} onChoose={this.selectGearbox} selected={this.state.selected} />
    )
  }
}

export default Gearbox
