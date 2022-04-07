import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import colors from '../../../../res/color';
import { IAtmItem } from '../../../../types/atm.item';

interface TransactionProps {
  atmData: IAtmItem[];
}

export default function Transaction({ atmData }: TransactionProps) {
  return (
    <View style={styles.transactionContainer}>
      <View style={styles.processedClient}>
        <Text style={styles.processedClientText}>Processed Client</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          {atmData?.map((item: IAtmItem) => (
            <View style={styles.processName} key={item.id}>
              <View>
                <Text style={styles.name}>{item.name} :</Text>
              </View>
              <View style={styles.processedClientsAtm}>
                <ScrollView nestedScrollEnabled={true}>
                  <Text>{item.processedClientsAtm}</Text>
                </ScrollView>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  transactionContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.asbestos,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  processedClient: {},
  processedClientText: {
    color: colors.pomegranate,
    fontSize: 16,
    fontWeight: '500',
  },
  processName: {},
  name: {
    color: colors.asbestos,
    fontSize: 16,
    fontWeight: '500',
  },
  contentContainer: {},
  content: {},
  processedClientsAtm: {
    height: 50,
    marginHorizontal: 8,
  },
});
