import React from 'react';
import { StyleSheet, View } from 'react-native';

import Profile from '../model/profile';

export default function ProfileContainer({ navigation }: any) {
  return (
    <View style={styles.profileContainer}>
      <Profile navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
