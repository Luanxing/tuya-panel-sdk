import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DoubleButton } from '@tuya/tuya-panel-lamp-sdk';

const ButtonScene = () => {
  const data = {
    left: {
      title: '左侧触发前标题',
      text: '左侧文本',
      activeTitle: '左侧触发后标题',
      activeText: '左侧触发后文本',
    },
    right: {
      title: '右侧触发前标题',
      text: '右侧文本',
      activeTitle: '右侧触发后标题',
      activeText: '右侧触发后文本',
    },
  };
  return (
    <View style={styles.main}>
      <DoubleButton dataSource={data} />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
export default ButtonScene;
