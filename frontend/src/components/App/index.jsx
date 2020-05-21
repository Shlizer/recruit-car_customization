import React from 'react'
import Fetcher from '../../managers/fetch'
import store from '../../store'
import { setFetchedLayout } from '../../actions'
import Loading from '../Loading'
import componentGetterHoc from '../componentGetterHoc'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { layout: null }

    store.subscribe(() => {
      const layout = store.getState()?.fetched?.layout || []
      if (layout !== this.state.layout) this.setState({ layout })
    })
  }

  componentDidMount() {
    this.getData()
  }

  get appComponent() {
    if (this.state.layout) {
      const App = componentGetterHoc(({ children }) => children)
      return <App {...this.state.layout} />
    }
    return null
  }

  getData(retry = false) {
    Fetcher.fetch('/layout', retry)
      .then((result) => store.dispatch(setFetchedLayout(result)))
      .catch(() => {
        console.error("Layout wasn't fetched. Trying again.")
        setTimeout(() => this.getData(true), 2000)
      })
  }

  render() {
    return <div className='mainContainer'>{this.appComponent ? this.appComponent : <Loading />}</div>
  }
}
