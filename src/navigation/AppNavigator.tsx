import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import ExplorerScreen from '../screens/ExplorerScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      activeColor="#6200ee"
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explorer"
        component={ExplorerScreen}
        options={{
          tabBarLabel: 'Explorer',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="explore" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
