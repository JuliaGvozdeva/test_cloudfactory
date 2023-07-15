import { NavigatorScreenParams } from '@react-navigation/native';
import { ERoutes } from '../routes';
import { TAppNavigator } from '../AppNavigator/types';

export type TRootNavigator = {
  [ERoutes.app]?: NavigatorScreenParams<TAppNavigator>;
};
