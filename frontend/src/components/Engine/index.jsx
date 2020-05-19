import React from 'react'
import Choose from '../Choose'

class Engine extends React.Component {
  state = { list: [] }

  componentDidMount() {
    fetch('/engine')
      .then((result) => result.json())
      .then((result) => this.setState({ list: result }))
  }

  render() {
    return <Choose label={'Engine'} list={this.state.list} />
  }
}

export default Engine
