import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ChatType } from '../../types';

// 定义路由参数类型
type RootStackParamList = {
  ChatScreen: {
    chatId: string;
    chatName: string;
    chatType: ChatType;
  };
};

// 定义 navigation 和 route 的类型
type ChatScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ChatScreen'>;
type ChatScreenRouteProp = RouteProp<RootStackParamList, 'ChatScreen'>;

const ChatScreen = () => {
  const route = useRoute<ChatScreenRouteProp>();

  // 获取传递的参数
  const { chatId, chatName, chatType } = route.params;

  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
      <Text>Chat ID: {chatId}</Text>
      <Text>Chat Name: {chatName}</Text>
      <Text>Chat Type: {chatType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatScreen;
