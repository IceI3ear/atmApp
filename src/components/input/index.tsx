import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface InputCommonProps {
  onChangeText?: (value: string) => void;
  value?: string;
  placeholder?: string;
  label?: string,
  secureTextEntry?: boolean,
}

const InputCommon = ({
  onChangeText,
  value,
  placeholder,
  label,
  secureTextEntry
}: InputCommonProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text> {label && `${label} :`} </Text>
      <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#9b9b9b',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});

InputCommon.defaultProps = {
  // eslint-disable-next-line prettier/prettier
  onChangeText: () => { },
  value: '',
  placeholder: '',
  label: '',
  secureTextEntry: false
};

export default InputCommon;
