import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import CustomTabBarItem from './components/CustomTabBarItem';
import { Container } from './styled';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomTabBar = (props: BottomTabBarProps) => {
  const { state } = props;
  const { routes } = state;

  const { bottom } = useSafeAreaInsets();

  return (
    <Container bottomInsets={bottom}>
      {routes.map((route, index) => (
        <CustomTabBarItem key={route.key} isFocused={index === state.index} route={route} {...props} />
      ))}
    </Container>
  );
};

export default CustomTabBar;
