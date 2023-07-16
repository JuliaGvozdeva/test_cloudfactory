import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import CustomTabBarItem from './components/CustomTabBarItem';

const CustomTabBar = ({ state, descriptors, navigation, ...props }: BottomTabBarProps) => (
  <View style={{ flexDirection: 'row', height: 60 }}>
    {state.routes.map((route, index) => (
      <CustomTabBarItem key={route.key} route={route} index={index} descriptors={descriptors} navigation={navigation} state={state} {...props} />
    ))}
  </View>
);

export default CustomTabBar;
