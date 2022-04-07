import React from 'react';
import { StyleSheet, View } from 'react-native';

import { deleteAtm } from '../../../../redux/atms.slice';
import { useAppDispatch } from '../../../../redux/hook';
import { IAtmItem } from '../../../../types/atm.item';
import AtmItem from './atm.item';

interface ATMProps {
  atmData: IAtmItem[];
}

export default function Atm({ atmData }: ATMProps) {
  const dispatch = useAppDispatch();
  const handleDelete = (id: string) => {
    id && dispatch(deleteAtm(id));
  };

  return (
    <View>
      {atmData?.map((item: IAtmItem) => (
        <View style={styles.atm} key={item.id}>
          <AtmItem
            handleClickClose={() => handleDelete(item.id)}
            status={item.status}
            atmName={item.name}
            transaction={item.transaction}
            nameTransaction={item.client}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  atm: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
});
