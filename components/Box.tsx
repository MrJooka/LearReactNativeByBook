import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';

interface Props {
  rounded?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const Box: FC<Props> = ({rounded, size = 'medium', color = 'blue'}) => {
  return (
    <View
      style={[
        rounded ? styles.rounded : null,
        styles[size],
        {
          backgroundColor: color,
        },
      ]}
    />
  );
};

export default Box;

const styles = StyleSheet.create({
  rounded: {
    borderRadius: 50,
  },
  small: {
    width: 50,
    height: 50,
  },
  medium: {
    width: 100,
    height: 100,
  },
  large: {
    width: 150,
    height: 150,
  },
});
