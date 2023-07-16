import React from 'react';
import { NavigationTabProps } from './types';
import { Container, Label } from './styled';

const CustomTabBarItem: React.FC<NavigationTabProps> = ({ route, isFocused, descriptors, navigation }) => {
  const { options } = descriptors[route.key];
  const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    <Container onPress={onPress} isFocused={isFocused}>
      <Label>{typeof label === 'string' ? label : ''}</Label>
    </Container>
  );
};

export default CustomTabBarItem;
