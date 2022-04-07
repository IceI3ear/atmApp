import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

interface ButtonCommonProps {
  onPress: () => void;
  title: string;
}

export default function ButtonCommon(props: ButtonCommonProps) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: '#ff7675',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#9b9b9b',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
