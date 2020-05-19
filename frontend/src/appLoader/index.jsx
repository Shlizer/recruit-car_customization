import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import componentGetter from '../components/componentHoc'
import store from '../store'
import { AppContainer } from 'react-hot-loader'

export default class AppLoader {
  layout = null

  constructor() {
    this.rootElement = document.getElementById('root')
    this.getLayout()
  }

  getLayout() {
    fetch('/layout')
      .then((result) => result.json())
      .catch((e) => {
        console.error("Layout wasn't fetched. Trying again.")
        setTimeout(() => this.getLayout(), 2000)
      })
      .then((result) => {
        this.layout = result
        this.render()
      })
  }

  render() {
    if (this.rootElement && this.layout) {
      const App = componentGetter(({ children }) => children)

      ReactDOM.render(
        <AppContainer>
          <Provider store={store}>
            <App {...this.layout} />
          </Provider>
        </AppContainer>,
        this.rootElement
      )
    }
  }
}
