import * as React from "react";
import { View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { Album } from "./Model";
import Content from "./Content";
import { Text } from '../../../components/Themed';
import { RootTabScreenProps } from '../../../types';
import Cover from "./Cover";
import { TouchableOpacity } from 'react-native-gesture-handler';

interface AlbumProps {
  album: Album;
  navigation: any;
}

const { Value } = Animated;

export default ({ album, navigation }: AlbumProps) => {
  const y = new Value(0);
  return (
    <View style={styles.container}>
      <Cover {...{ y, album }} />
      <Content {...{ y, album, navigation }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
