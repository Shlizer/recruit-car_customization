import React from 'react'
import PropTypes from 'prop-types'
import Fetcher from '../../managers/fetch'
import store from '../../store'
import { setFetchedPart } from '../../actions'
import Part from '../Part'
import styles from './style.module.scss'

class PartType extends React.Component {
  constructor(props) {
    super(props)
    this.state = { list: [], selectedList: {}, selected: false }

    store.subscribe(() => {
      const list = store.getState()?.fetched?.parts?.[this.props.type] || []
      const selectedList = store.getState()?.selected || {}
      const selected = store.getState()?.selected?.[this.props.id] || null
      if (list !== this.state.list) this.setState({ list })
      if (selectedList !== this.state.selectedList) this.setState({ selectedList })
      if (selected !== this.state.selected) this.setState({ selected })
    })
  }

  componentDidMount() {
    this.getData()
  }

  getData(retry = false) {
    Fetcher.fetch('/part/' + this.props.type, retry)
      .then((result) => store.dispatch(setFetchedPart(this.props.type, result)))
      .catch((e) => {
        console.error(`Parts of type ${this.props.type} weren't fetched. Trying again.`, e)
        setTimeout(() => this.getData(true), 2000)
      })
  }

  getPartType(partId) {
    return store.getState()?.fetched?.partList?.find((partInfo) => partInfo.id === partId)?.type
  }

  getNotFitList(partId, selection) {
    const partType = this.getPartType(partId)
    return store.getState()?.fetched?.parts?.[partType]?.find((partData) => partData.id === selection)?.notFit
  }

  get disabledList() {
    const list = []

    for (let partId in this.state.selectedList) {
      ;(this.getNotFitList(partId, this.state.selectedList[partId])?.[this.props.id] || []).forEach((id) => {
        if (!list.includes(id)) list.push(id)
      })
    }
    return list
  }

  get partList() {
    return this.state.list.map((data) => (
      <Part
        key={data.id}
        {...data}
        type={this.props.id}
        selected={data.id === this.state.selected}
        disabled={this.disabledList.indexOf(data.id) >= 0}
      />
    ))
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

PartType.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default PartType
