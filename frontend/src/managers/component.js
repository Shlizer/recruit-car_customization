import FlexBox from '../components/FlexBox'
import Summary from '../components/Summary'
import PartList from '../components/PartList'

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
ComponentManager.register('PartList', PartList)

export default ComponentManager
