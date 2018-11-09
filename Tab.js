/* @flow */
import React, {
  Component
} from 'react';
import {
  ColorPropType,
  ViewPropTypes,
  processColor,
  requireNativeComponent,
  View
} from 'react-native';
import {PropTypes} from 'prop-types';

export default class Tab extends Component {
  static propTypes = {
    ...ViewPropTypes,
    iconPackage: PropTypes.string,
    iconResId: PropTypes.string,
    iconSize: PropTypes.number,
    iconUri: PropTypes.string,
    name: PropTypes.string,
    onTabSelected: PropTypes.func,
    textColor: ColorPropType
  };

  onTabSelected: Function = (e) => {
    if (this.props.onTabSelected) {
      this.props.onTabSelected(e);
    }
  };

  render() {
    const {style, children, ...otherProps} = this.props;
    const wrappedChildren = children ?
      <View
        children={children}
        collapsable={false}
        pointerEvents={'none'}
        style={style}
      /> : null;

    return (
      <AndroidTab
        {...otherProps}
        children={wrappedChildren}
        collapsable={false}
        onTabSelected={this.onTabSelected}
        textColor={processColor(this.props.textColor)}
      />
    );
  }
}

const AndroidTab = requireNativeComponent('Tab', Tab);
