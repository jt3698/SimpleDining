import * as React from 'react';
import { StyleSheet } from 'react-native';
import SBar  from '../components/SearchBar';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import RestoPanelInfo from '../components/RestoPanelInfo';
import { SearchBar } from 'react-native-elements';
import FoodPanelInfo from '../components/FoodPanelInfo';
import FoodDetail from '../components/FoodDetail';
import { Button } from 'react-native';

export default function ViewCartPage({ navigation }: RootTabScreenProps<'ViewCarts'>) {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* INSERT SCROLLBAR HERE LATER */}
      <FoodPanelInfo restoName="McDonald's"/>
      <Button
        title="Learn More"
        onPress={() => {}}
      />
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
  button: {
    padding: "30px",
    flex: 1
  },
});
