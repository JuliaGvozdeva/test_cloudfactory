import { TAppTabsNavigator } from '../AppTabsNavigator/types';
import { ERoutes } from '../routes';

export type TAppNavigator = {
  [ERoutes.appTabs]: TAppTabsNavigator;
};
