import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { chatIdForGemini, chatNameForGemini, ChatType, chatTypeForGemini } from '../../constants';

// Stack Navigator 的 param list 是这个类型
type RootStackParamList = {
  ChatScreen: {
    chatId: string;
    chatName: string;
    chatType: ChatType;
  };
};

// 明确指定 navigation 的类型
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ChatScreen'>;

const HomeScreen = () => {
  const [hasChatHistory, setHasChatHistory] = useState(false);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // 检查聊天历史的逻辑
  useEffect(() => {
    checkChatHistory();
  }, []);

  /**
   * 检查聊天历史记录
   * 该函数用于检查用户是否存在聊天历史记录
   */
  const checkChatHistory = () => {
    // 这里聊天记录检查逻辑
    // 暂时设置为 false 来展示初始状态
    setHasChatHistory(false);
  };

  const handleStartChat = () => {
    // 跳转到与 Gemini 的聊天页面
    navigation.navigate('ChatScreen', {
      chatId: chatIdForGemini,
      chatName: chatNameForGemini,
      chatType: chatTypeForGemini
    });
  };

  return (
    <View style={styles.container}>
      {!hasChatHistory ? (
        <View style={styles.content}>
          <Icon name="chat" size={80} color="#4285F4" style={styles.icon} />
          <Text style={styles.guidanceText}>
            点击开始与 Gemini 对话
          </Text>
          <TouchableOpacity
            style={styles.startButton}
            onPress={handleStartChat}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>开始聊天</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.content}>
          <Text>显示聊天历史</Text>
          {/* 这里可以添加聊天历史列表 */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    marginBottom: 20,
  },
  guidanceText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '500',
  },
  startButton: {
    backgroundColor: '#4285F4',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;