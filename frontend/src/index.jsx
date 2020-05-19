import AppLoader from './appLoader'
import './reset.css'
import './globals.scss'

const loader = new AppLoader()

if (module.hot) {
  module.hot.accept('./', () => loader.render())
}
