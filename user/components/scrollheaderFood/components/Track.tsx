import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Avatar } from 'react-native-elements'
import { RootTabScreenProps } from '../../../types';
import { Track } from "./Model";

interface TrackProps {
  track: Track;
  artist: string;
  index: number;
  navigation: any;
}

export default ({ track, artist, index, navigation }: TrackProps) => (
  <View style={styles.cell}>
    <TouchableOpacity onPress={() => navigation.navigate("BrowseFood")}>
      <Avatar source={{uri: track.avatar_url}} />
      <Text style={styles.name}>{track.name}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  cell: {
    width: "50%",
    backgroundColor: "white"
  },
  index: {
    color: "#b2b3b4",
  },
  artist: {
    fontSize: 12,
    color: "#b2b3b4",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
