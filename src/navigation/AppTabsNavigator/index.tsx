import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ERoutes } from '../routes';
import About from '../../screens/About';
import Quotes from '../../screens/Quotes';
import { TAppTabsNavigator } from './types';

const Tab = createMaterialTopTabNavigator<TAppTabsNavigator>();

const AppTabsNavigator: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen name={ERoutes.about} component={About} />
    <Tab.Screen name={ERoutes.quotes} component={Quotes} />
  </Tab.Navigator>
);

export default AppTabsNavigator;
export * from './types';
