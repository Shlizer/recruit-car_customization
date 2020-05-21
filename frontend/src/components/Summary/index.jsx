import React from 'react'
import store from '../../store'
import componentGetterHoc from '../componentGetterHoc'
import Price from './price'
import { ReactComponent as CarIcon } from './car.svg'
import styles from './style.module.scss'

class Summary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { partList: [], selected: null }

    store.subscribe(() => {
      const partList = store.getState()?.fetched?.partList || []
      const selected = store.getState()?.selected || null

      if (partList !== this.state.partList) this.setState({ partList })
      if (selected !== this.state.selected) this.setState({ selected })
    })
  }

  getPartName(partType, partId) {
    const selectedId = this.state.selected?.[partId]
    return store.getState()?.fetched?.parts?.[partType]?.find((partData) => partData.id === selectedId)?.name || '-'
  }

  get selectedItems() {
    return this.state.partList.map((partData) => (
      <React.Fragment key={partData.id}>
        <dt>{partData.label}</dt>
        <dd>{this.getPartName(partData.type, partData.id)}</dd>
      </React.Fragment>
    ))
  }

  get exteriorColor() {
    return store
      .getState()
      ?.fetched?.parts?.color?.find((colorData) => colorData.id === this.state.selected?.colorExterior)?.style
      ?.backgroundColor
  }

  render() {
    return (
      <div {...(this.props.attributes || {})}>
        <div className={styles.title}>Summary</div>
        <CarIcon className={styles.carIcon} style={{ fill: this.exteriorColor }} alt='Car picture' />
        <dl className={styles.partList}>{this.selectedItems}</dl>
        <Price />
      </div>
    )
  }
}

Summary.propTypes = componentGetterHoc.propTypes
Summary.defaultProps = componentGetterHoc.defaultProps
export default Summary
