import React from 'react'
import Fetcher from '../../managers/fetch'
import store from '../../store'
import { setFetchedPartList } from '../../actions'
import Part from '../Part'

class PartList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { partList: [] }

    store.subscribe(() => {
      const partList = store.getState()?.fetched?.partList || []
      if (partList !== this.state.partList) this.setState({ partList })
    })
  }

  componentDidMount() {
    this.getData()
  }

  getData(retry = false) {
    Fetcher.fetch('/parts', retry)
      .then((result) => store.dispatch(setFetchedPartList(result)))
      .catch(() => {
        console.error("List of parts wasn't fetched. Trying again.")
        setTimeout(() => this.getData(true), 2000)
      })
  }

  render() {
    return (
      <div {...(this.props.attributes || {})}>
        {this.state.partList.map((part) => (
          <Part key={part.id} {...part} />
        ))}
      </div>
    )
  }
}

export default PartList
