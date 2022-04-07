import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { getAllAtms, selectAtmData } from '../../../redux/atms.slice';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import Atm from './atm/atm';
import Queue from './queue/queue';
import Transaction from './transaction/transaction';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const atmsData = useAppSelector(selectAtmData);

  useEffect(() => {
    dispatch(getAllAtms());
  });

  return (
    <ScrollView>
      <View style={styles.queue}>
        <Queue queueData={atmsData.queue} />
      </View>
      <View style={styles.atm}>
        <Atm atmData={atmsData.atm} />
      </View>
      <View style={styles.transaction}>
        <Transaction atmData={atmsData.atm} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  atm: {},
  queue: {},
  transaction: {},
});
