import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ButtonCommon from '../../../components/button';
import InputCommon from '../../../components/input';
import { ILogin } from '../../../types/user';
import { useAppDispatch } from '../../../redux/hook';
import { AuthServices } from '../../../services/auth/auth.services';
import colors from '../../../res/color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../../../redux/auth.slice';

export default function LoginForm({ navigation }: any) {
  const [user, setUser] = useState<ILogin>({
    email: '',
    password: '',
  });
  const [err, setErr] = useState<string>('');
  const [token, setToken] = useState<string | null>('');
  const dispatch = useAppDispatch();

  const handleChangeEmail = (value: string): void => {
    setUser({ ...user, email: value });
  };
  const handleChangePassword = (value: string): void => {
    setUser({ ...user, password: value });
  };
  const handleLogin = async () => {
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/;
    if (!user.email || !user.password) {
      setErr('Email and Password is required');
    } else if (!regex.test(user.password)) {
      setErr('Wrong type password');
    } else {
      setErr('');
      try {
        const data = await AuthServices.login(user);
        if (data) {
          dispatch(login());
          await AsyncStorage.setItem('accessToken', data.PRIVATE_TOKEN);
          navigation.navigate('BottomTabNavigator');
        }
      } catch (error) {
        return error;
      }
    }
  };
  const handleNavigator = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    setToken(accessToken);
  };
  useEffect(() => {
    handleNavigator();
    if (token) {
      navigation.navigate('BottomTabNavigator');
    }
  });

  return (
    <View style={styles.loginFormContainer}>
      <Text style={styles.title}> Login Form</Text>
      <Text style={styles.error}>{err && err}</Text>
      <View>
        <InputCommon
          label="Email"
          placeholder="example@gmail.com"
          value={user.email}
          onChangeText={handleChangeEmail}
        />
        <InputCommon
          label="Password"
          placeholder="********"
          value={user.password}
          onChangeText={handleChangePassword}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.button}>
        <ButtonCommon title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginFormContainer: {
    width: '75%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#9b9b9b',
    borderRadius: 12,
  },
  title: {
    fontSize: 20,
    marginVertical: 12,
    marginHorizontal: 8,
  },
  error: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: colors.pomegranate,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
  },
});
