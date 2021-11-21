import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import Animated from "react-native-reanimated";
import { Album, MenuItem } from "./Model";
import Content from "./Content";
import { Text } from '../../Themed';
import { RootTabScreenProps } from '../../../types';
import Cover from "./Cover";
import { TouchableOpacity } from 'react-native-gesture-handler';
import MenuItemContainer from "./MenuItemContainer";

interface AlbumProps {
  album: Album;
  navigation: any;
  menuItems: MenuItem[];
}

const { Value } = Animated;

export default ({ album, navigation, menuItems }: AlbumProps) => {
  const y = new Value(0);
  const getMenuItemContainer = (menuItem: MenuItem, idx: number) => {
    console.log('menu item');
    return <MenuItemContainer key={idx} {...{navigation, menuItem}}></MenuItemContainer>
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.topImage}
        source={album.cover}></Image>
      {menuItems.map((menu, idx) => {
        return getMenuItemContainer(menu, idx)
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topImage: {
    width: '100%',
    height: '30%',
  }
});
