import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { NavigationState, ParamListBase, PartialState, Route } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

type NavigationRoute<ParamList extends ParamListBase, RouteName extends keyof ParamList> = Route<Extract<RouteName, string>, ParamList[RouteName]> & {
  state?: NavigationState | PartialState<NavigationState>;
};

type TCustomTabBarItem = {
  route: NavigationRoute<ParamListBase, string>;
  index: number;
} & BottomTabBarProps;

const CustomTabBarItem: React.FC<TCustomTabBarItem> = ({ route, index, descriptors, navigation, state }) => {
  const { options } = descriptors[route.key];
  const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

  const isFocused = state.index === index;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      navigation.navigate({ name: route.name, merge: true });
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isFocused ? '#778da9' : 'white' }}>
      <Text style={{ color: '#1b263b' }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomTabBarItem;
