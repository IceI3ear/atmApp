import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import ButtonCommon from '../../../components/button';
import InputCommon from '../../../components/input';
import { createAtm } from '../../../redux/atms.slice';
import { useAppDispatch } from '../../../redux/hook';
import colors from '../../../res/color';

export default function AddAtm() {
  const [atmName, setAtmName] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleChangeAtmName = (value: string) => {
    setAtmName(value);
  };
  const handleAddAtm = () => {
    if (atmName) {
      dispatch(createAtm(atmName));
    }
  };

  return (
    <View style={styles.addAtmContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Create ATM</Text>
      </View>
      <Image
        style={styles.atmImage}
        source={require('../../../assets/atm.png')}
      />
      <View style={styles.input}>
        <InputCommon
          label="ATM name"
          placeholder="AgriBank"
          value={atmName}
          onChangeText={handleChangeAtmName}
        />
      </View>
      <View style={styles.buttonAdd}>
        <ButtonCommon title="Add Item" onPress={handleAddAtm} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addAtmContainer: {
    marginHorizontal: 8,
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {},
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.greenSea,
  },
  atmImage: {
    borderRadius: 112,
  },
  input: {
    width: 280,
  },
  buttonAdd: {},
});
