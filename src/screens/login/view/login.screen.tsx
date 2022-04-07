import React from 'react';
import { StyleSheet, View } from 'react-native';

import LoginForm from '../model/loginForm';

export default function LoginContainer({ navigation }: any) {
  return (
    <View style={styles.loginContainer}>
      <LoginForm navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
