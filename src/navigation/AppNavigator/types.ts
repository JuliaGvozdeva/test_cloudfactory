import { TAppTabsNavigator } from '../AppTabsNavigator';
import { ERoutes } from '../routes';

export type TAppNavigator = {
  [ERoutes.appTabs]: TAppTabsNavigator;
};
