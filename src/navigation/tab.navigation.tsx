import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { DashBoardScreen } from '../screens/dashboard';
import { ProfileScreen } from '../screens/profile';
import { SettingScreen } from '../screens/setting';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashBoardScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
