import React, { Component } from 'react';
import DropdownTreeSelect from 'react-dropdown-tree-select';
import isEqual from 'lodash/isEqual'


class DynamicSelect extends Component{

    constructor(props){
        super(props)
        this.state = { data: props.data }
      }

      componentWillReceiveProps = (nextProps) => {
        if(!isEqual(nextProps.data, this.state.data)) {
          this.setState({ data: nextProps.data });
        }
      }

      shouldComponentUpdate = (nextProps) => {
        return !isEqual(nextProps.data, this.state.data)
      }


    render(){
        const { data, ...rest } = this.props;
        const defaultVal = this.props.defaultValue;

      if(defaultVal){
        data.map(item => {
          if(defaultVal.includes(item.label)) {
            item.checked = true;
          }
        });
      }


        return (
            <DropdownTreeSelect data={this.state.data} {...rest} />
        )
    }
}

export default DynamicSelect;