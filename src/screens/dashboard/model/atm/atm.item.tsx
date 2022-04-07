import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

import colors from '../../../../res/color';

interface ProfileItemProps {
  atmName: string;
  transaction: number;
  status: string;
  nameTransaction: string;
  handleClickClose?: () => void;
}

export default function AtmItem(props: ProfileItemProps) {
  const { atmName, transaction, status, nameTransaction, handleClickClose } =
    props;

  return (
    <View style={styles.profileItemContainer}>
      <Image
        style={styles.atmImage}
        source={require('../../../../assets/atm.png')}
      />
      <View style={styles.atmStatus}>
        <Text style={styles.textStatus}> {status}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.atmName}>{atmName}</Text>
          <View style={styles.button}>
            <Button
              color={colors.pomegranate}
              title="x"
              onPress={handleClickClose}
            />
          </View>
        </View>
        <View style={styles.transactionContainer}>
          <View style={styles.transaction}>
            <Image
              style={styles.transactionImage}
              source={require('../../../../assets/avt.jpg')}
            />
            <View style={styles.transactionInformation}>
              <Text style={styles.transactionName}>{nameTransaction}</Text>
              <Text style={styles.transactionNumber}>
                Pending : {transaction}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.asbestos,
    borderRadius: 8,
    paddingVertical: 8,
  },
  content: {
    width: 210,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  button: {
    width: 30,
    height: 30,
  },
  atmImage: {
    width: 100,
    height: 100,
    borderRadius: 44,
  },
  atmStatus: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
    width: 50,
  },
  textStatus: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.pomegranate,
  },
  atmName: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.asbestos,
  },
  transactionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  transaction: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.asbestos,
    borderRadius: 8,
    width: 150,
  },
  transactionImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  transactionInformation: {
    marginHorizontal: 8,
  },
  transactionName: {
    color: colors.asbestos,
    fontSize: 16,
    fontWeight: '500',
  },
  transactionNumber: {
    color: colors.asbestos,
    fontSize: 14,
    fontWeight: '500',
  },
});

AtmItem.defaultProps = {
  handleClickClose: () => {},
};
