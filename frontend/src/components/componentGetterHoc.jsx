import React from 'react'
import ComponentManager from '../managers/component'

export default function componentGetterHoc(CustomComponent) {
  return class ComponentGetter extends React.Component {
    state = { children: [] }

    componentDidMount() {
      if (this.props.components) {
        this.setState({
          children: this.props.components.map((componentProps) => {
            const Comp = ComponentManager.get(componentProps.type)
            const props = {
              key: componentProps.id || componentProps.type,
              ...componentProps,
              attributes: componentProps.attributes || {},
            }
            return Comp ? <Comp {...props} /> : null
          }),
        })
      }
    }

    render() {
      return <CustomComponent {...this.props} children={this.state.children} />
    }
  }
}
