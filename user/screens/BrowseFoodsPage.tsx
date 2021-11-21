import * as React from 'react';
import { StyleSheet } from 'react-native';
import SBar  from '../components/SearchBar';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackParamList, RootTabScreenProps } from '../types';
import RestoPanelInfo from '../components/RestoPanelInfo';
import { SearchBar } from 'react-native-elements';
import FoodPanelInfo from '../components/FoodPanelInfo';
import FoodDetail from '../components/FoodDetail';
import { Button } from 'react-native-elements/dist/buttons/Button';
import Album from "../components/scrollheaderFood/components/Album";
import { Album as AlbumModel, MenuItem } from "../components/scrollheaderFood/components/Model";

import { useState, useEffect } from "react";
import { Asset } from "expo-asset";
import { StatusBar } from "react-native";
import MenuAlbum from '../components/scrollheaderFood/components/MenuAlbum';

const album: AlbumModel = {
  name: "Remote Control",
  artist: "Don's Japanese",
  release: 2016,
  // eslint-disable-next-line global-require
  cover: require("../assets/images/sushifine.png"),
  tracks: []
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
      name: 'Salmon Sushi',
      price: 21,
      isThumbsUp: false,
      isChefRecommended: true,
      picturePath: 'https://tatyanaseverydayfood.com/wp-content/uploads/2014/04/Spicy-Salmon-Sushi-Roll.jpg',
    },
    {
      name: 'Kobe Beef',
      price: 50,
      isThumbsUp: false,
      isChefRecommended: false,
      picturePath: 'https://hankstruebbq.com/wp-content/uploads/2018/02/kobe-sliced-1000x666.jpg',
    },
    {
      name: 'Oyakodon',
      price: 15,
      isThumbsUp: false,
      isChefRecommended: false,
      picturePath: 'https://cookingwithdog.com/wp-content/uploads/2017/02/oyakodon-00-1024x576.jpg',
    },
    {
      name: 'Salmon Teriyaki',
      price: 18,
      isThumbsUp: false,
      isChefRecommended: false,
      picturePath: 'http://www.seasonalcravings.com/wp-content/uploads/2016/10/easyteriyakisalmon24ps.jpg',
    },
    {
      name: 'Takoyaki',
      price: 9,
      isThumbsUp: true,
      isChefRecommended: false,
      picturePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Takoyaki.jpg/1200px-Takoyaki.jpg',
    }
  ]

export default function BrowseFoodsPage({ navigation }: RootTabScreenProps<'BrowseFoods'>) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    (async () => {
      await Asset.loadAsync(album.cover);
      setReady(true);
    })();
  });

  const viewCart = () => {
    navigation.navigate('ViewCart')
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <MenuAlbum {...{ album, navigation, menuItems }}/>
      <Button buttonStyle={{backgroundColor:'#f7b307' }} title="View Cart" onPress={viewCart}></Button>
    </>
  );

//   return (
//     <View style={styles.container}>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       {/* INSERT SCROLLBAR HERE LATER */}
//       <FoodPanelInfo restoName="McDonald's"/>
//       <Button buttonStyle={{backgroundColor:'#f7b307' }} title="View Cart" ></Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
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
