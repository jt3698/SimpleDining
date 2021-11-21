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
import axios from 'axios';

const list = [
  {
    Name: 'Big Mac',
    Price: "$10",
    Avatar_url: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Big-Mac.jpg',
    Quantity: "1",
    
  },
  {
    Name: 'Fillet-O-Fish',
    Price: "$8",
    Avatar_url: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Filet-O-Fish.png',
    Quantity: "1",
  }
]
const order = {
  Items: list,
  Table_number:  Math.floor(Math.random()*5),
  Status: "Pending"
}

const API_URL = 'http://45.79.230.215/';
const submitOrder = async ()=>{
  // console.log("in submit")
  try{
    const response = await axios.post(API_URL+"orders/", order);
    // const response = await axios.get(API_URL+'ping/')
    console.log(response.data)
  }
  catch (err){
    console.log(err)
  }
}

export default function ViewCartPage({ navigation }: RootTabScreenProps<'ViewCarts'>) {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* INSERT SCROLLBAR HERE LATER */}
      <FoodPanelInfo restoName="McDonald's"/>
      <Button
        title="Learn More"
        onPress={submitOrder}
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
