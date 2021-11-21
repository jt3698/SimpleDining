import * as React from 'react';
import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import RestoPanelInfo from '../components/RestoPanelInfo';
import { SearchBar } from 'react-native-elements';
import FoodPanelInfo from '../components/FoodPanelInfo';
import FoodDetail from '../components/FoodDetail';
import { Button } from 'react-native';
import axios from 'axios';
import MenuItemContainer from '../components/scrollheaderFood/components/MenuItemContainer';
import { MenuItem } from '../components/scrollheaderFood/components/Model';

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

const menuItems: MenuItem[] = [
  {
    name: 'Gyudon',
    price: 16,
    isThumbsUp: true,
    isChefRecommended: true,
    picturePath: 'https://image.shutterstock.com/image-photo/gyudon-japanese-food-beef-bowl-260nw-1087462463.jpg',
  },
  {
    name: 'Tsukemen',
    price: 14,
    isThumbsUp: true,
    isChefRecommended: false,
    picturePath: 'https://images.squarespace-cdn.com/content/v1/5bb430e47980b379b65a09b8/1553597266101-PK3AO9N3C4JCIDVX2WXW/IMG_20190215_160731.jpg?format=1000w',
  },
  {
    name: 'Salmon Sushi Roll',
    price: 21,
    isThumbsUp: false,
    isChefRecommended: true,
    picturePath: 'https://tatyanaseverydayfood.com/wp-content/uploads/2014/04/Spicy-Salmon-Sushi-Roll.jpg',
  },
]

export default function ViewCartPage({ navigation }: RootTabScreenProps<'ViewCarts'>) {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text style={styles.title}>Cart</Text>
        <MenuItemContainer menuItem={menuItems[0]} navigation={navigation} fixedQty={1}></MenuItemContainer>
        <MenuItemContainer menuItem={menuItems[2]} navigation={navigation} fixedQty={2}></MenuItemContainer>
      </View>
      <View>
        <Button
          title="Submit Order"
          onPress={submitOrder}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  flex: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'sans-serif-light',

    alignContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 20,
    backgroundColor: '#f7b307',
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
