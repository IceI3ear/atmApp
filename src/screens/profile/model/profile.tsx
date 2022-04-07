import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View } from 'react-native';

import ButtonCommon from '../../../components/button';

export default function Profile({ navigation }: any) {
  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };

  return (
    <View>
      <ButtonCommon title="Logout" onPress={handleLogout} />
    </View>
  );
}
