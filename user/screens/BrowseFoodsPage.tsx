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
import { Album as AlbumModel } from "../components/scrollheaderFood/components/Model";

import { useState, useEffect } from "react";
import { Asset } from "expo-asset";
import { StatusBar } from "react-native";

const album: AlbumModel = {
  name: "Remote Control",
  artist: "Don's Japanese",
  release: 2016,
  // eslint-disable-next-line global-require
  cover: require("../assets/images/sushifine.png"),
  tracks: [
    {
      name: 'McDonssald\'s',
      avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png',
      tags: 'Western, Fast Food',
      rating: 4,
      time: "11:30AM to 11PM",
      address: "290 Blvd St, Waterloo"
    },
    {
      name: 'KFC',
      avatar_url: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1488265976/k2htrr9z4vsxkjbthskk.png',
      tags: 'Western, Fast Food',
      rating: 4.5,
      time: "11:30AM to 11PM",
      address: "290 Blvd St, Waterloo"
    },
    {
      name: 'Bakmi GM',
      avatar_url: 'https://www.seekpng.com/png/detail/223-2236625_bakmi-gm.png',
      tags: 'Asian',
      rating: 4.3,
      time: "11:30AM to 11PM",
      address: "290 Blvd St, Waterloo"
    },
    {
      name: 'HokBen',
      avatar_url: 'https://upload.wikimedia.org/wikipedia/en/0/02/HokBen_Logo.jpg',
      tags: 'Asian',
      rating: 4.3,
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
    },
    {
      name: 'Gino\'s',
      avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png',
      tags: 'Western',
      rating: 3,
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
    },
    {
      name: 'Gino\'s',
      avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png',
      tags: 'Western',
      rating: 3,
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
    },
    {
      name: 'Gino\'s',
      avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png',
      tags: 'Western',
      rating: 3,
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

export default function BrowseFoodsPage({ navigation }: RootTabScreenProps<'BrowseFoods'>) {
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
