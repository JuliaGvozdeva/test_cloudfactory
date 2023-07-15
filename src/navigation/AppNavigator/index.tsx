import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ERoutes } from '../routes';
import AppTabsNavigator from '../AppTabsNavigator';
import { TAppNavigator } from './types';

const AppStack = createNativeStackNavigator<TAppNavigator>();

const AppNavigator: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen options={{ headerShown: false }} name={ERoutes.appTabs} component={AppTabsNavigator} />
  </AppStack.Navigator>
);

export default AppNavigator;
export * from './types';
