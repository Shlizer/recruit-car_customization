import React from 'react'
import Choose from '../Choose'

class Gearbox extends React.Component {
  state = { list: [] }

  componentDidMount() {
    fetch('/gearbox')
      .then((result) => result.json())
      .then((result) => this.setState({ list: result }))
  }

  render() {
    return <Choose label={'Gearbox'} list={this.state.list} />
  }
}

export default Gearbox
