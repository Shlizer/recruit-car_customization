import React from 'react'
import Choose from '../../Choose'
import store from '../../../store'
import { setFetchedCar, selectCar } from '../../../actions'

class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = { list: [], selected: null }

    store.subscribe(() => {
      this.setState({
        list: store.getState()?.fetched?.car || [],
        selected: store.getState()?.selected?.car || null,
      })
    })
  }

  componentDidMount() {
    fetch('/car')
      .then((result) => result.json())
      .then((result) => store.dispatch(setFetchedCar(result)))
  }

  selectCar = (id) => {
    store.dispatch(selectCar(id))
  }

  render() {
    return <Choose label={'Model'} list={this.state.list} onChoose={this.selectCar} selected={this.state.selected} />
  }
}

export default Car
