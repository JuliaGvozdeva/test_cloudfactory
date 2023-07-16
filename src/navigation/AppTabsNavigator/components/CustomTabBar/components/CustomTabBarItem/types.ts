import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';

export type NavigationTabProps = {
  route: RouteProp<ParamListBase, string>;
  isFocused: boolean;
} & Pick<BottomTabBarProps, 'navigation' | 'descriptors'>;

export type TFocused = { focused: NavigationTabProps['isFocused'] };
