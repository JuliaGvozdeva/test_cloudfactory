import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ERoutes } from '../routes';
import AppNavigator from '../AppNavigator';
import { TRootNavigator } from './types';

const RootStack = createNativeStackNavigator<TRootNavigator>();

const RootNavigator: React.FC = () => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Screen name={ERoutes.app} component={AppNavigator} />
  </RootStack.Navigator>
);

export default RootNavigator;
