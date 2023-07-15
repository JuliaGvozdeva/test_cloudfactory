import { NavigatorScreenParams } from '@react-navigation/native';
import { ERoutes } from '../routes';
import { TAppNavigator } from '../AppNavigator';

export type TRootNavigator = {
  [ERoutes.app]?: NavigatorScreenParams<TAppNavigator>;
};
