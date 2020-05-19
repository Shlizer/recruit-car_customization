import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import { AppContainer } from 'react-hot-loader'

class AppLoader {
  rootElement: HTMLElement | null
  layout?: object

  constructor() {
    this.rootElement = document.getElementById('root')
    this.getLayout()
  }

  getLayout() {
    fetch('/layout')
      .then((result) => result.json())
      .catch((e) => {
        console.error("Layout wasn't fetched. Trying again.")
        this.getLayout()
      })
      .then((result) => {
        this.layout = result
        this.render()
      })
  }

  render() {
    if (this.rootElement && this.layout) {
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

const loader = new AppLoader()

if (module.hot) {
  module.hot.accept('./App', () => loader.render())
}
