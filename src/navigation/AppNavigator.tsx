import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ExplorerScreen from '../screens/ExplorerScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

// 将图标组件移出 AppNavigator 外部以防止重复创建
const renderHomeIcon = ({ color }: { color: string }) => (
  <Icon name="home" color={color} size={26} />
);

const renderExplorerIcon = ({ color }: { color: string }) => (
  <Icon name="explore" color={color} size={26} />
);

const renderProfileIcon = ({ color }: { color: string }) => (
  <Icon name="manage-accounts" color={color} size={26} />
);

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home" // 原为 Chat，但未定义该 Screen，应更正为已注册的 name
      activeColor="#6200ee"
      barStyle={tabStyles.bar}
      shifting={false}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'home',
          tabBarIcon: renderHomeIcon,
        }}
      />
      <Tab.Screen
        name="Explorer"
        component={ExplorerScreen}
        options={{
          tabBarLabel: 'Explorer',
          tabBarIcon: renderExplorerIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: renderProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
};

const tabStyles = StyleSheet.create({
  bar: {
    backgroundColor: 'white',
  },
});

export default AppNavigator;