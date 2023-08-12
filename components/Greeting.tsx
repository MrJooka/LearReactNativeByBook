import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {}

const Greeting = (props: Props) => {
  return (
    <View>
      <Text>{props.name} 안녕하세요</Text>
    </View>
  );
};

export default Greeting;

// 개인적으로 굳이 defaultProps를 사용해야할까? 그냥 props를 넘겨주는게 더 좋지 않을까?
Greeting.defaultProps = {name: '주까님'};

const styles = StyleSheet.create({});
