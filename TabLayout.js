/* @flow */
import React, {
  Component
} from 'react';
import {
  ColorPropType,
  ViewPropTypes,
  processColor,
  requireNativeComponent
} from 'react-native';
import {PropTypes} from 'prop-types';

export default class TabLayout extends Component {
  static propTypes = {
    ...ViewPropTypes,
    onTabSelected: PropTypes.func,
    selectedTab: PropTypes.number,
    selectedTabIndicatorColor: ColorPropType,
    tabGravity: PropTypes.oneOf(['fill', 'center']),
    tabMode: PropTypes.oneOf(['fixed', 'scrollable'])
  };

  onTabSelected: Function = (e) => {
    if (this.props.onTabSelected) {
      this.props.onTabSelected(e);
    }
  };

  render() {
    return (
      <AndroidTabLayout
        {...this.props}
        onTabSelected={this.onTabSelected}
        selectedTabIndicatorColor={processColor(this.props.selectedTabIndicatorColor)}
        style={[{height: 48}, this.props.style]}/>
    );
  }
}

const AndroidTabLayout = requireNativeComponent('TabLayout', TabLayout);
