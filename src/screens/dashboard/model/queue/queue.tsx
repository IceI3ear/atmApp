import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import colors from '../../../../res/color';
import { IQueueItem } from '../../../../types/queue.item';
import QueueItem from './queue.item';

interface QueueProps {
  queueData: IQueueItem[];
}

export default function Queue({ queueData }: QueueProps) {
  return (
    <View style={styles.queueContainer}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Queue</Text>
      </View>
      <ScrollView style={styles.contentContainer} nestedScrollEnabled={true}>
        <View style={styles.content}>
          {queueData?.map((item: IQueueItem) => (
            <View style={styles.item} key={item.namePeople}>
              <QueueItem
                namePeople={item.namePeople}
                transaction={item.transaction}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  queueContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.asbestos,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  title: {
    marginBottom: 4,
  },
  textTitle: {
    color: colors.pomegranate,
    fontSize: 16,
    fontWeight: '500',
  },
  item: {
    marginVertical: 4,
  },
  contentContainer: {
    height: 200,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
