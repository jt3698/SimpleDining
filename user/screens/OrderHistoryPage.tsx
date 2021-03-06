import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import OrderHistory from '../components/OrderHistory';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function OrderHistoryPage({ navigation }: RootTabScreenProps<'OrderHistory'>) {
  return (
    <View style={styles.container}>
      <OrderHistory {...{navigation}}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
