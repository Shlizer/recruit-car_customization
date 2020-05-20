import React from 'react'
import Choose from '../../Choose'
import store from '../../../store'
import { setFetchedColor, selectColorExterior, selectColorInterior } from '../../../actions'

const PLACE = {
  interior: 'Interior Color',
  exterior: 'Exterior Color',
}

class Color extends React.Component {
  constructor(props) {
    super(props)
    this.state = { list: [], selected: null }

    store.subscribe(() => {
      this.setState({
        list: store.getState()?.fetched?.color || [],
        selected: store.getState()?.selected?.color?.[this.props.place] || null,
      })
    })
  }

  componentDidMount() {
    fetch('/color')
      .then((result) => result.json())
      .then((result) => store.dispatch(setFetchedColor(result)))
  }

  selectColor = (id) => {
    if (PLACE[this.props.place] === PLACE.interior) store.dispatch(selectColorInterior(id))
    else if (PLACE[this.props.place] === PLACE.exterior) store.dispatch(selectColorExterior(id))
  }

  render() {
    const label = PLACE[this.props.place] || 'Color'
    return <Choose label={label} list={this.state.list} onChoose={this.selectColor} selected={this.state.selected} />
  }
}

export default Color
