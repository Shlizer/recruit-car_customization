import React from 'react'
import Choose from '../Choose'

const PLACE = {
  interior: 'Interior Color',
  exterior: 'Exterior Color',
}

class Color extends React.Component {
  state = { list: [] }

  componentDidMount() {
    fetch('/color')
      .then((result) => result.json())
      .then((result) => this.setState({ list: result }))
  }

  render() {
    const label = PLACE[this.props.place] || 'Color'
    return <Choose label={label} list={this.state.list} />
  }
}

export default Color
