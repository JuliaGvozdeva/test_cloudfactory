import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ERoutes } from '../routes';
import About from '../../screens/About';
import Quotes from '../../screens/Quotes';
import { TAppTabsNavigator } from './types';
import CustomTabBar from './components/CustomTabBar';

const Tab = createBottomTabNavigator<TAppTabsNavigator>();

const AppTabsNavigator: React.FC = () => (
  <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
    <Tab.Screen name={ERoutes.about} component={About} />
    <Tab.Screen name={ERoutes.quotes} component={Quotes} />
  </Tab.Navigator>
);

export default AppTabsNavigator;
export * from './types';
