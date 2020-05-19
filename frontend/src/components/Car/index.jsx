import React from 'react'
import Choose from '../Choose'

class Car extends React.Component {
  state = { list: [] }

  componentDidMount() {
    fetch('/car')
      .then((result) => result.json())
      .then((result) => this.setState({ list: result }))
  }

  render() {
    return <Choose label={'Model'} list={this.state.list} />
  }
}

export default Car
