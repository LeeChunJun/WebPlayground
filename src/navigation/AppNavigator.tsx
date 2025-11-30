import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ExplorerScreen from '../screens/ExplorerScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      activeColor="#6200ee"
      barStyle={{ backgroundColor: 'white' }}
      shifting={false} // 禁用 shifting 模式避免动画问题
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explorer"
        component={ExplorerScreen}
        options={{
          tabBarLabel: 'Explorer',
          tabBarIcon: ({ color }) => (
            <Icon name="explore" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="manage-accounts" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
