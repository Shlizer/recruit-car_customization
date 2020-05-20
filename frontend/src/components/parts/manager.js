import FlexBox from './FlexBox'
import Summary from './Summary'
import Car from './Car'
import Color from './Color'
import Engine from './Engine'
import Gearbox from './Gearbox'

class ComponentManager {
  static components = {}

  static register(name, component) {
    ComponentManager.components[name] = component
  }

  static get(name) {
    return ComponentManager.components[name] || null
  }
}

ComponentManager.register('FlexBox', FlexBox)
ComponentManager.register('Summary', Summary)
ComponentManager.register('Car', Car)
ComponentManager.register('Color', Color)
ComponentManager.register('Engine', Engine)
ComponentManager.register('Gearbox', Gearbox)

export default ComponentManager
