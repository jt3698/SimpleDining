import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import RestoPanelInfo from '../components/RestoPanelInfo';
import { SearchBar } from 'react-native-elements';
import FoodPanelInfo from '../components/FoodPanelInfo';
import FoodDetail from '../components/FoodDetail';
import OrderHistory from '../components/OrderHistory';
import ReviewFood from '../components/ReviewFood';
import ViewCart from '../components/ViewCart';

import { useState, useEffect } from "react";
import { Asset } from "expo-asset";
import { StatusBar } from "react-native";

import Album from "../components/scrollheader/components/Album";
import { Album as AlbumModel } from "../components/scrollheader/components/Model";
import { TouchableOpacity } from 'react-native-gesture-handler';

const album: AlbumModel = {
  name: "Remote Control",
  artist: "Dine Easy",
  release: 2016,
  // eslint-disable-next-line global-require
  cover: require("../assets/images/fancyfood.jpg"),
  tracks: [
    {
      name: 'McDonald\'s',
      avatar_url: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Big-Mac.jpg',
      tags: 'Western, Fast Food',
      rating: 4,
      time: "11:30AM to 11PM",
      address: "260 Blvd St, Waterloo"
    },
    {
      name: 'KFC',
      avatar_url: 'https://i2-prod.nottinghampost.com/news/nottingham-news/article232938.ece/ALTERNATES/s615/KFC.jpg',
      tags: 'Western, Fast Food',
      rating: 2.9,
      time: "11:30AM to 11PM",
      address: "270 Blvd St, Waterloo"
    },
    {
      name: 'Don\'s Japanese',
      avatar_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F04%2F23%2F1804-what-is-sushi-grade-fish-2000.jpg&q=85',
      tags: 'Japanese',
      rating: 4.6,
      time: "11:00AM to 11PM",
      address: "280 Blvd St, Waterloo"
    },
    {
      name: 'HokBen',
      avatar_url: 'https://awards.brandingforum.org/wp-content/uploads/2018/01/menu-hokben.jpg',
      tags: 'Asian',
      rating: 4.3,
      time: "11:30AM to 11PM",
      address: "290 Blvd St, Waterloo"
    },
    {
      name: 'Sushi Hiro',
      avatar_url: 'https://anakjajan.files.wordpress.com/2016/06/dscf1362.jpg?w=474&h=711',
      tags: 'Asian',
      rating: 4.8,
      time: "11:30AM to 11PM",
      address: "295 Blvd St, Waterloo"
    },
    {
      name: 'Waterloo Star',
      avatar_url: 'https://media-cdn.tripadvisor.com/media/photo-s/12/85/58/3f/photo4jpg.jpg',
      tags: 'Asian',
      rating: 3.6,
      time: "11:30AM to 11PM",
      address: "292 Blvd St, Waterloo"
    },
    {
      name: 'Lazeez',
      avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Shawarma_stand_in_central_Aleppo%2C_Syria.jpg/1200px-Shawarma_stand_in_central_Aleppo%2C_Syria.jpg',
      tags: 'Middle Eastern',
      rating: 4.6,
      time: "11:30AM to 11PM",
      address: "200 Blvd St, Waterloo"
    },
    {
      name: 'Coco Curry',
      avatar_url: 'https://cdn.vox-cdn.com/thumbor/O4hfza3mIKtZfc6AR6jpTl_gaSI=/0x0:900x631/1200x800/filters:focal(378x244:522x388)/cdn.vox-cdn.com/uploads/chorus_image/image/66371464/cocoich2.0.jpg',
      tags: 'Asian',
      rating: 5,
      time: "11:30AM to 11PM",
      address: "290 Blvd St, Waterloo"
    },
    {
      name: 'Gino\'s',
      avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png',
      tags: 'Western',
      rating: 3,
      time: "11:30AM to 11PM",
      address: "290 Blvd St, Waterloo"
    }
  ]
};

export default function BrowseRestosPage({ navigation }: RootTabScreenProps<'BrowseRestos'>) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    (async () => {
      await Asset.loadAsync(album.cover);
      setReady(true);
    })();
  });
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Album {...{ album, navigation }}/>
    </>
  );

  // return (
  //   <View style={styles.container}>
  //       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
  //       <Image
  //         source={require('../assets/images/fancyfood.jpg')}
  //       />
  //       <Text style={{position: 'absolute', fontSize: 20}}>890</Text>
  //   </View>
      
  //     <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
  //     {/* INSERT SCROLLBAR HERE LATER */}
  //     <RestoPanelInfo restoName ="McDonald's"/>

  //     {/* Code below was used to debug */}
  //     {/* <ViewCart restoName = "Mcdonakds"/> */}
  //   </View>
  // );
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

