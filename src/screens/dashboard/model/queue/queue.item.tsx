import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../../../../res/color';

interface QueueItemProps {
  namePeople: string;
  transaction: number;
}

export default function QueueItem(props: QueueItemProps) {
  const { namePeople, transaction } = props;

  return (
    <View style={styles.queueItemContainer}>
      <Image
        style={styles.image}
        source={require('../../../../assets/avt.jpg')}
      />
      <View style={styles.information}>
        <Text style={styles.name}>{namePeople}</Text>
        <Text style={styles.transaction}>{transaction}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  queueItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.asbestos,
    borderRadius: 8,
    width: 150,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  information: {
    marginHorizontal: 8,
  },
  name: {
    color: colors.asbestos,
    fontSize: 16,
    fontWeight: '500',
  },
  transaction: {
    color: colors.asbestos,
    fontSize: 14,
    fontWeight: '400',
  },
});
