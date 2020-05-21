import React from 'react'
import PropTypes from 'prop-types'
import ComponentManager from '../managers/component'

export default function componentGetterHoc(CustomComponent) {
  class ComponentGetter extends React.Component {
    state = { children: [] }

    componentDidMount() {
      if (this.props.components.length) {
        this.setState({
          children: this.props.components.map((componentProps) => {
            const Comp = ComponentManager.get(componentProps.type)
            const props = {
              key: componentProps.id || componentProps.type,
              ...componentProps,
              attributes: componentProps.attributes,
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

  ComponentGetter.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    components: PropTypes.array,
    attributes: PropTypes.object,
  }
  ComponentGetter.defaultProps = {
    components: [],
    attributes: {},
  }
  return ComponentGetter
}
